Cutover to Vercel — bakamousa.com
================================

Summary
-------
- Purpose: concise, copy/paste instructions for cutting over `bakamousa.com` from Lightsail to Vercel, smoke tests, and rollback.

Pre-cutover checklist
---------------------
- Take Lightsail snapshot now (Lightsail Console → Instance → Snapshots).
- Backup Apache config on the server (if you control it):

  sudo cp -r /opt/bitnami/apache2/conf /opt/bitnami/apache2/conf.backup

- Lower DNS TTL for `@` and `www` to `300` seconds in Gandi (do this at least 1–2 hours before cutover if possible).

Vercel project settings
-----------------------
1. Import existing repo: `FazekasDani/bakamousa-next` (Project → New Project → Import Git Repository).
   - Framework Preset: Next.js (auto-detected).
   - Install Command: `npm ci`
   - Build Command: `npm run build`

2. Add Environment Variables (Project → Settings → Environment Variables) — set for both Production & Preview:
   - `WORDPRESS_BASE_URL` = `https://bakamosocial.com`
   - `WP_PREVIEW_SECRET` = `<long-random-secret>` (generate ~32+ chars)
   - `NEXT_PUBLIC_SITE_URL` = `https://bakamousa.com`
   - Optional (only if WP uses basic auth): `WORDPRESS_BASIC_AUTH_USER`, `WORDPRESS_BASIC_AUTH_PASS`

Domain verification & DNS changes (Gandi)
--------------------------------------
1. In Vercel: Project → Domains → Add `bakamousa.com`. Vercel will display a verification record (TXT or CNAME) — copy it.
2. In Gandi: add the verification record exactly as shown by Vercel. Click Verify in Vercel once added.
3. When ready to cutover, update these records in Gandi (TTL 300):

   Replace apex A (was Lightsail):

   @ 300 IN A 76.76.21.21

   Delete the Lightsail AAAA record:

   (delete) @ 1800 IN AAAA 2a05:d018:432:1f00:5c6c:357a:ea64:17f4

   Set `www` to Vercel:

   www 300 IN CNAME cname.vercel-dns.com.

4. Keep the following unchanged: MX, TXT (SPF), CAA, SRV, DKIM and `bakamousa.bakamosocial.com`.

Smoke tests after DNS propagation
---------------------------------
Run these locally to confirm propagation and site health:

```bash
dig +short A bakamousa.com
dig +short AAAA bakamousa.com
dig +short CNAME www.bakamousa.com
curl -I https://bakamousa.com
curl -I https://<project>.vercel.app
```

Site functional tests
---------------------
- Browse public pages and a representative post.
- Test preview flow: `/api/preview?secret=<WP_PREVIEW_SECRET>&slug=<slug>`
- Verify featured images, links, forms, and redirects.

Rollback (fast)
---------------
If something critical breaks, revert DNS records in Gandi to the previous values (TTL can be left low until stable):

@ 1800 IN A 52.16.104.211
@ 1800 IN AAAA 2a05:d018:432:1f00:5c6c:357a:ea64:17f4
www 1800 IN CNAME bakamousa.com.

Or use Vercel: Project → Deployments → rollback to previous deployment.

Post-cutover tasks
------------------
- After 24h stable: raise TTL back to 1800 or previous value.
- Remove or repurpose `bakamousa.bakamosocial.com` once you no longer need staging for cert validation.
- Record the Lightsail snapshot ID and deletion/retention plan in the Ops runbook.

Contact & notes
---------------
- Repo: https://github.com/FazekasDani/bakamousa-next
- Keep `WP_PREVIEW_SECRET` out of source control and rotate if exposed.
