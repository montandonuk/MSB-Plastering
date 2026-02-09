import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import Container from '@/components/Container'
import Button from '@/components/Button'

export const metadata: Metadata = {
    title: `Blog | ${siteConfig.businessName}`,
    description: `Tips, guides, and updates from ${siteConfig.businessName}.`,
}

export default function BlogPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-brand-charcoal text-white py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Blog
                        </h1>
                        <p className="text-xl text-neutral-300">
                            Tips, guides, and updates from the team.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Coming soon */}
            <section className="py-24 md:py-32">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-cream mb-6">
                            <svg className="h-10 w-10 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                            Coming soon
                        </h2>
                        <p className="text-neutral-600 mb-8">
                            We&apos;re working on helpful guides and tips about plastering, decorating, and home improvement. Check back soon!
                        </p>
                        <Button href="/contact">
                            {siteConfig.primaryCtaLabel}
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    )
}
