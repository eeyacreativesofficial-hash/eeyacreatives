// ============================================================
// EEYA CREATIVES — Editable Content (/data/content.js)
// Mirrors src/data/content.ts for universal import support.
// ============================================================

// ============================================================
// EEYA CREATIVES — Editable Content
// Change text, links, videos, and contact info here.
// No need to touch any component files.
// ============================================================

// ── WhatsApp Configuration & Messages ─────────────────────────
const WHATSAPP_PHONE_NUMBER = '918825569400';

export const whatsappMessages = {
  default:
    "Hello EEYA CREATIVES, I'd love to collaborate and build a premium brand together.",
  service: (service) =>
    `Hello EEYA CREATIVES, I'd like to elevate my brand with ${service}. Can we discuss it?`,
  offer: (offer) =>
    `Hello EEYA CREATIVES, I'm interested in the launch offer: ${offer}. Please share the details.`,
  project: (project) =>
    `Hello EEYA CREATIVES, I loved ${project} and I'd like a premium film like this for my brand.`,
  contactForm: ({ name, brand, service, details }) => {
    const brandPart = brand?.trim() ? ` from ${brand.trim()}` : '';
    let msg = `Hello EEYA CREATIVES, I'm ${name.trim()}${brandPart}.`;
    if (service?.trim()) {
      msg += ` I'm interested in ${service.trim()}.`;
    }
    if (details?.trim()) {
      msg += ` Details: ${details.trim()}`;
    }
    return msg;
  },
};

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
export const buildWhatsAppUrl = buildWhatsAppLink;

// ── Contact ──────────────────────────────────────────────────
export const contact = {
  whatsapp: {
    number: WHATSAPP_PHONE_NUMBER,
    displayNumber: '+91 88255 69400',
    defaultMessage: whatsappMessages.default,
    url: buildWhatsAppLink(whatsappMessages.default),
  },
  email: {
    address: 'eeyacreatives.official@gmail.com',
    subject: 'Enquiry for EEYA CREATIVES',
    url: 'mailto:eeyacreatives.official@gmail.com?subject=Enquiry%20for%20EEYA%20CREATIVES',
  },
  phone: {
    number: '+918825569400',
    display: '+91 88255 69400',
    url: 'tel:+918825569400',
  },
};

// ── Official Studio Motto ──────────────────────────────────────
export const motto = 'AI Powered Advertising and Website Development Creative Studio';

// ── Background System Settings ───────────────────────────────
export const spaceImages = {
  hero: {
    src: '/images/hero/hero-section-latest.webp',
    srcJpg: '/images/hero/hero-section-latest.jpg',
    width: 1920,
    height: 878,
    objectPosition: {
      desktop: 'center right',
      mobile: '70% 50%',
    },
  },
  services: {
    src: '/images/space/earthrise.webp',
    width: 2000,
    height: 3000,
    objectPosition: {
      desktop: '50% 52%',
      mobile: '50% 56%',
    },
  },
  work: {
    src: '/images/space/moon-earth.webp',
    width: 2000,
    height: 3000,
    objectPosition: {
      desktop: '50% 20%',
      mobile: '50% 24%',
    },
  },
  vision: {
    src: '/images/space/galaxy.webp',
    width: 2000,
    height: 3000,
    objectPosition: {
      desktop: '66% 24%',
      mobile: '62% 28%',
    },
  },
  offers: {
    src: '/images/space/comet.webp',
    width: 2000,
    height: 3000,
    objectPosition: {
      desktop: '46% 40%',
      mobile: '48% 42%',
    },
  },
  contact: {
    src: '/images/space/city-lights.webp',
    width: 2000,
    height: 3000,
    objectPosition: {
      desktop: '50% 55%',
      mobile: '50% 55%',
    },
  },
  quoteDream: {
    src: '/images/space/quote-dream.webp',
    width: 2000,
    height: 1500,
    objectPosition: {
      desktop: '50% 50%',
      mobile: '50% 50%',
    },
  },
  moonOrb: {
    src: '/images/space/moon-orb.webp',
    width: 1000,
    height: 1000,
    objectPosition: {
      desktop: 'center',
      mobile: 'center',
    },
  },
  cometAccent: {
    src: '/images/space/comet.webp',
    width: 2000,
    height: 3000,
    objectPosition: {
      desktop: 'center',
      mobile: 'center',
    },
  },
};

