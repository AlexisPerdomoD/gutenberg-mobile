/**
 * Fetcher services options for diferent requests models.
 * */
export type FetcherOptions = {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    headers?: {
        contentType: 'application/json' | 'application/x-www-form-urlencoded'
        authorization?: string
    }
    body?: string | FormData
}
/**
 * General porpuses error model type.
 * */
export type Err = {
    status?: number
    errorType: string
    message?: string
}
/**
 * Book model type from Gutendex API.
 * */
export interface BookAuthor {
    name: string
    birth_year: number
    death_year: number
}
export interface Book {
    id: number
    title: string
    authors: BookAuthor[]
    subjects: string[]
    bookshelves: string[]
    languages: string[]
    copyright: boolean
    media_type: string
    formats: { [key: string]: string }
    download_count?: number
}

export interface GutendexResponse {
    count: number
    next: string
    previous: string
    results: Book[]
}
