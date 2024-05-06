import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsCalendar3, BsFillChatLeftDotsFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
//import {LOGO} from '../../assets/icons/logo.png'

export const Nav = () =>{
    return(
        <div className="h-[100vh] hidden fixed z-10 w-full bg-[rgba(0,0,0,0.5)]" id="dashboard-navigation">
        <div className="flex z-50 flex-col w-fit h-[100vh] pt-[3vh] bg-gray-100 rounded-r-lg ">
            <div className="w-fit h-[90px] flex justify-center items-center font-bold text-3xl ml-8">
                <RxCross2 className="cursor-pointer flex" onClick={()=>{
                    document.getElementById("dashboard-navigation").style.display = "none";
                }}/>
                <div className="flex pr-5">
                    <div className="ml-2 text-2xl flex">
                        <span className="mb-0.5"> </span>
                        <div className="px-2 bg-purple-600 text-blue-600 ml-1 h-fit">MINDORA</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-0 border border-gray-300"></div>
            <div className="w-full h-[60px] mt-2 flex justify-center items-center text-blue-700 font-bold text-4xl hover:text-blue-500">
                <div className="w-full h-fit flex pl-8 items-center">
                    <AiOutlineDashboard/>
                    <div className="flex text-lg ml-3">Dashboard</div>
                </div>
            </div>
            <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-xl hover:text-blue-500">
                <div className="w-full h-fit flex pl-10 items-center">
                    <BsCalendar3/>
                    <div className="flex text-lg ml-5">Appointments</div>
                </div>
            </div>
            <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-2xl hover:text-blue-500 ">
                <div className="w-full h-fit flex pl-9 items-center">
                    <IoIosPeople/>
                    <div className="flex text-lg ml-5">Patients</div>
                </div>    
            </div>
            <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold lg:text-xl hover:text-blue-500">
                <div className="w-full h-fit flex pl-9 items-center">
                    <BsFillChatLeftDotsFill/>
                    <div className="flex text-lg ml-7 -mt-1">Messages</div>
                    <div className="w-[18px] h-[15px] h-[18px] bg-blue-700 ml-[12px] z-[2] rounded-full flex justify-center items-center text-[13px] text-white">5</div>
                </div>
            </div>
            <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-base">
                <div className="w-full h-0 border border-gray-300"></div>
            </div>
            <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-3xl hover:text-blue-500">
                <div className="w-full h-fit flex pl-9 items-center">
                    <MdOutlineManageAccounts/>
                    <div className="flex text-lg ml-5">Edit Account</div>
                </div>
            </div>
            <div className="w-full h-[60px] flex justify-center items-center text-red-600 font-bold text-2xl">
                <div className="w-full h-fit flex pl-9 items-center">
                    <BiLogOut className="cursor-pointer"/>
                    <div className="flex text-lg ml-7">Log Out</div>
                </div>
            </div>
        </div>
        </div>
    )
}