import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/books/slices';
import basketReducer from './slices/basket/slices';
import { persistRootConfig, persistBasketConfig } from './persist';
import { persistReducer, persistStore } from 'redux-persist';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const persistedReducer = combineReducers({ booksReducer, basketReducer: persistReducer(persistBasketConfig, basketReducer) }) ;

export const store = () => configureStore({
    reducer: persistReducer(persistRootConfig, persistedReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store());

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export type StoreGetState = () => RootState;
