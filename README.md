# VIEVOT Website

Public website source for the VIEVOT landing page.

## Build

```bash
npm run website:build
```

The GitHub Pages workflow builds the static website and publishes the generated website output through GitHub Pages.

## Deployment

- Custom domain: `vievot.com`
- Deployment target: GitHub Pages
- DNS provider: GoDaddy
- HTTPS should be enforced after GitHub Pages finishes certificate provisioning.

## Safety

This repository branch is intended for public website deployment only.

Do not commit runtime storage, private logs, local session data, credentials, API keys, tokens, database files, or internal reports.

Trigger GitHub Pages deployment after Pages enablement.
