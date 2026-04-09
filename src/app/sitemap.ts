import { MetadataRoute } from 'next'
import { seoRoutes } from '@/lib/seoData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mumbaicabsservice.com'

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
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mumbai-to-anywhere`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/to-mumbai-cabs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...dynamicRoutes,
  ]
}
