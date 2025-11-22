import Link from "next/link"
import Image from "next/image"
import { Thread } from "@/lib/threads"

interface ThreadCardProps {
    thread: Thread
}

export function ThreadCard({ thread }: ThreadCardProps) {
    const formattedDate = new Date(thread.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <Link
            href={`/threads/${thread.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden border border-midnight/10 hover:shadow-xl transition-all duration-300"
        >
            {/* Hero Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-pearl">
                <Image
                    src={thread.heroImage}
                    alt={thread.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                {thread.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {thread.tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-semibold text-deep-teal bg-sea-green/10 px-3 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-midnight mb-2 group-hover:text-deep-teal transition-colors line-clamp-2">
                    {thread.title}
                </h3>

                {/* Description */}
                <p className="text-midnight/70 mb-4 line-clamp-3">
                    {thread.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-midnight/60">
                    <span className="font-medium">{thread.author}</span>
                    <time dateTime={thread.publishedAt}>{formattedDate}</time>
                </div>
            </div>
        </Link>
    )
}
