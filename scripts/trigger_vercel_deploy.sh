#!/usr/bin/env bash
set -euo pipefail

# Trigger a Vercel deploy via the deploy hook URL stored in $VERCEL_DEPLOY_HOOK
HOOK="${VERCEL_DEPLOY_HOOK:-}"
if [ -z "$HOOK" ]; then
  echo "ERROR: VERCEL_DEPLOY_HOOK environment variable is not set"
  exit 1
fi

echo "Triggering Vercel deploy..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$HOOK")
if [ "$HTTP_STATUS" -ge 200 ] && [ "$HTTP_STATUS" -lt 300 ]; then
  echo "Deploy triggered (HTTP $HTTP_STATUS)"
  exit 0
else
  echo "Failed to trigger deploy (HTTP $HTTP_STATUS)"
  exit 2
fi
