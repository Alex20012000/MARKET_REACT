import { setPage } from '../slices';
import { Dispatch } from '@reduxjs/toolkit';
import { getBooksAction } from './getBooksAction';
import { StoreGetState } from '@/lib/store';

export const setPageAction = () => async (dispatch: Dispatch, getState: StoreGetState) => {
    let page = getState().booksReducer.page;
    page++;

    dispatch(setPage(page));
    //@ts-ignore
    dispatch(getBooksAction('page'))
}; 