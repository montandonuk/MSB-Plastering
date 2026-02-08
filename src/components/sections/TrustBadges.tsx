import { siteConfig } from '@/lib/site'
import Container from '../Container'

const icons = {
    shield: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    sparkles: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
    ),
    clock: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    check: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
}

export default function TrustBadges() {
    return (
        <section className="bg-white py-16 md:py-20">
            <Container>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {siteConfig.trustBadges.map((badge, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-brand-cream text-brand-orange mb-4">
                                {icons[badge.icon as keyof typeof icons]}
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                                {badge.title}
                            </h3>
                            <p className="text-sm text-neutral-500">
                                {badge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
