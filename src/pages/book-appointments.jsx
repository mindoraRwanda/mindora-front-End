import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import BookTherapistImage from '../assets/images/male-doctor2.jpg'
import { Footer } from "../components/Footer/footer";
import Header from "../components/Header/header";
import { Navigation } from "../components/navigation";
import { loading, rightPage, wrongPage } from "../features/authorization/authslice";
import { BASE_URL } from "../utils";
// import { PaymentCard } from "../components/popup/payment-card";


export const BookAppointments=()=>{
    const [loading,setLoading] = useState(false)
    const token = localStorage.getItem("token");
    console.log(useLocation().state)
    const therapistData = useLocation().state;
    const [date,setDate] = useState("");
    const [Package,setPackage] = useState("");
    const [message,setMessage] = useState("");
    const loginStatus = Boolean(localStorage.getItem("loginstatus"));
    const loginstatus = useSelector((state)=>state.auth.loginStatus);
    const dispatch = useDispatch();
    function postAppointment (data,token){
        setLoading(true);
        axios({
            method:"POST",
            url:`${BASE_URL}/user/Appointment`,
            data: data,
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            setLoading(false)
            console.log(res.data)
        }).catch((err)=>{
            setLoading(false)
            console.log(err)
        })
    }
    useEffect(()=>{
        if((loginStatus)||(loginstatus)){
            dispatch(rightPage());
        }
        else {
            dispatch(wrongPage());
            document.getElementById("signin").style.display = "flex"
        }
    },[loginStatus,loginstatus]);
    console.log(therapistData,"data")
    return(
        <React.Fragment>
            <Navigation/>
            <Header Title={'Book Appointments'} />
            <div className="flex w-full flex-wrap gap-6 justify-around items-center p-2  md:p-8">
            <div className={`md:container-full w-full md:w-[700px] justify-center items-center  overflow-hidden md:border px-5 shadow-lg shadow-gray-300 `}>
                <div className="my-5 flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                    <label className=" text-lg" htmlFor="birthDate">Date of Birth:</label>
                    <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="date" id="birthDate" placeholder="Enter DOB" onChange={(e)=>{
                        setDate(e.target.value)
                    }} />
                </div>
                <div className="mb-5 flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                    <label className=" text-lg " htmlFor="method">Session Package:</label>
                    <div className="flex w-full sm:w-[70%] justify-between ">
                        <select className="py-2 px-4 border md:border-2 rounded-md outline-none w-[100%] "   name="paymentMethod" id="method" onChange={(e)=>{
                        setPackage(e.target.value)
                    }}>
                            <option selected disabled value="method">Select a Package</option>
                            <option value="weekly"> Weekly </option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>  
                        </select>
                    </div>        
                </div>
                <div className="mb-5 flex flex-col ">
                    <label className="mb-5 text-lg">Please In order to be more specific to your therapist we need to get a bit of description to what you are seeking therapy for</label>
                    <textarea className="h-[100px] w-full border-2 rounded-md p-2 " placeholder="Your message here..." onChange={(e)=>{
                        setMessage(e.target.value)
                    }}></textarea>
                </div>
                <button className="relative w-[100px] h-[30px] py-1 text-center mb-5 bg-blue-700 rounded-md text-white text-center font-bold ml-[calc(50%-100px)] flex justify-center " onClick={(e)=>{
                    e.preventDefault();
                    postAppointment(
                        {
                            therapyID:therapistData._id,
                            therapyType:therapistData.therapist_type,
                            SessionPackage:Package,
                            reason:message,
                            dateOfBirth:date,
                        },
                        token
                    )
                }}>
                    <span className={loading ? "hidden" : "flex w-fit "}>Submit</span>
                    <div className={loading ? "absolute z-[2] h-full w-full bg-[rgba(83,120,219,0.7)] flex justify-center items-center rounded-md top-0 right-0 left-0 " : "hidden"}>
                        <Bars height="20" width="20" color="white" />
                    </div>
                </button>
            </div>
                {/* <PaymentCard/> */}
            </div>
            <Footer/>
          
        </React.Fragment>
    )
}