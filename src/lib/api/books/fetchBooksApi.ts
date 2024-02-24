import { BookDTO } from '@/lib/slices/books/slices';
import { request } from '..';

export interface GetBooksParams {
    q: string,
    key: string | undefined,
    printType: string,
    startIndex: number,
    maxResults: number,
    langRestrict: 'en'
}

export const fetchBooksApi = async (params: GetBooksParams) => {
    const result = await request.get<GetBooksParams, BookDTO>({
        path: '/books/v1/volumes',
        params
    })
    return result;
};
