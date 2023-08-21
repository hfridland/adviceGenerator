import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAdvice = createAsyncThunk(
    '@@advice/load-advice',
    (_, {
        extra: {client, api}
    }) => {
        return client.get(api.ADVICE)
    }
)

const initialState = {
    status: 'idle',
    id: 0,
    advice: '',
}

const adviceSlice = createSlice({
    name: '@@advice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadAdvice.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(loadAdvice.fulfilled, (state, action) => {
                state.status = 'received'
                state.id = action.payload.data.slip.id
                state.advice = action.payload.data.slip.advice
            })
    }
})

export const adviceReducer = adviceSlice.reducer

export const selectAdvice = state => {
    const ret = {
        id: state.advice.id,
        advice: state.advice.advice
    }
    return ret
}
