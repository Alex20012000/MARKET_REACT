import { createSelector } from 'reselect';
import { RootState } from '@/lib/store';
import { BasketBook } from '../../slices';

const getAmountBasket = (books: BasketBook[] | null) => {
    return books?.reduce((acc, curr) => {
        return acc + (curr.book.saleInfo?.listPrice?.amount || 0) * curr.count
    }, 0);
}

export default createSelector((state: RootState) => state.basketReducer.list, getAmountBasket)