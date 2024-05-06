import axios from "axios";
import React, { useEffect, useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import noprofile from '../../img/nopic.webp'
import { BASE_URL } from "../../utils";

export const Patients = () =>{
    const [patients,setPatients] = useState([]);
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        let token = localStorage.getItem("token");
        function GetPatients(token){
            setLoading(true)
            axios({
                method:"GET",
                url: `${BASE_URL}/therapist/appointment/all`,
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>{
                setPatients(res.data);
                setLoading(false);
            }).catch((err)=>{
                setLoading(false);
                console.log(err);
            })
        }
        GetPatients(token);
        JSON.stringify(localStorage.setItem("patients",patients)) 
},[])
    return(
        <>
        <h3 className="text-blue-500 font-bold">Patients</h3>
        <div className="mt-2 w-full flex justify-center gap-x-[3px] csm:gap-x-[8px] ">
            <div className="flex gap-[3px] csm:gap-x-[8px] text-[7px] csm:text-[10px] items-center " id="show-number">
                <span>show</span>
                <select className="h-[20px] md:h-[25px] bg-white p-[2px] border border-gray-300 rounded ">
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                </select>
            </div>
            <div className="flex gap-[3px] csm:gap-x-[8px] text-[7px] csm:text-[10px] items-center " id="status-on-offline">
                <span>status</span>
                <select className="h-[20px] md:h-[25px] bg-white p-[2px] border border-gray-300 rounded ">
                    <option value={"online"}>All</option>
                    <option value={"online"}>Online</option>
                    <option value={"offline"}>Offline</option>
                </select>
            </div>
            <div className="h-[20px] md:h-[25px] w-[calc(100%-170px)] overflow-auto px-[3px] csm:px-[8px] flex items-center text-[7px] csm:text-[9px] text-gray-500 items-center border rounded border-gray-300 ">
                <AiOutlineSearch/>
                <input className="h-full w-full text-gray-500 ml-[3px] csm:ml-[8px] " placeholder="Search patients by name"/>
            </div>
            <div className="w-[150px] h-[20px] md:h-[25px] flex border border-gray-200 rounded text-[6px] md:text-[7px] ">
                <div className="w-1/3 h-full rounded-l bg-blue-900 flex justify-center cursor-pointer items-center text-white border-r border-gray-200 ">ALL</div>
                <div className="w-1/3 h-full rounded-l flex justify-center items-center cursor-pointer border-r border-gray-200 ">MEN</div>
                <div className="w-1/3 h-full rounded-l flex justify-center items-center cursor-pointer ">WOMEN</div>
            </div>
        </div>
        <div className="flex flex-wrap mt-2 gap-2 justify-center csm:justify-between cm:justify-evenly md:mt-4 " id="patients-list">
            
            {
                patients.map((elt)=>{
                    return(
                        <div className="relative w-[140px] md:w-[24%] cm:w-[215px] lg:w-[210px] h-[160px] md:h-[200px] cm: border rounded-md " id="patient">
                            <BiDotsHorizontalRounded className="absolute top-0 right-[3px] cursor-pointer "/>
                            <div className="relative w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-full border-2 border-gray-200 mt-[15px] ml-[calc(50%-26px)] md:ml-[calc(50%-36px)] " style={{background:`url(${noprofile})`,backgroundPosition:"center",backgroundSize:"cover"}} id="patient-image">
                                <div className="absolute bottom-[2px] left-[4px] md:left-[8px] w-[8px] h-[8px] rounded-full bg-green-500 "></div>
                            </div>
                            <div className="w-full flex flex-col items-center text-[10px] font-semibold mt-2 ">
                                {elt.patientId.Names}
                                <span className="font-normal text-[7px] ">{}</span>
                            </div>
                            <div className="w-[calc(100%-20px)] ml-[10px] mt-[10px] border-t border-gray-300 " id="line"></div>
                            <div className="text-[10px] md:text-xs font-semibold w-[60px] md:w-[70px] h-[20px] md:h-[25px] border border-gray-300 rounded-[20px] flex justify-center items-center mt-2 ml-[calc(50%-31px)] cursor-pointer ">Chat</div>
                            <div className="text-[10px] md:text-xs font-semibold w-[60px] md:w-[70px] h-[20px] md:h-[25px] border border-gray-300 rounded-[20px] flex justify-center items-center mt-[2px] md:mt-[5px] ml-[calc(50%-31px)] cursor-pointer bg-blue-700 text-white ">Review</div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}