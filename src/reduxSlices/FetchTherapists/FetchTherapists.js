import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchTherapists = ()=> async(dispatch)=>{
    const response = await axios.get('https://mental-health-vd45.onrender.com/api/therapist/all');
    console.log(response)
    dispatch(fulfilled(response.data))
    return response.data
}

const TherapistSlice = createSlice({
    name: 'therapistFetch',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers:{
        pending:(state)=>{state.isLoading= true},
        fulfilled: (state,action)=>{
            state.data = action.payload;
            state.isLoading = false;
        },
        rejected: (state,action) =>{
            state.error = action.error;
            state.isLoading = false;
        }
    }
})

export const {pending, fulfilled, rejected} = TherapistSlice.actions;
export default TherapistSlice.reducer

