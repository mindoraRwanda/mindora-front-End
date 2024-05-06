import React from "react";
import  PropType from 'prop-types'

export const ContactsCard = ({Title, first, second, third})=>{
    if(!Title){
        return null
    }
    return(
        <React.Fragment>
            <div className="bg-white shadow-md w-full md:w-80 rounded-2xl p-6 justify-center text-start">
                <h1 className=" font-primaryFont text-brandColor text-lg mb-1 " >{Title}:</h1>
                <p className=" font-sans text-lg " >{first}</p> 
                <p className=" font-sans text-lg ">{second}</p> 
                <p className=" font-sans text-lg ">{third}</p>

            </div>
        </React.Fragment>
    )
}
ContactsCard.prototype = {
    Title: PropType.string,
    first: PropType.string,
    second: PropType.string,
    third: PropType.string
}