export const backgroundSettings = {
  backgroundTheme: 'midnight', // "warm" | "midnight" | "espresso"
  backgroundIntensity: 'balanced', // "subtle" | "balanced" | "rich"
  heroMode: 'space', // "space" | "video" | "image"
  pageBannerStyle: 'space', // "space" | "color" | "image"
};
export const backgroundTheme = backgroundSettings.backgroundTheme;
export const backgroundIntensity = backgroundSettings.backgroundIntensity;
export const heroMode = backgroundSettings.heroMode;
export const pageBannerStyle = backgroundSettings.pageBannerStyle;

// ── Brand ────────────────────────────────────────────────────
export const brand = {
  name: 'EEYA CREATIVES',
  motto,
  tagline: motto,
  headerTagline: true,
  headerSubtext: 'AI POWERED CREATIVE STUDIO',
  slogan: 'Ideas Meet Visuals',
  seo: {
    title: 'EEYA CREATIVES | AI Powered Creative Studio',
    description: `EEYA CREATIVES is an ${motto} specializing in cinematic video advertisements, brand films, and professional website development for businesses of every size.`,
    ogImage: '/images/hero/hero-section-latest.jpg',
  },
};

// ── Socials ──────────────────────────────────────────────────
export const socialPlaceholderStyle = 'inert'; // "inert" | "hidden"

export const socials = [
  {
    id: 'youtube',
    label: 'YouTube',
    icon: 'youtube',
    url: 'https://www.youtube.com/@EeyaCreatives',
    enabled: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: 'instagram',
    url: '',
    enabled: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'linkedin',
    url: '',
    enabled: false,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: 'facebook',
    url: '',
    enabled: false,
  },
];

export const socialLinks = socials;

// ── Navigation ───────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Services', href: '/services' },
  { label: 'Our Vision', href: '/our-vision' },
  { label: 'Offers', href: '/offers' },
  { label: 'Contact', href: '/contact' },
];

// ── Hero ─────────────────────────────────────────────────────
export const hero = {
  eyebrow: motto,
  headlinePart1: 'Make Your Brand',
  headlinePart2: 'Impossible to Ignore.',
  headline: 'Make Your Brand Impossible to Ignore.',
  description:
    'We create cinematic AI-powered advertisements, brand films, and high-performing websites tailored to your business, audience, and goals.',
  backgroundDesktop: '/images/hero-desktop.webp',
  backgroundMobile: '/images/hero-mobile.webp',
  videos: [
    {
      src: '/videos/hero-1.mp4',
      poster: '/images/hero-1-poster.webp',
      alt: 'EEYA CREATIVES Cinematic Video Showcase 1',
    },
    {
      src: '/videos/hero-2.mp4',
      poster: '/images/hero-2-poster.webp',
      alt: 'EEYA CREATIVES Cinematic Video Showcase 2',
    },
    {
      src: '/videos/hero-3.mp4',
      poster: '/images/hero-3-poster.webp',
      alt: 'EEYA CREATIVES Cinematic Video Showcase 3',
    },
    {
      src: '/videos/hero-4.mp4',
      poster: '/images/hero-4-poster.webp',
      alt: 'EEYA CREATIVES Cinematic Video Showcase 4',
    },
  ],
  highlights: [
    { title: 'Cinematic Video Ads', icon: 'film' },
    { title: 'Brand Films & Social', icon: 'sparkles' },
    { title: 'Website Development', icon: 'globe' },
    { title: 'Creative AI Production', icon: 'cpu' },
  ],
};

// ── Showreel ─────────────────────────────────────────────────
export const showreel = {
  title: 'Our Showreel',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  poster: '/images/showreel-poster.webp',
};

// ── Services ─────────────────────────────────────────────────

export const servicesHeader = {
  eyebrow: 'OUR SERVICES',
  heading: 'Creative Craft for Brands That Aim Higher',
  subtext:
    'From growing local businesses to established national brands, we create cinematic advertising and refined digital experiences, tailored to your vision, your audience, and your goals.',
};

export const servicesPreviewData = {
  eyebrow: 'WHAT WE DO',
  heading: 'Everything Your Brand Needs to Stand Out',
  subtext: 'Cinematic advertising and refined websites, made for brands of every size.',
  buttonText: 'View All Services',
  homeServicesStyle: 'image-top',
};

