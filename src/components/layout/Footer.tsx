import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-midnight text-pearl py-16 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Services */}
                    <div className="space-y-4">
                        <h4 className="font-display text-lg font-semibold text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-pearl/80">
                            <li><Link href="/services/ai-strategy-roadmap" className="hover:text-sea-green transition-colors">AI Strategy & Roadmap</Link></li>
                            <li><Link href="/services/ai-governance" className="hover:text-sea-green transition-colors">AI Governance</Link></li>
                            <li><Link href="/services/generative-ai" className="hover:text-sea-green transition-colors">Generative AI</Link></li>
                            <li><Link href="/services/autonomous-ai" className="hover:text-sea-green transition-colors">Autonomous AI</Link></li>
                            <li><Link href="/services/secure-ai" className="hover:text-sea-green transition-colors">Secure AI</Link></li>
                            <li><Link href="/services/machine-learning" className="hover:text-sea-green transition-colors">Machine Learning</Link></li>
                            <li><Link href="/services/knowledge-engineering" className="hover:text-sea-green transition-colors">Graph Technologies</Link></li>
                            <li><Link href="/services/ai-ops" className="hover:text-sea-green transition-colors">AI Ops</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Industries */}
                    <div className="space-y-4">
                        <h4 className="font-display text-lg font-semibold text-white">Industries</h4>
                        <ul className="space-y-2 text-sm text-pearl/80">
                            <li><Link href="/for-pe-firms" className="hover:text-sea-green transition-colors">Private Equity</Link></li>
                            <li><Link href="/for-businesses" className="hover:text-sea-green transition-colors">Portfolio Companies</Link></li>
                            <li><Link href="/for-life-sciences" className="hover:text-sea-green transition-colors">Life Sciences</Link></li>
                            <li><Link href="/for-life-sciences/healthcare-operations" className="hover:text-sea-green transition-colors">Healthcare</Link></li>
                            <li><Link href="/services" className="hover:text-sea-green transition-colors">Financial Services</Link></li>
                            <li><Link href="/services" className="hover:text-sea-green transition-colors">Manufacturing</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="space-y-4">
                        <h4 className="font-display text-lg font-semibold text-white">Resources</h4>
                        <ul className="space-y-2 text-sm text-pearl/80">
                            <li><Link href="/insights" className="hover:text-sea-green transition-colors">Blog</Link></li>
                            <li><Link href="/insights/whitepapers" className="hover:text-sea-green transition-colors">Whitepapers</Link></li>
                            <li><Link href="/case-studies" className="hover:text-sea-green transition-colors">Case Studies</Link></li>
                            <li><Link href="/insights/webinars" className="hover:text-sea-green transition-colors">Webinars</Link></li>
                            <li><Link href="/assessment" className="hover:text-sea-green transition-colors">AI Assessment Tool</Link></li>
                            <li><Link href="/roi-calculator" className="hover:text-sea-green transition-colors">ROI Calculator</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="space-y-4">
                        <h4 className="font-display text-lg font-semibold text-white">Company</h4>
                        <ul className="space-y-2 text-sm text-pearl/80">
                            <li><Link href="/about" className="hover:text-sea-green transition-colors">About Us</Link></li>
                            <li><Link href="/about/team" className="hover:text-sea-green transition-colors">Our Team</Link></li>
                            <li><Link href="/careers" className="hover:text-sea-green transition-colors">Careers</Link></li>
                            <li><Link href="/about/partnerships" className="hover:text-sea-green transition-colors">Partnerships</Link></li>
                            <li><Link href="/news" className="hover:text-sea-green transition-colors">News</Link></li>
                            <li><Link href="/contact" className="hover:text-sea-green transition-colors">Contact</Link></li>
                        </ul>
                        <div className="pt-4">
                            <p className="text-sm text-pearl/60 mb-2">hello@attercop.com</p>
                            <p className="text-sm text-pearl/60">Brighton • London</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-pearl/40">
                            © {new Date().getFullYear()} Attercop Limited. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="text-sm text-pearl/40 hover:text-pearl transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-pearl/40 hover:text-pearl transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="text-sm text-pearl/40 hover:text-pearl transition-colors">
                                Cookie Policy
                            </Link>
                            <div className="flex items-center gap-3 ml-4">
                                <Link href="https://linkedin.com/company/attercop" target="_blank" rel="noopener noreferrer" className="text-pearl/40 hover:text-sea-green transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                                <Link href="https://twitter.com/attercop" target="_blank" rel="noopener noreferrer" className="text-pearl/40 hover:text-sea-green transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
