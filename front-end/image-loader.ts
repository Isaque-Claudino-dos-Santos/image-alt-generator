'use client'

export type ImageLoaderOptinos = {
    src: string
}

export default function imageLoader(options?: ImageLoaderOptinos) {
    return `http://localhost:8000${options?.src}`
}

