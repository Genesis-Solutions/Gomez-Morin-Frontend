import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './states/generalSlice'

export const store = configureStore({
  reducer: {
    general: generalSlice
  },
})