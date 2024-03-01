import { useDispatch, useSelector, useStore } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'
import { useState } from 'react';

function useLoginPopupToggle(): [boolean, () => void] {
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

    const toggleLoginPopup = () => {
        setIsLoginPopupOpen(prevState => !prevState);
    };

    return [isLoginPopupOpen, toggleLoginPopup];
}

export default useLoginPopupToggle;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
