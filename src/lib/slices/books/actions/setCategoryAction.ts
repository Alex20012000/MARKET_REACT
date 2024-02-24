import { Category, setCategory, setPage } from '../slices';
import { Dispatch } from '@reduxjs/toolkit';
import { getBooksAction } from './getBooksAction';

export const setCategoryAction = (category: Category) => async (dispatch: Dispatch) => {
    dispatch(setCategory(category));
    dispatch(setPage(0));

    //@ts-ignore
    dispatch(getBooksAction('category'))
}; 
