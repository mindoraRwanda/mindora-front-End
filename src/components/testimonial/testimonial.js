import React from "react";
import img from '../../img/rec4.png';
import {ImQuotesLeft} from 'react-icons/im';

export const Testimonial = ({test_img,test_message,test_editor,test_editor_title}) =>{
    return(
        <>
        <div className="w-full h-fit shadow-lg shadow-gray-400 py-10 flex flex-col lg:flex-row ">
            <div className="lg:w-2/3 ">
                <ImQuotesLeft className="text-4xl ml-5 sm:ml-10 md:ml-16 text-purple-600 "/>
                <div className="px-5 sm:px-10 md:px-14 mt-5 leading-7 text-xl ">
                    {test_message}
                </div>
                <div className="h-[10px] w-[70px] bg-purple-600 ml-5 sm:ml-10 md:ml-14 mt-5 "></div>
                <div className="font-bold text-2xl pl-5 sm:pl-10 md:pl-14 mt-5 " >
                    {test_editor}
                    <div className="font-normal text-xl " >{test_editor_title}</div>
                </div>
            </div>
            <div className="w-[calc(100%-40px)] sm:w-[400px] lg:w-[calc(100%-(66%+64px))] ml-5 sm:ml-10 md:ml-14 lg:ml-0 h-[300px] mt-5 " style={{background:`url(${test_img})`,backgroundSize:"cover"}} ></div>
        </div>
        </>
    )
}