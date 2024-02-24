import { fetchBooksApi } from '@/lib/api/books';
import { GetBooksParams } from '@/lib/api/books/fetchBooksApi';
import { Book, setBooks, setInfo } from '../slices';
import { Dispatch } from '@reduxjs/toolkit';
import { StoreGetState } from '@/lib/store';

export const getBooksAction = (type: 'category' | 'page') => async (dispatch: Dispatch, getState: StoreGetState) => {
    const {category, page, books} = getState().booksReducer;

    const params: GetBooksParams = { 
        q: `subject:${category}`,
        key: process.env.REACT_APP_GOOGLE_BOOKS_KEY,
        printType: 'books',
        startIndex: page * 6,
        maxResults: 6,
        langRestrict: 'en'
    };

    const res = await fetchBooksApi(
        params
    );

    const _books = [...(books || [])] as Book[];
    _books.push(...res.data.items);

    dispatch(setInfo({totalItems: res.data.totalItems, kind: res.data.kind}));
    if (type === 'category') {
        dispatch(setBooks(res.data.items));
    } else {
        dispatch(setBooks(_books));
    }
}; 
