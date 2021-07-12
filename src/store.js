import { configureStore } from '@reduxjs/toolkit';

import operationReducer from './reducers/operation';
import matrix1Reducer from './reducers/matrix1';
import matrix2Reducer from './reducers/matrix2';
import darkMood from './reducers/darkMood';

export const store = configureStore({
    reducer: {
        operation: operationReducer,
        matrix1: matrix1Reducer,
        matrix2: matrix2Reducer,
        darkMood: darkMood,
    },
});

export default store;