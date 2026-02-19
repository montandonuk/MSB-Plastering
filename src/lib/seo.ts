import type { Metadata } from 'next'
import { siteConfig } from './site'

const defaultOgImage = `${siteConfig.siteUrl}/images/598613146_4216189742041288_8670296135861101388_n.jpg`

interface BuildPageMetadataOptions {
    title: string
    description: string
    path: string
    keywords?: string[]
    robots?: Metadata['robots']
}

export function buildPageMetadata({
    title,
    description,
    path,
    keywords,
    robots,
}: BuildPageMetadataOptions): Metadata {
    const absoluteUrl = new URL(path, siteConfig.siteUrl).toString()

    return {
        title,
        description,
        keywords,
        robots,
        alternates: {
            canonical: absoluteUrl,
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl,
            type: 'website',
            locale: 'en_GB',
            siteName: siteConfig.businessName,
            images: [
                {
                    url: defaultOgImage,
                    width: 1024,
                    height: 768,
                    alt: `${siteConfig.businessName} project work`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [defaultOgImage],
        },
    }
}

export function getSocialProfileLinks() {
    return Object.values(siteConfig.socialLinks).filter((link) => link.startsWith('http'))
}

export function normalizePhoneForSchema(phone: string) {
    const digits = phone.replace(/\D/g, '')

    if (digits.startsWith('0')) {
        return `+44${digits.slice(1)}`
    }
    if (digits.startsWith('44')) {
        return `+${digits}`
    }
    return `+${digits}`
}
