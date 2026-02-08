'use client'

import { useState, useCallback } from 'react'
import { siteConfig } from '@/lib/site'
import Container from '../Container'

export default function ReviewsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const testimonials = siteConfig.testimonials

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index)
    }, [])

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }, [testimonials.length])

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, [testimonials.length])

    return (
        <section className="bg-white py-16 md:py-24">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                        What customers say
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600">
                        Real feedback from real customers
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main testimonial */}
                    <div className="bg-brand-cream rounded-3xl p-8 md:p-12">
                        {/* Stars */}
                        <div className="flex justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="h-6 w-6 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>

                        <blockquote className="text-center">
                            <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-8">
                                &ldquo;{testimonials[currentIndex].quote}&rdquo;
                            </p>
                            <footer>
                                <p className="font-semibold text-neutral-900">
                                    {testimonials[currentIndex].name}
                                </p>
                                <p className="text-sm text-neutral-500">
                                    {testimonials[currentIndex].location}
                                </p>
                            </footer>
                        </blockquote>
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-neutral-600 hover:text-brand-orange transition-colors"
                        aria-label="Previous review"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-neutral-600 hover:text-brand-orange transition-colors"
                        aria-label="Next review"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-brand-orange' : 'bg-neutral-300'
                                    }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
