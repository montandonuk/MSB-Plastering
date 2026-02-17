import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { buildPageMetadata, normalizePhoneForSchema } from '@/lib/seo'
import { getServiceBySlug, servicePages } from '@/lib/services'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { CtaBanner } from '@/components/sections'

interface Props {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return servicePages.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        return {}
    }

    return buildPageMetadata({
        title: service.seoTitle,
        description: service.seoDescription,
        keywords: service.keywords,
        path: `/services/${service.slug}`,
    })
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params
    const service = getServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
            },
        })),
    }

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.seoDescription,
        provider: {
            '@type': 'LocalBusiness',
            name: siteConfig.businessName,
            telephone: normalizePhoneForSchema(siteConfig.phone),
            areaServed: ['Tunbridge Wells', 'Kent', 'East Sussex'],
        },
        areaServed: ['Tunbridge Wells', 'Kent', 'East Sussex'],
        url: `${siteConfig.siteUrl}/services/${service.slug}`,
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section className="bg-brand-charcoal py-16 text-white md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <Link href="/services" className="mb-6 inline-flex items-center text-sm font-medium text-neutral-300 hover:text-white">
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back to all services
                        </Link>
                        <h1 className="mb-5 text-4xl font-bold md:text-5xl">{service.title}</h1>
                        <p className="text-xl text-neutral-300">{service.intro}</p>
                    </div>
                </Container>
            </section>

            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold text-neutral-900 md:text-3xl">What&apos;s included</h2>
                            <p className="mb-8 text-neutral-600">{service.fullDesc}</p>

                            <h3 className="mb-3 text-lg font-semibold text-neutral-900">Typical jobs</h3>
                            <ul className="mb-8 space-y-2">
                                {service.typical.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-neutral-700">
                                        <svg className="h-4 w-4 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mb-3 text-lg font-semibold text-neutral-900">Best for</h3>
                            <ul className="space-y-2">
                                {service.forWho.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-neutral-700">
                                        <svg className="h-4 w-4 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <aside className="rounded-2xl bg-brand-cream p-6 md:p-8">
                            <h2 className="mb-4 text-xl font-semibold text-neutral-900">Common questions</h2>
                            <div className="space-y-4">
                                {service.faq.map((item) => (
                                    <div key={item.q}>
                                        <p className="mb-1 font-medium text-neutral-900">{item.q}</p>
                                        <p className="text-sm text-neutral-600">{item.a}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-xl bg-white p-5">
                                <p className="mb-4 text-sm text-neutral-700">
                                    Need a quote for {service.title.toLowerCase()}? We&apos;ll provide clear pricing and timeline details.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <Button href="/contact" className="justify-center">
                                        {siteConfig.primaryCtaLabel}
                                    </Button>
                                    <Button
                                        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                                        variant="ghost"
                                        className="justify-center border border-neutral-200"
                                    >
                                        Call {siteConfig.phone}
                                    </Button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>

            <section className="bg-white pb-16 md:pb-24">
                <Container>
                    <h2 className="mb-6 text-2xl font-bold text-neutral-900">Other services</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {servicePages
                            .filter((item) => item.slug !== service.slug)
                            .slice(0, 3)
                            .map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/services/${item.slug}`}
                                    className="rounded-xl border border-neutral-100 p-5 hover:border-brand-orange/40 hover:shadow-soft transition-all"
                                >
                                    <p className="mb-2 font-semibold text-neutral-900">{item.title}</p>
                                    <p className="text-sm text-neutral-600">{item.shortDesc}</p>
                                </Link>
                            ))}
                    </div>
                </Container>
            </section>

            <CtaBanner />
        </>
    )
}