export const homeServicesStyle = 'image-top';

export const services = [
  {
    number: '01',
    slug: 'video-advertising',
    title: 'Cinematic AI Video Advertising',
    shortTitle: 'Cinematic AI Video Advertising',
    previewLine: 'Film-grade ads that command attention.',
    description:
      'Premium, film-grade advertisements that command attention and give every product or brand a story worth watching.',
    points: ['Concept & Script', 'AI Visuals', 'Editing & Sound'],
    icon: 'film',
    image: '/images/services/video-advertising.webp',
  },
  {
    number: '02',
    slug: 'brand-films',
    title: 'Brand Films & Campaigns',
    shortTitle: 'Brand Films & Campaigns',
    previewLine: 'Stories that make your brand memorable.',
    description:
      'Story-led films and campaigns that express who you are and why people should remember you.',
    points: ['Brand Story', 'Creative Direction', 'Campaign Visuals'],
    icon: 'clapperboard',
    image: '/images/services/brand-films.webp',
  },
  {
    number: '03',
    slug: 'product-lifestyle',
    title: 'Product & Lifestyle Advertising',
    shortTitle: 'Product & Lifestyle Advertising',
    previewLine: 'Your products, shown at their finest.',
    description:
      'Polished visuals that present your products at their finest, across fashion, food, retail, wellness, and beyond.',
    points: ['Product Showcases', 'Lifestyle Scenes', 'Launch Ads'],
    icon: 'camera',
    image: '/images/services/product-lifestyle.webp',
  },
  {
    number: '04',
    slug: 'social-media',
    title: 'Social Media Creatives',
    shortTitle: 'Social Media Creatives',
    previewLine: 'Reels and posts that stay on brand.',
    description:
      'Scroll-stopping reels, stories, and posts that keep your brand consistent and instantly recognisable on every platform.',
    points: ['Reels & Stories', 'Post Designs', 'Campaign Sets'],
    icon: 'share',
    image: '/images/services/social-media.webp',
  },
  {
    number: '05',
    slug: 'website-development',
    title: 'Website Design & Development',
    shortTitle: 'Website Design & Development',
    previewLine: 'Fast, elegant, mobile-first websites.',
    description:
      'Elegant, fast, mobile-first websites that present your brand with confidence and make it effortless for customers to reach you.',
    points: ['Custom Design', 'Mobile-First', 'Contact & WhatsApp Integration'],
    icon: 'globe',
    image: '/images/services/website-development.webp',
  },
  {
    number: '06',
    slug: 'festive-campaigns',
    title: 'Festive & Seasonal Campaigns',
    shortTitle: 'Festive & Seasonal Campaigns',
    previewLine: 'Timely campaigns for every celebration.',
    description:
      'Timely, beautifully crafted campaigns for festivals and seasonal launches, ready the moment your customers start shopping.',
    points: ['Festival Ads', 'Offer Creatives', 'Launch Campaigns'],
    icon: 'calendar',
    image: '/images/services/festive-campaigns.webp',
  },
];

export const servicesClosing = {
  heading: "Let's Build Something Remarkable.",
  text: 'Tell us about your brand and your goals, and we will shape a cinematic creative plan around your vision, your audience, and your budget.',
  whatsappButton: 'Chat on WhatsApp',
  emailButton: 'Email Us',
  emailAddress: 'eeyacreatives.official@gmail.com',
  whatsappMessage: whatsappMessages.default,
};

// ── Projects (Our Work) ──────────────────────────────────────

export const projectDetailFramework = {
  eyebrow: 'FROM IDEA TO SCREEN',
  heading: 'How This Film Came to Life',
  subtext: 'What we need from you, what we do, and what you get.',
  qualityTip: 'Tip: for the sharpest picture, open the ⚙ settings in the player and choose 1080p.',
  stepLabels: {
    input: 'WHAT WE NEED FROM YOU',
    process: 'WHAT WE DO',
    output: 'WHAT YOU GET',
  },
  ctaHeading: "Let's Build a Premium Brand.",
  ctaText:
    'Share your vision, and we will craft a cinematic story around your brand, your audience, and your budget.',
  ctaConceptNote: 'Concept project created by EEYA CREATIVES.',
  ctaTributeNote:
    'A tribute film created by EEYA CREATIVES, in admiration. No endorsement is implied.',
  moreToWatchEyebrow: 'KEEP EXPLORING',
  moreToWatchHeading: 'More to Watch',
};

