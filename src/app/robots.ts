import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
    const host = new URL(siteConfig.siteUrl).host

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
        host,
    }
}
