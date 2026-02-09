import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { CtaBanner } from '@/components/sections'

export const metadata: Metadata = {
    title: `Our Services | ${siteConfig.businessName}`,
    description: `Professional plastering and decorating services including skimming, rendering, repairs, and painting in ${siteConfig.baseLocation}.`,
}

type ServiceSlug = typeof siteConfig.services[number]['slug']

interface ServiceDetail {
    fullDesc: string
    forWho: string[]
    typical: string[]
    faq: Array<{ q: string; a: string }>
}

const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
    plastering: {
        fullDesc: 'Whether you need a fresh skim on new plasterboard or a re-skim over old, tired walls, we deliver smooth, lasting finishes every time. Perfect for new builds, renovations, and refreshing existing rooms.',
        forWho: ['Homeowners renovating', 'Landlords preparing properties', 'Builders needing a reliable finish'],
        typical: ['Full room skimming', 'New build plastering', 'Re-skims over old plaster', 'Feature walls'],
        faq: [
            { q: 'How long does plastering take to dry?', a: 'Usually 2-5 days depending on room conditions. We recommend waiting until the plaster has turned completely light pink before painting.' },
            { q: 'Can you plaster over painted walls?', a: 'Yes, but we may need to apply a bonding coat first. We will assess this during the quote.' },
        ],
    },
    repairs: {
        fullDesc: 'Cracks, holes, water damage, or general wear and tear - we repair plaster damage of all sizes. Quick turnaround for smaller jobs, with neat, invisible patches that blend with your existing walls.',
        forWho: ['Homeowners with damage to fix', 'Landlords between tenancies', 'Property developers'],
        typical: ['Crack repairs', 'Hole filling', 'Water damage repair', 'Corner damage'],
        faq: [
            { q: 'Can small repairs be done without re-plastering the whole wall?', a: 'Absolutely. We patch and blend repairs to match your existing finish.' },
        ],
    },
    'dry-lining': {
        fullDesc: 'Plasterboard installation for new walls, partitions, or covering uneven surfaces. We handle dot and dab, metal stud partitions, and tape and jointing.',
        forWho: ['Homeowners creating new rooms', 'Developers and builders', 'Commercial fit-outs'],
        typical: ['Partition walls', 'Dot and dab', 'Ceiling plasterboard', 'Tape and jointing'],
        faq: [
            { q: 'Do you supply the plasterboard?', a: 'We can supply materials or work with what you provide - whatever suits you.' },
        ],
    },
    rendering: {
        fullDesc: 'External wall finishes including traditional sand and cement, monocouche, and silicone renders. We also handle render repairs and patching.',
        forWho: ['Homeowners with external walls', 'Property renovators', 'Commercial premises'],
        typical: ['Full house rendering', 'Extension rendering', 'Render repairs', 'Pebbledash removal'],
        faq: [
            { q: 'What type of render is best?', a: 'It depends on your property and budget. We will advise during the quote visit.' },
        ],
    },
    ceilings: {
        fullDesc: 'Ceiling repairs, artex removal, and full ceiling re-skims. We bring ceilings back to a smooth, modern finish.',
        forWho: ['Homeowners with damaged or artex ceilings', 'Landlords updating properties', 'Anyone wanting a modern look'],
        typical: ['Artex removal', 'Ceiling re-skims', 'Crack repairs', 'Water damage repair'],
        faq: [
            { q: 'Can you remove artex?', a: 'Yes, we can skim over it or remove it entirely depending on condition.' },
        ],
    },
    decorating: {
        fullDesc: 'Interior painting and decorating services. Often bundled with plastering work, but also available as a standalone service. Quality finish, tidy work.',
        forWho: ['Homeowners wanting a complete finish', 'Landlords refreshing properties', 'Anyone needing interior painting'],
        typical: ['Emulsion walls and ceilings', 'Gloss woodwork', 'Feature walls', 'Full room decoration'],
        faq: [
            { q: 'Do you do wallpapering?', a: 'We focus on painting. For wallpapering, we can recommend trusted contacts.' },
        ],
    },
}

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
                            Professional plastering and decorating for homes and small commercial spaces.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Services list */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="space-y-16 md:space-y-24">
                        {siteConfig.services.map((service, index) => {
                            const details = serviceDetails[service.slug]
                            return (
                                <div
                                    key={service.slug}
                                    id={service.slug}
                                    className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
                                >
                                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-neutral-600 mb-6">
                                            {details.fullDesc}
                                        </p>

                                        <div className="mb-6">
                                            <h3 className="font-semibold text-neutral-900 mb-2">Who it&apos;s for</h3>
                                            <ul className="space-y-1">
                                                {details.forWho.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-neutral-600">
                                                        <svg className="h-4 w-4 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="font-semibold text-neutral-900 mb-2">Typical jobs</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {details.typical.map((job, i) => (
                                                    <span key={i} className="inline-flex px-3 py-1 rounded-full bg-brand-cream text-sm text-neutral-700">
                                                        {job}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Button href="/contact">
                                            {siteConfig.primaryCtaLabel}
                                        </Button>
                                    </div>

                                    <div className={`bg-brand-cream rounded-2xl p-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <h3 className="font-semibold text-neutral-900 mb-4">Common questions</h3>
                                        <div className="space-y-4">
                                            {details.faq.map((item, i) => (
                                                <div key={i}>
                                                    <p className="font-medium text-neutral-800 mb-1">{item.q}</p>
                                                    <p className="text-sm text-neutral-600">{item.a}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            <CtaBanner />
        </>
    )
}