export const projects = [
  {
    slug: 'kalam-tribute',
    order: 1,
    title: 'A Tribute to Dr. A.P.J. Abdul Kalam',
    category: 'TRIBUTE FILM',
    categorySlug: 'tribute',
    badge: 'TRIBUTE',
    description: 'A cinematic tribute to a great visionary.',
    thumbnail: '/images/projects/kalam-tribute-v2.webp',
    videoUrl: '/videos/kalam-tribute.mp4',
    youtubeId: 'S87NOX4gO3c',
    orientation: 'portrait',
    videoPoster: '/images/projects/kalam-tribute-v2.webp',
    portraitPoster: '/images/projects/kalam-tribute-portrait.webp',
    isConcept: true,
    conceptNote:
      'A tribute film created by EEYA CREATIVES, in admiration. No endorsement is implied.',
    featured: true,
    input: [
      'The message and purpose of the tribute',
      'Verified, public facts and themes to honour',
      'Photos or references you have permission to use',
      'Where the film will be shared, and your delivery date',
    ],
    process: [
      'Gentle storytelling shaped around your message',
      'Careful visuals that treat the subject with respect',
      'Thoughtful pacing and a quiet musical score',
      'Your review before the final film',
    ],
    output: [
      'A heartfelt, dignified tribute film',
      'Created as a tribute, not as a promotion',
      'Suitable for sharing with respect and care',
      'Delivered in the formats you need',
    ],
  },
  {
    slug: 'timeless-gold',
    order: 2,
    title: 'Timeless Gold',
    category: 'Jewellery Video Ad (Concept)',
    categorySlug: 'jewellery',
    badge: 'CONCEPT',
    description:
      'A cinematic jewellery advertisement celebrating the timeless elegance of gold. Rich, warm lighting, macro textures, and graceful motion bring each piece to life with traditional majesty.',
    thumbnail: '/images/projects/timeless-gold.webp',
    videoUrl: '/videos/timeless-gold.mp4',
    youtubeId: '5SYbmxhMJKc',
    orientation: 'landscape',
    videoPoster: '/images/projects/timeless-gold.webp',
    isConcept: true,
    featured: true,
    input: [
      'Your brand name, logo, and key details',
      'Product photos or references, if you have them',
      'Your message and the offer you want to highlight',
      'Your audience, budget, and delivery date',
    ],
    process: [
      'A concept and script built around your brand',
      'Cinematic AI visuals with rich, warm detail',
      'Editing, colour grading, and sound design',
      'Your review and refinements',
    ],
    output: [
      'A premium cinematic film made for your brand',
      'Ready for Instagram, YouTube, WhatsApp, and web',
      'Delivered in the formats you need',
      'Revisions included to match your requirements',
    ],
  },
  {
    slug: 'modern-elegance',
    order: 3,
    title: 'Modern Elegance',
    category: 'Jewellery Video Ad (Concept)',
    categorySlug: 'jewellery',
    badge: 'CONCEPT',
    description:
      'A contemporary take on modern jewellery advertising featuring minimalist geometry, architectural lighting, and sleek modern styling designed for a youthful, fashion-forward audience.',
    thumbnail: '/images/projects/modern-elegance.webp',
    videoUrl: '/videos/modern-elegance.mp4',
    youtubeId: 'uLe5t1y499I',
    orientation: 'landscape',
    videoPoster: '/images/projects/modern-elegance.webp',
    isConcept: true,
    featured: true,
    input: [
      'Your brand name, logo, and key details',
      'Product photos or references, if you have them',
      'Your message and the offer you want to highlight',
      'Your audience, budget, and delivery date',
    ],
    process: [
      'A concept and script built around your brand',
      'Sleek, modern AI visuals with crisp lighting',
      'Editing, colour grading, and sound design',
      'Your review and refinements',
    ],
    output: [
      'A premium cinematic film made for your brand',
      'Ready for Instagram, YouTube, WhatsApp, and web',
      'Delivered in the formats you need',
      'Revisions included to match your requirements',
    ],
  },
  {
    slug: 'jewellery-creations',
    order: 4,
    title: 'Jewellery Creations',
    category: 'Jewellery Brand Video (Concept)',
    categorySlug: 'jewellery',
    badge: 'CONCEPT',
    description:
      'An artistic brand film exploring craftsmanship, diamond brilliance, and the emotional resonance behind bespoke gemstone jewellery pieces.',
    thumbnail: '/images/projects/jewellery-creations.webp',
    videoUrl: '/videos/jewellery-creations.mp4',
    youtubeId: 'RjWN9vM1-rw',
    orientation: 'portrait',
    videoPoster: '/images/projects/jewellery-creations.webp',
    portraitPoster: '/images/projects/jewellery-creations-portrait.webp',
    isConcept: true,
    featured: true,
    input: [
      'Your brand name, logo, and key details',
      'Product photos or references, if you have them',
      'Your message and the offer you want to highlight',
      'Your audience, budget, and delivery date',
    ],
    process: [
      'A concept and script built around your brand',
      'Cinematic scenes that highlight every piece',
      'Editing, colour grading, and sound design',
      'Your review and refinements',
    ],
    output: [
      'A premium cinematic film made for your brand',
      'Ready for Instagram, YouTube, WhatsApp, and web',
      'Delivered in the formats you need',
      'Revisions included to match your requirements',
    ],
  },
];

