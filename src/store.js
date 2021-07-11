import { configureStore } from '@reduxjs/toolkit';

import operationReducer from './reducers/operation';
import matrix1Reducer from './reducers/matrix1';
import matrix2Reducer from './reducers/matrix2';

export const store = configureStore({
    reducer: {
        operation: operationReducer,
        matrix1: matrix1Reducer,
        matrix2: matrix2Reducer
    },
});

export default store;