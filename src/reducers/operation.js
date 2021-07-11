import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    operation: ""
}

const operationReducer  = createSlice({
    name: "operation",
    initialState,
    reducers: {
        setOperation: (state, action) => {
            state.operation = action.payload;
        }
    }
})

export const { setOperation } = operationReducer.actions;

export const selectOperation = (state) => state.operation.operation;

export default operationReducer.reducer;
