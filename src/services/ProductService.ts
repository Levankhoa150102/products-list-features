import useSWR from 'swr'
import { fetcher } from './fetcher';

export const ProductService = {
    GetProductsList(limit: number, skip: number) {
        const response  = useSWR(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`, fetcher)
        return response;
    },
    GetProductSearch(id: string) {
        const response  = useSWR(`https://dummyjson.com/products/search?q=${id}`, fetcher)
        return response;
    },

}