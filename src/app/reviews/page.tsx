import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import { buildPageMetadata } from '@/lib/seo'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { CtaBanner } from '@/components/sections'

export const metadata: Metadata = buildPageMetadata({
    title: `Customer Reviews | ${siteConfig.businessName}`,
    description: `Read what customers say about ${siteConfig.businessName}. Real feedback from customers across Kent and Sussex.`,
    path: '/reviews',
})

export default function ReviewsPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-brand-charcoal text-white py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Customer Reviews
                        </h1>
                        <p className="text-xl text-neutral-300">
                            Real feedback from real customers. See what people say about our work.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Reviews list */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {siteConfig.testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100">
                                {/* Stars */}
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-5 w-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                <blockquote className="text-neutral-700 mb-4">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                <footer className="border-t border-neutral-100 pt-4">
                                    <p className="font-medium text-neutral-900">{testimonial.name}</p>
                                    <p className="text-sm text-neutral-500">{testimonial.location}</p>
                                </footer>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-neutral-500 mb-6">
                            A selection of customer feedback from recent projects.
                        </p>
                        <Button href="/contact">
                            {siteConfig.primaryCtaLabel}
                        </Button>
                    </div>
                </Container>
            </section>

            <CtaBanner />
        </>
    )
}
