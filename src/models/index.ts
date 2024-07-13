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
