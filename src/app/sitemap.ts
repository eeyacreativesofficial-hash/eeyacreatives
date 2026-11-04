import { MetadataRoute } from 'next';
import { projects, siteUrl } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl ? siteUrl.replace(/\/$/, '') : '';

  const staticPages = [
    '',
    '/services',
    '/our-work',
    '/our-vision',
    '/offers',
    '/contact',
  ].map((route) => ({
    url: baseUrl ? `${baseUrl}${route}` : route || '/',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: baseUrl ? `${baseUrl}/our-work/${project.slug}` : `/our-work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
