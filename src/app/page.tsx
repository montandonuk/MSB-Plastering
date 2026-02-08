import { siteConfig } from '@/lib/site'
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

export default function Home() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        name: siteConfig.businessName,
                        description: siteConfig.tagline,
                        telephone: siteConfig.phone,
                        email: siteConfig.email,
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Tunbridge Wells',
                            addressRegion: 'Kent',
                            addressCountry: 'GB',
                        },
                        areaServed: siteConfig.locations.map((area) => ({
                            '@type': 'Place',
                            name: area.name,
                        })),
                        serviceType: siteConfig.services.map((s) => s.title),
                        url: 'https://msbplastering.co.uk',
                    }),
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
