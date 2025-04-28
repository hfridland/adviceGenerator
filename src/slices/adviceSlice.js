import axios from 'axios'
import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'

import { setError } from './errorSlice'

const initialState = {
  id: 0,
  advice: '',
}

export const fetchAdvice = createAsyncThunk(
  'advice/fetchAdvice',
  async (url, trunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data.slip
    } catch (error) {
      trunkAPI.dispatch(setError(error.message))
      throw error
    }
  }
)

const adviceSlice = createSlice({
  name: 'advice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvice.pending, (state, action) => {})
      .addCase(fetchAdvice.fulfilled, (state, action) => {
        state.id = action.payload.id
        state.advice = action.payload.advice
      })
  },
})

export default adviceSlice.reducer

const selectAdviceId = (state) => state.advice.id
const selectAdviceText = (state) => state.advice.advice

export const selectAdvice = createSelector(
  [selectAdviceId, selectAdviceText],
  (adviceId, adviceText) => {
    return { id: adviceId, advice: adviceText }
  }
)
