import { combineReducers, configureStore } from '@reduxjs/toolkit'
import activePageReducer from './activePageSlice'
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["activePage"],
}

const rootReducer = combineReducers({
  activePage: activePageReducer, 
  user: userReducer,
  cart: cartReducer
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)