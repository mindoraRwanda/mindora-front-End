import React, { useEffect, useState } from "react";
import { BsCashStack } from "react-icons/bs";
import { Bars, TailSpin } from "react-loader-spinner";
import Header from "../components/Header/header";
import { Navigation } from "../components/navigation";
import momoimg from '../img/momoimg.jpg';
import airtelimg from '../img/airtelimg.png';
import axios from "axios";
import { BASE_URL } from "../utils";

export const Payment = () =>{
    const loginStatus = Boolean(localStorage.getItem("loginstatus"));
    const token = localStorage.getItem("token")
    const [appointmentId,setAppointmentId] = useState("");
    const [phone,setPhone] = useState("");
    const [paymentSuccess,setPaymentSuccess] = useState("")
    useEffect(()=>{
        if(!loginStatus){
            document.getElementById("signin").style.display = "flex";
        }
    },[loginStatus])
    const [message,setMessage] = useState("")
    function pay(data,token){
        setPaymentSuccess("progress")
        setMessage("Waiting for your payment")
        document.getElementById("payment-message").style.color = "#618bed"
        axios({
            method:"POST",
            url:`${BASE_URL}/paymentApi/payment`,
            data:data,
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            if (res.data.message === "User didn't pay yet") {
                setPaymentSuccess("failed")
                setMessage("Appointment payment Has failed")
                document.getElementById("payment-message").style.color = "#EB3535"
            }
            else{
                setPaymentSuccess("success")
                setMessage("You have successfully paid for your appointment")
            }
        }).catch((err)=>{
                setPaymentSuccess("failed")
                if((err.message === "Network Error")||(err.response.data === "request timeout")){
                setMessage("Check Your Network and Try Again")
                document.getElementById("payment-message").style.color = "#EB3535"
                }
                else{
                    setMessage("Appointment Payment has Failed")
                }
            console.log(err);
        })
    }
    if((paymentSuccess === "failed")&&(message === "")){
        setMessage("Appointment payment has failed")
    }
    return(
        <>
        <div className={(paymentSuccess !== "") ? "bg-[rgba(0,0,0,0.3)] fixed h-full w-full flex justify-center items-center z-[2] " : "hidden"}>
        <div id="payment-loader" className="w-[30%] h-[200px] absolute bg-white rounded-md ">
            <h1 className="text-xl font-bold text-center mt-5" id="payment-message" >{message}</h1>
            <div className={(paymentSuccess === "progress") ? "w-full flex justify-center mt-4 " : "hidden"}>
                <TailSpin
                    height="80"
                    width="80"
                    color="#618bed"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
            <div className={"flex"}>
                <div className={(paymentSuccess === "success") ? "w-full flex justify-center mt-2 " :"hidden"}>
                    <svg width="100" height="100" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="65" cy="65" r="65" fill="#75C787"/>
                        <circle cx="65" cy="65" r="50" fill="white"/>
                        <rect x="27.6217" y="54.8846" width="10" height="39" rx="4" transform="rotate(-37.1432 27.6217 54.8846)" fill="#75C787"/>
                        <rect x="51.5256" y="86.4043" width="10" height="60" rx="4" transform="rotate(-127.143 51.5256 86.4043)" fill="#75C787"/>
                    </svg>
                </div>
                <div className={(paymentSuccess === "failed") ? "w-full flex justify-center mt-2 " :"hidden"}>
                    <svg width="100" height="100" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="65" cy="65" r="65" fill="#EB3535"/>
                        <circle cx="65" cy="65" r="50" fill="white"/>
                        <rect x="40" y="47.0711" width="10" height="60" rx="4" transform="rotate(-45 40 47.0711)" fill="#EB3535"/>
                        <rect x="47.0711" y="89.4975" width="10" height="60" rx="4" transform="rotate(-135 47.0711 89.4975)" fill="#EB3535"/>
                    </svg>
                </div>
            </div>
            <div className="absolute h-fit w-fit px-5 py-[2px] bg-gray-300 bottom-[10px] right-[20px] rounded cursor-pointer " onClick={()=>{
                setPaymentSuccess("")
                setMessage("")
            }}>Close</div>
        </div>
        </div>
        <Navigation/>
            <Header Title={'Payment'} />
            <div className="flex w-full flex-wrap gap-6 justify-around items-center p-2 md:p-8 mt-4">
                <div className="relative h-fit w-[80vw] cm:w-[784px] cm:px-10 bg-white flex flex-col justify-center items-center shadow-lg shadow-gray-300 ">
                    <div className="w-[80vw] cm:w-[784px] h-[60px] bg-gray-400 text-white flex items-center ">
                        <div className="px-4 flex gap-4 items-center " id="notification Header">
                            <BsCashStack className="text-purple-800 text-4xl font-bold "/>
                            <h1 className="font-extrabold text-lg csm:text-2xl ">Pay Appointment Fees</h1>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center px-5 mt-5">
                        <div className="font-bold text-lg ">Mobile Money</div>
                        <div className="flex w-fit gap-1 ">
                            <div className="h-[30px] csm:h-[40px] w-[30px] csm:w-[40px] rounded " style={{background:`url(${momoimg})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
                            <div className="h-[30px] csm:h-[40px] w-[30px] csm:w-[40px] rounded" style={{background:`url(${airtelimg})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full px-5 my-5 ">
                        <div className="">
                            <label className=" csm:text-xl" >Enter the payment code here</label>
                            <input type={"text"} placeholder="payment code" className="border p-1 text-gray-700 rounded-md w-full mt-1 px-2 " onChange={(e)=>{
                                setAppointmentId(e.target.value)
                            }} />
                        </div>
                        <div className="mt-3">
                            <label className=" csm:text-xl" >Enter phone number here</label>
                            <input type={"text"} placeholder="Phone Number" className="border p-1 text-gray-700 rounded-md w-full mt-1 px-2 "onChange={(e)=>{
                                setPhone(e.target.value);
                            }} />
                        </div>
                        {/* <div className="mt-3 flex justify-between items-center">
                            <div className="text-base csm:text-xl" >Amount to be paid:</div>
                            <div id="generate-fees" className="border text-gray-700 rounded-md w-[100px] csm:w-[250px] h-fit py-1 mt-1 cursor-pointer text-center text-xl bg-blue-700 text-white " onClick={()=>{
                                if(!generating){setGenerating(!generating);}
                            }}>Generate</div>
                        </div> */}
                    </div>
                    <button className="relative w-[100px] h-[30px] py-1 text-center mb-5 bg-purple-700 rounded-md text-white text-center font-bold flex justify-center " onClick={(e)=>{
                        e.preventDefault();
                        pay({
                            number:phone,
                            appointmentId,appointmentId,
                        },
                        token)
                    }}>
                        <span className={"flex w-fit "}>Send</span>
                        {/* <div className={loading ? "absolute z-[2] h-full w-full bg-[rgba(83,120,219,0.7)] flex justify-center items-center rounded-md top-0 right-0 left-0 " : "hidden"}>
                            <Bars height="20" width="20" color="white" />
                        </div> */}
                    </button>
                </div>
            </div>
        </>
    )
}