'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import Button from './Button'
import Container from './Container'
import MobileMenu from './MobileMenu'

// Service icons for mega menu
const serviceIcons: Record<string, React.ReactNode> = {
    plastering: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    ),
    repairs: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
        </svg>
    ),
    'dry-lining': (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
    ),
    rendering: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    ),
    ceilings: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
        </svg>
    ),
    decorating: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
    ),
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = (name: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setOpenDropdown(name)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <Container>
                <nav className="flex items-center justify-between py-3">
                    {/* Logo - Larger */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/brand/MSB Logo-updated.png"
                            alt={`${siteConfig.businessName} logo`}
                            width={280}
                            height={93}
                            className="h-20 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:gap-1">
                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('services')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand-orange transition-colors rounded-lg hover:bg-neutral-50">
                                Services
                                <svg className={`h-4 w-4 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>

                        {/* Our Work Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('work')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand-orange transition-colors rounded-lg hover:bg-neutral-50">
                                Our Work
                                <svg className={`h-4 w-4 transition-transform duration-200 ${openDropdown === 'work' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>

                        {/* About Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('about')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand-orange transition-colors rounded-lg hover:bg-neutral-50">
                                About
                                <svg className={`h-4 w-4 transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:items-center lg:gap-4">
                        <a
                            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                            className="text-sm font-medium text-neutral-600 hover:text-brand-orange transition-colors"
                        >
                            {siteConfig.phone}
                        </a>
                        <Button href="/contact" size="sm">
                            {siteConfig.primaryCtaLabel}
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open main menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </nav>
            </Container>

            {/* Full-width Mega Menu Dropdowns */}
            <div
                className={`absolute left-0 right-0 top-full transition-all duration-300 ease-out ${openDropdown ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => openDropdown && handleMouseEnter(openDropdown)}
                onMouseLeave={handleMouseLeave}
            >
                {/* Services Mega Menu */}
                {openDropdown === 'services' && (
                    <div className="bg-white border-t border-neutral-100 shadow-xl">
                        <Container>
                            <div className="py-8">
                                <div className="grid lg:grid-cols-4 gap-8">
                                    {/* Services Grid */}
                                    <div className="lg:col-span-3">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Our Services</p>
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                            {siteConfig.services.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/services#${service.slug}`}
                                                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-brand-cream transition-all duration-200"
                                                >
                                                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                                                        {serviceIcons[service.slug]}
                                                    </span>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-semibold text-neutral-900 group-hover:text-brand-orange transition-colors">
                                                            {service.title}
                                                        </p>
                                                        <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                                                            {service.shortDesc}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Sidebar */}
                                    <div className="lg:col-span-1 lg:border-l lg:border-neutral-100 lg:pl-8">
                                        <div className="bg-brand-charcoal rounded-2xl p-6 text-white">
                                            <p className="text-sm font-semibold mb-2">Need a quote?</p>
                                            <p className="text-xs text-neutral-300 mb-4">
                                                Get a free, no-obligation quote for your project.
                                            </p>
                                            <Button href="/contact" size="sm" className="w-full mb-3">
                                                Request a quote
                                            </Button>
                                            <a
                                                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                                                className="flex items-center justify-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
                                            >
                                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                {siteConfig.phone}
                                            </a>
                                        </div>
                                        <Link
                                            href="/services"
                                            className="flex items-center justify-center gap-2 mt-4 text-sm font-medium text-brand-orange hover:underline"
                                        >
                                            View all services
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                )}

                {/* Our Work Mega Menu */}
                {openDropdown === 'work' && (
                    <div className="bg-white border-t border-neutral-100 shadow-xl">
                        <Container>
                            <div className="py-8">
                                <div className="grid lg:grid-cols-3 gap-6 max-w-3xl">
                                    <Link
                                        href="/projects"
                                        className="group p-6 rounded-xl hover:bg-brand-cream transition-all duration-200"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-base font-semibold text-neutral-900 group-hover:text-brand-orange transition-colors">Projects</p>
                                        <p className="text-sm text-neutral-500 mt-1">See our recent plastering and decorating work across Kent and Sussex.</p>
                                    </Link>
                                    <Link
                                        href="/reviews"
                                        className="group p-6 rounded-xl hover:bg-brand-cream transition-all duration-200"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </div>
                                        <p className="text-base font-semibold text-neutral-900 group-hover:text-brand-orange transition-colors">Reviews</p>
                                        <p className="text-sm text-neutral-500 mt-1">What our customers say about working with us.</p>
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </div>
                )}

                {/* About Mega Menu */}
                {openDropdown === 'about' && (
                    <div className="bg-white border-t border-neutral-100 shadow-xl">
                        <Container>
                            <div className="py-8">
                                <div className="grid lg:grid-cols-3 gap-6 max-w-3xl">
                                    <Link
                                        href="/about"
                                        className="group p-6 rounded-xl hover:bg-brand-cream transition-all duration-200"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-base font-semibold text-neutral-900 group-hover:text-brand-orange transition-colors">About Us</p>
                                        <p className="text-sm text-neutral-500 mt-1">Learn about MSB Plastering and how we work.</p>
                                    </Link>
                                    <Link
                                        href="/areas"
                                        className="group p-6 rounded-xl hover:bg-brand-cream transition-all duration-200"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-base font-semibold text-neutral-900 group-hover:text-brand-orange transition-colors">Areas We Cover</p>
                                        <p className="text-sm text-neutral-500 mt-1">Tunbridge Wells, Kent, and East Sussex.</p>
                                    </Link>
                                </div>
                            </div>
                        </Container>
                    </div>
                )}
            </div>

            {/* Mobile menu */}
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </header>
    )
}
