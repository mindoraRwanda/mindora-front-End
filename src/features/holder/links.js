import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current_link: "",
}

export const linkSlice = createSlice({
    name: "a",
    initialState,
    reducers: {
        clicked: (state,action) => {
            state.current_link = action.payload;
        }
    }
})

export const {clicked} = linkSlice.actions;
export default linkSlice.reducer;