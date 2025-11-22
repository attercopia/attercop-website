import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Cookie Policy | Attercop',
    description: 'Learn about how Attercop uses cookies and similar technologies on our website.',
}

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-midnight via-deep-teal to-ocean py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                            Cookie Policy
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
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">1. What Are Cookies?</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                            </p>
                            <p className="text-midnight/80 leading-relaxed">
                                Cookies can be &quot;session cookies&quot; which are deleted when you close your browser, or &quot;persistent cookies&quot; which remain on your device until they expire or you delete them.
                            </p>
                        </div>

                        {/* How We Use Cookies */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">2. How We Use Cookies</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                Attercop uses cookies to improve your browsing experience, analyse site traffic, and provide personalised content. We use different types of cookies for different purposes:
                            </p>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3 mt-8">2.1 Strictly Necessary Cookies</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                These cookies are essential for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your cookie consent preferences.
                            </p>
                            <div className="bg-pearl/50 rounded-lg p-6 mb-6">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-midnight/10">
                                            <th className="text-left py-2 font-semibold text-midnight">Cookie Name</th>
                                            <th className="text-left py-2 font-semibold text-midnight">Purpose</th>
                                            <th className="text-left py-2 font-semibold text-midnight">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-midnight/5">
                                            <td className="py-3 text-midnight/80">attercop_cookie_consent</td>
                                            <td className="py-3 text-midnight/80">Stores your cookie consent preferences</td>
                                            <td className="py-3 text-midnight/80">12 months</td>
                                        </tr>
                                        <tr className="border-b border-midnight/5">
                                            <td className="py-3 text-midnight/80">attercop_cookie_preferences</td>
                                            <td className="py-3 text-midnight/80">Stores your granular cookie category choices</td>
                                            <td className="py-3 text-midnight/80">12 months</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-midnight/60 italic">
                                Note: These cookies cannot be disabled as they are essential for the website to function.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3 mt-8">2.2 Analytics Cookies</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the performance and user experience of our site.
                            </p>
                            <div className="bg-pearl/50 rounded-lg p-6 mb-6">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-midnight/10">
                                            <th className="text-left py-2 font-semibold text-midnight">Service</th>
                                            <th className="text-left py-2 font-semibold text-midnight">Purpose</th>
                                            <th className="text-left py-2 font-semibold text-midnight">Provider</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-midnight/5">
                                            <td className="py-3 text-midnight/80">Google Analytics</td>
                                            <td className="py-3 text-midnight/80">Website traffic analysis and user behaviour tracking</td>
                                            <td className="py-3 text-midnight/80">Google LLC</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-midnight/60">
                                These cookies are only set if you have given your explicit consent via our cookie banner.
                            </p>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3 mt-8">2.3 Marketing Cookies</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                These cookies are used to track visitors across websites to display relevant advertisements and measure the effectiveness of our marketing campaigns.
                            </p>
                            <div className="bg-pearl/50 rounded-lg p-6 mb-6">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-midnight/10">
                                            <th className="text-left py-2 font-semibold text-midnight">Service</th>
                                            <th className="text-left py-2 font-semibold text-midnight">Purpose</th>
                                            <th className="text-left py-2 font-semibold text-midnight">Provider</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-midnight/5">
                                            <td className="py-3 text-midnight/80">LinkedIn Insight Tag</td>
                                            <td className="py-3 text-midnight/80">Conversion tracking and audience insights</td>
                                            <td className="py-3 text-midnight/80">LinkedIn Corporation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-midnight/60">
                                These cookies are only set if you have given your explicit consent via our cookie banner.
                            </p>
                        </div>

                        {/* Why We Use Cookies */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">3. Why We Use Cookies</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                We use cookies for several important reasons:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                                <li><strong>Essential Functionality:</strong> To enable core website features and remember your preferences</li>
                                <li><strong>Performance Improvement:</strong> To understand how our website is used and identify areas for improvement</li>
                                <li><strong>User Experience:</strong> To provide personalised content and a better browsing experience</li>
                                <li><strong>Marketing Effectiveness:</strong> To measure the success of our marketing campaigns and show relevant content</li>
                                <li><strong>Security:</strong> To protect your data and prevent fraudulent activity</li>
                            </ul>
                        </div>

                        {/* Managing Cookies */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">4. Managing Your Cookie Preferences</h2>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">4.1 Our Cookie Banner</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                When you first visit our website, you&apos;ll see a cookie banner that allows you to choose which types of cookies you want to accept. You can:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-midnight/80 space-y-2">
                                <li><strong>Accept All:</strong> Allow all cookies including analytics and marketing</li>
                                <li><strong>Reject All:</strong> Only allow strictly necessary cookies</li>
                                <li><strong>Customise:</strong> Choose which cookie categories to enable</li>
                            </ul>

                            <div className="bg-sea-green/10 border border-sea-green/20 rounded-lg p-6 mb-6">
                                <p className="text-midnight font-semibold mb-2">Change Your Preferences</p>
                                <p className="text-midnight/80 mb-4">
                                    You can change your cookie preferences at any time by clicking the button below or the &quot;Cookie Settings&quot; link in our footer.
                                </p>
                                <button
                                    onClick={() => {
                                        if (typeof window !== 'undefined') {
                                            localStorage.removeItem('attercop_cookie_consent')
                                            window.location.reload()
                                        }
                                    }}
                                    className="bg-sea-green hover:bg-sea-green/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                                >
                                    Update Cookie Preferences
                                </button>
                            </div>

                            <h3 className="font-display text-xl font-semibold text-midnight mb-3">4.2 Browser Settings</h3>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                You can also control cookies through your browser settings. Most browsers allow you to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                                <li>View and delete cookies</li>
                                <li>Block third-party cookies</li>
                                <li>Block cookies from specific sites</li>
                                <li>Block all cookies</li>
                                <li>Delete all cookies when you close your browser</li>
                            </ul>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                For instructions on managing cookies in your specific browser, please visit:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-1">
                                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-sea-green hover:underline">Google Chrome</a></li>
                                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-sea-green hover:underline">Mozilla Firefox</a></li>
                                <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-sea-green hover:underline">Safari</a></li>
                                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-sea-green hover:underline">Microsoft Edge</a></li>
                            </ul>
                            <p className="text-sm text-midnight/60 italic">
                                Please note: Disabling cookies may affect the functionality of our website and prevent you from accessing certain features.
                            </p>
                        </div>

                        {/* Third-Party Cookies */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">5. Third-Party Cookies</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                Some cookies on our website are set by third-party services that appear on our pages. We do not control these cookies and you should check the third-party websites for more information about these cookies and how to manage them.
                            </p>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                Third parties whose cookies may be set on our website include:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-midnight/80 space-y-2">
                                <li><strong>Google LLC:</strong> Analytics and advertising - <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sea-green hover:underline">Privacy Policy</a></li>
                                <li><strong>LinkedIn Corporation:</strong> Marketing and analytics - <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sea-green hover:underline">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Updates to Policy */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">6. Changes to This Cookie Policy</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date at the top of this page.
                            </p>
                            <p className="text-midnight/80 leading-relaxed">
                                We encourage you to review this policy periodically to stay informed about how we use cookies.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="font-display text-3xl font-bold text-midnight mb-4">7. Contact Us</h2>
                            <p className="text-midnight/80 leading-relaxed mb-4">
                                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
                                <Link href="/terms" className="text-sea-green hover:underline">
                                    Terms of Service
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
