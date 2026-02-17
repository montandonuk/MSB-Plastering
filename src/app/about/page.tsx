import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { CtaBanner } from '@/components/sections'

export const metadata: Metadata = {
    title: `About Us | ${siteConfig.businessName}`,
    description: `Learn about ${siteConfig.businessName}. Professional plastering and decorating in ${siteConfig.baseLocation} and surrounding areas.`,
}

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-brand-charcoal text-white py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About {siteConfig.businessName.split(' ').slice(0, 2).join(' ')}
                        </h1>
                        <p className="text-xl text-neutral-300">
                            {siteConfig.tagline}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Main content */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                Straightforward plastering and decorating
                            </h2>
                            <div className="space-y-4 text-neutral-600">
                                <p>
                                    We&apos;re a plastering and decorating service based in {siteConfig.baseLocation}, covering Kent and parts of East Sussex. We handle everything from small patch repairs to full house renovations.
                                </p>
                                <p>
                                    Our approach is simple: quote fairly, turn up when we say we will, work tidily, and leave you with a result you&apos;re happy with. No jargon, no surprises.
                                </p>
                                <p>
                                    Whether you need a single room skimmed or a complete property renovated, we bring the same level of care to every job.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200">
                            <Image
                                src="/images/475813344_3901395610187371_5117658542515461492_n.jpg"
                                alt="Plastering expert with hawk and trowel"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* How we work */}
            <section className="bg-brand-cream py-16 md:py-24">
                <Container>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
                        How we work
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                step: '1',
                                title: 'Get in touch',
                                description: 'Tell us what you need. We&apos;ll ask a few questions and arrange a time to visit.',
                            },
                            {
                                step: '2',
                                title: 'Clear quote',
                                description: 'We&apos;ll give you a written quote with no surprises. You&apos;ll know exactly what&apos;s included.',
                            },
                            {
                                step: '3',
                                title: 'Tidy work',
                                description: 'We protect your floors, work cleanly, and leave each room usable at the end of the day.',
                            },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white text-xl font-bold mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Service area */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                            Our service area
                        </h2>
                        <p className="text-neutral-600 mb-8">
                            Based in {siteConfig.baseLocation}, we regularly work across Kent and East Sussex. Our typical coverage includes:
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {siteConfig.locations.map((area) => (
                                <Link key={area.name} href={`/areas/${area.slug}`} className="inline-flex items-center px-4 py-2 rounded-full bg-brand-cream text-neutral-700 hover:bg-brand-orange hover:text-white transition-colors">
                                    {area.name}
                                </Link>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-500 mb-8">
                            Somewhere else? Just ask - we travel to where the work is.
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
