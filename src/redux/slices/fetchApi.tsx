import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetch from 'isomorphic-fetch'

export const fetchApiThunk:any = createAsyncThunk(
    'fetchApiSlice',
    async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React POST Request Example' })
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
    isValid: boolean,
    hasBeenCalled: boolean
};

const initialState = {
    value: {
        isValid: false,
        hasBeenCalled: false
    } as Value
  };

export const fetchApiSlice:any = createSlice({
  name: 'fetchApiSlice',
  initialState,
  reducers:{},
  extraReducers: {
    [fetchApiThunk.fulfilled]: (state, action)=> { 
        let data;
        
        try {
            data = action.payload.summary.outcome
        } catch {
            data = null
        }

        console.log('data', data)

        state.value.hasBeenCalled = true;

        if(data === 'Approved') {
            state.value.isValid = true
        }
    },
  },
})

export default fetchApiSlice.reducer