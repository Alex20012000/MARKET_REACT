import { createSelector } from 'reselect';
import { RootState } from '@/lib/store';

const getCategory = (category: string) => {
    return category;
}

export default createSelector((state: RootState) => state.booksReducer.category, getCategory)