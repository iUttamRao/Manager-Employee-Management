import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    auth : authReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
        reducer:persistedReducer,
        middleware:(getDefaultMiddleware) => [
            ...getDefaultMiddleware({
                serializableCheck:false
            }),
        ]
    });
const persistor = persistStore(store)

export {store, persistor}