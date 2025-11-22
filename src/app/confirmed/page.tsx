"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Mail, Home, BookOpen } from "lucide-react"

function ConfirmedContent() {
    const searchParams = useSearchParams()
    const errorParam = searchParams.get("error")
    const emailParam = searchParams.get("email")

    const [status] = useState<"success" | "error">(errorParam ? "error" : "success")
    const [email] = useState<string>(emailParam ? decodeURIComponent(emailParam) : "")
    const [errorType] = useState<string>(errorParam || "")

    const getErrorMessage = () => {
        switch (errorType) {
            case "missing_token":
                return "The confirmation link is invalid. Please check your email and try again."
            case "invalid_token":
                return "This confirmation link has expired or has already been used."
            default:
                return "An unexpected error occurred. Please try subscribing again."
        }
    }

    if (status === "error") {
        return (
            <div className="min-h-screen bg-gradient-to-br from-midnight via-deep-teal to-ocean flex items-center justify-center px-4">
                <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <XCircle className="w-12 h-12 text-red-500" />
                    </div>

                    <h1 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-4">
                        Confirmation Failed
                    </h1>

                    <p className="text-lg text-midnight/70 mb-8">
                        {getErrorMessage()}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-sea-green hover:bg-sea-green/90 text-white" asChild>
                            <Link href="/threads">
                                <BookOpen className="w-5 h-5 mr-2" />
                                Visit AI Threads
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-midnight text-midnight hover:bg-midnight hover:text-white" asChild>
                            <Link href="/">
                                <Home className="w-5 h-5 mr-2" />
                                Go Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-midnight via-deep-teal to-ocean flex items-center justify-center px-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 bg-sea-green rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-pearl rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center relative z-10">
                <div className="w-20 h-20 bg-sea-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-sea-green" />
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-4">
                    Subscription Confirmed!
                </h1>

                <div className="bg-sea-green/5 border border-sea-green/20 rounded-lg p-6 mb-8">
                    <Mail className="w-8 h-8 text-sea-green mx-auto mb-3" />
                    <p className="text-lg text-midnight/80">
                        {email ? (
                            <>
                                <span className="font-semibold">{email}</span> is now subscribed to AI Threads
                            </>
                        ) : (
                            "You&apos;re now subscribed to AI Threads"
                        )}
                    </p>
                </div>

                <p className="text-lg text-midnight/70 mb-6">
                    Thank you for subscribing! You&apos;ll receive monthly insights on AI strategy, implementation, and innovation directly to your inbox.
                </p>

                <div className="bg-pearl/50 rounded-lg p-6 mb-8">
                    <h2 className="font-display text-xl font-bold text-midnight mb-3">
                        What to Expect
                    </h2>
                    <ul className="text-left space-y-2 text-midnight/70">
                        <li className="flex items-start">
                            <span className="text-sea-green mr-2">✓</span>
                            <span>Monthly newsletter with AI insights and case studies</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-sea-green mr-2">✓</span>
                            <span>Early access to new whitepapers and resources</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-sea-green mr-2">✓</span>
                            <span>Exclusive invitations to webinars and events</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-sea-green mr-2">✓</span>
                            <span>Practical tips for AI implementation</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-sea-green hover:bg-sea-green/90 text-white" asChild>
                        <Link href="/threads">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Explore AI Threads
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-midnight text-midnight hover:bg-midnight hover:text-white" asChild>
                        <Link href="/">
                            <Home className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                <p className="text-sm text-midnight/50 mt-8">
                    You can unsubscribe at any time using the link in our emails.
                </p>
            </div>
        </div>
    )
}

export default function ConfirmedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-midnight via-deep-teal to-ocean flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        }>
            <ConfirmedContent />
        </Suspense>
    )
}
