import { Dispatch } from '@reduxjs/toolkit';
import { StoreGetState } from '@/lib/store';
import { BasketBook, addBookInBasket } from '../../slices';

export const adBookInBasketAction = (book: BasketBook) => async (dispatch: Dispatch, getState: StoreGetState) => {
    const state = getState();
    if (!state.authReducer.user?.token) {
        return;
    }
    dispatch(addBookInBasket(book))
};