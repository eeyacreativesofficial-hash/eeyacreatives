const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const videosDir = path.join(__dirname, '..', 'public', 'videos');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

const images = [
  { name: 'PLACEHOLDER-og-image.jpg', title: 'EEYA CREATIVES', subtitle: 'Open Graph Banner 1200x630', w: 1200, h: 630 },
  { name: 'PLACEHOLDER-hero-poster.jpg', title: 'CINEMATIC SHOWREEL', subtitle: 'Hero Video Poster 1920x1080', w: 1920, h: 1080 },
  { name: 'PLACEHOLDER-hero-fallback.jpg', title: 'EEYA CREATIVES STUDIO', subtitle: 'Hero Ambient Studio Light Fallback', w: 1920, h: 1080 },
  { name: 'PLACEHOLDER-showreel-poster.jpg', title: 'SHOWREEL 2026', subtitle: 'Official Agency Reel Poster', w: 1920, h: 1080 },
  
  // Services
  { name: 'PLACEHOLDER-service-video-ads.jpg', title: 'AI VIDEO ADVERTISEMENTS', subtitle: 'Cinematic High-Conversion Commercials', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-service-brand-films.jpg', title: 'BRAND FILMS & CAMPAIGNS', subtitle: 'Narrative Storytelling & Film Grading', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-service-product-ads.jpg', title: 'JEWELLERY & PRODUCT ADS', subtitle: 'Macro Textures & Luxury Reflections', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-service-social-media.jpg', title: 'SOCIAL MEDIA CREATIVES', subtitle: 'High-Impact Vertical Video & Motion', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-service-websites.jpg', title: 'WEBSITE DEVELOPMENT', subtitle: 'Bespoke Modern Digital Experiences', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-service-ecommerce.jpg', title: 'E-COMMERCE STOREFRONTS', subtitle: 'Conversion Architecture & Product Merchandising', w: 1200, h: 800 },

  // Projects
  { name: 'PLACEHOLDER-project-timeless-gold.jpg', title: 'TIMELESS GOLD', subtitle: 'Jewellery Ad • Warm Gold Hues', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-project-modern-elegance.jpg', title: 'MODERN ELEGANCE', subtitle: 'Jewellery Ad • Minimalist Contrast', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-project-clothing.jpg', title: 'READY-MADE CLOTHING AD', subtitle: 'Fashion Commercial • Dynamic Motion', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-project-sweet-shop.jpg', title: 'SWEET SHOP AD', subtitle: 'Confections Commercial • Warm Ambient Lighting', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-project-kalam-tribute.jpg', title: 'DR. A. P. J. ABDUL KALAM TRIBUTE', subtitle: 'Cinematic Tribute • Dignified Concept', w: 1200, h: 800 },
  { name: 'PLACEHOLDER-project-ecommerce.jpg', title: 'E-COMMERCE STORE CONCEPT', subtitle: 'Digital Platform Concept • UI Walkthrough', w: 1200, h: 800 },
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function generateImages() {
  for (const img of images) {
    const escapedTitle = escapeXml(img.title);
    const escapedSubtitle = escapeXml(img.subtitle);

    const svgText = `
    <svg width="${img.w}" height="${img.h}" viewBox="0 0 ${img.w} ${img.h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#1A1C20" />
          <stop offset="60%" stop-color="#0E1013" />
          <stop offset="100%" stop-color="#090A0C" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F1D58A" />
          <stop offset="100%" stop-color="#D8B15A" />
        </linearGradient>
      </defs>

      <!-- Dark luxury background -->
      <rect width="100%" height="100%" fill="url(#bg)" />

      <!-- Delicate gold outer frame -->
      <rect x="30" y="30" width="${img.w - 60}" height="${img.h - 60}" fill="none" stroke="#D8B15A" stroke-opacity="0.25" stroke-width="1.5" />
      <rect x="42" y="42" width="${img.w - 84}" height="${img.h - 84}" fill="none" stroke="#D8B15A" stroke-opacity="0.1" stroke-width="1" />

      <!-- Corner Accents -->
      <line x1="30" y1="50" x2="50" y2="30" stroke="#D8B15A" stroke-width="2" />
      <line x1="${img.w - 50}" y1="30" x2="${img.w - 30}" y2="50" stroke="#D8B15A" stroke-width="2" />
      <line x1="30" y1="${img.h - 50}" x2="50" y2="${img.h - 30}" stroke="#D8B15A" stroke-width="2" />
      <line x1="${img.w - 50}" y1="${img.h - 30}" x2="${img.w - 30}" y2="${img.h - 50}" stroke="#D8B15A" stroke-width="2" />

      <!-- Center Logo / Brand Header -->
      <text x="50%" y="${img.h * 0.40}" text-anchor="middle" font-family="Cinzel, serif" font-size="${Math.max(16, img.w * 0.016)}" letter-spacing="8" fill="#D8B15A" font-weight="600">
        EEYA CREATIVES
      </text>

      <!-- Title -->
      <text x="50%" y="${img.h * 0.52}" text-anchor="middle" font-family="Cinzel, serif" font-size="${Math.max(24, img.w * 0.035)}" letter-spacing="4" fill="#F5F2EA" font-weight="500">
        ${escapedTitle}
      </text>

      <!-- Subtitle / Meta -->
      <text x="50%" y="${img.h * 0.60}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="${Math.max(12, img.w * 0.015)}" letter-spacing="3" fill="#B8B8B8" fill-opacity="0.8">
        ${escapedSubtitle}
      </text>

      <!-- Placeholder Replacement Instruction -->
      <text x="50%" y="${img.h - 60}" text-anchor="middle" font-family="Montserrat, sans-serif" font-size="${Math.max(10, img.w * 0.011)}" letter-spacing="2" fill="#D8B15A" fill-opacity="0.6">
        PLACEHOLDER SLOT • REPLACE WITH CLIENT ASSET
      </text>
    </svg>
    `;

    const outputPath = path.join(imagesDir, img.name);
    await sharp(Buffer.from(svgText))
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    console.log(`Generated: ${img.name}`);
  }
}

// Generate a favicon.ico
async function generateFavicon() {
  const svgFavicon = `
  <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="8" fill="#090A0C" />
    <rect x="2" y="2" width="60" height="60" rx="6" fill="none" stroke="#D8B15A" stroke-width="2" stroke-opacity="0.5" />
    <text x="32" y="44" text-anchor="middle" font-family="Cinzel, serif" font-size="34" font-weight="700" fill="#D8B15A">
      E
    </text>
  </svg>
  `;
  const favPath = path.join(__dirname, '..', 'public', 'favicon.ico');
  await sharp(Buffer.from(svgFavicon)).toFile(favPath);
  console.log('Generated: favicon.ico');
}

// Generate placeholder video mock files so video tags don't 404
const videoFiles = [
  'PLACEHOLDER-showreel.mp4',
  'PLACEHOLDER-showreel-full.mp4',
  'PLACEHOLDER-timeless-gold.mp4',
  'PLACEHOLDER-modern-elegance.mp4',
  'PLACEHOLDER-clothing.mp4',
  'PLACEHOLDER-sweet-shop.mp4',
  'PLACEHOLDER-kalam-tribute.mp4',
  'PLACEHOLDER-ecommerce.mp4',
];

function generateVideoPlaceholders() {
  for (const v of videoFiles) {
    const vPath = path.join(videosDir, v);
    if (!fs.existsSync(vPath)) {
      // Create empty or placeholder stub file
      fs.writeFileSync(vPath, Buffer.from(''));
      console.log(`Created video stub: ${v}`);
    }
  }
}

async function run() {
  await generateImages();
  await generateFavicon();
  generateVideoPlaceholders();
  console.log('All placeholders created successfully!');
}

run().catch(console.error);
