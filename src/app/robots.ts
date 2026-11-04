import { MetadataRoute } from 'next';
import { siteUrl } from '@/data/content';

export default function robots(): MetadataRoute.Robots {
  const normalizedSiteUrl = siteUrl ? siteUrl.replace(/\/$/, '') : '';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dev/'],
    },
    ...(normalizedSiteUrl ? { sitemap: `${normalizedSiteUrl}/sitemap.xml` } : {}),
  };
}
