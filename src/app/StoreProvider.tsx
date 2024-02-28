'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { store, AppStore, persistor } from '../lib/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {

    return <React.StrictMode>
        <Provider store = {store()}>
            <PersistGate loading = {null} persistor = {persistor}>
                {children}
            </PersistGate>
        </Provider>
    </React.StrictMode>
}