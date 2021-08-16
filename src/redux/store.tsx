import { configureStore } from '@reduxjs/toolkit'
import fetchApiReducer from './slices/fetchApi'
import setPhotoReducer from './slices/setPhoto'
import setPhotoSerieReducer from './slices/setPhotoSerie'

const store = configureStore({
  reducer: {
    fetchApi: fetchApiReducer,
    setPhoto: setPhotoReducer,
    setPhotoSerie: setPhotoSerieReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store