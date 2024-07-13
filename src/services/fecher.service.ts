import { FetcherOptions, Err } from '../models'
/**
 * fecher service to fetch data from diferent sources, recive the model of the type of response you are waiting for. 
 * */
export const fecher = async <T>(url: string, options?: FetcherOptions): Promise<T | Err> => {
    try {
        const response = await fetch(url, options)
        if (!response.ok)
            return {
                status: response.status,
                errorType: response.statusText
            }
        return response.json() as Promise<T>
    } catch (e) {
        let err = e as Error
        return {
            status: 500,
            errorType: 'Internal Server Error',
            message: err.message
        }
    }
}
