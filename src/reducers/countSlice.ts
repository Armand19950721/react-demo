import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CountState {
    count: number;
}

const initialState: CountState = {
    count: 0,
};

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        setCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
    },
});

export const { increment, decrement, setCount } = countSlice.actions;
export default countSlice.reducer;
