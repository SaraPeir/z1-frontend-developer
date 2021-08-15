import { configureStore } from '@reduxjs/toolkit'
import fetchApiReducer from './slices/fetchApi'
import setPhotoReducer from './slices/setPhoto'

const store = configureStore({
  reducer: {
    fetchApi: fetchApiReducer,
    setPhoto: setPhotoReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store