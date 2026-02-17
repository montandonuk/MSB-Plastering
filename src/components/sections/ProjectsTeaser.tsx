import Image from 'next/image'
import Button from '../Button'
import Container from '../Container'

const projectImages = [
    { src: '/images/598613146_4216189742041288_8670296135861101388_n.jpg', alt: 'Freshly skimmed interior room', location: 'Tunbridge Wells' },
    { src: '/images/536632710_4102694270057503_7417214988960154890_n.jpg', alt: 'Plastering in progress on a home renovation', location: 'Sevenoaks' },
    { src: '/images/476166873_3901396096853989_4646321421527471772_n.jpg', alt: 'Completed plastering finish ready for decorating', location: 'Brighton' },
]

export default function ProjectsTeaser() {
    return (
        <section className="bg-brand-cream py-16 md:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start mb-12">
                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Case Studies
                        </h2>
                        <p className="text-neutral-600 mb-6">
                            Take a look at some of our recent work across Kent and Sussex. From small domestic repairs to larger renovation projects, we bring the same level of care to every job.
                        </p>
                        <Button href="/projects">
                            View all projects
                        </Button>
                    </div>

                    {/* Trust card */}
                    <div className="bg-white rounded-2xl p-6 shadow-soft">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                            Trusted by homeowners, landlords and builders
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-cream text-sm text-neutral-700">
                                Homeowners
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-cream text-sm text-neutral-700">
                                Landlords
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-cream text-sm text-neutral-700">
                                Property developers
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-cream text-sm text-neutral-700">
                                Small businesses
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-cream text-sm text-neutral-700">
                                Builders
                            </span>
                        </div>
                    </div>
                </div>

                {/* Image collage */}
                <div className="grid gap-4 md:grid-cols-3">
                    {projectImages.map((image, index) => (
                        <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="absolute bottom-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-neutral-900">
                                <svg className="mr-1.5 h-4 w-4 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                {image.location}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
