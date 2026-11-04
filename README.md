# EEYA CREATIVES — Premium Creative Studio Website

A luxury, cinematic brand website for **EEYA CREATIVES** (*AI Powered Advertising and Website Development Creative Studio*), built with Next.js (App Router), Tailwind CSS, and Framer Motion. Deploy-ready for Vercel.

---

## Brand Positioning & Design System

- **Official Tagline:** *AI Powered Advertising and Website Development Creative Studio*
- **Slogan:** *Ideas Meet Visuals*
- **Logo Wordmark:** Text-only wordmark crafted with pure CSS typography. `EEYA` in gold serif (`Cinzel`), `CREATIVES` in wide-spaced light sans-serif (`Montserrat`).
- **Color Palette:**
  - Obsidian: `#090A0C` (Deep background)
  - Charcoal: `#15171A` (Card & container surfaces)
  - Champagne Gold: `#D8B15A` (Key actions, fine borders, active states)
  - Light Gold: `#F1D58A` (Hover highlights & accents)
  - Ivory: `#F5F2EA` (Headings & body readability)
  - Muted Grey: `#B8B8B8` (Secondary body & descriptions)
- **Zero Geo-Anchoring:** No city or regional locations are mentioned anywhere.

---

## Project Structure

```
├── public/
│   ├── favicon.ico                         # Branded gold "E" on charcoal
│   ├── images/                             # High-res luxury placeholder slots (1200x800 & 1920x1080)
│   └── videos/                             # Video placeholder slots
├── src/
│   ├── app/
│   │   ├── layout.tsx                      # Root layout, Google fonts, metadata, Header & Footer
│   │   ├── page.tsx                        # Home page (Hero, Showreel, Featured, Services, Process, CTA)
│   │   ├── services/                       # 6 detailed creative service cards with quote links
│   │   ├── our-work/                       # 6 curated projects with category filtering
│   │   │   └── [slug]/                     # Project detail page with 3-part INPUT/PROCESS/OUTPUT breakdown
│   │   ├── our-vision/                     # Split editorial layout and studio philosophy
│   │   ├── offers/                         # Curated packages with one-tap WhatsApp claim buttons
│   │   ├── contact/                        # Direct phone, email, WhatsApp & validated enquiry form
│   │   ├── not-found.tsx                   # Branded 404 page
│   │   ├── robots.ts                       # Dynamic robots.txt
│   │   ├── sitemap.ts                      # Dynamic sitemap with all routes and projects
│   │   └── globals.css                     # Tailwind directives, font imports, luxury utilities
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                  # Blur on scroll, desktop nav, accessible mobile full-screen menu
│   │   │   └── Footer.tsx                  # 4-column layout, quick links, tap-to-call, copyright
│   │   ├── sections/                       # Reusable home page sections
│   │   └── ui/                             # Logo, SVG Icons, VideoPlayer, AnimateInView, WhatsAppFloat
│   └── data/
│       └── content.ts                      # SINGLE SOURCE OF TRUTH for all editable copy and links
```

---

## Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+ installed.

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
```
Generates an optimized static production build for instant page loads.

### 4. Code Quality & Linting
```bash
npm run lint
```
Runs ESLint across all TypeScript files.

---

## Customizing Content & Contact Details

**Everything editable is centralized in a single file:**
📁 `src/data/content.ts`

- **Change WhatsApp Number or Pre-filled Messages:**
  Update `contact.whatsapp.number` and `contact.whatsapp.url`.
- **Change Email Address:**
  Update `contact.email.address` and `contact.email.url`.
- **Change Phone Display & Tap-to-Call Link:**
  Update `contact.phone.display` and `contact.phone.number`.
- **Update Slogan or Tagline:**
  Update `brand.slogan` or `brand.tagline`.
- **Add or Modify Projects:**
  Edit the `projects` array in `content.ts`. Detail pages and static routes are auto-generated.
- **Add or Update Special Offers:**
  Edit the `offers` array in `content.ts`.

---

## Replacing Placeholder Images & Videos

High-res luxury placeholder graphics are pre-generated in `/public/images/`. Replace each file with your client's media keeping the same filename, or update the paths in `src/data/content.ts`:

| Placeholder File | Usage | Recommended Dimensions |
| :--- | :--- | :--- |
| `/public/images/PLACEHOLDER-og-image.jpg` | Social share / Open Graph preview | 1200 × 630 px |
| `/public/images/PLACEHOLDER-hero-poster.jpg` | Hero video cover poster | 1920 × 1080 px |
| `/public/images/PLACEHOLDER-hero-fallback.jpg` | Hero fallback if video cannot autoplay | 1920 × 1080 px |
| `/public/images/PLACEHOLDER-showreel-poster.jpg` | Showreel strip preview poster | 1920 × 1080 px |
| `/public/images/PLACEHOLDER-service-*.jpg` | Service card headers (6 files) | 1200 × 800 px |
| `/public/images/PLACEHOLDER-project-*.jpg` | Project card thumbnails & covers (6 files) | 1200 × 800 px |
| `/public/videos/PLACEHOLDER-*.mp4` | Video files or Cloudinary/Vimeo/YouTube URLs | 1080p MP4 (H.264) |

*Tip: You can also use direct streaming URLs from YouTube (unlisted), Vimeo, or Cloudinary by pasting the URL into `videoUrl` inside `src/data/content.ts`.*

---

## Deploying to Vercel (Step-by-Step)

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New...** -> **Project**.
4. Import your repository.
5. Vercel automatically detects Next.js:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** Next.js default (`.next`)
6. Click **Deploy**.
7. Your high-performance website is live with automatic global CDN and SSL.

