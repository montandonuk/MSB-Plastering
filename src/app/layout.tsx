import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/site'
import { getSocialProfileLinks, normalizePhoneForSchema } from '@/lib/seo'

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.siteUrl),
    title: `${siteConfig.businessName} | Plasterers in ${siteConfig.baseLocation}`,
    description: `${siteConfig.tagline} Professional plastering and decorating services in ${siteConfig.baseLocation} and surrounding areas including Brighton.`,
    keywords: ['plastering', 'decorating', 'rendering', 'skimming', 'Tunbridge Wells', 'Kent', 'Brighton'],
    authors: [{ name: siteConfig.businessName }],
    creator: siteConfig.businessName,
    publisher: siteConfig.businessName,
    applicationName: siteConfig.businessName,
    category: 'home improvement',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    icons: {
        icon: '/brand/MSB Logo-favicon.png',
        apple: '/brand/MSB Logo-favicon.png',
    },
    openGraph: {
        title: `${siteConfig.businessName} | Plasterers in ${siteConfig.baseLocation}`,
        description: `${siteConfig.tagline} Professional plastering and decorating services in Kent and East Sussex.`,
        type: 'website',
        locale: 'en_GB',
        url: siteConfig.siteUrl,
        siteName: siteConfig.businessName,
        images: [
            {
                url: '/images/598613146_4216189742041288_8670296135861101388_n.jpg',
                width: 1024,
                height: 768,
                alt: `${siteConfig.businessName} van`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteConfig.businessName} | Plasterers in ${siteConfig.baseLocation}`,
        description: `${siteConfig.tagline} Professional plastering and decorating services in Kent and East Sussex.`,
        images: ['/images/598613146_4216189742041288_8670296135861101388_n.jpg'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const socialProfiles = getSocialProfileLinks()

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${siteConfig.siteUrl}#localbusiness`,
        name: siteConfig.businessName,
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}/images/598613146_4216189742041288_8670296135861101388_n.jpg`,
        logo: `${siteConfig.siteUrl}/brand/msb-logo.svg`,
        description: siteConfig.tagline,
        telephone: normalizePhoneForSchema(siteConfig.phone),
        email: siteConfig.email,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.fullAddress,
            addressLocality: siteConfig.addressLocality,
            addressRegion: siteConfig.addressRegion,
            addressCountry: siteConfig.addressCountry,
        },
        areaServed: siteConfig.locations.map((location) => ({
            '@type': 'Place',
            name: location.name,
        })),
        knowsAbout: siteConfig.services.map((service) => service.title),
        ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.businessName,
        inLanguage: 'en-GB',
        publisher: {
            '@id': `${siteConfig.siteUrl}#localbusiness`,
        },
    }

    return (
        <html lang="en-GB">
            <body className="min-h-screen bg-white font-sans antialiased">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                <Header />
                <main className="pt-[72px] sm:pt-[76px] md:pt-[92px] lg:pt-[108px]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
