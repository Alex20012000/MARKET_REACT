import { createSelector } from 'reselect';
import { Book } from '@/lib/slices/books/slices';
import { RootState } from '@/lib/store';

const getBooks = (books: Book[] | null) => {
    return books;
}

export default createSelector((state: RootState) => state.booksReducer.books, getBooks)
