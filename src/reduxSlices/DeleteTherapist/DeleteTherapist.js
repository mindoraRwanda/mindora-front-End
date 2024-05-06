import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const DeleteTherapist = (token,id)=> async(dispatch)=>{
    const response = await axios.delete(`https://mental-health-vd45.onrender.com/api/therapist/delete/${id}`,{
        headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQwNWYzZTg5MDc0OGQ5YTYzZTAwOTU1Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjgwNzAyNzU0LCJleHAiOjE2ODA3ODkxNTR9.cXI6EYud8y64KNhGJqG7vT5VxnvUgg4XaHeGMQRWjng`}
    }).then((res)=>{
        dispatch(res.data)
    }).catch((err)=>{
        console.log(err);
    })
    return response;
}

const DeleteTherapistSlice = createSlice({
    name: 'deleteTherapist',
    initialState:{
        DeleteTherepist: false,
    },
    reducers:{
        pending: (state)=>{state.isLoading = true},
        TherapistDeleted: (state, action)=>{
            state.data = action.payload;
            state.DeleteTherepist = Math.random();
        
        }
    }
})

export const {pending, TherapistDeleted} = DeleteTherapistSlice.actions
export default DeleteTherapistSlice.reducer