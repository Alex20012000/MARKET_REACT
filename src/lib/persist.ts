/// <reference types="redux-persist" />
import storage from 'redux-persist/lib/storage';

// const createNoopStorage = () => {
//     return {
//         getItem(_key: string) {
//         return Promise.resolve(null);
//         },
//         setItem<T>(_key: string, value: T) {
//         return Promise.resolve(value);
//         },
//         removeItem(_key: string) {
//         return Promise.resolve();
//         },
//     };
// };
// const storage = typeof window !== "undefined" ? storagePersist : createNoopStorage();
export const persistRootConfig = {
    key: 'root',
	storage,
}

export const persistBasketConfig = {
    key: 'basket',
	storage,
}
