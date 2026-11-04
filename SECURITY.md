# Security Policy & Hardening — EEYA CREATIVES

This document details the security posture, architecture limitations, access checklist, and incident response procedures for the EEYA CREATIVES website.

---

## 1. System Scope & Architecture

### What the Website DOES
- Serves static, high-performance HTML/CSS/JavaScript showcasing the studio's portfolio, brand films, and creative offerings.
- Generates pre-formatted client-side links (`wa.me` for WhatsApp and Gmail web/mailto URL builders).
- Embeds privacy-enhanced YouTube players (`youtube-nocookie.com`) only after explicit user interaction.

### What the Website DOES NOT Do
- **Zero Server-Side Forms or APIs**: No endpoints process or persist user data on the server.
- **Zero Databases**: No SQL/NoSQL storage, database connections, or object stores.
- **Zero Authentication / User Accounts**: No customer logins, passwords, sessions, or cookies.
- **Zero Payment Processing**: No credit card capture, payment tokens, or gateways.
- **Zero Third-Party Trackers**: No Google Analytics, Facebook Pixel, ad networks, CDNs, or foreign font loaders at runtime.

---

## 2. Hardening & Response Headers

The website employs defense-in-depth HTTP security headers enforced in `next.config.js`:

- **Strict-Transport-Security (HSTS)**: `max-age=63072000; includeSubDomains; preload`
- **X-Content-Type-Options**: `nosniff`
- **X-Frame-Options**: `DENY`
- **Referrer-Policy**: `strict-origin-when-cross-origin`
- **Permissions-Policy**: `camera=(), microphone=(), geolocation=(), payment=(), usb=()`
- **Cross-Origin-Opener-Policy (COOP)**: `same-origin`
- **Content-Security-Policy (CSP)**:
  `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; media-src 'self' data: blob:; connect-src 'self'; frame-src 'self' https://www.youtube-nocookie.com; frame-ancestors 'none';`

---

## 3. Account Protection Checklist

To ensure total brand and platform security, verify the following accounts are secured:

- [ ] **GitHub / Code Repository**:
  - Require hardware passkeys or authenticator app (TOTP) 2-Step Verification.
  - Enable Branch Protection rules on `main` (require pull request reviews before merging).
  - Dependabot automated security scanning enabled (`.github/dependabot.yml`).
- [ ] **Hosting Account (Vercel / Netlify)**:
  - 2FA mandatory for all team members.
  - Audit active deploy tokens and webhooks.
- [ ] **Domain Registrar**:
  - Enable **Registrar Lock** (Transfer Lock) to prevent unauthorized DNS hijacking.
  - Enable **Auto-Renew** with backup billing information.
  - Enable **DNSSEC** (Domain Name System Security Extensions).
- [ ] **Studio Email & YouTube Channels**:
  - Enforce Google Advanced Protection or passkey verification on `eeyacreatives.official@gmail.com`.
  - Review connected third-party app permissions quarterly.

---

## 4. Incident Response Plan

In the event of suspected compromise, token exposure, or unauthorized modifications:

1. **Containment**:
   - Immediately change master passwords and revoke active sessions for GitHub, hosting, domain registrar, and studio email accounts.
   - Revoke all personal access tokens (PATs), SSH keys, and deploy hooks.
2. **Analysis & Clean Redeployment**:
   - Inspect Git commit log: `git log -n 20 --stat`
   - Revert to the last known trusted commit.
   - Trigger a clean redeployment from the verified commit.
3. **Auditing**:
   - Inspect hosting access logs for unauthorized build triggers.
   - Run `npm audit` and static security scanner to confirm zero malicious artifacts.

