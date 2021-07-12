import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    matrix2: {
        matrix: "",
        rows: "",
        columns: "",
        name: "b",
    }
}

const matrix2Reducer  = createSlice({
    name: "matrix",
    initialState,
    reducers: {
        setMatrix2: (state, action) => {
            state.matrix2 = action.payload;
        }
    }
})

export const { setMatrix2 } = matrix2Reducer.actions;

export const selectMatrix2 = (state) => state.matrix2.matrix2;

export default matrix2Reducer.reducer;