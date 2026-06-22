# VIEVOT Email and Ops Intake Plan

Task: D44_WEBSITE_COPY_ICON_LATENCY_AND_CONTACT_EMAIL_OPS_PLAN

## Public Email Addresses

Recommended mailbox set:

- `contact@vievot.com`: general product and business contact
- `beta@vievot.com`: beta access requests
- `investor@vievot.com`: investor, partnership, and strategic conversations

The website can display `contact@vievot.com` first. If the mailbox is still being provisioned, the UI must say so clearly and must not claim a backend submission happened.

## Provider Options

Suitable providers:

- Google Workspace
- GoDaddy Email
- Zoho Mail
- Cloudflare Email Routing

Provider choice is not made in D44.

## DNS Records Needed

Email setup normally requires:

- MX records for inbound mail routing
- SPF TXT record for sender authorization
- DKIM records for domain-signed outgoing mail
- DMARC TXT record for policy and reporting

D44 does not change DNS and does not create credentials.

## Credential Rules

- Do not store mailbox passwords in the website repo.
- Do not commit API keys, OAuth tokens, app passwords, SMTP credentials, DKIM private keys, or provider secrets.
- Store operational credentials only in the chosen provider/server secret manager.

## Ops Intake Model

VieraOps may read mailbox content only after explicit permission and provider integration are configured.

Recommended categories:

- `investor`
- `beta_request`
- `partnership`
- `customer_support`
- `security`
- `spam`

Recommended priority levels:

- `urgent`
- `high`
- `normal`
- `low`

## Reporting Cadence

Configurable reporting modes:

- realtime for urgent or security-related messages
- every 30 minutes for high-priority inbound messages
- every 5 hours for normal operational digests

## Privacy and Storage Rules

Do not store raw email bodies long term unless explicitly required for support compliance.

Allowed long-term summary fields:

- sender email
- received timestamp
- intent category
- urgency
- short summary
- next recommended action
- assigned queue
- status

Avoid storing:

- raw private content
- secrets, passwords, API keys, tokens, recovery codes
- full attachments
- payment details
- sensitive personal information that is not needed for triage

## First Implementation Step

1. Choose email provider.
2. Configure MX/SPF/DKIM/DMARC in DNS.
3. Verify inbound and outbound mail.
4. Add a private staging integration for VieraOps intake.
5. Keep website contact behavior honest until the mailbox is live.