// ── Preview Projects (View-Only Design Previews, Items 5 to 10) ──────────────
export const previewProjects = [
  {
    slug: 'clothing-ad',
    order: 5,
    title: 'Ready-Made Clothing Ad',
    category: 'Fashion Video Ad',
    categorySlug: 'video-ads',
    description:
      'An energetic and vibrant design preview for ready-made apparel, emphasizing fabric motion, contemporary fits, and seasonal collections.',
    thumbnail: '/images/projects/clothing-ad.webp',
    alt: 'Ready-Made Clothing Ad Design Preview',
  },
  {
    slug: 'sweet-shop-ad',
    order: 6,
    title: 'Sweet Shop Ad',
    category: 'Food & Retail Video Ad',
    categorySlug: 'video-ads',
    description:
      'A warm, sensory design concept for traditional sweets and confectionery, highlighting rich culinary textures and celebration packaging.',
    thumbnail: '/images/projects/sweet-shop-ad.webp',
    alt: 'Sweet Shop Ad Design Preview',
  },
  {
    slug: 'cafe-bakery-ad',
    order: 7,
    title: 'Cafe & Bakery Ad',
    category: 'Food & Hospitality Video Ad',
    categorySlug: 'video-ads',
    description:
      'An artisanal design preview capturing morning brews, golden pastries, and the welcoming warmth of local cafe culture.',
    thumbnail: '/images/projects/cafe-bakery-ad.webp',
    alt: 'Cafe & Bakery Ad Design Preview',
  },
  {
    slug: 'salon-spa-ad',
    order: 8,
    title: 'Salon & Spa Ad',
    category: 'Beauty & Wellness Video Ad',
    categorySlug: 'video-ads',
    description:
      'A serene and sophisticated design preview evoking tranquility, premium wellness treatments, and personal care aesthetics.',
    thumbnail: '/images/projects/salon-spa-ad.webp',
    alt: 'Salon & Spa Ad Design Preview',
  },
  {
    slug: 'business-website',
    order: 9,
    title: 'Business Website',
    category: 'Website',
    categorySlug: 'websites',
    description:
      'A refined corporate web interface design preview crafted for modern service businesses seeking trust, high performance, and clear conversion pathways.',
    thumbnail: '/images/projects/business-website.webp',
    alt: 'Business Website Design Preview',
  },
  {
    slug: 'online-store-website',
    order: 10,
    title: 'Online Store Website',
    category: 'Website',
    categorySlug: 'websites',
    description:
      'A responsive digital boutique website design preview with intuitive product grids, seamless navigation, and refined modern aesthetics.',
    thumbnail: '/images/projects/online-store-website.webp',
    alt: 'Online Store Website Design Preview',
  },
];

// ── Project categories for filter ────────────────────────────
export const ourWorkTabs = [
  { label: 'All', slug: 'all' },
  { label: 'Video Ads', slug: 'video-ads' },
  { label: 'Websites', slug: 'websites' },
];

