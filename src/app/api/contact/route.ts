import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

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

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            )
        }

        const host = process.env.SMTP_HOST?.trim() || 'smtp.stackmail.com'
        const port = Number(process.env.SMTP_PORT || 465)
        const isSecure = port === 465
        const smtpUser = process.env.SMTP_USER?.trim()
        const smtpPass = process.env.SMTP_PASS?.trim()
        const toAddress = process.env.CONTACT_TO_EMAIL?.trim() || 'msb4545@outlook.com'

        if (!smtpUser || !smtpPass || !Number.isFinite(port)) {
            console.error('Contact form misconfigured: missing/invalid SMTP environment variables')
            return NextResponse.json(
                { error: 'Contact service is temporarily unavailable. Please call us directly.' },
                { status: 503 }
            )
        }

        const safeName = escapeHtml(name)
        const safeEmail = escapeHtml(email)
        const safePhone = escapeHtml(phone)
        const safePhoneHref = phone.replace(/[^\d+]/g, '')
        const safePostcode = escapeHtml(postcode)
        const safeService = escapeHtml(service || 'Not specified')
        const safeMessageHtml = escapeHtml(message).replace(/\n/g, '<br>')

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: isSecure,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        })

        const mailOptions = {
            from: `"MSB Website" <${smtpUser}>`,
            to: toAddress,
            replyTo: email,
            subject: `New Website Enquiry from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Postcode: ${postcode}
Service: ${service}

Message:
${message}
            `,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Website Enquiry</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #F6F2E8; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .header { background-color: #1B1F24; padding: 24px; text-align: center; border-bottom: 4px solid #F57605; }
        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px; }
        .content { padding: 32px 24px; color: #1B1F24; }
        .field { margin-bottom: 20px; }
        .label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; font-weight: 600; margin-bottom: 4px; display: block; }
        .value { font-size: 16px; color: #111827; font-weight: 500; }
        .message-box { background-color: #FAF8F3; padding: 16px; border-radius: 6px; border-left: 4px solid #F57605; margin-top: 8px; }
        .footer { background-color: #F6F2E8; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
        .highlight { color: #F57605; }
        a { color: #F57605; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div style="padding: 24px 0;">
        <div class="container">
            <div class="header">
                <h1>New Website Enquiry</h1>
            </div>
            <div class="content">
                <p style="margin-top: 0; margin-bottom: 24px; color: #4b5563;">You have received a new enquiry via the MSB Plastering website.</p>
                
                <div class="field">
                    <span class="label">Name</span>
                    <div class="value">${safeName}</div>
                </div>

                <div class="field">
                    <span class="label">Service Requested</span>
                    <div class="value" style="color: #F57605; font-weight: 700;">${safeService}</div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div class="field">
                        <span class="label">Phone</span>
                        <div class="value"><a href="tel:${safePhoneHref}">${safePhone}</a></div>
                    </div>
                    <div class="field">
                        <span class="label">Postcode</span>
                        <div class="value">${safePostcode}</div>
                    </div>
                </div>

                <div class="field">
                    <span class="label">Email</span>
                    <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                </div>

                <div class="field" style="margin-top: 24px;">
                    <span class="label">Message</span>
                    <div class="message-box">
                        ${safeMessageHtml}
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} MSB Plastering. All rights reserved.</p>
                <p>This email was sent from the contact form on your website.</p>
            </div>
        </div>
    </div>
</body>
</html>
            `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { success: true, message: 'Form submitted successfully' },
            { status: 200 }
        )
    } catch (error: unknown) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Unable to send enquiry. Please try again later.' },
            { status: 500 }
        )
    }
}
