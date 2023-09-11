import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : 'search',
    initialState : {
        value : ''
    },
    reducers : {
        textChange : (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { textChange } = searchSlice.actions;
export default searchSlice.reducer;