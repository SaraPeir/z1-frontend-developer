import { configureStore } from '@reduxjs/toolkit'
import fetchApiReducer from './slices/fetchApi'

const store = configureStore({
  reducer: {
    fetchApi: fetchApiReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store