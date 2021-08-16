import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetch from 'isomorphic-fetch'

export const fetchApiThunk:any = createAsyncThunk(
    'fetchApiSlice',
    async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            };

            const apiUrl = `https://front-exercise.z1.digital/evaluations`
            const response = await fetch(apiUrl, requestOptions)
            const data = await response.json()
            return data
        } catch (err) {
            throw err;
        }
    }
)

type Value = {
    hasPhotoBeenTakenCorrectly: boolean,
    apiHasBeenCalled: boolean
};

const initialState = {
    value: {
        hasPhotoBeenTakenCorrectly: false,
        apiHasBeenCalled: false
    } as Value
  };

export const fetchApiSlice = createSlice({
  name: 'fetchApiSlice',
  initialState,
  reducers:{
    reset: (state) => {
        return {
          ...state,
          value: {
              ...state.value,
              apiHasBeenCalled: false
          }
        }
      },
      resetResult: (state) => {
        return {
          ...state,
          value: {
              ...state.value,
              hasPhotoBeenTakenCorrectly: false
          }
        }
      },
  },
  extraReducers: {
    [fetchApiThunk.fulfilled]: (state, action)=> { 
        let data;
        
        try {
            data = action.payload.summary.outcome
        } catch {
            data = null
        }

        console.log('data', data)

        state.value.apiHasBeenCalled = true;

        if(data === 'Approved') {
            state.value.hasPhotoBeenTakenCorrectly = true
        }
    },
  },
})

export default fetchApiSlice.reducer;
export const { reset, resetResult } = fetchApiSlice.actions
