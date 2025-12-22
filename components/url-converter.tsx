"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Link2 } from "lucide-react";

export default function UrlConverter() {
  const [inputUrl, setInputUrl] = useState("");
  const [convertedUrl, setConvertedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  // Convert URL as user types
  useEffect(() => {
    if (!inputUrl) {
      setConvertedUrl("");
      return;
    }

    // Simple debounce
    const timer = setTimeout(() => {
      const url = convertUrl(inputUrl);
      setConvertedUrl(url);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputUrl]);

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
        if (pathname[3] === "-" && (pathname[4] === "blob" || pathname[4] === "raw")) {
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
          <div className="mt-4 space-y-2 animate-in fade-in slide-in-from-bottom-1">
            <label className="text-sm text-muted-foreground">
              Converted CDN URL
            </label>
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
