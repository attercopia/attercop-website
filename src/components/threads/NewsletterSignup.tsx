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
            // Send AI Threads mailing list signup via SendGrid
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "AI Threads Subscriber",
                    email: email,
                    message: `New AI Threads mailing list signup from: ${email}`,
                    subject: "New AI Threads Mailing List Signup"
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to subscribe")
            }

            setStatus("success")
            setMessage("Thanks for subscribing to AI Threads! You'll receive monthly insights on AI strategy and innovation.")
            setEmail("")
        } catch (error) {
            setStatus("error")
            setMessage("Something went wrong. Please try again or contact us at hello@attercop.com")
            console.error("Newsletter signup error:", error)
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
