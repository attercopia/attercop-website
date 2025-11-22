import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Debug logging for environment variables
console.log('🔍 Supabase Client Initialization:')
console.log('   URL:', supabaseUrl)
console.log('   Key (first 50 chars):', supabaseAnonKey?.substring(0, 50))
console.log('   Key length:', supabaseAnonKey?.length)
console.log('   Key starts with eyJ:', supabaseAnonKey?.startsWith('eyJ'))
console.log('   Key starts with sb_:', supabaseAnonKey?.startsWith('sb_'))

// Create a placeholder client during build time
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false
        }
    })
    : createClient('https://placeholder.supabase.co', 'placeholder-key')

// Database types
export type Subscriber = {
    id: string
    email: string
    confirmed: boolean
    confirmation_token: string
    unsubscribe_token: string
    subscribed_at: string
    confirmed_at: string | null
    unsubscribed_at: string | null
    metadata: Record<string, unknown> | null
}
