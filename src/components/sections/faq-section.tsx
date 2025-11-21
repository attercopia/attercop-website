"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
    question: string
    answer: string
}

interface FAQSectionProps {
    title?: string
    faqs: FAQItem[]
    className?: string
}

export function FAQSection({
    title = "Frequently Asked Questions",
    faqs,
    className = ""
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className={`py-24 bg-pearl ${className}`}>
            <div className="container mx-auto px-4">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-12 text-center">
                    {title}
                </h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-midnight pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-deep-teal transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-5 text-midnight/70 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
