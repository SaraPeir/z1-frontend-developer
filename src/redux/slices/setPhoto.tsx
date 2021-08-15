import { createSlice } from '@reduxjs/toolkit'
import documents from '../../mocked-photos-links';

type Photo = {
  srcPhoto: string,
};

const initialState = {
  photo: {
      srcPhoto: '',
    } as Photo
  };

export const setPhoto = createSlice({
  name: 'setPhoto',
  initialState,
  reducers:{
    assignPhoto: (state) => {
      const getRandomNumber = (max:number, min:number) => Math.floor(Math.random() * (max - min)) + min;
      const randomNumber = getRandomNumber(0,3);
        return {
          ...state,
          photo: {
              ...state.photo,
              srcPhoto: documents[randomNumber]
          }
        }
      },
      resetPhoto: (state) => {
        return {
          ...state,
          photo: {
              ...state.photo,
              srcPhoto: ''
          }
        }
      },
  },
})

export default setPhoto.reducer;
export const { assignPhoto, resetPhoto } = setPhoto.actions
