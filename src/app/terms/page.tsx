import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Terms of Service | Attercop',
    description: 'Terms of Service governing the use of Attercop services and website.',
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-midnight via-deep-teal to-ocean py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-pearl/80">
                            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        {/* Introduction */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">1. Introduction</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                Welcome to Attercop Limited (&quot;Attercop&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, services, and any related offerings (collectively, the &quot;Services&quot;).
                            </p>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                            </p>
                            <p className="text-midnight/80 leading-relaxed">
                                Attercop Limited is a company registered in England and Wales under company number [Company Number], with our registered office at [Registered Address].
                            </p>
                        </div>

                        {/* Use of Services */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">2. Use of Services</h2>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">2.1 Permitted Use</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                You may use our Services for lawful purposes only and in accordance with these Terms. You agree not to use our Services:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                                <li>In any way that violates any applicable national or international law or regulation</li>
                                <li>To transmit any unsolicited or unauthorised advertising or promotional material</li>
                                <li>To impersonate or attempt to impersonate Attercop or any employee or representative</li>
                                <li>To engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Services</li>
                                <li>In any manner that could damage, disable, overburden, or impair our servers or networks</li>
                            </ul>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">2.2 Account Responsibilities</h3>
                            <p className="text-midnight/80 leading-relaxed">
                                If you create an account with us, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use of your account.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">3. Intellectual Property Rights</h2>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">3.1 Our Content</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Attercop, its licensors, or other providers of such material and are protected by UK and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">3.2 Limited Licence</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                We grant you a limited, non-exclusive, non-transferable, and revocable licence to access and use our Services for your personal or internal business purposes. This licence does not include any right to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                                <li>Resell or make commercial use of the Services or their contents</li>
                                <li>Collect and use any product listings, descriptions, or prices</li>
                                <li>Make any derivative use of the Services or their contents</li>
                                <li>Download or copy account information for the benefit of another third party</li>
                                <li>Use any data mining, robots, or similar data gathering and extraction tools</li>
                            </ul>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">3.3 Trademarks</h3>
                            <p className="text-midnight/80 leading-relaxed">
                                The Attercop name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Attercop or its affiliates. You must not use such marks without our prior written permission.
                            </p>
                        </div>

                        {/* Professional Services */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">4. Professional Services</h2>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">4.1 Consulting Engagements</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                Our professional AI consulting services are provided under separate written agreements. These Terms do not constitute a consulting agreement. Specific terms governing consulting engagements, including scope of work, deliverables, timelines, and fees, will be set forth in individual Statements of Work or similar agreements.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">4.2 No Professional Advice</h3>
                            <p className="text-midnight/80 leading-relaxed">
                                Content on our website is for general information purposes only and should not be construed as professional advice. We recommend that you seek appropriate professional advice before taking any action based on the content of our Services.
                            </p>
                        </div>

                        {/* Disclaimers and Limitations */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">5. Disclaimers and Limitation of Liability</h2>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">5.1 No Warranties</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                            </p>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                We do not warrant that the Services will be uninterrupted, timely, secure, or error-free, or that defects will be corrected. We make no warranty regarding the quality, accuracy, or completeness of any content or information obtained through the Services.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">5.2 Limitation of Liability</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ATTERCOP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                            </p>
                            <p className="text-midnight/80 leading-relaxed">
                                Nothing in these Terms shall exclude or limit our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.
                            </p>
                        </div>

                        {/* Indemnification */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">6. Indemnification</h2>
                            <p className="text-midnight/80 leading-relaxed">
                                You agree to indemnify, defend, and hold harmless Attercop and its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your violation of any rights of another party.
                            </p>
                        </div>

                        {/* Governing Law */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">7. Governing Law and Jurisdiction</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                These Terms and any dispute or claim arising out of or in connection with them or their subject matter shall be governed by and construed in accordance with the laws of England and Wales.
                            </p>
                            <p className="text-midnight/80 leading-relaxed">
                                The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or their subject matter.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">8. Changes to Terms</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date at the top of this page.
                            </p>
                            <p className="text-midnight/80 leading-relaxed">
                                Your continued use of the Services after any such changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you should discontinue your use of the Services.
                            </p>
                        </div>

                        {/* Termination */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">9. Termination</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                            </p>
                            <p className="text-midnight/80 leading-relaxed">
                                Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                            </p>
                        </div>

                        {/* Miscellaneous */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">10. Miscellaneous</h2>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">10.1 Entire Agreement</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                These Terms constitute the entire agreement between you and Attercop regarding the use of our Services, superseding any prior agreements between you and Attercop relating to your use of the Services.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">10.2 Waiver and Severability</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">10.3 Assignment</h3>
                            <p className="text-midnight/80 leading-relaxed">
                                You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">11. Contact Information</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="bg-pearl/50 rounded-lg p-6">
                                <p className="text-midnight font-semibold mb-2">Attercop Limited</p>
                                <p className="text-midnight/80">Email: <a href="mailto:hello@attercop.com" className="text-sea-green hover:underline">hello@attercop.com</a></p>
                                <p className="text-midnight/80">Website: <a href="https://attercop.com" className="text-sea-green hover:underline">www.attercop.com</a></p>
                            </div>
                        </div>

                        {/* Related Links */}
                        <div className="pt-8 border-t border-midnight/10">
                            <h3 className="font-display text-xl font-semibold text-midnight mb-4">Related Documents</h3>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/privacy" className="text-sea-green hover:underline">
                                    Privacy Policy
                                </Link>
                                <Link href="/cookies" className="text-sea-green hover:underline">
                                    Cookie Policy
                                </Link>
                                <Link href="/contact" className="text-sea-green hover:underline">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
