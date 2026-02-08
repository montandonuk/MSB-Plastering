import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import Container from '@/components/Container'
import { CtaBanner } from '@/components/sections'

export const metadata: Metadata = {
    title: `Our Projects | ${siteConfig.businessName}`,
    description: `View recent plastering and decorating projects completed by ${siteConfig.businessName} across Kent and Sussex.`,
}

const projects = [
    {
        id: 1,
        title: 'Full house re-skim',
        location: 'Tunbridge Wells',
        service: 'Plastering',
        image: '/images/8.png',
        description: 'Complete re-skim of a 3-bedroom property preparing it for sale.',
    },
    {
        id: 2,
        title: 'Extension plastering',
        location: 'Sevenoaks',
        service: 'Plastering',
        image: '/images/4.png',
        description: 'New plasterboard and skim for a kitchen extension.',
    },
    {
        id: 3,
        title: 'Commercial rendering',
        location: 'Brighton',
        service: 'Rendering',
        image: '/images/6.png',
        description: 'External render for a small retail unit.',
    },
    {
        id: 4,
        title: 'Ceiling repairs',
        location: 'Tonbridge',
        service: 'Ceilings',
        image: '/images/7.png',
        description: 'Water damage repair and re-skim across multiple rooms.',
    },
    {
        id: 5,
        title: 'Living room renovation',
        location: 'Crowborough',
        service: 'Decorating',
        image: '/images/10.png',
        description: 'Plastering and decorating package for a period property.',
    },
    {
        id: 6,
        title: 'Rental property refresh',
        location: 'Maidstone',
        service: 'Repairs',
        image: '/images/2.png',
        description: 'Patch repairs and painting between tenancies.',
    },
]

export default function ProjectsPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-brand-charcoal text-white py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Projects
                        </h1>
                        <p className="text-xl text-neutral-300">
                            A selection of recent plastering and decorating work across Kent and Sussex.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Projects grid */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-soft">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 text-xs font-medium text-neutral-900">
                                            {project.service}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        {project.location}
                                    </div>
                                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-neutral-500">
                            These are placeholder examples. Real project photos coming soon.
                        </p>
                    </div>
                </Container>
            </section>

            <CtaBanner />
        </>
    )
}
