Content deploy & sync
---------------------

This document explains how to push content updates to the live site when using Git-backed content.

Environment variables
- `VERCEL_DEPLOY_HOOK` — (required) the Vercel deploy hook URL to trigger a redeploy.
- `GIT_CONTENT_REPO` — (optional) remote git repo URL used by `scripts/sync_content_from_git.sh`.
- `GIT_BRANCH` — (optional) branch to pull from (default: `main`).

Quick usage

1. If content lives in another repo, set `GIT_CONTENT_REPO` and run:

```bash
GIT_CONTENT_REPO="https://github.com/owner/repo.git" GIT_BRANCH=main bash scripts/sync_content_from_git.sh
```

This will copy `content/` from the remote repo into this project's `content/` folder and then call the `VERCEL_DEPLOY_HOOK` to trigger a deploy.

2. If you have edited `content/` directly in this repo, pushing to the repo will normally trigger Vercel automatically. To manually force a redeploy (useful if Vercel did not pick up a change), run:

```bash
VERCEL_DEPLOY_HOOK="<your-hook-url>" bash scripts/trigger_vercel_deploy.sh
```

Security

- Store `VERCEL_DEPLOY_HOOK` in your environment or a secrets manager (Vercel dashboard, CI secrets). Do NOT commit it to the repository.
- If using a sync script in automation, run it from a CI job with limited scopes.

Automation

Consider creating a GitHub Action in the content repo that calls the deploy hook when content changes, or configure the content repo to push updates into this repository and rely on normal pushes to trigger Vercel.
