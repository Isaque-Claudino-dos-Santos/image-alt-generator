export interface Media {
    id: number
    name: string
    file_name: string
    mime_type: string
    path: string
    disk: string
    file_hash: string
    collection?: string[]
    size: number
    link: string
}

