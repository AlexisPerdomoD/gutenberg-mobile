import { FetcherOptions, Err } from '../models'

/**
 * fecher service to fetch data from diferent sources, recive the model of the type of response you are waiting for.
 * */
export const fetcher = async <T>(url: string, options?: FetcherOptions): Promise<T> => {
    const response = await fetch(url, options)
    if (!response.ok) throw new Error('Error when fetching data', { cause: response.statusText })
    return response.json() as Promise<T>
}
