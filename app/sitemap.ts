import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webeesocial.com';

  const dataPath = path.join(process.cwd(), 'data.json');
  let data: any = { blogs: [], pages: [] };
  
  try {
    if (fs.existsSync(dataPath)) {
      const fileContent = fs.readFileSync(dataPath, 'utf-8');
      data = JSON.parse(fileContent);
    }
  } catch (error) {
    console.error("Error reading data.json for sitemap:", error);
  }

  const staticPages = [
    '',
    '/portfolio',
    '/services/social-media',
    '/services/content-lead-gen',
    '/services/reel-editing',
    '/pricing',
    '/faq',
    '/privacy',
    '/terms',
    '/blog'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogEntries = (data.blogs || []).map((blog: any) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const pageEntries = (data.pages || []).map((page: any) => ({
    url: `${baseUrl}/p/${page.slug}`,
    lastModified: new Date(page.updatedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...sitemapEntries, ...blogEntries, ...pageEntries];
}
