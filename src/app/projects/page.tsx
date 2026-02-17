import type { Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import { buildPageMetadata } from '@/lib/seo'
import Container from '@/components/Container'
import { CtaBanner } from '@/components/sections'

export const metadata: Metadata = buildPageMetadata({
    title: `Our Projects | ${siteConfig.businessName}`,
    description: `View recent plastering and decorating projects completed by ${siteConfig.businessName} across Kent and Sussex.`,
    path: '/projects',
})

const projects = [
    {
        id: 1,
        title: 'Internal wall re-skim and prep',
        location: 'Tunbridge Wells',
        service: 'Plastering',
        image: '/images/120666714_2710376182622659_8694477281302805523_n.jpg',
        description: 'Fresh skim work completed to create a smooth, paint-ready interior finish.',
    },
    {
        id: 2,
        title: 'Kitchen wall and ceiling finish',
        location: 'Sevenoaks',
        service: 'Plastering',
        image: '/images/475813344_3901395610187371_5117658542515461492_n.jpg',
        description: 'Multi-surface skim work completed as part of a kitchen upgrade.',
    },
    {
        id: 3,
        title: 'Kitchen renovation skim coat',
        location: 'Brighton',
        service: 'Plastering',
        image: '/images/476166873_3901396096853989_4646321421527471772_n.jpg',
        description: 'Walls prepared with a smooth finish, ready for final decoration.',
    },
    {
        id: 4,
        title: 'Ceiling and wall re-skim',
        location: 'Tonbridge',
        service: 'Ceilings',
        image: '/images/120798797_2710376245955986_1778884129804446817_n.jpg',
        description: 'Even finish achieved across ceiling and adjoining kitchen wall areas.',
    },
    {
        id: 5,
        title: 'Kitchen area prep and finishing',
        location: 'Crowborough',
        service: 'Plastering',
        image: '/images/536632710_4102694270057503_7417214988960154890_n.jpg',
        description: 'Preparation and finishing work completed ahead of final decorating.',
    },
    {
        id: 6,
        title: 'Room re-skim and repair detail',
        location: 'Maidstone',
        service: 'Plastering',
        image: '/images/120832834_2710376399289304_1614704455301870631_n.jpg',
        description: 'Localized repairs and skim finishing to leave walls ready for painting.',
    },
]

export default function ProjectsPage() {
    const projectsSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Recent Plastering Projects',
        url: `${siteConfig.siteUrl}/projects`,
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: projects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: project.title,
                description: project.description,
                image: `${siteConfig.siteUrl}${project.image}`,
            })),
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
            />

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
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                            A selection of real project photos from recent jobs.
                        </p>
                    </div>
                </Container>
            </section>

            <CtaBanner />
        </>
    )
}
