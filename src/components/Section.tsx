import Container from './Container'

interface SectionProps {
    children: React.ReactNode
    className?: string
    background?: 'white' | 'cream' | 'dark'
    id?: string
}

const backgrounds = {
    white: 'bg-white',
    cream: 'bg-brand-cream',
    dark: 'bg-brand-charcoal text-white',
}

export default function Section({
    children,
    className = '',
    background = 'white',
    id,
}: SectionProps) {
    return (
        <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
            <Container>{children}</Container>
        </section>
    )
}
