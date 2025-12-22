/**
 * Git API service for validating repositories and fetching metadata
 * Supports GitHub, GitLab, and Bitbucket APIs
 */

export interface RepoInfo {
  valid: boolean;
  defaultBranch?: string;
  latestCommitSha?: string;
  fileExists?: boolean;
  error?: string;
}

interface CacheEntry {
  data: RepoInfo;
  timestamp: number;
}

// Simple in-memory cache with 5-minute TTL
const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Get cached result if available and not expired
 */
function getCached(key: string): RepoInfo | null {
  const entry = cache.get(key);
  if (!entry) return null;

  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }

  return entry.data;
}

/**
 * Store result in cache
 */
function setCached(key: string, data: RepoInfo): void {
  cache.set(key, { data, timestamp: Date.now() });
}

/**
 * Validate GitHub repository and get metadata
 * API Docs: https://docs.github.com/en/rest/repos/repos
 * Rate Limit: 60 req/hour (unauthenticated), 5000 req/hour (authenticated)
 */
export async function validateGitHubRepo(
  owner: string,
  repo: string,
  branch?: string,
  filePath?: string
): Promise<RepoInfo> {
  const cacheKey = `gh:${owner}/${repo}:${branch || ''}:${filePath || ''}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    // Get repository info to get default branch
    const repoResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!repoResponse.ok) {
      if (repoResponse.status === 404) {
        const result: RepoInfo = { valid: false, error: 'Repository not found' };
        setCached(cacheKey, result);
        return result;
      }
      if (repoResponse.status === 403) {
        const result: RepoInfo = { valid: false, error: 'Rate limit exceeded' };
        return result; // Don't cache rate limit errors
      }
      const result: RepoInfo = { valid: false, error: 'Failed to fetch repository' };
      setCached(cacheKey, result);
      return result;
    }

    const repoData = await repoResponse.json();
    const defaultBranch = repoData.default_branch;
    const targetBranch = branch || defaultBranch;

    let latestCommitSha: string | undefined;
    let fileExists: boolean | undefined;

    // Get latest commit SHA for the branch
    if (targetBranch) {
      try {
        const branchResponse = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/branches/${targetBranch}`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );

        if (branchResponse.ok) {
          const branchData = await branchResponse.json();
          latestCommitSha = branchData.commit.sha;
        }
      } catch (error) {
        // Continue without commit SHA if this fails
      }
    }

    // Check if file exists (if filePath provided)
    if (filePath && targetBranch) {
      try {
        const fileResponse = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${targetBranch}`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );
        fileExists = fileResponse.ok;
      } catch (error) {
        // Continue without file validation if this fails
      }
    }

    const result: RepoInfo = {
      valid: true,
      defaultBranch,
      latestCommitSha,
      fileExists,
    };

    setCached(cacheKey, result);
    return result;
  } catch (error) {
    const result: RepoInfo = {
      valid: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
    return result; // Don't cache errors
  }
}

/**
 * Validate GitLab repository and get metadata
 * API Docs: https://docs.gitlab.com/ee/api/repositories.html
 * Rate Limit: Variable, generally 5 calls/minute for large files
 */
export async function validateGitLabRepo(
  owner: string,
  repo: string,
  branch?: string,
  filePath?: string
): Promise<RepoInfo> {
  const cacheKey = `gl:${owner}/${repo}:${branch || ''}:${filePath || ''}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const projectPath = encodeURIComponent(`${owner}/${repo}`);

    // Get project info to get default branch
    const projectResponse = await fetch(
      `https://gitlab.com/api/v4/projects/${projectPath}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!projectResponse.ok) {
      if (projectResponse.status === 404) {
        const result: RepoInfo = { valid: false, error: 'Repository not found' };
        setCached(cacheKey, result);
        return result;
      }
      if (projectResponse.status === 429) {
        const result: RepoInfo = { valid: false, error: 'Rate limit exceeded' };
        return result; // Don't cache rate limit errors
      }
      const result: RepoInfo = { valid: false, error: 'Failed to fetch repository' };
      setCached(cacheKey, result);
      return result;
    }

    const projectData = await projectResponse.json();
    const defaultBranch = projectData.default_branch;
    const targetBranch = branch || defaultBranch;

    let latestCommitSha: string | undefined;
    let fileExists: boolean | undefined;

    // Get latest commit SHA for the branch
    if (targetBranch) {
      try {
        const branchResponse = await fetch(
          `https://gitlab.com/api/v4/projects/${projectPath}/repository/branches/${encodeURIComponent(targetBranch)}`,
          {
            headers: {
              'Accept': 'application/json',
            },
          }
        );

        if (branchResponse.ok) {
          const branchData = await branchResponse.json();
          latestCommitSha = branchData.commit.id;
        }
      } catch (error) {
        // Continue without commit SHA if this fails
      }
    }

    // Check if file exists (if filePath provided)
    if (filePath && targetBranch) {
      try {
        const encodedPath = encodeURIComponent(filePath);
        const fileResponse = await fetch(
          `https://gitlab.com/api/v4/projects/${projectPath}/repository/files/${encodedPath}?ref=${encodeURIComponent(targetBranch)}`,
          {
            headers: {
              'Accept': 'application/json',
            },
          }
        );
        fileExists = fileResponse.ok;
      } catch (error) {
        // Continue without file validation if this fails
      }
    }

    const result: RepoInfo = {
      valid: true,
      defaultBranch,
      latestCommitSha,
      fileExists,
    };

    setCached(cacheKey, result);
    return result;
  } catch (error) {
    const result: RepoInfo = {
      valid: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
    return result; // Don't cache errors
  }
}

