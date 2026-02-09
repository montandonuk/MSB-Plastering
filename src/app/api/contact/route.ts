import { NextRequest, NextResponse } from 'next/server'

interface ContactSubmission {
    id: string
    timestamp: string
    name: string
    phone: string
    email: string
    postcode: string
    service: string
    message: string
}

const CONTACT_WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL
const CONTACT_WEBHOOK_TOKEN = process.env.CONTACT_WEBHOOK_TOKEN

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const name = typeof body.name === 'string' ? body.name.trim() : ''
        const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
        const email = typeof body.email === 'string' ? body.email.trim() : ''
        const message = typeof body.message === 'string' ? body.message.trim() : ''
        const postcode = typeof body.postcode === 'string' ? body.postcode.trim() : ''
        const service = typeof body.service === 'string' ? body.service.trim() : ''

        if (!name || !phone || !email || !message) {
            return NextResponse.json(
                { error: 'Name, phone, email, and message are required' },
                { status: 400 }
            )
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            )
        }

        const submission: ContactSubmission = {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            name,
            phone,
            email,
            postcode,
            service,
            message,
        }

        if (!CONTACT_WEBHOOK_URL) {
            return NextResponse.json(
                { error: 'Enquiry delivery is not configured. Please call us directly.' },
                { status: 503 }
            )
        }

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        }

        if (CONTACT_WEBHOOK_TOKEN) {
            headers.Authorization = `Bearer ${CONTACT_WEBHOOK_TOKEN}`
        }

        const webhookResponse = await fetch(CONTACT_WEBHOOK_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(submission),
        })

        if (!webhookResponse.ok) {
            return NextResponse.json(
                { error: 'Unable to deliver enquiry right now. Please call us directly.' },
                { status: 502 }
            )
        }

        return NextResponse.json(
            { success: true, message: 'Form submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
