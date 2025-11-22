"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
    {
        title: "Services",
        href: "/services",
        items: [
            { title: "AI Strategy & Roadmap", href: "/services/ai-strategy-roadmap" },
            { title: "AI Governance", href: "/services/ai-governance" },
            { title: "Agentic AI", href: "/services/agentic-ai" },
            { title: "Conversational AI", href: "/services/conversational-ai" },
            { title: "Knowledge Engineering", href: "/services/knowledge-engineering" }
        ]
    },
    {
        title: "For PE Firms",
        href: "/for-pe-firms",
        items: [
            { title: "GP Advisory", href: "/for-pe-firms/gp-advisory" },
            { title: "Deal Flow & Due Diligence", href: "/for-pe-firms/due-diligence" },
            { title: "Portfolio Operations", href: "/for-pe-firms/portfolio-operations" },
            { title: "Exit Planning", href: "/for-pe-firms/exit-planning" },
            { title: "PE Resources", href: "/for-pe-firms/resources" }
        ]
    },
    {
        title: "For Businesses",
        href: "/for-businesses",
        items: [
            { title: "100-Day Transformation", href: "/for-businesses/100-day-transformation" },
            { title: "Knowledge Systems", href: "/for-businesses/knowledge-systems" },
            { title: "Process Automation", href: "/for-businesses/process-automation" },
            { title: "Exit Readiness", href: "/for-businesses/exit-readiness" },
            { title: "Business Resources", href: "/for-businesses/resources" }
        ]
    },
    {
        title: "For Life Sciences",
        href: "/for-life-sciences",
        items: [
            { title: "Medical Communications AI", href: "/for-life-sciences/medical-communications" },
            { title: "Clinical Data Intelligence", href: "/for-life-sciences/clinical-intelligence" },
            { title: "Pharmaceutical R&D", href: "/for-life-sciences/pharma-rd" },
            { title: "Healthcare Operations", href: "/for-life-sciences/healthcare-operations" },
            { title: "Regulatory Compliance", href: "/for-life-sciences/regulatory-compliance" },
            { title: "Life Sciences Resources", href: "/for-life-sciences/resources" }
        ]
    },
    {
        title: "About",
        href: "/about",
        items: [
            { title: "Our Story", href: "/about/story" },
            { title: "Our Team", href: "/about/team" },
            { title: "Our Approach", href: "/about/approach" },
            { title: "Partnerships", href: "/about/partnerships" },
            { title: "Attercop Labs", href: "/about/labs" }
        ]
    }
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Image
                        src="/images/logo-indigo.svg"
                        alt="Attercop"
                        width={140}
                        height={40}
                        className="h-8 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
                    {navigationItems.map((item) => (
                        <div
                            key={item.title}
                            className="relative group"
                            onMouseEnter={() => setOpenDropdown(item.title)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center gap-1 px-3 py-2 transition-colors hover:text-deep-teal/80 text-foreground/80"
                            >
                                {item.title}
                                <ChevronDown className="w-3 h-3" />
                            </Link>

                            {openDropdown === item.title && (
                                <div className="absolute left-0 top-full pt-2 w-64 animate-in fade-in-0 zoom-in-95">
                                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="block px-4 py-2 text-sm text-midnight hover:text-deep-teal hover:bg-pearl rounded-md transition-colors"
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Button variant="default" size="sm" className="ml-2" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                        <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-4 pb-3 pt-2 sm:px-3 bg-background border-b">
                        {navigationItems.map((item) => (
                            <div key={item.title}>
                                <Link
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                                <div className="pl-4 space-y-1">
                                    {item.items.map((subItem) => (
                                        <Link
                                            key={subItem.title}
                                            href={subItem.href}
                                            className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-accent hover:text-accent-foreground"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {subItem.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="px-3 py-2">
                            <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
