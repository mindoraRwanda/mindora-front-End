import React from "react";

export const Member = ({mname,task,img}) => {
    return(
        <div className="w-80 h-80 flex flex-col justify-end shadow-md shadow-gray-400" style={{background:``,backgroundPosition:"center",backgroundSize:"cover"}}>
            <img src={img} className="w-full h-64 object-cover object-center" alt=""/>
            <div className="h-fit w-full text-white bg-purple-600">
            <div className="font-normal text-xl text-center mt-2">
                {mname}
                <div className="font-light text-sm mb-2">{task}</div>
            </div>
            </div>
        </div>
    )
}