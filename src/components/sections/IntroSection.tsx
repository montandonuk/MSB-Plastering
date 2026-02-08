import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import Button from '../Button'
import Container from '../Container'

const checkItems = [
    'Skimming and re-skims',
    'Patch repairs and ceiling repairs',
    'Plasterboarding and dry lining',
    'Rendering and external repairs',
    'Painting and decorating (add-on or bundled)',
]

export default function IntroSection() {
    return (
        <section className="bg-brand-cream py-16 md:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Image collage */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200">
                                    <Image
                                        src="/images/3.png"
                                        alt="Detailed plastering work"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200">
                                    <Image
                                        src="/images/1.png"
                                        alt="Professional plasterer at work"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Decorative accent */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange/20 rounded-full -z-10" />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange mb-3">
                            Local, reliable, professional
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                            Professional plasterers in {siteConfig.baseLocation}
                        </h2>
                        <div className="space-y-4 text-neutral-600 mb-8">
                            <p>
                                MSB Plastering & Decorating Service handles the messy bits and the finishing touches. Whether it&apos;s a single room re-skim or a full house renovation, we deliver smooth, lasting results without the stress.
                            </p>
                            <p>
                                Based in {siteConfig.baseLocation}, we work across Kent and Sussex. We keep things simple: fair quotes, clear timelines, and tidy work. No surprises.
                            </p>
                        </div>

                        {/* Checklist */}
                        <ul className="space-y-3 mb-8">
                            {checkItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="h-6 w-6 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-neutral-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button href="/contact">
                            {siteConfig.primaryCtaLabel}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
