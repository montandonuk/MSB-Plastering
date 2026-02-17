import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import { buildPageMetadata } from '@/lib/seo'
import {
    Hero,
    FeatureCards,
    IntroSection,
    ServicesSection,
    ProjectsTeaser,
    ReviewsSlider,
    AreasSection,
    TrustBadges,
    CtaBanner,
} from '@/components/sections'

export const metadata: Metadata = buildPageMetadata({
    title: `${siteConfig.businessName} | Plasterers in ${siteConfig.baseLocation}`,
    description: `${siteConfig.tagline} Professional plastering and decorating services in ${siteConfig.baseLocation}, Kent, and East Sussex.`,
    path: '/',
    keywords: ['plasterer tunbridge wells', 'plastering kent', 'decorating kent', 'ceiling repairs', 'rendering'],
})

export default function Home() {
    const homePageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${siteConfig.siteUrl}/#webpage`,
        url: siteConfig.siteUrl,
        name: `${siteConfig.businessName} | Plasterers in ${siteConfig.baseLocation}`,
        description: siteConfig.tagline,
        about: {
            '@id': `${siteConfig.siteUrl}#localbusiness`,
        },
        inLanguage: 'en-GB',
    }

    const serviceListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Plastering and Decorating Services',
        itemListElement: siteConfig.services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.title,
            url: `${siteConfig.siteUrl}/services/${service.slug}`,
        })),
    }

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(homePageSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceListSchema),
                }}
            />

            <Hero />
            <FeatureCards />
            <IntroSection />
            <ServicesSection />
            <ProjectsTeaser />
            <ReviewsSlider />
            <AreasSection />
            <TrustBadges />
            <CtaBanner />
        </>
    )
}
