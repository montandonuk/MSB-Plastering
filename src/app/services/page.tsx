import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { buildPageMetadata } from '@/lib/seo'
import { servicePages } from '@/lib/services'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { CtaBanner } from '@/components/sections'

export const metadata: Metadata = buildPageMetadata({
    title: `Our Services | ${siteConfig.businessName}`,
    description: `Explore plastering, repairs, dry lining, rendering, ceiling work, and decorating services from ${siteConfig.businessName} across Tunbridge Wells, Kent, and East Sussex.`,
    path: '/services',
    keywords: ['plastering services', 'decorating services', 'rendering services', 'tunbridge wells plasterer', 'kent plastering'],
})

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-brand-charcoal text-white py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-neutral-300">
                            Explore each service page for detailed scope, FAQs, and coverage details.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Services index */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {servicePages.map((service) => (
                            <article key={service.slug} className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-soft">
                                <h2 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h2>
                                <p className="text-neutral-600 text-sm leading-relaxed mb-5">{service.intro}</p>
                                <ul className="mb-6 space-y-2">
                                    {service.typical.slice(0, 3).map((job) => (
                                        <li key={job} className="flex items-center gap-2 text-sm text-neutral-700">
                                            <svg className="h-4 w-4 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            {job}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="inline-flex items-center text-sm font-semibold text-brand-orange hover:underline"
                                >
                                    View {service.title} details
                                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button href="/contact">{siteConfig.primaryCtaLabel}</Button>
                    </div>
                </Container>
            </section>

            <CtaBanner />
        </>
    )
}
