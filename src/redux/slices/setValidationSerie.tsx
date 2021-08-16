import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import documents from '../../mocked-photos-links';

interface IsValid {
    isValid: boolean
};

const initialState: IsValid[] = [
    {
        isValid: false,
    }
]

export const setValidationSerie = createSlice({
  name: 'setValidation',
  initialState,
  reducers:{
        setValidation: (state, {payload}: PayloadAction<IsValid>) => {
         const newState = state.concat(payload);
         console.log('newState', newState)
         console.log('setPhoto')

         return state.concat(payload);
    }
  },
})

export default setValidationSerie.reducer;
export const { setValidation } = setValidationSerie.actions