// ── How We Work ──────────────────────────────────────────────
export const howWeWork = [
  {
    step: 1,
    title: 'Discover',
    description: 'We learn about your brand, audience, and goals to build a clear creative brief.',
  },
  {
    step: 2,
    title: 'Plan',
    description: 'We map out the concept, storyboard, and production timeline tailored to your project.',
  },
  {
    step: 3,
    title: 'Create',
    description: 'Our team crafts cinematic visuals, AI-generated content, and polished designs.',
  },
  {
    step: 4,
    title: 'Refine',
    description: 'We review every detail with you and fine-tune until it is exactly right.',
  },
  {
    step: 5,
    title: 'Deliver',
    description: 'Your finished work is delivered in every format you need, ready to publish and promote.',
  },
];

// ── Offers ───────────────────────────────────────────────────

export const offersHeader = {
  eyebrow: 'LAUNCH OFFERS',
  headingPart1: 'Launch Offers for Brands Ready to ',
  headingPart2: 'Stand Out',
  heading: 'Launch Offers for Brands Ready to Stand Out',
  subtext:
    "Start your brand's cinematic journey with special launch packages for AI video advertising, premium websites, and festive campaigns.",
};

export const offersSelector = {
  caption: 'WHAT DO YOU NEED?',
  chips: [
    { label: 'Video Ad', slug: 'video-ad' },
    { label: 'Website', slug: 'website' },
    { label: 'Festive Campaign', slug: 'festive-campaign' },
    { label: 'Website + Video', slug: 'website-video-combo' },
  ],
};

export const offersPreviewData = {
  eyebrow: 'LAUNCH OFFERS',
  heading: 'Launch Packages for Growing Brands',
  subtext:
    "Start your brand's cinematic journey with special launch packages for AI video advertising, premium websites, and festive campaigns.",
  buttonText: 'See All Offers',
};

export const offers = [
  {
    id: 'video-ad',
    slug: 'video-ad',
    badge: '50% OFF',
    icon: 'film',
    tagline: 'Your cinematic debut, at half the price.',
    title: 'Flat 50% Off Your First AI Video Ad',
    description:
      'Launch with a cinematic AI video advertisement made entirely around your brand.',
    points: [
      'Concept and script shaped around your brand',
      'Cinematic AI visuals, editing, and sound',
      'Ready for Instagram, YouTube, WhatsApp, and web',
    ],
    featured: false,
    whatsappMessage:
      "Hello EEYA CREATIVES, I'm interested in the launch offer: Flat 50% Off Your First AI Video Ad. Please share the details.",
  },
  {
    id: 'website',
    slug: 'website',
    badge: 'LAUNCH PRICE',
    icon: 'browser',
    tagline: 'A premium website for your big moment.',
    title: 'Special Launch Price on Your Website',
    description:
      'A refined, mobile-first website that presents your brand with confidence.',
    points: [
      'Custom design that matches your brand',
      'Fast, mobile-first, and easy to use',
      'WhatsApp and email contact built in',
    ],
    featured: false,
    whatsappMessage:
      "Hello EEYA CREATIVES, I'm interested in the launch offer: Special Launch Price on Your Website. Please share the details.",
  },
  {
    id: 'festive-campaign',
    slug: 'festive-campaign',
    badge: 'FESTIVE',
    icon: 'sparkles',
    tagline: 'Shine this celebration season.',
    title: 'Festive Campaign Pack',
    description:
      'A timely, beautifully crafted campaign, ready before your customers start shopping.',
    points: [
      'Festival ads and offer creatives',
      'Reels, posts, and a short cinematic video',
      'Delivered in time for your launch',
    ],
    featured: false,
    whatsappMessage:
      "Hello EEYA CREATIVES, I'm interested in the launch offer: Festive Campaign Pack. Please share the details.",
  },
  {
    id: 'website-video-combo',
    slug: 'website-video-combo',
    badge: 'BEST VALUE',
    icon: 'package',
    tagline: 'The complete premium presence.',
    title: 'Website + Cinematic AI Video Ad Combo',
    description:
      'A premium website and a cinematic film, designed together at our best bundled price.',
    points: [
      'One creative direction across site and film',
      'A single bundled price and one conversation',
      'A consistent look from first view to final click',
    ],
    featured: true,
    whatsappMessage:
      "Hello EEYA CREATIVES, I'm interested in the launch offer: Website + Cinematic AI Video Ad Combo. Please share the details.",
  },
];

