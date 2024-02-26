import { createSelector } from 'reselect';
import { RootState } from '@/lib/store';
import { BasketBook } from '../../slices';

const getListBasket = (books: BasketBook[] | null) => {
    return books;
}

export default createSelector((state: RootState) => state.basketReducer.list, getListBasket)
