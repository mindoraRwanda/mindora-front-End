import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils";

const initialState = {
    newdata: false,
    therapist_array:[],
}

export const therapistSlice = createSlice({
    name: "a",
    initialState,
    reducers:{
        getdata: (state,action)=>{
            state.therapist_array = action.payload
            state.newdata = true
        }
    }
})

export const getallTherapists = () => (dispatch) =>{
    axios({
        method:"GET",
        url:`${BASE_URL}/api/therapist/all`,
    }).then((result)=>{
        dispatch(getdata(result.data));
    }).catch((err)=>{
        console.log(err);
    })
}

export const {getdata} = therapistSlice.actions;
export default therapistSlice.reducer