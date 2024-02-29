import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer, { booksSlice } from './slices/books/slices';
import basketReducer, { basketSlice } from './slices/basket/slices';
import { persistReducer, persistStore } from 'redux-persist';

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { persistConfig } from './persist';



const rootReducer = combineReducers({
	booksReducer: booksSlice.reducer,
    basketReducer: basketSlice.reducer,
    
})
export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type StoreGetState = () => RootState;
