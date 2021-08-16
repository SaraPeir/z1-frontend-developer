import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import documents from '../../mocked-photos-links';

type Photo = {
  src: string
};

const initialState: Photo = {
  src: ''
}
    

export const setPhotoList = createSlice({
  name: 'setPhoto',
  initialState,
  reducers:{
        getImgInfo: (state, {payload}: PayloadAction<Photo>) => {
          console.log('PAYLOAD', payload)
          console.log('state', state)
         return state = payload
    }
  },
})

export default setPhotoList.reducer;
export const { getImgInfo } = setPhotoList.actions
