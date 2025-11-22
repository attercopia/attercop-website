import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-midnight via-deep-teal to-ocean flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 bg-sea-green rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-coral rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pearl rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* 404 with AI theme */}
                <div className="mb-8">
                    <div className="inline-block relative">
                        <h1 className="font-display text-9xl md:text-[12rem] font-bold text-white/10 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Sparkles className="w-20 h-20 md:w-32 md:h-32 text-sea-green animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Main message */}
                <div className="space-y-6 mb-12">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
                        Our AI Couldn&apos;t Find That Page
                    </h2>
                    <p className="text-xl md:text-2xl text-pearl/90 max-w-2xl mx-auto leading-relaxed">
                        Even with all our knowledge graphs, RAG systems, and agentic AI, this page remains elusive.
                    </p>
                    <p className="text-lg text-pearl/70 max-w-xl mx-auto">
                        It seems we&apos;ve encountered a hallucination. Unlike our production systems, this one we can&apos;t fix with a state machine.
                    </p>
                </div>

                {/* Tongue-in-cheek status report */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
                    <div className="space-y-3 text-left">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-pearl/60">Semantic Search</span>
                            <span className="text-red-400">❌ No Results</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-pearl/60">Knowledge Graph Query</span>
                            <span className="text-red-400">❌ Node Not Found</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-pearl/60">LLM Confidence Score</span>
                            <span className="text-red-400">0.00</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-pearl/60">Retrieval Augmented Generation</span>
                            <span className="text-red-400">❌ Failed to Retrieve</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-pearl/60">Your Patience</span>
                            <span className="text-sea-green">✓ Appreciated</span>
                        </div>
                    </div>
                </div>

                {/* Helpful suggestions */}
                <div className="mb-12">
                    <p className="text-pearl/80 mb-6 text-lg">
                        Perhaps you&apos;d like to try one of these instead:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <Link href="/" className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-sea-green/50 rounded-lg p-6 transition-all duration-300">
                            <Home className="w-8 h-8 text-sea-green mb-3 mx-auto group-hover:scale-110 transition-transform" />
                            <h3 className="font-display text-lg font-bold text-white mb-2">
                                Homepage
                            </h3>
                            <p className="text-pearl/60 text-sm">
                                Back to the beginning
                            </p>
                        </Link>

                        <Link href="/for-pe-firms" className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-sea-green/50 rounded-lg p-6 transition-all duration-300">
                            <Search className="w-8 h-8 text-sea-green mb-3 mx-auto group-hover:scale-110 transition-transform" />
                            <h3 className="font-display text-lg font-bold text-white mb-2">
                                For PE Firms
                            </h3>
                            <p className="text-pearl/60 text-sm">
                                AI strategy & advisory
                            </p>
                        </Link>

                        <Link href="/contact" className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-sea-green/50 rounded-lg p-6 transition-all duration-300">
                            <Sparkles className="w-8 h-8 text-sea-green mb-3 mx-auto group-hover:scale-110 transition-transform" />
                            <h3 className="font-display text-lg font-bold text-white mb-2">
                                Contact Us
                            </h3>
                            <p className="text-pearl/60 text-sm">
                                Let&apos;s talk AI
                            </p>
                        </Link>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-sea-green hover:bg-sea-green/90 text-white" asChild>
                        <Link href="/">
                            <Home className="w-5 h-5 mr-2" />
                            Take Me Home
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-midnight" asChild>
                        <Link href="javascript:history.back()">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Go Back
                        </Link>
                    </Button>
                </div>

                {/* Footer message */}
                <div className="mt-16 text-pearl/60 text-sm">
                    <p>
                        Error Code: 404 | Page Not Found | Hallucination Detected
                    </p>
                    <p className="mt-2">
                        If you believe this page should exist, please{" "}
                        <Link href="/contact" className="text-sea-green hover:text-sea-green/80 underline">
                            contact us
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
