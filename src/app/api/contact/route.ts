import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo purposes
// TODO: Wire up to email provider (Resend, Nodemailer, etc.) using environment variables:
// - RESEND_API_KEY or SMTP_HOST, SMTP_USER, SMTP_PASS
// - CONTACT_EMAIL_TO (recipient email address)
const submissions: Array<{
    id: string
    timestamp: string
    name: string
    phone: string
    email: string
    postcode: string
    service: string
    message: string
}> = []

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Basic validation
        const { name, phone, email, message } = body

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

        // Store submission (in production, send email instead)
        const submission = {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            name: body.name,
            phone: body.phone,
            email: body.email,
            postcode: body.postcode || '',
            service: body.service || '',
            message: body.message,
        }

        submissions.push(submission)

        // Log for development (remove in production)
        console.log('New contact form submission:', submission)

        // TODO: Send email using Resend or Nodemailer
        // Example with Resend:
        // import { Resend } from 'resend'
        // const resend = new Resend(process.env.RESEND_API_KEY)
        // await resend.emails.send({
        //   from: 'noreply@msbplastering.co.uk',
        //   to: process.env.CONTACT_EMAIL_TO,
        //   subject: `New enquiry from ${name}`,
        //   html: `<p>Name: ${name}</p><p>Phone: ${phone}</p>...`,
        // })

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
