#!/usr/bin/env bash
set -euo pipefail

# Sync content from a remote Git repository into the local `content/` folder
# Requires: GIT_CONTENT_REPO (e.g. https://github.com/owner/repo.git) and optional GIT_BRANCH
# After syncing, the script triggers a Vercel deploy via `scripts/trigger_vercel_deploy.sh`

REPO="${GIT_CONTENT_REPO:-}"
BRANCH="${GIT_BRANCH:-main}"

if [ -z "$REPO" ]; then
  echo "ERROR: GIT_CONTENT_REPO environment variable not set"
  exit 1
fi

TMPDIR=$(mktemp -d)
echo "Cloning $REPO (branch: $BRANCH) into $TMPDIR"
git clone --depth 1 --branch "$BRANCH" "$REPO" "$TMPDIR"

if [ -d "$TMPDIR/content" ]; then
  echo "Syncing content/ from remote repo into local content/"
  mkdir -p content
  rsync -a --delete "$TMPDIR/content/" content/
else
  echo "No content/ directory found in remote repo; please ensure files live under content/"
fi

rm -rf "$TMPDIR"

echo "Content sync complete. Triggering Vercel deploy..."
bash ./scripts/trigger_vercel_deploy.sh