export const offersNote =
  'Final package details and pricing are confirmed with you on WhatsApp.';

export const offersReassurance = [
  { icon: 'sparkles', text: 'Made around your brand' },
  { icon: 'film', text: 'A premium cinematic look' },
  { icon: 'whatsapp', text: 'Friendly guidance on WhatsApp' },
];

export const offersSteps = {
  eyebrow: 'HOW TO CLAIM YOUR OFFER',
  heading: 'Three Simple Steps',
  items: [
    {
      num: '01',
      title: 'Message us on WhatsApp',
      description: 'Tap Claim This Offer on the package you like.',
    },
    {
      num: '02',
      title: 'Share your requirement',
      description: 'Tell us about your brand, your goals, and your timeline.',
    },
    {
      num: '03',
      title: 'Get your plan and price',
      description:
        'We confirm the exact package and pricing with you on WhatsApp.',
    },
  ],
};

export const offersClosing = {
  heading: 'Need Something Different?',
  text: 'Tell us your idea and we will shape a custom plan for your brand.',
  customPlanButton: 'Get a Custom Plan',
  customPlanMessage: "Hello EEYA CREATIVES, I'd like a custom plan for my brand.",
  emailButton: 'Email Us',
  emailAddress: 'eeyacreatives.official@gmail.com',
};

// ── Vision Page ──────────────────────────────────────────────
export const visionPreview = {
  eyebrow: 'OUR VISION',
  heading: 'Every Brand Has a Story Worth Sharing.',
  statement:
    'To present every brand as a masterpiece: bold in scale, elegant in detail, unforgettable in impact.',
  support:
    'Your brand deserves the scale, polish, and prestige of a cinematic production.',
  leadIn:
    'Your brand deserves the scale, polish, and prestige of a cinematic production.',
  subtext:
    'Your brand deserves the scale, polish, and prestige of a cinematic production.',
  buttonText: 'Read Our Vision',
};

