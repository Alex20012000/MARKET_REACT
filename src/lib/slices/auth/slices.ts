import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Users {
    user: User
    password: string
};

const users: Users[] = [
    {
        user: {
            id: 89172,
            name: 'Alex',
            login: 'Alex2001',
            token: 'k0d239dm3892'
        }, 
        password: '123qwe123'
    }, 
    {
        user: {
            id: 23414,
            name: 'Sacha',
            login: 'Sacha2011',
            token: 'sd3f45s5df23'
        }, 
        password: '123rty123'
}
]

export interface User {
    id: number,
    name: string,
    login: string,
    token: string,
};

interface SliceAuth {
    user: User | null,
};

const initialState: SliceAuth = {
    user: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toAuthorization(state, action: PayloadAction<{login: string, password: string}>) {
            const user = users.find((item) => item.user.login === action.payload.login)
            console.log(user, 'user');
            
            if (user && user.password === action.payload.password) {
                state.user = user.user 
            }
        },
        logOut(state) {
            state.user = null;
        },
    },
});

export default authSlice.reducer;
export const { toAuthorization, logOut } = authSlice.actions;