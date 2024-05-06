import React from "react";
import PropTypes from 'prop-types'

export const ClickButton =({id, onClick, type, Name})=>{
    return(
        <React.Fragment>
            <button onClick={onClick} type={type} id={id} className=" ClickResponsive  font-interFont rounded-lg bg-purple-600 text-base  csm:text-lg hover:bg-black transition duration-700 
            ease-in-out p-2 px-4 csm:px-6 text-white">{Name}</button>
        </React.Fragment>
    )
}

ClickButton.prototype = {
    id: PropTypes.string,
    Name: PropTypes.string
}