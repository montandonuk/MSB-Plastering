'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'
import Button from './Button'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

// Service icons duplicated from Header.tsx for now
const serviceIcons: Record<string, React.ReactNode> = {
    plastering: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    ),
    repairs: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
        </svg>
    ),
    'dry-lining': (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
    ),
    rendering: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    ),
    ceilings: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
        </svg>
    ),
    decorating: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
    ),
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [openSection, setOpenSection] = useState<string | null>(null)

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section)
    }

    if (!isOpen) return null

    return (
        <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Menu Panel */}
            <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl flex flex-col h-full animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between p-6 border-b border-neutral-100 flex-shrink-0">
                    <Link href="/" onClick={onClose}>
                        <Image
                            src="/brand/MSB Logo-updated.png"
                            alt={`${siteConfig.businessName} logo`}
                            width={160}
                            height={53}
                            className="h-12 w-auto"
                        />
                    </Link>
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-neutral-700 hover:bg-neutral-100 transition-colors"
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-2">
                        {/* Home Link */}
                        <Link
                            href="/"
                            className="block px-4 py-3 text-base font-semibold text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
                            onClick={onClose}
                        >
                            Home
                        </Link>

                        {/* Services Accordion */}
                        <div>
                            <button
                                onClick={() => toggleSection('services')}
                                className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
                            >
                                <span>Services</span>
                                <svg
                                    className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${openSection === 'services' ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'services' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-4 pb-4 space-y-1 pt-1">
                                    {siteConfig.services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services#${service.slug}`}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-600 hover:bg-brand-cream hover:text-brand-orange transition-colors"
                                            onClick={onClose}
                                        >
                                            <span className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                                                {serviceIcons[service.slug]}
                                            </span>
                                            <span className="text-sm font-medium">{service.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Our Work Accordion */}
                        <div>
                            <button
                                onClick={() => toggleSection('work')}
                                className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
                            >
                                <span>Our Work</span>
                                <svg
                                    className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${openSection === 'work' ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'work' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-4 pb-4 space-y-1 pt-1">
                                    <Link
                                        href="/projects"
                                        className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-brand-cream hover:text-brand-orange transition-colors"
                                        onClick={onClose}
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        href="/reviews"
                                        className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-brand-cream hover:text-brand-orange transition-colors"
                                        onClick={onClose}
                                    >
                                        Reviews
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* About Accordion */}
                        <div>
                            <button
                                onClick={() => toggleSection('about')}
                                className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
                            >
                                <span>About</span>
                                <svg
                                    className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${openSection === 'about' ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'about' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-4 pb-4 space-y-1 pt-1">
                                    <Link
                                        href="/about"
                                        className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-brand-cream hover:text-brand-orange transition-colors"
                                        onClick={onClose}
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/areas"
                                        className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-brand-cream hover:text-brand-orange transition-colors"
                                        onClick={onClose}
                                    >
                                        Areas We Cover
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact Link */}
                        <Link
                            href="/contact"
                            className="block px-4 py-3 text-base font-semibold text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
                            onClick={onClose}
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Footer / CTA */}
                <div className="p-6 border-t border-neutral-100 bg-neutral-50 flex-shrink-0">
                    <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-2 text-neutral-700 font-medium mb-4 hover:text-brand-orange transition-colors"
                    >
                        <svg className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        {siteConfig.phone}
                    </a>
                    <Button href="/contact" className="w-full justify-center" onClick={onClose}>
                        {siteConfig.primaryCtaLabel}
                    </Button>
                </div>
            </div>
        </div>
    )
}
