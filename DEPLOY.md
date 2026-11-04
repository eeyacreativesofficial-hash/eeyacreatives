# Deployment Guide — EEYA CREATIVES

This document outlines the hosting prerequisites, deployment procedures, DNS configuration, post-deployment verification, and rollback strategy for the EEYA CREATIVES website.

---

## 1. Specifications & Prerequisites

- **Framework**: Next.js 16 (App Router)
- **Node.js Version**: `24.x` (LTS specified in `.nvmrc`)
- **Package Manager**: `npm` (with `package-lock.json`)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (or standalone static export)
- **Environment Variables**: None required. All studio content, copywriting, project showcases, and contact configuration reside in `src/data/content.ts`.

---

## 2. Deploying to Vercel

1. **Connect Repository**:
   - Log in to [Vercel Dashboard](https://vercel.com).
   - Click **Add New...** → **Project**.
   - Import the `website` GitHub repository.

2. **Configure Project Settings**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: Automatically handled by Next.js preset.
   - **Node.js Version**: Select **24.x** in Project Settings → General → Node.js Version.

3. **Deploy**:
   - Click **Deploy**. Vercel will run `npm ci` and compile all routes as static prerendered assets.

---

## 3. Deploying to Netlify

1. **Connect Repository**:
   - Log in to [Netlify App](https://app.netlify.com).
   - Click **Add new site** → **Import an existing project**.
   - Select your Git provider and repository.

2. **Configure Build Settings**:
   - **Base directory**: (leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (with `@netlify/plugin-nextjs` installed automatically).
   - Ensure environment variable `NODE_VERSION=24` is set in Site Configuration.

3. **Deploy Site**:
   - Click **Deploy site**.

---

## 4. Custom Domain & DNS Records

Configure the following DNS records with your domain registrar:

| Type | Name / Host | Value / Target | Notes |
| :--- | :--- | :--- | :--- |
| **A** | `@` (root) | `76.76.21.21` (Vercel) / `75.2.60.5` (Netlify) | Apex domain record |
| **CNAME** | `www` | `cname.vercel-dns.com` (Vercel) / your-site.netlify.app | Canonical www alias |

*Note: Verify that your registrar has DNSSEC enabled and Domain Transfer Lock turned on.*

---

## 5. Post-Deployment Checklist

- [ ] **HTTPS / SSL**: Confirm the SSL certificate is active and auto-renewing.
- [ ] **Apex / www Redirect**: Verify that accessing `http://` redirects to `https://`, and `www.` redirects cleanly to apex (or vice versa).
- [ ] **Robots & Sitemap**: Test `https://<domain>/robots.txt` and `https://<domain>/sitemap.xml`.
- [ ] **Social Media / Open Graph**: Test URL in Facebook Sharing Debugger, Twitter Card Validator, and LinkedIn Post Inspector.
- [ ] **Interactive Actions**:
  - Click the **Chat on WhatsApp** buttons to confirm WhatsApp opens with the pre-filled brief.
  - Test the **Email Us** links on desktop (Gmail Web) and mobile (Mail client).
  - Verify embedded YouTube playback on project pages (e.g., `/our-work/kalam-tribute`).
- [ ] **Performance & Lighthouse**: Run Google Lighthouse Mobile audit in Chrome DevTools (target: 95+ performance, 100 accessibility, 100 best practices, 100 SEO).

---

## 6. Rollback Procedures

If an unexpected regression occurs in production:
1. **Instant Hosting Rollback**:
   - **Vercel**: Go to Project → **Deployments**, locate the last healthy deployment, click **...** → **Instant Rollback**.
   - **Netlify**: Go to Site → **Deploys**, select the prior successful deploy, and click **Publish deploy**.
2. **Git Rollback**:
   ```bash
   git revert HEAD
   git push origin main
   ```