export const vision = {
  header: {
    eyebrow: 'OUR VISION',
    heading: 'Every Brand Has a Story Worth Sharing.',
    subtext:
      'Great storytelling and refined design should not belong only to the few. At EEYA CREATIVES, brands of every size can look and feel premium.',
  },
  heading: 'Every Brand Has a Story Worth Sharing.',
  subtext:
    'Great storytelling and refined design should not belong only to the few. At EEYA CREATIVES, brands of every size can look and feel premium.',
  statements: {
    leadIn:
      'We believe every business, whether a growing local shop or an established national brand, deserves creative work that truly represents who it is.',
    vision: {
      label: 'OUR VISION',
      statement:
        'To present every brand as a masterpiece: bold in scale, elegant in detail, unforgettable in impact.',
      support:
        'Your brand deserves the scale, polish, and prestige of a cinematic production.',
    },
    mission: {
      label: 'OUR MISSION',
      statement:
        'We listen to your story, then bring it to life through premium films and websites made entirely around you.',
      support:
        'Every film and every page is crafted around your goals, your audience, and your ambition.',
    },
  },
  typographicBand: {
    items: [
      {
        word: 'Listen.',
        caption: 'We start with your goals and your story.',
      },
      {
        word: 'Understand.',
        caption: 'We shape a clear direction around your brand.',
      },
      {
        word: 'Create.',
        caption: 'We craft films and websites that bring it to life.',
      },
    ],
  },
  ideaToImpact: {
    eyebrow: 'FROM IDEA TO IMPACT',
    heading: 'Where Every Great Film Begins',
    cards: [
      {
        num: '01',
        word: 'Ideas',
        icon: 'lightbulb',
        line: 'Every great film begins with a clear, original idea.',
      },
      {
        num: '02',
        word: 'Brands',
        icon: 'gem',
        line: 'We shape each idea around the brand it serves.',
      },
      {
        num: '03',
        word: 'Stories',
        icon: 'film',
        line: 'We turn brands into stories people want to watch.',
      },
      {
        num: '04',
        word: 'Impact',
        icon: 'sparkles',
        line: 'We aim for work that is remembered, shared, and trusted.',
      },
    ],
  },
  quoteBand: {
    slogan: 'Ideas Meet Visuals',
    quote:
      'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.',
    attribution: '— Dr. A.P.J. Abdul Kalam',
    footnote: 'A quotation shared in admiration. No endorsement is implied.',
    motto: motto,
  },
  creativeWorld: {
    eyebrow: 'OUR CREATIVE WORLD',
    heading: 'A Glimpse of What We Create',
    caption: 'Concept and portfolio visuals by EEYA CREATIVES.',
    items: [
      {
        src: '/images/services/video-advertising.webp',
        alt: 'Cinematic AI Video Advertising visual',
        objectPosition: '50% 55%',
        label: 'Cinematic Ads',
        icon: 'film',
      },
      {
        src: '/images/projects/timeless-gold.webp',
        alt: 'Timeless Gold concept jewellery film visual',
        objectPosition: '50% 30%',
        label: 'Jewellery Films',
        icon: 'gem',
      },
      {
        src: '/images/services/product-lifestyle.webp',
        alt: 'Product & Lifestyle commercial visual',
        objectPosition: '50% 60%',
        label: 'Product Stories',
        icon: 'sparkles',
      },
      {
        src: '/images/services/social-media.webp',
        alt: 'Social Media brand visual creative',
        objectPosition: '50% 45%',
        label: 'Social Creatives',
        icon: 'video',
      },
      {
        src: '/images/services/website-development.webp',
        alt: 'Website Development digital experience visual',
        objectPosition: '50% 55%',
        label: 'Web Experiences',
        icon: 'layout',
      },
      {
        src: '/images/services/festive-campaigns.webp',
        alt: 'Festive & Seasonal Campaigns visual',
        objectPosition: '50% 55%',
        label: 'Festive Campaigns',
        icon: 'sparkles',
      },
    ],
  },
  promise: {
    eyebrow: 'OUR PROMISE',
    heading: 'What You Can Expect From Us',
    subtext: 'The standards we bring to every project.',
    items: [
      {
        num: '01',
        icon: 'sparkles',
        title: 'Cinematic Quality',
        description:
          'Film-grade visuals, refined typography, and sound design that command attention.',
      },
      {
        num: '02',
        icon: 'gem',
        title: 'Designed Around You',
        description:
          'Every script, visual, and layout is tailored to your business, your audience, and your goals.',
      },
      {
        num: '03',
        icon: 'globe',
        title: 'A Smooth Experience',
        description:
          'Clear communication, transparent timelines, and dedicated revisions until you are proud of the result.',
      },
    ],
  },
  closing: {
    heading: "Let's Build a Premium Brand.",
    text: 'Share your vision with us, and we will shape it into a story your audience will remember.',
    whatsappButton: 'Chat on WhatsApp',
    emailButton: 'Email Us',
    emailAddress: 'eeyacreatives.official@gmail.com',
  },
};

// ── Footer ───────────────────────────────────────────────────
export const footer = {
  description:
    'AI-powered creative studio specialising in cinematic video advertisements, brand films, and professional website development.',
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Services', href: '/services' },
    { label: 'Our Vision', href: '/our-vision' },
    { label: 'Offers', href: '/offers' },
    { label: 'Contact', href: '/contact' },
  ],
  serviceLinks: [
    { label: 'Video Advertisements', href: '/services#video-advertising' },
    { label: 'Brand Films', href: '/services#brand-films' },
    { label: 'Product & Lifestyle', href: '/services#product-lifestyle' },
    { label: 'Social Media', href: '/services#social-media' },
    { label: 'Website Development', href: '/services#website-development' },
    { label: 'Festive Campaigns', href: '/services#festive-campaigns' },
  ],
  contactLinks: [
    { label: 'WhatsApp', href: buildWhatsAppLink(whatsappMessages.default) },
    { label: 'Email', href: 'mailto:eeyacreatives.official@gmail.com?subject=Enquiry%20for%20EEYA%20CREATIVES' },
    { label: 'Call', href: 'tel:+918825569400' },
  ],
};

// ── Enquiry Form Service Options ─────────────────────────────
export const serviceOptions = [
  'Cinematic AI Video Advertising',
  'Brand Films & Campaigns',
  'Product & Lifestyle Advertising',
  'Social Media Creatives',
  'Website Design & Development',
  'Festive & Seasonal Campaigns',
  'Other',
];

// ── Budget Options ───────────────────────────────────────────
export const budgetOptions = [
  'Not sure yet',
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  'Above ₹1,00,000',
];
