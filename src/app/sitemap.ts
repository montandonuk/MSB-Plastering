import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'
import { servicePages } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: siteConfig.siteUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteConfig.siteUrl}/about`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteConfig.siteUrl}/services`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteConfig.siteUrl}/projects`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${siteConfig.siteUrl}/reviews`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${siteConfig.siteUrl}/areas`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteConfig.siteUrl}/contact`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ]

    const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((service) => ({
        url: `${siteConfig.siteUrl}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    const locationRoutes: MetadataRoute.Sitemap = siteConfig.locations.map((location) => ({
        url: `${siteConfig.siteUrl}/areas/${location.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.75,
    }))

    return [...staticRoutes, ...serviceRoutes, ...locationRoutes]
}
