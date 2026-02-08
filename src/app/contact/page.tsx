import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import Container from '@/components/Container'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
    title: `Contact Us | ${siteConfig.businessName}`,
    description: `Get in touch with ${siteConfig.businessName} for a free quote. Plastering and decorating services in ${siteConfig.baseLocation}.`,
}

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-brand-charcoal text-white py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Get in touch
                        </h1>
                        <p className="text-xl text-neutral-300">
                            Tell us about your project and we&apos;ll get back to you with a clear quote.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact content */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                                Request a quote
                            </h2>
                            <ContactForm />
                        </div>

                        {/* Contact details */}
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                                Contact details
                            </h2>
                            <div className="bg-brand-cream rounded-2xl p-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                                            <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-neutral-900">Phone</p>
                                            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-neutral-600 hover:text-brand-orange transition-colors">
                                                {siteConfig.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                                            <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-neutral-900">Email</p>
                                            <a href={`mailto:${siteConfig.email}`} className="text-neutral-600 hover:text-brand-orange transition-colors">
                                                {siteConfig.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                                            <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-neutral-900">Based in</p>
                                            <p className="text-neutral-600">{siteConfig.baseLocation}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-neutral-200">
                                    <h3 className="font-medium text-neutral-900 mb-3">Areas we cover</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {siteConfig.locations.slice(0, 5).map((area) => (
                                            <span key={area.name} className="text-sm text-neutral-600">
                                                {area.name}
                                            </span>
                                        ))}
                                        <span className="text-sm text-neutral-400">+ more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
