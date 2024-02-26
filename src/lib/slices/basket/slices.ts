import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../books/slices';

export interface BasketBook {
    book: Book,
    count: number,
};

interface SliceBasket {
    list: BasketBook[] | null,
};

const initialState: SliceBasket = {
    list: null,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBookInBasket(state, action: PayloadAction<BasketBook>) {
            const _list =  [...(state.list || []), action.payload];
            state.list = _list;
        },
        setBookCount(state, action: PayloadAction<{id: string, count: number}>) {
            state.list = state.list?.map((item) => {
                if (action.payload.id === item.book.id) {
                    return({
                        ...item, count: action.payload.count
                    })
                }
                return(item)
            }) || [];
        }
    },
});

export default basketSlice.reducer;
export const { addBookInBasket, setBookCount } = basketSlice.actions;