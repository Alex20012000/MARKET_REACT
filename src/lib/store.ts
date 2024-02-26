import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/books/slices';
import basketReducer from './slices/basket/slices';
import { persistConfig } from './persist';
import { persistReducer, persistStore } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({ booksReducer, basketReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = () => configureStore({
    reducer: persistedReducer,
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
