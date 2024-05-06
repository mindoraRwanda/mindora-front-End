import React, { useEffect, useState } from "react";
import {FaBars} from "react-icons/fa";
import { motion } from "framer-motion";
import {RxCross2} from 'react-icons/rx';
import { NavLink, useNavigate } from "react-router-dom";
import { SignUp } from "./modals/signup";
import { SignIn } from "./modals/signin";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import {GoMail} from 'react-icons/go';
import { logout, setRole } from "../features/authorization/authslice";
import { IoIosNotificationsOutline } from "react-icons/io";
import { UserChat } from "./modals/userchat";
import nopic from '../img/nopic.webp';
import logo from '../assets/icons/logo.png'; 

export const Navigation = ({page}) => {
    const [navigation,setNavigation] = useState(false);
    const [profilePopup,setprofilePopup] = useState(false);
    const {loginStatus} = useSelector((state)=>state.auth);
    const loginstatus = Boolean(localStorage.getItem("loginstatus"));
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    let loggedinUser = localStorage.getItem("userrole");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if (loggedinUser === "therapist") {
            navigate("/therapist-dashboard");
        }
        else if (loggedinUser === "admin"){
            navigate("/dashboard")
        }
        const handleClicks = (e) => {
            const target = e.target
            if((!target.closest("#profile-pic")&&(!target.closest("#profile-popup")))){
              setprofilePopup(false)
            }
          }
          document.addEventListener("click",handleClicks)
          return ()=>{
            document.removeEventListener("click",handleClicks)
          }
    },[loggedinUser,navigate,loginStatus])
    return(
        <>
        <div className="w-full h-[100vh] fixed hidden justify-center items-center bg-[rgba(0,0,0,0.5)] z-[20] " id="user-chat">
            <UserChat/>
        </div>
        <SignIn/>
        <SignUp/>
        <header className="flex h-14 justify-between items-center bg-purple-600 shadow">
            <NavLink to={"/"}>
                <div className="ml-5 lg:ml-20 font-sans text-xl flex font-medium">
                    <span className="mb-0.5"><img src={logo} alt="MIndora" /> </span>
                    <div className="px-2 text-blue-600 font-bold bg-purple-600 ml-1 mt-4 ">MINDORA</div>
                </div>
            </NavLink>
            <ul className="list-none hidden lg:flex gap-8">
                <NavLink to={"/"}><li className={(page ==="home") ? (" text-brandColorTwo ") : (" text-white")}>Home</li></NavLink>
                <NavLink to={"/about"}><li className={(page ==="about") ? ("text-brandColorTwo") : ("text-white")}>About</li></NavLink>
                <NavLink to={"/services"}> <li className={(page ==="services") ? ("text-brandColorTwo") : ("text-white")}>Services</li></NavLink>
                <NavLink to={'/therapists-list'}> <li className={(page==="therapists") ? ("text-brandColorTwo") : ("text-white")}>Therapists</li></NavLink>     
                <NavLink to={'/pricing'}><li className={(page ==="pricing") ? ("text-brandColorTwo") : ("text-white")}>Pricing</li></NavLink>
                <NavLink to={'/contact-us'}> <li className={(page === "contact") ? ("text-brandColorTwo") : ("text-white")}>Contact Us</li></NavLink>
            </ul>
            <div className={(loginStatus||loginstatus) ? ("hidden") : ("flex items-center text-white lg:mr-5")}>
                <button className="h-fit w-fit px-2 lg:px-3 py-0.5 lg:py-1 bg-black text-l mr-2 cursor-pointer rounded" onClick={()=>{
                    document.getElementById("signup").style.display = "flex";
                }}>Sign Up</button>
                <button className="h-fit w-fit px-2 lg:px-3 py-0.5 lg:py-1 bg-blue-600 text-l cursor-pointer rounded" onClick={()=>{
                    document.getElementById("signin").style.display = "flex";
                }}>Sign In</button>
            </div>
            <div className="flex lg:mr-10 items-center">
            <div id="profile-pic" style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}} className={(loginStatus||loginstatus) ? ("relative w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer border-2 border-gray-300 ") : ("hidden")} onClick={()=>{
                setprofilePopup(!profilePopup);
            }}>
                <div className={profilePopup&&(loginStatus||loginstatus)&&(loggedinUser === "user") ? ("absolute top-[48px] h-fit w-[200px] bg-white flex flex-col rounded-b-md border-b border-l border-r border-gray-300 z-20 ") : ("hidden")} id="profile-popup">
                    <NavLink to={"/chat"}><div className="text-base px-5 text-gray-700 py-2 border-b border-gray-300 flex ">Messages</div></NavLink>
                    <div className="text-base px-5 text-gray-700 py-2 border-b border-gray-300 flex ">Account Settings</div>
                    <div className="text-base px-5 text-red-700 py-2 flex justify-center "><span className="w-fit cursor-pointer flex" onClick={()=>{
                        dispatch(logout());
                        dispatch(setRole(""));
                        setprofilePopup(!profilePopup)
                    }}><BiLogOut className="m-1"/>Log out</span></div>
                </div>
            </div>
            <div className={(loginStatus||loginstatus)&&(loggedinUser === "user") ? "relative w-[20px] h-[20px] border border-gray-500 rounded-full flex justify-center items-center ml-2 cursor-pointer hover:scale-110 duration-300 " : "hidden"}>
                <IoIosNotificationsOutline/>
                <div className="absolute h-[12px] w-[12px] -top-[2px] ml-[8px] text-[9px] font-bold bg-blue-700 rounded-full text-white flex justify-center items-center ">5</div>
            </div>
            <div className={(loginStatus||loginstatus)&&(loggedinUser === "user") ? "ml-2 relative h-[20px] w-[20px] flex justify-center items-center text-[20px] cursor-pointer hover:scale-110 duration-300 " : "hidden"} onClick={()=>{
                document.getElementById("user-chat").style.display = "flex"
            }}>
                <GoMail/>
                <div className="absolute h-[13px] w-[13px] top-0 ml-[15px] text-[9px] bg-purple-700 rounded-full text-white flex justify-center items-center ">5</div>
            </div>
            </div>
            <div className={navigation ? ("hidden cursor-pointer mr-2 lg:hidden"):("flex cursor-pointer mr-2 lg:hidden")} onClick={()=>{
                setNavigation(true)
            }}>
                <FaBars/>
            </div>
            <div className={navigation ? ("flex cursor-pointer mr-2 lg:hidden"):("hidden cursor-pointer mr-2 lg:hidden")} onClick={()=>{
                setNavigation(false)
            }}>
                <RxCross2/>
            </div>
        </header>
                <div id="NavPop" className={navigation ? (" flex-col flex items-center right-0 fixed z-50 h-96 gap-4 p-5 w-64 text-xl opacity-95 bg-purple-600 text-white "):("fixed hidden w-full text-white justify-around bg-blue-500")}>
                        <NavLink to={"/"}><div className={(page==="home") ? ("text-blue-500") : ("")}>Home</div></NavLink>
                        <NavLink to={"/about"}><div className={(page==="about") ? ("text-blue-500") : ("")}>About</div></NavLink>
                        <NavLink to={"/services"}> <div className={(page ==="services") ? ("text-blue-500") : ("")}>Services</div></NavLink>
                        <NavLink to={'/therapists-list'}> <div className={(page==="therapists") ? ("text-blue-500") : ("")}>Therapists</div></NavLink>
                        <NavLink to={'/pricing'}><div className={(page ==="pricing") ? ("text-blue-500") : ("")}>Pricing</div></NavLink>
                        <NavLink to={'/contact-us'}> <div className={(page === "contact") ? ("text-blue-500") : ("")}>Contact Us</div></NavLink>
                </div>
        </>
    )
}