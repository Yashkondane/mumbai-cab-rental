import { MetadataRoute } from 'next'
import { seoRoutes } from '@/lib/seoData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mumbaicabsrental.com'

  const dynamicRoutes = seoRoutes.map((route) => ({
    url: `${baseUrl}/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/mumbai-to-anywhere`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/to-mumbai-cabs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...dynamicRoutes,
  ]
}
