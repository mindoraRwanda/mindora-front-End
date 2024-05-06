import React from "react";
import PropTypes from 'prop-types'
import { Rotate } from "react-awesome-reveal";

export const ServicesValuesCard =({Title, valueImage, Description})=>{
    return(
        <React.Fragment>
            <div>
            <Rotate direction="top right">
            <div className="flex flex-col items-center gap-2 w-64 justify-center text-center">
                <img className=" w-32 h-24 " src={valueImage} alt="" />
                <h1 className="font-bold text-2xl font-primaryFont ">{Title}</h1>
                <p className="font-sans text-lg">{Description}</p>
            </div>
            </Rotate>
            </div>
        </React.Fragment>
    )
}

ServicesValuesCard.propTypes = {
    Title: PropTypes.string.isRequired,
    valueImage : PropTypes.string.isRequired,
    Description: PropTypes.string
}