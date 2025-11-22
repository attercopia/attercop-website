import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Attercop",
    description: "Attercop's privacy policy explaining how we collect, use, and protect your personal data in compliance with UK GDPR and Data Protection Act 2018.",
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-pearl">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-midnight/60 text-lg">
                        Last Updated: 18/03/25
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {/* Who we are */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            Who we are
                        </h2>
                        <p className="text-midnight/80 text-lg">Attercop (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and ensuring compliance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018. This policy explains how we collect, use, and protect your personal data when you visit our website.</p>
                    </section>

                    {/* 1. Data We Collect */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            1. Data We Collect
                        </h2>
                        <p className="text-midnight/80 mb-4">
                            We only collect personal data when you:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                            <li>Subscribe to our newsletter (email address)</li>
                            <li>Fill out our enquiry form (name, company name, email address, and your message)</li>
                        </ul>
                        <p className="text-midnight/80">
                            We do not collect or process special category (sensitive) data.
                        </p>
                    </section>

                    {/* 2. Lawful Basis for Processing */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            2. Lawful Basis for Processing
                        </h2>
                        <p className="text-midnight/80 mb-4">
                            Under GDPR, we must have a lawful basis for processing your personal data:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                            <li>
                                <strong>Consent</strong> – When you subscribe to our newsletter, you give explicit consent for us to process your email address
                            </li>
                            <li>
                                <strong>Legitimate Interest</strong> – When you fill out an enquiry form, we process your data to respond to your request and provide information about our services
                            </li>
                        </ul>
                        <p className="text-midnight/80">
                            You can withdraw consent at any time.
                        </p>
                    </section>

                    {/* 3. How We Use Your Data */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            3. How We Use Your Data
                        </h2>
                        <p className="text-midnight/80 mb-4">
                            We use your data for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                            <li>
                                <strong>Newsletter Subscription:</strong> To send you updates, news, and relevant information. We use a third-party email service provider to manage and send newsletters, ensuring compliance with GDPR.
                            </li>
                            <li>
                                <strong>Enquiry Form:</strong> To respond to your message and provide information about our services.
                            </li>
                        </ul>
                        <p className="text-midnight/80">
                            We never sell, rent, or share your data with third parties for marketing purposes.
                        </p>
                    </section>

                    {/* 4. How Long We Keep Your Data */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            4. How Long We Keep Your Data
                        </h2>
                        <p className="text-midnight/80 mb-4">
                            We will only retain your personal data for as long as necessary:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                            <li>
                                <strong>Newsletter Subscribers:</strong> Until you unsubscribe
                            </li>
                            <li>
                                <strong>Enquiry Form Submissions:</strong> Up to 6 months after responding to your request, unless further engagement occurs
                            </li>
                        </ul>
                        <p className="text-midnight/80">
                            You can request deletion of your data at any time.
                        </p>
                    </section>

                    {/* 5. Data Storage and Security */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            5. Data Storage and Security
                        </h2>
                        <p className="text-midnight/80 mb-4">
                            We take all necessary security measures to protect your data, including encryption, access controls, and secure third-party services.
                        </p>
                        <p className="text-midnight/80">
                            If we transfer data outside the UK or EEA (e.g., if our third-party provider stores data internationally), we ensure appropriate safeguards, such as Standard Contractual Clauses (SCCs) or UK GDPR adequacy decisions.
                        </p>
                    </section>

                    {/* 6. Your Rights Under GDPR */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            6. Your Rights Under GDPR
                        </h2>
                        <p className="text-midnight/80 mb-4">
                            You have the following rights regarding your personal data:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                            <li>
                                <strong>Right to Access</strong> – Request a copy of the data we hold about you
                            </li>
                            <li>
                                <strong>Right to Rectification</strong> – Request correction of inaccurate or incomplete data
                            </li>
                            <li>
                                <strong>Right to Erasure</strong> (&quot;Right to be Forgotten&quot;) – Request deletion of your data in certain circumstances
                            </li>
                            <li>
                                <strong>Right to Restrict Processing</strong> – Request that we limit how we process your data
                            </li>
                            <li>
                                <strong>Right to Data Portability</strong> – Request to transfer your data to another provider
                            </li>
                            <li>
                                <strong>Right to Object</strong> – Object to processing based on legitimate interests
                            </li>
                            <li>
                                <strong>Right to Withdraw Consent</strong> – Withdraw your consent at any time for data processing based on consent (e.g., unsubscribing from our newsletter)
                            </li>
                        </ul>
                        <p className="text-midnight/80 mb-4">
                            To exercise your rights, contact us at{" "}
                            <a
                                href="mailto:hello@attercop.com?subject=Website: Privacy Policy Question"
                                className="text-ocean hover:text-deep-teal transition-colors"
                            >
                                hello@attercop.com
                            </a>
                        </p>
                        <p className="text-midnight/80">
                            If you believe we have mishandled your data, you can lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at{" "}
                            <a
                                href="https://www.ico.org.uk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ocean hover:text-deep-teal transition-colors"
                            >
                                www.ico.org.uk
                            </a>
                            .
                        </p>
                    </section>

                    {/* 7. Cookies */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            7. Cookies
                        </h2>
                        <p className="text-midnight/80">
                            We use cookies to improve your browsing experience. By using our website, you consent to our use of cookies unless you disable them in your browser settings.
                        </p>
                    </section>

                    {/* 8. Contact Us */}
                    <section className="mb-12">
                        <h2 className="font-display text-3xl font-bold text-midnight mb-4">
                            8. Contact Us
                        </h2>
                        <p className="text-midnight/80">
                            If you have any questions about this policy or your data, please contact us:
                        </p>
                        <p className="text-midnight/80 mt-4">
                            Email:{" "}
                            <a
                                href="mailto:hello@attercop.com"
                                className="text-ocean hover:text-deep-teal transition-colors font-semibold"
                            >
                                hello@attercop.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
