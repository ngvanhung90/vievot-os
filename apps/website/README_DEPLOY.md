# VIEVOT Website Deploy Notes

Domain target: `vievot.com`

This website is a static marketing site for VIEVOT. It does not train models, modify the gateway, mutate the world model, or enable unrestricted public runtime access.

## Local Run

```powershell
cd <repo-root>
$env:VIEVOT_WEBSITE_PORT="3340"
npm run website
```

Open the local URL printed by the server.

## Build

```powershell
cd <repo-root>
npm run website:build
```

Static output is written to:

```text
apps/website/dist
```

## Hosting Requirements

- Static hosting for `apps/website/dist`.
- HTTPS certificate for `vievot.com` and optionally `www.vievot.com`.
- DNS records controlled by the owner:
  - Apex `A`/`ALIAS`/`ANAME` or provider-specific record.
  - `www` CNAME to the hosting provider if used.
- Environment/config values:
  - `VIEVOT_APP_URL`: HTTPS URL of the VIEVOT product app. Leave blank to fall back to Beta Access.
  - `VIEVOT_CONTACT_URL`: contact or investor inquiry destination.
  - `VIEVOT_WEBSITE_DEPLOY_MODE`: `staging` or `production`.

## Staging Recommendation

Deploy to a private or password-protected staging URL first. Do not enable public unrestricted product access from the landing page until access control, rate limits, privacy logging, and gateway runtime flags are explicitly confirmed.
