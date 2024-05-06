import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchSingleTherapist = (id) => async(dispatch)=>{
   
    const response = await axios.get(`https://mental-health-vd45.onrender.com/api/therapist/getTherapy/${id}`,
    ).then((res)=>{
        dispatch(fulfilled(res.data))
    })
    return response;
}

const SingleTherapistSlice = createSlice({
    name: 'singleTherapist',
    initialState:{
        data: {},
        isLoading: false,
        error: false
    },
    reducers:{
        pending: (state)=> {state.isLoading = true},
        fulfilled: (state, action)=>{
            state.data = action.payload;
            state.error = false;
        },
        rejected: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {pending, fulfilled, rejected} = SingleTherapistSlice.actions
export default SingleTherapistSlice.reducer