import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils";

const initialState = {
    loginStatus: false,
    loggedinUser: "",
    data: {},
    loading: false,
    token: "",
    loginError: "",
    unauthorizerduser_wrongpage: false,
}

export const authSclice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        wrongPage: (state) =>{
            state.unauthorizerduser_wrongpage = true
        },
        rightPage: (state) =>{
            state.unauthorizerduser_wrongpage = false
        },
        login: (state)=>{
            state.data = JSON.parse(localStorage.getItem("userdata"))
            state.loginStatus = Boolean(localStorage.getItem("loginstatus"));
            console.log(state.loginStatus);
        },
        setRole: (state)=>{
            state.loggedinUser = localStorage.getItem("userrole")
        },
        logout: (state)=>{
            state.loginStatus = false;
            localStorage.clear()
        },
        loading: (state)=>{
            state.loading = !state.loading
        },
        setToken: (state)=>{
            state.token = localStorage.getItem("token")
        },
        setError:(state,action)=>{
            state.loginError = action.payload
        }
    }
})

export const Login = (user_credentials) => (dispatch) =>{
    dispatch(loading())
    axios({
        method: "POST",
        url:`${BASE_URL}/auth/login`,
        data: user_credentials
    }).then((result)=>{
        let user
        if (result.data.user) user = result.data.user;
        else if (result.data.therapi) user = result.data.therapi;
        else user = result.data.user;
        localStorage.setItem("userrole",user.role);
        localStorage.setItem("loginstatus","true");
        localStorage.setItem("userdata",JSON.stringify(user));
        localStorage.setItem("token",result.data.token);
        document.getElementById("signin-error").style.visibility = "hidden"
        console.log(result)
    }).then(()=>{
        dispatch(login());
        dispatch(setRole());
        dispatch(setToken());
        document.getElementById("signin").style.display = "none";
        dispatch(loading());
    }).catch((err)=>{
        dispatch(loading())
        console.log(err);
        if (err.message === "Network Error"){
            document.getElementById("signin-error").style.visibility = "visible"
            document.getElementById("signin-error").innerText = err.message
        }
        else if(err.response.data === "Invalid Credentials"){
            document.getElementById("signin-error").style.visibility = "visible"
            document.getElementById("signin-error").innerText = "Wrong Password"
        }
        else if(err.response.data === ""){
            document.getElementById("signin-error").style.visibility = "visible"
            document.getElementById("signin-error").innerText = "This user is not signed up"
        }
    })
}

export const PatientSignup = (user_credentials) => (dispatch) =>{
    dispatch(loading())
    axios({
        method: "POST",
        url:`${BASE_URL}/user/register`,
        data: user_credentials,
    }).then((result)=>{
        localStorage.setItem("userrole",result.data.role);
        localStorage.setItem("loginstatus","true");
        localStorage.setItem("userdata",JSON.stringify(result.data));
        localStorage.setItem("token",result.data.token);
        window.alert("Account Created Successfully")
    }).then(()=>{
        dispatch(loading());
        dispatch(login());
        dispatch(setRole());
        document.getElementById("signup").style.display = "none";
        dispatch(setToken());
    }).catch((err)=>{
        console.log(err);
        dispatch(loading());
    })
}

export const TherapistSignup = (user_credentials) => (dispatch) =>{
    dispatch(loading())
    console.log(user_credentials,"credentials");
    axios({
        method: "POST",
        url: `${BASE_URL}/therapist/register`,
        data: user_credentials,
    }).then((result)=>{
        dispatch(loading());
        document.getElementById("signup").style.display = "none";
        window.alert("Account Created Successfully You will wait for the Admin's Approval")
    }).catch((err)=>{
        console.log(err);
        dispatch(loading());
    })
}

export const {login,logout,loading,setRole,setToken,setError,wrongPage,rightPage} = authSclice.actions;
export default authSclice.reducer;