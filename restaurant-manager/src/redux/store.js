import { configureStore } from '@reduxjs/toolkit'
import pageNumberReducer from './pageNumberSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    pageNumber: pageNumberReducer, 
    user: userReducer
  }
})