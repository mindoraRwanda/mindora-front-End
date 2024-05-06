import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils";

const initialState = {
    patients: [],
}

export const patientsSlice = createSlice({
    name:"a",
    initialState,
    reducers:{
        setTherapists: (state,action) =>{
            state.patients = action.payload;
        }
    }
})

export const GetPatients = (token) => (dispatch) =>{
    axios({
        method:"GET",
        url:`${BASE_URL}/user/all`,
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((res)=>{
        localStorage.setItem("patients",JSON.stringify(res.data));
    }).catch((err)=>{
        console.log(err);
    })
}

export const {setTherapists} = patientsSlice.actions;
export default patientsSlice.reducer;