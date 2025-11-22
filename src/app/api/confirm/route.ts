import { NextResponse } from 'next/server'
import { confirmSubscriber } from '@/lib/subscribers'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const token = searchParams.get('token')

        if (!token) {
            return NextResponse.redirect(
                new URL('/confirmed?error=missing_token', request.url)
            )
        }

        // Confirm the subscriber
        const result = await confirmSubscriber(token)

        if (!result.success) {
            return NextResponse.redirect(
                new URL('/confirmed?error=invalid_token', request.url)
            )
        }

        // Redirect to success page with email
        return NextResponse.redirect(
            new URL(`/confirmed?email=${encodeURIComponent(result.email || '')}`, request.url)
        )
    } catch (error) {
        console.error('Confirmation Error:', error)
        return NextResponse.redirect(
            new URL('/confirmed?error=unexpected', request.url)
        )
    }
}
