import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './states/generalSlice'
import authSlice from './states/authSlice'

export const store = configureStore({
  reducer: {
    general: generalSlice,
    auth: authSlice
  },
})