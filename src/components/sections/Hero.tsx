import { siteConfig } from '@/lib/site'
import Button from '../Button'
import Container from '../Container'

const featureIcons = {
    sparkles: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    ),
    shield: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    document: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
    ),
}

export default function Hero() {
    return (
        <section className="relative bg-brand-charcoal text-white overflow-visible">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <Container className="relative">
                <div className="pb-14 pt-16 md:pb-24 md:pt-32 lg:pb-28 lg:pt-40">
                    {/* Heading */}
                    <h1 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {siteConfig.businessName}
                    </h1>

                    {/* Subheading */}
                    <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-neutral-300 md:mt-6 md:text-xl">
                        Smooth finishes, tidy work, clear quotes. Skimming, repairs, rendering and decorating for homes and small commercial spaces.
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
                        <Button href="/contact" size="lg" className="w-full sm:w-auto">
                            {siteConfig.primaryCtaLabel}
                        </Button>
                        <Button
                            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                        >
                            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            {siteConfig.secondaryCtaLabel}
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Curved divider */}
            <div className="absolute bottom-0 left-0 right-0 z-0">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-full md:h-28 lg:h-32"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="#FAF8F3"
                    />
                </svg>
            </div>

            {/* Feature Cards - overlapping sections */}
            <div className="relative z-10">
                <Container>
                    <div className="transform md:translate-y-1/2">
                        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                            {siteConfig.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-lg md:p-8"
                                >
                                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-brand-orange/10 text-brand-orange mb-4">
                                        {featureIcons[feature.icon as keyof typeof featureIcons]}
                                    </div>
                                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
