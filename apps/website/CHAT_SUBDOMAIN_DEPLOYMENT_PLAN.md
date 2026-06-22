# chat.vievot.com Deployment Plan

Task: D43_WEBSITE_I18N_AND_CHAT_ENTRY_PATCH

## Current Source Discovery

Source app found in the VIEVOT workspace:

- App path: `apps/web`
- Entry point: `apps/web/server.js`
- Client entry: `apps/web/public/app.js`
- Package command in source workspace: `npm run web`
- Default local port: `VIEVOT_WEB_PORT` or `3320`
- Gateway dependency: `VIEVOT_GATEWAY_URL`
- Chat API dependency: gateway route `/vievot-chat`
- Skill API dependency: local route `/api/skills/process`

## Landing Page Link Status

The public landing page now links the sidebar chat entry directly to:

https://chat.vievot.com

This is an intentional real URL, not a fake in-page fallback. If `chat.vievot.com` has not been deployed or pointed in DNS yet, the browser should show the real DNS/hosting error until the chat app is deployed.

Do not claim that VIEVOT Chat is live until `chat.vievot.com` resolves over HTTPS and the web chat app is actually deployed.

## Can chat.vievot.com Use GitHub Pages?

Not as the full chat app.

The current web chat is a Node server app. It serves static assets, exposes local API routes, and proxies/uses the VIEVOT gateway through runtime configuration. GitHub Pages can host static files only, so it cannot run `apps/web/server.js` or provide the required API endpoints.

GitHub Pages could host a static shell later, but the real chat runtime still needs a backend host.

## Recommended Hosting Shape

Use separate hosting layers:

- `vievot.com`: static landing page on GitHub Pages.
- `chat.vievot.com`: Node-capable hosting for the web chat app.
- `api.vievot.com` or gateway equivalent: backend gateway that exposes `/vievot-chat` over HTTPS.

Suitable hosting classes:

- Node app hosting with HTTPS and custom domain support.
- Cloud VM with Nginx reverse proxy.
- Container hosting with an HTTPS load balancer.
- PaaS Node hosting.

Provider choice is not made in this plan.

## DNS Requirements

For `chat.vievot.com`:

- If using a PaaS: create `CNAME chat -> provider-hostname`.
- If using a VM/load balancer: create `A` or `AAAA` record to the assigned endpoint.
- Enable HTTPS certificate for `chat.vievot.com`.
- Do not point `chat.vievot.com` to GitHub Pages unless the chat is converted to a fully static app.

## Required Runtime Environment

Minimum environment variables:

- `VIEVOT_WEB_PORT`
- `VIEVOT_GATEWAY_URL`
- `VIEVOT_REALTIME_RETRIEVAL_ACTIVE`
- `VIEVOT_DEMO_MODE`
- `VIEVOT_DEBUG_MODE`

Production/staging values must not be committed to the public repo.

## Readiness Assessment

Current status: not ready for public deployment.

Reasons:

- The chat app depends on a backend gateway URL.
- Auth/account entitlement is not wired into public chat deployment.
- Hosting target for Node runtime is not selected.
- HTTPS endpoint and reverse proxy plan are not finalized.
- Public secrets and runtime environment handling need staging review.

## Blockers

P0:

- Choose a Node-capable host for `chat.vievot.com`.
- Provide a public HTTPS VIEVOT gateway endpoint for `/vievot-chat`.
- Ensure no backend secret is shipped to the client.

P1:

- Add account/auth gating if chat access is controlled beta only.
- Add deployment health check for `/health`.
- Add origin/CORS policy for `https://chat.vievot.com`.

P2:

- Add observability and uptime checks.
- Add rollback notes for chat deployment.

## Next Recommended Step

Create a staging deployment plan for `apps/web` with:

1. Node host target.
2. Gateway HTTPS URL.
3. Environment variable policy.
4. Health check.
5. DNS record plan for `chat.vievot.com`.
6. Controlled beta access behavior.
