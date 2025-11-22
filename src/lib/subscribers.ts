import { createClient } from '@supabase/supabase-js'
import type { Subscriber } from './supabase'
import crypto from 'crypto'

// Create Supabase client inline to ensure env vars are available
function getSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Missing Supabase environment variables')
    }

    return createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false
        }
    })
}

/**
 * Generate a secure random token
 */
function generateToken(): string {
    return crypto.randomBytes(32).toString('hex')
}

/**
 * Add a new subscriber with confirmation and unsubscribe tokens
 */
export async function addSubscriber(email: string): Promise<{
    success: boolean
    subscriber?: Subscriber
    error?: string
}> {
    try {
        const supabase = getSupabaseClient()
        console.log('🔍 Checking for existing subscriber:', email.toLowerCase())
        // Check if email already exists
        const { data: existing, error: checkError } = await supabase
            .from('ai_threads_subscribers')
            .select('*')
            .eq('email', email.toLowerCase())
            .maybeSingle()

        if (checkError) {
            console.error('🔴 Error checking existing subscriber:', checkError)
            console.error('   Error code:', checkError.code)
            console.error('   Error message:', checkError.message)
            console.error('   Error details:', checkError.details)
            console.error('   Error hint:', checkError.hint)
            throw checkError
        }

        if (existing) {
            // If already confirmed, return message
            if (existing.confirmed && !existing.unsubscribed_at) {
                return {
                    success: false,
                    error: 'This email is already subscribed'
                }
            }

            // If previously unsubscribed or unconfirmed, allow re-subscription
            if (existing.unsubscribed_at || !existing.confirmed) {
                // Generate new tokens
                const confirmationToken = generateToken()
                const unsubscribeToken = generateToken()

                const { data, error } = await supabase
                    .from('ai_threads_subscribers')
                    .update({
                        confirmed: false,
                        confirmation_token: confirmationToken,
                        unsubscribe_token: unsubscribeToken,
                        subscribed_at: new Date().toISOString(),
                        confirmed_at: null,
                        unsubscribed_at: null
                    })
                    .eq('id', existing.id)
                    .select()
                    .single()

                if (error) {
                    return { success: false, error: error.message }
                }

                return { success: true, subscriber: data }
            }
        }

        // Create new subscriber
        const confirmationToken = generateToken()
        const unsubscribeToken = generateToken()

        const { data, error } = await supabase
            .from('ai_threads_subscribers')
            .insert({
                email: email.toLowerCase(),
                confirmation_token: confirmationToken,
                unsubscribe_token: unsubscribeToken,
                confirmed: false
            })
            .select()
            .single()

        if (error) {
            console.error('🔴 Supabase insert error:', error)
            console.error('   Error code:', error.code)
            console.error('   Error message:', error.message)
            console.error('   Error details:', error.details)
            console.error('   Error hint:', error.hint)
            return { success: false, error: error.message }
        }

        return { success: true, subscriber: data }
    } catch (error) {
        console.error('Error adding subscriber:', error)
        return {
            success: false,
            error: 'An unexpected error occurred'
        }
    }
}

/**
 * Confirm a subscriber using their confirmation token
 */
export async function confirmSubscriber(token: string): Promise<{
    success: boolean
    email?: string
    error?: string
}> {
    try {
        const { data, error } = await supabase
            .from('ai_threads_subscribers')
            .update({
                confirmed: true,
                confirmed_at: new Date().toISOString()
            })
            .eq('confirmation_token', token)
            .is('unsubscribed_at', null)
            .select('email')
            .single()

        if (error || !data) {
            return {
                success: false,
                error: 'Invalid or expired confirmation link'
            }
        }

        return { success: true, email: data.email }
    } catch (error) {
        console.error('Error confirming subscriber:', error)
        return {
            success: false,
            error: 'An unexpected error occurred'
        }
    }
}

/**
 * Unsubscribe a subscriber using their unsubscribe token
 */
export async function unsubscribeSubscriber(token: string): Promise<{
    success: boolean
    email?: string
    error?: string
}> {
    try {
        const { data, error } = await supabase
            .from('ai_threads_subscribers')
            .update({
                unsubscribed_at: new Date().toISOString()
            })
            .eq('unsubscribe_token', token)
            .is('unsubscribed_at', null)
            .select('email')
            .single()

        if (error || !data) {
            return {
                success: false,
                error: 'Invalid or expired unsubscribe link'
            }
        }

        return { success: true, email: data.email }
    } catch (error) {
        console.error('Error unsubscribing subscriber:', error)
        return {
            success: false,
            error: 'An unexpected error occurred'
        }
    }
}

/**
 * Get all confirmed subscribers (for admin use)
 */
export async function getConfirmedSubscribers(): Promise<{
    success: boolean
    subscribers?: Subscriber[]
    error?: string
}> {
    try {
        const { data, error } = await supabase
            .from('ai_threads_subscribers')
            .select('*')
            .eq('confirmed', true)
            .is('unsubscribed_at', null)
            .order('confirmed_at', { ascending: false })

        if (error) {
            return { success: false, error: error.message }
        }

        return { success: true, subscribers: data }
    } catch (error) {
        console.error('Error fetching subscribers:', error)
        return {
            success: false,
            error: 'An unexpected error occurred'
        }
    }
}

/**
 * Get subscriber stats
 */
export async function getSubscriberStats(): Promise<{
    success: boolean
    stats?: {
        total: number
        confirmed: number
        unconfirmed: number
        unsubscribed: number
    }
    error?: string
}> {
    try {
        const { data: all, error: allError } = await supabase
            .from('ai_threads_subscribers')
            .select('confirmed, unsubscribed_at', { count: 'exact' })

        if (allError || !all) {
            return { success: false, error: allError?.message }
        }

        const total = all.length
        const confirmed = all.filter(s => s.confirmed && !s.unsubscribed_at).length
        const unconfirmed = all.filter(s => !s.confirmed && !s.unsubscribed_at).length
        const unsubscribed = all.filter(s => s.unsubscribed_at).length

        return {
            success: true,
            stats: { total, confirmed, unconfirmed, unsubscribed }
        }
    } catch (error) {
        console.error('Error fetching subscriber stats:', error)
        return {
            success: false,
            error: 'An unexpected error occurred'
        }
    }
}
