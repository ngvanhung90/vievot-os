# VIEVOT Website Deployment Runbook

This runbook covers staging deployment preparation for the public VIEVOT website. It does not deploy, buy services, create DNS records, or enable production access.

## Build

```powershell
cd <repo-root>
npm run website:build
```

Static output:

```text
apps/website/dist
```

The build copies `apps/website/public` into `apps/website/dist` and writes `deploy-manifest.json`.

## Runtime Config

Edit or generate:

`apps/website/public/site-config.json`

Fields:

- `publicBaseUrl`: public website origin, for example `https://vievot.com`.
- `webChatUrl`: public HTTPS web app URL. Leave blank to fall back to Beta Access.
- `betaAccessMode`: currently `email`.
- `apiDocsUrl`: public HTTPS API docs URL. Leave blank to show API coming soon.
- `downloadUrl`: public HTTPS download URL. Leave blank to show beta download coming soon.
- `loginUrl`: public HTTPS login URL. Leave blank to show beta login coming soon.
- `contactUrl`: `mailto:` or public HTTPS contact URL.
- `environment`: `staging` or `production`.

Never put secrets, API keys, OAuth client secrets, or provider credentials in this file.

## Recommended Hosting

Recommended path: static hosting behind CDN.

Serve:

```text
apps/website/dist
```

Alternative: Node `apps/website/server.js` behind a reverse proxy. For Internet hosting, do not expose a local-only development process directly.

## DNS Requirements

Domains:

- `vievot.com`
- `www.vievot.com`

Required decisions:

- Choose canonical host: recommended `vievot.com`.
- Point apex `vievot.com` to the hosting target using provider-supported `A`, `AAAA`, `ALIAS`, `ANAME`, or equivalent.
- Point `www.vievot.com` to hosting target using `CNAME` or provider-supported redirect.
- Redirect `www.vievot.com` to `vievot.com`, or document the opposite if chosen.

## HTTPS / SSL

Required:

- HTTPS certificate for `vievot.com`.
- HTTPS certificate for `www.vievot.com`.
- HTTP to HTTPS redirect.
- No mixed content.
- No local development links in public build.

## Canonical Redirect

Recommended:

- `http://vievot.com` -> `https://vievot.com`
- `http://www.vievot.com` -> `https://vievot.com`
- `https://www.vievot.com` -> `https://vievot.com`

## Security Headers

Recommended baseline:

```text
Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self'; form-action 'self' mailto:; frame-ancestors 'none'; base-uri 'self'
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Tune CSP when the public web app, analytics, or support widgets are intentionally added.

## Mobile QA Checklist

Test after deployment on:

- iOS Safari
- Chrome Android
- Samsung Browser

Check:

- Hero is visible before expanded navigation.
- Mobile menu opens and closes.
- Language selector works.
- Try VIEVOT falls back to Beta Access unless `webChatUrl` is a public HTTPS URL.
- API, Download, Login status buttons show clear beta notes.
- No horizontal overflow.
- Mail links work as expected.

## Rollback Checklist

Before launch:

- Keep previous `dist` artifact.
- Keep previous `site-config.json`.
- Record hosting version or object storage release path.
- Confirm rollback restores previous HTML, CSS, JS, config, and brand assets.
- Re-run smoke test after rollback.

Rollback steps:

1. Restore previous static artifact or hosting version.
2. Restore previous config.
3. Purge CDN cache if used.
4. Verify `https://vievot.com` and `https://www.vievot.com`.
5. Verify Try VIEVOT, Beta Access, API, Download, Login.
