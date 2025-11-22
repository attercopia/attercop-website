"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Home, BookOpen, Mail } from "lucide-react"

function UnsubscribedContent() {
    const searchParams = useSearchParams()
    const errorParam = searchParams.get("error")
    const emailParam = searchParams.get("email")

    const [status] = useState<"success" | "error">(errorParam ? "error" : "success")
    const [email] = useState<string>(emailParam ? decodeURIComponent(emailParam) : "")
    const [errorType] = useState<string>(errorParam || "")

    const getErrorMessage = () => {
        switch (errorType) {
            case "missing_token":
                return "The unsubscribe link is invalid. Please check your email and try again."
            case "invalid_token":
                return "This unsubscribe link has expired or has already been used."
            default:
                return "An unexpected error occurred. Please contact us at hello@attercop.com for assistance."
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
                        Unsubscribe Failed
                    </h1>

                    <p className="text-lg text-midnight/70 mb-8">
                        {getErrorMessage()}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-sea-green hover:bg-sea-green/90 text-white" asChild>
                            <Link href="/contact">
                                <Mail className="w-5 h-5 mr-2" />
                                Contact Us
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
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-midnight/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-midnight" />
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-4">
                    You&apos;ve Been Unsubscribed
                </h1>

                {email && (
                    <div className="bg-midnight/5 border border-midnight/20 rounded-lg p-6 mb-8">
                        <p className="text-lg text-midnight/80">
                            <span className="font-semibold">{email}</span> has been removed from AI Threads
                        </p>
                    </div>
                )}

                <p className="text-lg text-midnight/70 mb-6">
                    We&apos;re sorry to see you go! You&apos;ve been successfully unsubscribed from AI Threads and won&apos;t receive any more emails from us.
                </p>

                <div className="bg-pearl/50 rounded-lg p-6 mb-8">
                    <h2 className="font-display text-xl font-bold text-midnight mb-3">
                        We&apos;d Love Your Feedback
                    </h2>
                    <p className="text-midnight/70 mb-4">
                        Help us improve by letting us know why you unsubscribed. Your feedback is valuable to us.
                    </p>
                    <Button variant="outline" className="border-midnight text-midnight hover:bg-midnight hover:text-white" asChild>
                        <Link href="/contact">
                            Share Feedback
                        </Link>
                    </Button>
                </div>

                <div className="bg-sea-green/5 border border-sea-green/20 rounded-lg p-6 mb-8">
                    <h2 className="font-display text-xl font-bold text-midnight mb-3">
                        Still Want AI Insights?
                    </h2>
                    <p className="text-midnight/70 mb-4">
                        You can still access all our articles, whitepapers, and resources on our website anytime.
                    </p>
                    <Button className="bg-sea-green hover:bg-sea-green/90 text-white" asChild>
                        <Link href="/threads">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Browse AI Threads
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button size="lg" variant="outline" className="border-midnight text-midnight hover:bg-midnight hover:text-white" asChild>
                        <Link href="/">
                            <Home className="w-5 h-5 mr-2" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                <p className="text-sm text-midnight/50">
                    Changed your mind? You can always subscribe again at any time.
                </p>
            </div>
        </div>
    )
}

export default function UnsubscribedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-midnight via-deep-teal to-ocean flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        }>
            <UnsubscribedContent />
        </Suspense>
    )
}
