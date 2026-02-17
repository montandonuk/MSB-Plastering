import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import { buildPageMetadata } from '@/lib/seo'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { CtaBanner } from '@/components/sections'

interface Props {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return siteConfig.locations.map((location) => ({
        slug: location.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const location = siteConfig.locations.find((l) => l.slug === slug)

    if (!location) {
        return {}
    }

    return buildPageMetadata({
        title: location.title,
        description: location.metaDescription,
        path: `/areas/${location.slug}`,
        keywords: [
            `plasterer ${location.name.toLowerCase()}`,
            `${location.name.toLowerCase()} plastering`,
            'plastering kent',
            'decorating services',
        ],
    })
}

export default async function LocationPage({ params }: Props) {
    const { slug } = await params
    const location = siteConfig.locations.find((l) => l.slug === slug)

    if (!location) {
        notFound()
    }

    return (
        <>
            {/* Hero */}
            <section className="bg-brand-charcoal text-white py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-orange text-sm font-medium mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-orange" />
                            Serving {location.name}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Expert Plastering in {location.name}
                        </h1>
                        <p className="text-xl text-neutral-300 mb-8">
                            {location.metaDescription}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button href="/contact">
                                Get a quote in {location.name}
                            </Button>
                            <Button href="tel:07887998086" variant="outline">
                                Call {siteConfig.phone}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Intro Content */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                Quality plastering for {location.name} homes
                            </h2>
                            <div className="space-y-4 text-neutral-600">
                                <p className="text-lg font-medium text-neutral-900">
                                    {location.intro}
                                </p>
                                <p>
                                    MSB Plastering is a trusted local business serving {location.name} and the surrounding areas. We pride ourselves on reliability, cleanliness, and the quality of our finish.
                                </p>
                                <p>
                                    Whether you need walls reskimmed, ceilings repaired, or external rendering, we have the experience to get the job done right.
                                </p>
                            </div>
                            <div className="mt-8">
                                <ul className="space-y-3">
                                    {[
                                        'Fully insured & qualified',
                                        'Clean and tidy work',
                                        'Clear, written quotes',
                                        `Local to ${location.name}`,
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-neutral-700">
                                            <svg className="h-5 w-5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 shadow-soft">
                            <Image
                                src="/images/474779548_3901396000187332_802694187972134587_n.jpg"
                                alt={`Plastering work in ${location.name}`}
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* Services */}
            <section className="bg-brand-cream py-16 md:py-24">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                            Our services in {location.name}
                        </h2>
                        <p className="text-neutral-600">
                            Comprehensive plastering and decorating services for your property.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {siteConfig.services.map((service) => (
                            <div key={service.slug} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-neutral-600 mb-4">
                                    {service.shortDesc}
                                </p>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="text-sm font-medium text-brand-orange hover:underline"
                                >
                                    Learn more &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Coverage Area Helper */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                            Nearby areas we cover
                        </h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {siteConfig.locations
                                .filter((l) => l.slug !== location.slug)
                                .slice(0, 6)
                                .map((area) => (
                                    <Link
                                        key={area.name}
                                        href={`/areas/${area.slug}`}
                                        className="inline-flex items-center px-4 py-2 rounded-full bg-brand-cream text-neutral-700 hover:bg-brand-orange hover:text-white transition-colors"
                                    >
                                        {area.name}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </Container>
            </section>

            <CtaBanner />
        </>
    )
}
