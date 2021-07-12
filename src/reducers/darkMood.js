import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMood: {
        darkMood: localStorage.getItem("dark-mood") || false,
    }
}

const darkMoodReducer  = createSlice({
    name: "darkMood",
    initialState,
    reducers: {
        setDarkMood: (state, action) => {
            state.darkMood = action.payload;
        }
    }
})

export const { setDarkMood } = darkMoodReducer.actions;

export const selectDarkMood = (state) => state.darkMood.darkMood;

export default darkMoodReducer.reducer;