import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/sanity/env'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import type { PortableTextBlock } from 'sanity'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}

export interface ThreadMetadata {
    title: string
    slug: string
    description: string
    author: string
    publishedAt: string
    heroImage: string
    tags: string[]
}

export interface Thread extends ThreadMetadata {
    content: PortableTextBlock[] // Portable Text
}

export async function getAllThreads(): Promise<Thread[]> {
    try {
        const threads = await client.fetch<Thread[]>(`
            *[_type == "thread"] | order(publishedAt desc) {
                title,
                "slug": slug.current,
                description,
                author,
                publishedAt,
                heroImage,
                tags,
                content
            }
        `)

        return threads.map((thread) => ({
            ...thread,
            heroImage: thread.heroImage ? urlFor(thread.heroImage).url() : '/images/placeholder.jpg'
        }))
    } catch (error) {
        console.error('Error fetching threads:', error)
        return []
    }
}

export async function getThreadBySlug(slug: string): Promise<Thread | null> {
    try {
        const thread = await client.fetch<Thread>(`
            *[_type == "thread" && slug.current == $slug][0] {
                title,
                "slug": slug.current,
                description,
                author,
                publishedAt,
                heroImage,
                tags,
                content
            }
        `, { slug })

        if (!thread) return null

        return {
            ...thread,
            heroImage: thread.heroImage ? urlFor(thread.heroImage).url() : '/images/placeholder.jpg'
        }
    } catch (error) {
        console.error(`Error fetching thread ${slug}:`, error)
        return null
    }
}

export async function getRelatedThreads(currentSlug: string, count: number = 3): Promise<Thread[]> {
    try {
        const threads = await client.fetch<Thread[]>(`
            *[_type == "thread" && slug.current != $currentSlug] | order(publishedAt desc) [0...$count] {
                title,
                "slug": slug.current,
                description,
                author,
                publishedAt,
                heroImage,
                tags
            }
        `, { currentSlug, count })

        return threads.map((thread) => ({
            ...thread,
            heroImage: thread.heroImage ? urlFor(thread.heroImage).url() : '/images/placeholder.jpg'
        }))
    } catch (error) {
        console.error('Error fetching related threads:', error)
        return []
    }
}

export async function getThreadsByTag(tag: string): Promise<Thread[]> {
    try {
        const threads = await client.fetch(`
            *[_type == "thread" && $tag in tags] | order(publishedAt desc) {
                title,
                "slug": slug.current,
                description,
                author,
                publishedAt,
                heroImage,
                tags
            }
        `, { tag } as any) as Thread[] // eslint-disable-line @typescript-eslint/no-explicit-any

        return threads.map((thread) => ({
            ...thread,
            heroImage: thread.heroImage ? urlFor(thread.heroImage).url() : '/images/placeholder.jpg'
        }))
    } catch (error) {
        console.error('Error fetching threads by tag:', error)
        return []
    }
}
