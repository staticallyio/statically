"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  Copy,
  Loader2,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import {
  validateGitHubRepo,
  validateGitLabRepo,
  validateBitbucketRepo,
  type RepoInfo,
} from "@/lib/git-api";

interface ParsedRepoUrl {
  platform: "github" | "gitlab" | "bitbucket";
  owner: string;
  repo: string;
  branch?: string;
  filePath?: string;
}

export default function UrlConverter() {
  const [inputUrl, setInputUrl] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [validating, setValidating] = useState(false);
  const [repoInfo, setRepoInfo] = useState<RepoInfo | null>(null);
  const [parsedUrl, setParsedUrl] = useState<ParsedRepoUrl | null>(null);
  const [useCommitSha, setUseCommitSha] = useState(false);
  const [useDefaultBranch, setUseDefaultBranch] = useState(false);

  // Convert URL and validate as user types
  useEffect(() => {
    if (!inputUrl) {
      setConvertedUrl("");
      setRepoInfo(null);
      setParsedUrl(null);
      return;
    }

    // Simple debounce
    const timer = setTimeout(() => {
      const parsed = parseRepoUrl(inputUrl);
      if (parsed) {
        setParsedUrl(parsed);
        validateRepo(parsed);
      } else {
        setParsedUrl(null);
        setRepoInfo(null);
      }

      const url = convertUrl(inputUrl);
      setConvertedUrl(url);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputUrl]);

  // Update converted URL when options change
  useEffect(() => {
    if (parsedUrl && repoInfo?.valid) {
      const url = buildConvertedUrl(parsedUrl, repoInfo);
      setConvertedUrl(url);
    }
  }, [useCommitSha, useDefaultBranch, repoInfo, parsedUrl]);

  const parseRepoUrl = (url: string): ParsedRepoUrl | null => {
    try {
      const parsed = new URL(url);
      const hostname = parsed.hostname;
      const pathname = parsed.pathname.split("/");

      // Handle GitHub URLs
      if (hostname === "github.com" && pathname.length >= 5) {
        return {
          platform: "github",
          owner: pathname[1],
          repo: pathname[2],
          branch: pathname[4],
          filePath: pathname.slice(5).join("/"),
        };
      }

      // Handle GitLab URLs
      if (hostname === "gitlab.com" && pathname.length >= 5) {
        if (
          pathname[3] === "-" &&
          (pathname[4] === "blob" || pathname[4] === "raw")
        ) {
          return {
            platform: "gitlab",
            owner: pathname[1],
            repo: pathname[2],
            branch: pathname[5],
            filePath: pathname.slice(6).join("/"),
          };
        }

        return {
          platform: "gitlab",
          owner: pathname[1],
          repo: pathname[2],
          branch: pathname[4],
          filePath: pathname.slice(5).join("/"),
        };
      }

      // Handle Bitbucket URLs
      if (hostname === "bitbucket.org" && pathname.length >= 5) {
        return {
          platform: "bitbucket",
          owner: pathname[1],
          repo: pathname[2],
          branch: pathname[4],
          filePath: pathname.slice(5).join("/"),
        };
      }

      return null;
    } catch {
      return null;
    }
  };

  const validateRepo = async (parsed: ParsedRepoUrl) => {
    setValidating(true);
    try {
      let info: RepoInfo;

      switch (parsed.platform) {
        case "github":
          info = await validateGitHubRepo(
            parsed.owner,
            parsed.repo,
            parsed.branch,
            parsed.filePath
          );
          break;
        case "gitlab":
          info = await validateGitLabRepo(
            parsed.owner,
            parsed.repo,
            parsed.branch,
            parsed.filePath
          );
          break;
        case "bitbucket":
          info = await validateBitbucketRepo(
            parsed.owner,
            parsed.repo,
            parsed.branch,
            parsed.filePath
          );
          break;
      }

      setRepoInfo(info);
    } catch (error) {
      setRepoInfo({
        valid: false,
        error: "Failed to validate repository",
      });
    } finally {
      setValidating(false);
    }
  };

  const buildConvertedUrl = (parsed: ParsedRepoUrl, info: RepoInfo): string => {
    const platformPrefix =
      parsed.platform === "github"
        ? "gh"
        : parsed.platform === "gitlab"
        ? "gl"
        : "bb";

    // Determine the ref (branch or commit SHA)
    let ref: string;
    if (useCommitSha && info.latestCommitSha) {
      ref = info.latestCommitSha;
    } else if (useDefaultBranch && info.defaultBranch) {
      ref = info.defaultBranch;
    } else {
      ref = parsed.branch || info.defaultBranch || "main";
    }

    return `https://cdn.statically.io/${platformPrefix}/${parsed.owner}/${parsed.repo}@${ref}/${parsed.filePath}`;
  };

  const convertUrl = (url: string) => {
    try {
      // Parse the URL
      let parsedUrl;
      try {
        parsedUrl = new URL(url);
      } catch (e) {
        return "";
      }

      const hostname = parsedUrl.hostname;
      const pathname = parsedUrl.pathname.split("/");

      // Handle GitHub Gist URLs
      if (hostname === "gist.githubusercontent.com") {
        const user = pathname[1];
        const gistId = pathname[2];

        // Handle raw gist file URLs: https://gist.githubusercontent.com/:user/:gist_id/raw/:commit/:file
        if (pathname.length >= 6 && pathname[3] === "raw") {
          const commit = pathname[4];
          const file = pathname.slice(5).join("/");
          return `https://cdn.statically.io/gist/${user}/${gistId}/raw/${commit}/${file}`;
        }

        // Handle basic gist URLs: https://gist.githubusercontent.com/:user/:gist_id
        // For basic gist URLs, we can't convert without knowing the file name
        // Return empty string as we need more information
        return "";
      }

      // Handle GitHub URLs
      if (hostname === "github.com" && pathname.length >= 5) {
        const user = pathname[1];
        const repo = pathname[2];
        const branch = pathname[4];
        const filePath = pathname.slice(5).join("/");

        return `https://cdn.statically.io/gh/${user}/${repo}@${branch}/${filePath}`;
      }

      // Handle GitLab URLs
      else if (hostname === "gitlab.com" && pathname.length >= 5) {
        const user = pathname[1];
        const repo = pathname[2];

        // GitLab URLs have the format: /user/repo/-/blob|raw/branch/file
        // We need to skip the "-" separator and "blob"/"raw" parts
        if (
          pathname[3] === "-" &&
          (pathname[4] === "blob" || pathname[4] === "raw")
        ) {
          const branch = pathname[5];
          const filePath = pathname.slice(6).join("/");
          return `https://cdn.statically.io/gl/${user}/${repo}@${branch}/${filePath}`;
        }

        // Fallback for other GitLab URL formats
        const branch = pathname[4];
        const filePath = pathname.slice(5).join("/");
        return `https://cdn.statically.io/gl/${user}/${repo}@${branch}/${filePath}`;
      }

      // Handle Bitbucket URLs
      else if (hostname === "bitbucket.org" && pathname.length >= 5) {
        const user = pathname[1];
        const repo = pathname[2];
        const branch = pathname[4];
        const filePath = pathname.slice(5).join("/");

        return `https://cdn.statically.io/bb/${user}/${repo}@${branch}/${filePath}`;
      }

      return "";
    } catch (error) {
      return "";
    }
  };

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(convertedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Converter Card */}
      <div className="relative border rounded-xl border-foreground/10 bg-background p-4 shadow-sm">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">
            Paste your repository URL below
          </label>
          <input
            type="text"
            placeholder="https://github.com/user/repo/blob/main/file.js"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-input bg-muted/30 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {convertedUrl && (
          <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-bottom-1">
            <div className="flex items-center justify-between">
              <label className="text-sm text-muted-foreground">
                Converted CDN URL
              </label>
              {validating && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Validating...
                </div>
              )}
              {!validating && repoInfo && (
                <div className="flex items-center gap-1.5 text-xs">
                  {repoInfo.valid ? (
                    repoInfo.fileExists !== undefined && (
                      <div className="flex items-center gap-1.5 text-xs">
                        {repoInfo.fileExists ? (
                          <>
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span className="text-green-600">Valid</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-3 w-3 text-amber-500" />
                            <span className="text-amber-600">
                              File not found
                            </span>
                          </>
                        )}
                      </div>
                    )
                  ) : (
                    <>
                      <XCircle className="h-3 w-3 text-red-500" />
                      <span className="text-red-600">
                        {repoInfo.error || "Invalid"}
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-input bg-muted/30 text-xs font-mono truncate">
                {convertedUrl}
              </div>
              <Button
                size="sm"
                className="h-10 px-4 gap-2"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy
                  </>
                )}
              </Button>
            </div>

            {repoInfo?.valid && (
              <div className="space-y-2 pt-1">
                <div className="text-xs text-muted-foreground">Options:</div>
                <div className="flex flex-wrap gap-2">
                  {repoInfo.defaultBranch && (
                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useDefaultBranch}
                        onChange={(e) => {
                          setUseDefaultBranch(e.target.checked);
                          if (e.target.checked) setUseCommitSha(false);
                        }}
                        className="rounded border-input"
                      />
                      <span>Use default branch ({repoInfo.defaultBranch})</span>
                    </label>
                  )}
                  {repoInfo.latestCommitSha && (
                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useCommitSha}
                        onChange={(e) => {
                          setUseCommitSha(e.target.checked);
                          if (e.target.checked) setUseDefaultBranch(false);
                        }}
                        className="rounded border-input"
                      />
                      <span>
                        Pin to commit SHA (
                        {repoInfo.latestCommitSha.substring(0, 7)})
                      </span>
                    </label>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Other Options section */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">How to use</h3>

        <div className="border rounded-lg border-foreground/10 bg-background p-4 space-y-4">
          <div className="space-y-1">
            <h4 className="font-medium">Open source CDN</h4>
            <p className="text-sm text-muted-foreground">
              Serve optimized files from Git repositories via global CDN.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            {/* GitHub Format */}
            <div className="space-y-1">
              <p className="text-xs font-semibold">GitHub:</p>
              <code className="block text-xs bg-muted px-3 py-2 rounded font-mono break-all">
                https://cdn.statically.io/gh/:user/:repo@:tag/:file
              </code>
            </div>

            {/* GitLab Format */}
            <div className="space-y-1">
              <p className="text-xs font-semibold">GitLab:</p>
              <code className="block text-xs bg-muted px-3 py-2 rounded font-mono break-all">
                https://cdn.statically.io/gl/:user/:repo@:tag/:file
              </code>
            </div>

            {/* Bitbucket Format */}
            <div className="space-y-1">
              <p className="text-xs font-semibold">Bitbucket:</p>
              <code className="block text-xs bg-muted px-3 py-2 rounded font-mono break-all">
                https://cdn.statically.io/bb/:user/:repo@:tag/:file
              </code>
            </div>

            {/* GitHub Gist Format */}
            <div className="space-y-1">
              <p className="text-xs font-semibold">GitHub Gist:</p>
              <code className="block text-xs bg-muted px-3 py-2 rounded font-mono break-all">
                https://cdn.statically.io/gist/:user/:gist_id/raw/:commit/:file
              </code>
            </div>
          </div>
        </div>

        {/* npm CDN option */}
        <div className="border rounded-lg border-foreground/10 bg-background p-4 space-y-3">
          <div className="space-y-1">
            <h4 className="font-medium">npm CDN</h4>
            <p className="text-sm text-muted-foreground">
              Serve any file from any npm package directly via global CDN.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground">
                Format:
              </p>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs bg-muted px-3 py-1.5 rounded font-mono break-all">
                  https://cdn.statically.io/npm/:package
                </code>
              </div>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs bg-muted px-3 py-1.5 rounded font-mono break-all">
                  https://cdn.statically.io/npm/:package@:version/:file
                </code>
              </div>
            </div>
            <div className="space-y-1 pt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
