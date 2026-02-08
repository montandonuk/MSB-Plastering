import { siteConfig } from '@/lib/site'
import Button from '../Button'
import Container from '../Container'

export default function CtaBanner() {
    return (
        <section className="bg-brand-charcoal py-16 md:py-20">
            <Container>
                <div className="bg-gradient-to-br from-brand-orange to-brand-orange-light rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                        Want a free, no-obligation quote?
                    </h3>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                        Tell us what you need and we&apos;ll come back with a clear price and timeline. No pressure, no waffle.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/contact" variant="secondary" size="lg">
                            {siteConfig.primaryCtaLabel}
                        </Button>
                        <Button
                            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                            variant="outline"
                            size="lg"
                        >
                            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            {siteConfig.phone}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
