import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    matrix1: {
        matrix: "",
        rows: "",
        column: "",
    }
}

const matrix1Reducer  = createSlice({
    name: "matrix",
    initialState,
    reducers: {
        setMatrix1: (state, action) => {
            state.matrix1 = action.payload;
        }
    }
})

export const { setMatrix1 } = matrix1Reducer.actions;

export const selectMatrix1 = (state) => state.matrix1.matrix1;

export default matrix1Reducer.reducer;