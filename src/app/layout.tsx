import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
    title: `${siteConfig.businessName} | ${siteConfig.baseLocation}`,
    description: `${siteConfig.tagline} Professional plastering and decorating services in ${siteConfig.baseLocation} and surrounding areas including Brighton.`,
    keywords: ['plastering', 'decorating', 'rendering', 'skimming', 'Tunbridge Wells', 'Kent', 'Brighton'],
    authors: [{ name: siteConfig.businessName }],
    icons: {
        icon: '/brand/MSB Logo-favicon.png',
        apple: '/brand/MSB Logo-favicon.png',
    },
    openGraph: {
        title: `${siteConfig.businessName} | ${siteConfig.baseLocation}`,
        description: `${siteConfig.tagline} Professional plastering and decorating services.`,
        type: 'website',
        locale: 'en_GB',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white font-sans antialiased">
                <Header />
                <main className="pt-16">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
