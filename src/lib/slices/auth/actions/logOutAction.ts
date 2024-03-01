import { Dispatch } from '@reduxjs/toolkit';
import { StoreGetState } from '@/lib/store';
import { logOut } from '../slices';
import { resetBasket } from '../../basket/slices';

export const logOutAction = () => (dispatch: Dispatch, getState: StoreGetState) => {
    const state = getState();
    if (!state.authReducer.user?.token) {
        return;
    }
    dispatch(logOut())
    dispatch(resetBasket())
};