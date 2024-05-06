import React, { useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {BiArrowBack} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
import { Incoming, Outgoing } from "../messages/message";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import '../../styles/chat.css'

export const UserChat = () => {
    const doctors = [{"name":"Ibrahim Iyekeni","lastmessage":"you sent a file"},{"name":"Ibrahima Konatefnn","lastmessage":"hello"}];
    const [ischatrightempty,setChatrightempty] = useState(true);
    const [currentChatDoctor,setCurrentChatDoctor] = useState({});
    return(
        <div className="flex h-[80vh] w-[100vw] md:w-[70vw] bg-white ">
            <div className="h-[100%] w-[250px] border border-gray-300 " id="user-chat-left">
                <div className="h-[60px] border-b border-gray-300 flex justify-center items-center " id="user-chat-left-search">
                    <div className="h-[40px] w-[220px] border border-gray-300 rounded-md flex items-center px-[8px] ">
                        <AiOutlineSearch className="text-gray-700 text-[15px] "/>
                        <input type={"text"} placeholder={"Search chats and messages here"} className="text-gray-700 text-xs px-1"/>
                    </div>
                </div>
                <SimpleBar className="h-[calc(80vh-60px)] flex flex-col ">
                    {
                        doctors.map((elt)=>{
                            return(
                                <div className={(currentChatDoctor.name === elt.name) ? ("w-full h-[70px] sm:h-[70px] border-b border-gray-300 flex flex-wrap items-center bg-gray-300 cursor-pointer ") : ("w-full h-[70px] sm:h-[70px] border-b border-gray-300 flex flex-wrap items-center hover:bg-gray-100 cursor-pointer ")} onClick={()=>{
                                    setCurrentChatDoctor(elt);
                                    setChatrightempty(false);
                                }}>
                                    <div className="w-[50px] h-[50px] rounded-full bg-gray-400 ml-[8px] " id="profile"></div>
                                    <div className="relative w-[125px] text-sm font-semibold ml-1 truncate " id="names-message">
                                        {elt.name}
                                        <div className="text-[10px] font-normal " >{elt.lastmessage}</div>
                                    </div>
                                    <div className="h-full ml-[5px] text-[10px] flex flex-col justify-between py-[15px] items-end " id="time-messagenumber">
                                        3 mins ago
                                        <div className="w-[17px] h-[17px] bg-blue-700 text-white flex justify-center items-center mt-1 rounded-full ">3</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </SimpleBar>
            </div>
            {
                ischatrightempty ? (
                    // <div className=" bg-black w-[calc(100%-250px)] h-full "></div>
                    <div
                        className="w-[calc(100%-250px)] h-full flex bg-white items-center lg:justify-center "
                    >
                        <div className="text-5xl font-semibold ml-10 mr-10 text-center text-gray-300 leading-[60px] cursor-default ">Open a Chat Your Messages Will Appear Here</div>
                    </div>
                ) : (
                    <div className="w-[calc(100%-250px)] h-full " id="user-chat-right">
                        <div className="w-full h-[50px] bg-gray-300 flex justify-between items-center ">
                            <div className="flex items-center ">
                                <BiArrowBack className="ml-1 cursor-pointer "/>
                                <div className="w-[40px] h-[40px] rounded-full bg-gray-400 ml-1 " id="profile"></div>
                                <div className="text-sm font-semibold ml-3 " id="names-message">
                                    {currentChatDoctor.name}
                                </div>
                            </div>
                            <RxCross2 className="cursor-pointer mr-3 text-2xl" onClick={()=>{
                                document.getElementById("user-chat").style.display = "none";
                            }}/>
                        </div>
                        <div className="h-[calc(100%-50px)] w-full flex flex-col justify-end " id="actual-chat">
                            <SimpleBar className="max-h-[calc(100%-50px)] " style={{boxShadow:"inset 0 0 5px 1px rgba(0,0,0,0.2)"}}>
                                <Incoming/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                                <Outgoing/>
                            </SimpleBar>
                            <div className="w-full h-[50px] flex items-center border-t border-gray-300 rounded-br-xl " id="chat-right-bottom">
                                <div className="h-full w-[40px] flex justify-end mr-2 items-center text-xl "><MdOutlineEmojiEmotions className="cursor-pointer" /></div>
                                <input type={"text"} placeholder={"Enter message here"} className="border-0 h-full w-[calc(100%-95px)] text-md px-2 " />
                                <div className="flex justify-center items-center border-l border-gray-300 h-full w-fit px-2">
                                    <div className="w-[35px] h-[25px] bg-blue-800 rounded-xl flex justify-center items-center text-white cursor-pointer"><IoSend/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}