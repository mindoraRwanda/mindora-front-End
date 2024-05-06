import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    convo1: [],
    local: [],
}

export const testSlice = createSlice({
    name:"a",
    initialState,
    reducers:{
        test1: (state,action)=>{
            state.convo = action.payload;
        },
        test2: (state)=>{
            state.local = "local"
        }
    }
})

export const {test1,test2} = testSlice.actions;
export default testSlice.reducer;