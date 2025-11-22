"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function NewsletterSignup() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        setMessage("")

        try {
            // TODO: Integrate with actual newsletter service (Beehiiv, Mailchimp, etc.)
            // For now, we'll simulate a successful subscription
            await new Promise(resolve => setTimeout(resolve, 1000))

            setStatus("success")
            setMessage("Thanks for subscribing! Check your email to confirm.")
            setEmail("")
        } catch {
            setStatus("error")
            setMessage("Something went wrong. Please try again.")
        }
    }

    return (
        <div className="bg-gradient-to-br from-deep-teal to-ocean rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                    Subscribe to AI Threads
                </h3>
                <p className="text-pearl/90 text-lg mb-8">
                    Get monthly insights on AI strategy, implementation, and innovation delivered to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        disabled={status === "loading"}
                        className="flex-1 px-6 py-4 rounded-lg text-midnight focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                    <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-sea-green hover:bg-sea-green/90 text-white px-8 py-4 text-lg font-semibold"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                Subscribing...
                            </>
                        ) : (
                            "Subscribe"
                        )}
                    </Button>
                </form>

                {message && (
                    <p className={`mt-4 text-sm ${status === "success" ? "text-sea-green" : "text-red-300"}`}>
                        {message}
                    </p>
                )}

                <p className="text-pearl/60 text-sm mt-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </div>
    )
}