/**
 * Validate Bitbucket repository and get metadata
 * API Docs: https://developer.atlassian.com/cloud/bitbucket/rest/api-group-repositories/
 * Rate Limit: 60 req/hour (unauthenticated), 1000 req/hour (authenticated)
 */
export async function validateBitbucketRepo(
  owner: string,
  repo: string,
  branch?: string,
  filePath?: string
): Promise<RepoInfo> {
  const cacheKey = `bb:${owner}/${repo}:${branch || ''}:${filePath || ''}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    // Get repository info
    const repoResponse = await fetch(
      `https://api.bitbucket.org/2.0/repositories/${owner}/${repo}`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!repoResponse.ok) {
      if (repoResponse.status === 404) {
        const result: RepoInfo = { valid: false, error: 'Repository not found' };
        setCached(cacheKey, result);
        return result;
      }
      if (repoResponse.status === 429) {
        const result: RepoInfo = { valid: false, error: 'Rate limit exceeded' };
        return result; // Don't cache rate limit errors
      }
      const result: RepoInfo = { valid: false, error: 'Failed to fetch repository' };
      setCached(cacheKey, result);
      return result;
    }

    const repoData = await repoResponse.json();
    const defaultBranch = repoData.mainbranch?.name;
    const targetBranch = branch || defaultBranch;

    let latestCommitSha: string | undefined;
    let fileExists: boolean | undefined;

    // Get latest commit SHA for the branch
    if (targetBranch) {
      try {
        const branchResponse = await fetch(
          `https://api.bitbucket.org/2.0/repositories/${owner}/${repo}/refs/branches/${targetBranch}`,
          {
            headers: {
              'Accept': 'application/json',
            },
          }
        );

        if (branchResponse.ok) {
          const branchData = await branchResponse.json();
          latestCommitSha = branchData.target.hash;
        }
      } catch (error) {
        // Continue without commit SHA if this fails
      }
    }

    // Check if file exists (if filePath provided)
    if (filePath && targetBranch) {
      try {
        const fileResponse = await fetch(
          `https://api.bitbucket.org/2.0/repositories/${owner}/${repo}/src/${targetBranch}/${filePath}`,
          {
            method: 'HEAD',
            headers: {
              'Accept': 'application/json',
            },
          }
        );
        fileExists = fileResponse.ok;
      } catch (error) {
        // Continue without file validation if this fails
      }
    }

    const result: RepoInfo = {
      valid: true,
      defaultBranch,
      latestCommitSha,
      fileExists,
    };

    setCached(cacheKey, result);
    return result;
  } catch (error) {
    const result: RepoInfo = {
      valid: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
    return result; // Don't cache errors
  }
}
