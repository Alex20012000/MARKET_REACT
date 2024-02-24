import {createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SliceBasket {

}

const initialState: SliceBasket = {

};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            // state.page = action.payload;
        },
    },
});

export default basketSlice.reducer;
export const { setPage } = basketSlice.actions;