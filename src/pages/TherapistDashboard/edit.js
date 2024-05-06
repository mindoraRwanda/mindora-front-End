import React from "react";
import { BsCameraFill } from "react-icons/bs";
import nopic from '../../img/nopic.webp';

export const Edit = () =>{
    return(
        <>
        <div className="w-full text-blue-700 text-xl font-bold ">Edit Your Account Details</div>
        <div className="border w-full h-[70vh] mt-3 rounded-lg flex flex-col md:flex-row ">
            <div className="w-full md:w-[35%] h-fit py-3 flex justify-center md:mt-20 ">
                <div className="relative border-3 border-gray-200 rounded-full h-[120px] w-[120px] " style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}}>
                    <div className="absolute h-full w-full rounded-full text-white bg-[rgba(0,0,0,0.4)] cursor-pointer flex flex-col gap-2 justify-center items-center ">
                        <BsCameraFill className="text-2xl"/>
                        <div className="text-center text-sm font-semibold">Change Your<br/>Profile</div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[40%] flex flex-col md:mt-8 ">
                <div className="flex flex-col w-full px-4 gap-[2px] h-fit mt-3 ">
                    <label className="text-[15px] ">Full Names</label>
                    <input type={"text"} placeholder="Full names" className="w-full px-5 py-2 rounded-[20px] border "/>
                </div>
                <div className="flex flex-col w-full px-4 gap-[2px] h-fit mt-3 ">
                    <label className="text-[15px] ">E-mail</label>
                    <input type={"text"} placeholder="your Email" className="w-full px-5 py-2 rounded-[20px] border "/>
                </div>
                <div className="flex flex-col w-full px-4 gap-[2px] h-fit mt-3 ">
                    <label className="text-[15px] ">Therapy type</label>
                    <input type={"text"} placeholder="Therapy you offer" className="w-full px-5 py-2 rounded-[20px] border "/>
                </div>
                <div className="flex flex-col w-full px-4 gap-[2px] h-fit mt-3 ">
                    <label className="text-[15px] ">change Availability</label>
                    <button className="w-[100px] px-5 py-1 rounded-[15px] bg-blue-700 cursor-pointer text-md text-white font-bold ">Change</button>
                </div>
                <div className="w-[200px] ml-[calc(50%-100px)] h-fit py-1 flex justify-center items-center text-white font-bold bg-blue-700 rounded-[20px] mt-5 ">Save Changes</div>
            </div>
        </div>
        </>
    )
}