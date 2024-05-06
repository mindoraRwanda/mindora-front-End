import React from "react";

export const Incoming = ()=>{
    return(
        <>
        <div className="w-full">
        <div className="h-fit max-w-[70%] text-white text-sm flex items-end my-1 " id="incoming-message">
            <div className="w-[20px] h-[20px] rounded-full bg-black ml-2 " id="incoming-profile"></div>
            <div className="flex flex-col gap-y-1 ml-1 max-w-[calc(100%-40px)]">
                <div className="rounded-b-md rounded-tr-md bg-blue-700 p-2 " id="actual-incoming-message">s,m vmslkmvklsm flkb mfjnkahbdhjdjhbvmshb hbsf mb sfbv</div>
            </div>
        </div>
        </div>
        </>
    )
}

export const Outgoing = ()=>{
    return(
        <>
        <div className="w-full flex justify-end">
        <div className="h-fit max-w-[70%] text-sm flex my-1 mr-2 " id="outgoing-message" >
            <div className="flex flex-col gap-y-1 mr-2 w-full" >
                <div className="rounded-b-md rounded-tl-md bg-gray-300 py-1 px-2 " id="actual-outgoing-message"><span className="w-full flex">s vmslkmvklsm flkb mfjnkahbdhjdjhbvmshb hbsf mb sfbv</span></div>
            </div>
        </div>
        </div>
        </>
    )
}