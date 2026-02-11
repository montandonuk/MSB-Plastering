require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmail() {
    console.log('Testing SMTP Connection...');
    const host = process.env.SMTP_HOST || 'smtp.stackmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;

    console.log(`Host: ${host}`);
    console.log(`Port: ${port}`);
    console.log(`User: ${process.env.SMTP_USER}`);

    const isSecure = port === 465;

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: isSecure,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        console.log('Attempting to create transporter...');
        // transporter created above

        console.log('Verifying transporter connection (this may take a moment)...');
        await transporter.verify();
        console.log('✅ Server is ready to take our messages');

        console.log('Sending test email...');
        const info = await transporter.sendMail({
            from: `"Test Script" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: "Test Email from Script (Relaxed SSL)",
            text: "If you receive this, SMTP is working correctly with relaxed SSL settings.",
        });
        console.log('✅ Message sent: %s', info.messageId);
    } catch (error) {
        console.error('❌ Error occurred:');
        console.error(error);
    }
}

testEmail();
