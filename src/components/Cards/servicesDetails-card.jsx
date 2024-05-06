import React from "react";
import { ClickButton } from "../Buttons/ClickButton";
import PropTypes from 'prop-types'
import { Fade } from "react-awesome-reveal";



const ServicesCard = ({backImage, frontImage, Title, Id, Description})=>{
    return(
        <React.Fragment>
            <div id={Id} className="w-full flex-col flex cm:flex cm:flex-row mb-0 cm:mb-16 justify-center gap-44 cm:gap-64 items-center">
            <Fade direction="left" duration={1000}>
                <div className="relative w-full justify-center flex items-center">
      
                    <div style={{backgroundImage : `url(${backImage})`}} className=" bg-cover bg-center bg-no-repeat w-64 h-64 rounded-lg shadow-lg "></div>
                    <div style={{backgroundImage : `url(${frontImage})`}} className=" absolute top-40 csm:top-32 csm:left-40 bg-cover bg-center bg-no-repeat w-64 h-64 rounded-lg shadow-lg "></div>
                    {/* <img  src={Image1} alt="" />
                    <img className=" w-64 h-64 rounded-lg shadow-lg "  src={Image2} alt="" /> */}
 
                </div>
                </Fade>
        
                <div className="flex flex-col w-full cm:w-1/2 gap-4 justify-start items-start">
                    <Fade direction="right">
                    <h1 className="font-bold font-primaryFont text-2xl text-purple-600">{Title}</h1>
                    <p className="text-lg font-sans "> {Description} </p>
                    <ClickButton
                        Name='Book Now'
                        id = 'BookNow__btn'
                        className="bg-purple-500"
                    />
                                  </Fade>
                </div>
  
            </div>
        </React.Fragment>
    )
}
export default ServicesCard;

ServicesCard.propTypes = {
    backImage: PropTypes.string,
    frontImage : PropTypes.string,
    Title : PropTypes.string,
    Description: PropTypes.string
}