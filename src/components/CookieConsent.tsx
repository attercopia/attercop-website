"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CookiePreferences {
    necessary: boolean
    analytics: boolean
    marketing: boolean
}

const COOKIE_CONSENT_KEY = 'attercop_cookie_consent'
const COOKIE_PREFERENCES_KEY = 'attercop_cookie_preferences'
const CONSENT_EXPIRY_DAYS = 365

export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false)
    const [showPreferences, setShowPreferences] = useState(false)
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true, // Always true, can't be disabled
        analytics: false,
        marketing: false,
    })

    useEffect(() => {
        // Check if user has already given consent
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
        const consentDate = consent ? JSON.parse(consent).date : null

        if (!consent || isConsentExpired(consentDate)) {
            // Show banner after a short delay for better UX
            setTimeout(() => setShowBanner(true), 1000)
        } else {
            // Load saved preferences
            const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)
            if (savedPreferences) {
                setPreferences(JSON.parse(savedPreferences))
                initializeAnalytics(JSON.parse(savedPreferences))
            }
        }
    }, [])

    const isConsentExpired = (date: string | null): boolean => {
        if (!date) return true
        const consentDate = new Date(date)
        const now = new Date()
        const daysDiff = (now.getTime() - consentDate.getTime()) / (1000 * 60 * 60 * 24)
        return daysDiff > CONSENT_EXPIRY_DAYS
    }

    const saveConsent = (prefs: CookiePreferences) => {
        const consent = {
            date: new Date().toISOString(),
            version: '1.0',
        }
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))
        localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs))
        setPreferences(prefs)
        initializeAnalytics(prefs)
    }

    const initializeAnalytics = (prefs: CookiePreferences) => {
        // Only initialize analytics if user has consented
        if (prefs.analytics && typeof window !== 'undefined') {
            // Initialize Google Analytics here when implemented
            // Example: window.gtag('consent', 'update', { analytics_storage: 'granted' })
            console.log('Analytics enabled')
        }
    }

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            analytics: true,
            marketing: true,
        }
        saveConsent(allAccepted)
        setShowBanner(false)
        setShowPreferences(false)
    }

    const handleRejectAll = () => {
        const onlyNecessary: CookiePreferences = {
            necessary: true,
            analytics: false,
            marketing: false,
        }
        saveConsent(onlyNecessary)
        setShowBanner(false)
        setShowPreferences(false)
    }

    const handleSavePreferences = () => {
        saveConsent(preferences)
        setShowBanner(false)
        setShowPreferences(false)
    }

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === 'necessary') return // Can't disable necessary cookies
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
    }

    if (!showBanner) return null

    return (
        <>
            {/* Main Cookie Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-sm border-t border-white/10 shadow-2xl">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                We Value Your Privacy
                            </h3>
                            <p className="text-pearl/80 text-sm leading-relaxed">
                                We use cookies to improve your browsing experience, analyse site traffic, and personalise content.
                                By clicking &quot;Accept All&quot;, you consent to our use of cookies. You can manage your preferences or learn more in our{' '}
                                <Link href="/cookies" className="text-sea-green hover:underline">
                                    Cookie Policy
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <Button
                                variant="outline"
                                onClick={() => setShowPreferences(true)}
                                className="border-pearl/20 text-pearl hover:bg-white/10"
                            >
                                <Settings className="w-4 h-4 mr-2" />
                                Customise
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleRejectAll}
                                className="border-pearl/20 text-pearl hover:bg-white/10"
                            >
                                Reject All
                            </Button>
                            <Button
                                onClick={handleAcceptAll}
                                className="bg-sea-green hover:bg-sea-green/90 text-white"
                            >
                                Accept All
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preferences Modal */}
            {showPreferences && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-midnight/10">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-display font-bold text-midnight">
                                    Cookie Preferences
                                </h2>
                                <button
                                    onClick={() => setShowPreferences(false)}
                                    className="text-midnight/40 hover:text-midnight transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            <p className="text-midnight/70">
                                We use different types of cookies to optimise your experience on our website.
                                Click on the categories below to learn more and change our default settings.
                                However, blocking some types of cookies may impact your experience of the site.
                            </p>

                            {/* Necessary Cookies */}
                            <div className="border border-midnight/10 rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-midnight mb-1">
                                            Strictly Necessary Cookies
                                        </h3>
                                        <p className="text-sm text-midnight/60">
                                            These cookies are essential for the website to function properly.
                                            They enable basic functions like page navigation and access to secure areas.
                                            The website cannot function properly without these cookies.
                                        </p>
                                    </div>
                                    <div className="ml-4">
                                        <div className="w-12 h-6 bg-sea-green rounded-full flex items-center px-1">
                                            <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                                        </div>
                                        <span className="text-xs text-midnight/40 mt-1 block">Always On</span>
                                    </div>
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="border border-midnight/10 rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-midnight mb-1">
                                            Analytics Cookies
                                        </h3>
                                        <p className="text-sm text-midnight/60">
                                            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                            This helps us improve the performance and user experience.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => togglePreference('analytics')}
                                        className="ml-4"
                                        aria-label="Toggle analytics cookies"
                                    >
                                        <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                                            preferences.analytics ? 'bg-sea-green' : 'bg-midnight/20'
                                        }`}>
                                            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                                preferences.analytics ? 'translate-x-6' : ''
                                            }`}></div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="border border-midnight/10 rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-midnight mb-1">
                                            Marketing Cookies
                                        </h3>
                                        <p className="text-sm text-midnight/60">
                                            These cookies are used to track visitors across websites to display relevant advertisements.
                                            They may be set by our advertising partners to build a profile of your interests.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => togglePreference('marketing')}
                                        className="ml-4"
                                        aria-label="Toggle marketing cookies"
                                    >
                                        <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                                            preferences.marketing ? 'bg-sea-green' : 'bg-midnight/20'
                                        }`}>
                                            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                                                preferences.marketing ? 'translate-x-6' : ''
                                            }`}></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-midnight/10 flex flex-col sm:flex-row gap-3">
                            <Button
                                variant="outline"
                                onClick={handleRejectAll}
                                className="flex-1"
                            >
                                Reject All
                            </Button>
                            <Button
                                onClick={handleSavePreferences}
                                className="flex-1 bg-sea-green hover:bg-sea-green/90 text-white"
                            >
                                Save Preferences
                            </Button>
                            <Button
                                onClick={handleAcceptAll}
                                className="flex-1 bg-midnight hover:bg-midnight/90 text-white"
                            >
                                Accept All
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

// Export function to open cookie preferences from anywhere
export const openCookiePreferences = () => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('openCookiePreferences'))
    }
}
