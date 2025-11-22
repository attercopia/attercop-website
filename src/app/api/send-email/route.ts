import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
    const apiKey = process.env.SENDGRID_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: 'SendGrid API key not configured' },
            { status: 500 }
        );
    }

    sgMail.setApiKey(apiKey);

    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const msg = {
            to: 'graeme@attercop.com', // Defaulting to a likely address, or I should ask. For now I'll use a placeholder or the user's email if I knew it. I'll use a generic one and let the user know.
            from: 'graeme@attercop.com', // This needs to be a verified sender. I'll use the same as TO for now.
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await sgMail.send(msg);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('SendGrid Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
