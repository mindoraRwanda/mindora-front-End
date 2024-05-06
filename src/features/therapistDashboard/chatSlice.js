import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils";

const initialState = {
    messages: [],
    conversations: [],
    partnerconversations: [],
}

export const chatSlice = createSlice({
    name:"a",
    initialState,
    reducers:{
        getconversations: (state,action) =>{
            state.conversations = action.payload;
        },
        getpartnerconversations: (state,action) =>{
            state.partnerconversations = action.payload;
        },
        getmessages: (state,action) =>{
            state.test = action.payload;
        },
    }
})

export const GetConversations = (id,role) => (dispatch)=>{
    axios({
        method:"GET",
        url:`${BASE_URL}/conversation/${id}`,
    }).then((res)=>{
        console.log(res);
        if(role === "therapist"){
            dispatch(getconversations(res.data))
        }
        else{
            dispatch(getpartnerconversations(res.data))
        }
    }).catch((err)=>{
        console.log(err);
    })
}

export const GetMessages = (id) => (dispatch)=>{
    axios({
        method:"GET",
        url:`${BASE_URL}/messages/${id}`,
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
}

export const {getconversations,getmessages,getpartnerconversations} = chatSlice.actions;
export default chatSlice.reducer;