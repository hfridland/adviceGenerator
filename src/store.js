import { configureStore } from '@reduxjs/toolkit'
import adviceReducer from './slices/adviceSlice'
import errorReducer from './slices/errorSlice'

export const store = configureStore({
  reducer: {
    advice: adviceReducer,
    error: errorReducer,
  },
})
