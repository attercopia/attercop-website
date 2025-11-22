import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { addSubscriber } from '@/lib/subscribers'

export async function POST(request: Request) {
    const apiKey = process.env.SENDGRID_API_KEY
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'website@attercop.com'

    console.log('🔑 SendGrid API Key (first 20 chars):', apiKey?.substring(0, 20))
    console.log('🔑 SendGrid API Key length:', apiKey?.length)

    if (!apiKey) {
        return NextResponse.json(
            { error: 'Email service not configured' },
            { status: 500 }
        )
    }

    sgMail.setApiKey(apiKey)

    try {
        const body = await request.json()
        const { email } = body

        // Validate email
        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Email validation regex
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            )
        }

        // Add subscriber to database
        const result = await addSubscriber(email)

        if (!result.success) {
            return NextResponse.json(
                { error: result.error || 'Failed to subscribe' },
                { status: 400 }
            )
        }

        // Get the base URL for confirmation link
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
                       request.headers.get('origin') ||
                       'https://attercop.com'

        const confirmationUrl = `${baseUrl}/api/confirm?token=${result.subscriber?.confirmation_token}`

        // Send confirmation email
        const confirmationEmail = {
            to: email,
            from: {
                email: fromEmail,
                name: 'Attercop AI Threads'
            },
            subject: 'Confirm your AI Threads subscription',
            text: `
Welcome to AI Threads!

Thanks for subscribing to our monthly insights on AI strategy, implementation, and innovation.

Please confirm your subscription by clicking the link below:
${confirmationUrl}

If you didn't request this subscription, you can safely ignore this email.

Best regards,
The Attercop Team
            `,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #0B4F5F 0%, #1A7B8E 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
            Welcome to AI Threads
        </h1>
    </div>

    <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
        <p style="font-size: 16px; margin-bottom: 20px;">
            Thanks for subscribing to our monthly insights on AI strategy, implementation, and innovation.
        </p>

        <p style="font-size: 16px; margin-bottom: 30px;">
            Please confirm your subscription by clicking the button below:
        </p>

        <div style="text-align: center; margin: 40px 0;">
            <a href="${confirmationUrl}" style="background: #2D9B9E; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; display: inline-block;">
                Confirm Subscription
            </a>
        </div>

        <p style="font-size: 14px; color: #666666; margin-top: 30px; padding-top: 30px; border-top: 1px solid #e5e5e5;">
            If the button doesn't work, copy and paste this link into your browser:<br>
            <a href="${confirmationUrl}" style="color: #2D9B9E; word-break: break-all;">${confirmationUrl}</a>
        </p>

        <p style="font-size: 14px; color: #666666; margin-top: 20px;">
            If you didn't request this subscription, you can safely ignore this email.
        </p>
    </div>

    <div style="text-align: center; padding: 20px; color: #666666; font-size: 12px;">
        <p style="margin: 0;">
            © ${new Date().getFullYear()} Attercop. All rights reserved.
        </p>
    </div>
</body>
</html>
            `,
        }

        await sgMail.send(confirmationEmail)

        return NextResponse.json({
            success: true,
            message: 'Please check your email to confirm your subscription'
        })
    } catch (error) {
        console.error('Subscribe Error:', error)
        console.error('Error type:', typeof error)
        console.error('Error keys:', error ? Object.keys(error) : 'no keys')
        if (error && typeof error === 'object' && 'response' in error) {
            console.error('Error response:', (error as any).response)
            console.error('Error response body:', JSON.stringify((error as any).response?.body, null, 2))
        }
        const errorMessage = error instanceof Error ? error.message : 'Failed to process subscription'
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        )
    }
}
