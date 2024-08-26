import { Params, GutendexResponse } from '../../models/gutendex'
import { fetcher } from '../fecher.service'

export class GutendexMannager {
    private url = new URL('http://gutendex.com/books/')
    clearParamsUrl() {
        this.url = new URL('http://gutendex.com/books/')
    }

    async getBooks(params?: Params) {
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                this.url.searchParams.set(key, value)
            }
        }
        return fetcher<GutendexResponse>(this.url.toString())
    }
}

export default new GutendexMannager()
