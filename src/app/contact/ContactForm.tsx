'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site'
import Button from '@/components/Button'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        postcode: '',
        service: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', phone: '', email: '', postcode: '', service: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Message sent!</h3>
                <p className="text-green-700">
                    Thanks for getting in touch. We&apos;ll get back to you as soon as we can.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-colors"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-colors"
                        placeholder="Your phone number"
                    />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="postcode" className="block text-sm font-medium text-neutral-700 mb-2">
                        Postcode
                    </label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-colors"
                        placeholder="TN1 1AA"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    Service needed
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-colors"
                >
                    <option value="">Select a service...</option>
                    {siteConfig.services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                            {service.title}
                        </option>
                    ))}
                    <option value="other">Other / Not sure</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Tell us about your project *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-none transition-colors resize-none"
                    placeholder="Describe what you need..."
                />
            </div>

            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                    Something went wrong. Please try again or call us directly.
                </div>
            )}

            <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
                {status === 'loading' ? 'Sending...' : siteConfig.primaryCtaLabel}
            </Button>
        </form>
    )
}
