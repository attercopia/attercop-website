import { NextResponse } from 'next/server'
import { unsubscribeSubscriber } from '@/lib/subscribers'

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const token = searchParams.get('token')

        if (!token) {
            return NextResponse.redirect(
                new URL('/unsubscribed?error=missing_token', request.url)
            )
        }

        // Unsubscribe the subscriber
        const result = await unsubscribeSubscriber(token)

        if (!result.success) {
            return NextResponse.redirect(
                new URL('/unsubscribed?error=invalid_token', request.url)
            )
        }

        // Redirect to success page with email
        return NextResponse.redirect(
            new URL(`/unsubscribed?email=${encodeURIComponent(result.email || '')}`, request.url)
        )
    } catch (error) {
        console.error('Unsubscribe Error:', error)
        return NextResponse.redirect(
            new URL('/unsubscribed?error=unexpected', request.url)
        )
    }
}
