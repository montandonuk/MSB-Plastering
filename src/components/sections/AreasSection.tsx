import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import Container from '../Container'

export default function AreasSection() {
    return (
        <section className="bg-brand-cream py-16 md:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                            Areas we cover
                        </h2>
                        <p className="text-neutral-600 mb-8">
                            Based in {siteConfig.baseLocation}, covering Kent and parts of East Sussex including Brighton. We travel to where the work is.
                        </p>

                        <ul className="grid grid-cols-2 gap-3 mb-8">
                            {siteConfig.locations.map((area) => (
                                <li key={area.name} className="flex items-center gap-2 text-neutral-700">
                                    <svg className="h-5 w-5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <Link href={`/areas/${area.slug}`} className="hover:text-brand-orange hover:underline transition-colors">
                                        {area.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <p className="text-sm text-neutral-500 italic">
                            Not listed? Ask anyway – we cover more areas than we can list.
                        </p>
                    </div>

                    {/* Map */}
                    <div className="relative h-80 lg:h-auto lg:min-h-[400px] rounded-2xl overflow-hidden shadow-soft">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80098.19068686795!2d0.2039977!3d51.1342368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df456c0a2f7029%3A0x96e25ffd32ca49a5!2sRoyal%20Tunbridge%20Wells!5e0!3m2!1sen!2suk!4v1705927199000!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map showing Tunbridge Wells and surrounding areas"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
