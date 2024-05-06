import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchAllTherapists =(token)=> async(dispatch)=>{
   console.log("Again")
    const response = await axios.get('https://mental-health-vd45.onrender.com/api/therapist/admin/allTherapist',{
        headers: {Authorization: `Bearer ${token}`}
    }).then((res)=>{
        dispatch(fulfilled(res.data.therapy))
        // console.log(res.data.therapy, 'I am ress');
    }).catch((errors)=>{
        console.log(errors);
    })
    // console.log(response);
    return response
}

const AllTherapistsSlice = createSlice({
    name: 'AllTherapists',
    initialState:{
        data: [],
        error: null,
        isLoading: false
    },
    reducers:{
        pending: (state)=>{state.isLoading = true}, 
        fulfilled: (state, action)=> {
            state.isLoading = false;
            state.data = action.payload;
            state.error = false;
        },
        rejected: (state, action)=>{
            state.error = action.payload;
            state.isLoading= false;
        }
    }
})

export const {pending, fulfilled, rejected} = AllTherapistsSlice.actions
export default AllTherapistsSlice.reducer