"use client"

import { useState } from "react"
import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Loader2, Send, Mail, MapPin, Phone } from "lucide-react"
import { Section } from "@/components/ui/section"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        setErrorMessage("")

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message")
            }

            setStatus("success")
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            setStatus("error")
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <main>
            <PageHero
                headline="Get in Touch"
                subheadline="Ready to transform your business with AI? Let's start the conversation."
                backgroundImage="/images/hero-background.png"
            />

            <Section>
                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h2 className="font-display text-3xl font-bold text-midnight mb-8">
                            Contact Information
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pearl rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-deep-teal" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-midnight mb-1">Email Us</h3>
                                    <p className="text-midnight/70">graeme@attercop.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pearl rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-deep-teal" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-midnight mb-1">Location</h3>
                                    <p className="text-midnight/70">
                                        Brighton, United Kingdom<br />
                                        Serving clients globally
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pearl rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-deep-teal" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-midnight mb-1">Call Us</h3>
                                    <p className="text-midnight/70">+44 (0) 777 555 1234</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-pearl rounded-2xl p-8">
                        <h2 className="font-display text-2xl font-bold text-midnight mb-6">
                            Send us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-midnight mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-midnight/10 focus:border-deep-teal focus:ring-1 focus:ring-deep-teal outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-midnight mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-midnight/10 focus:border-deep-teal focus:ring-1 focus:ring-deep-teal outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-midnight mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-midnight/10 focus:border-deep-teal focus:ring-1 focus:ring-deep-teal outline-none transition-colors resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>

                            {status === "success" && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                                    Message sent successfully! We&apos;ll get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                                    {errorMessage || "Something went wrong. Please try again."}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </Section>
        </main>
    )
}
