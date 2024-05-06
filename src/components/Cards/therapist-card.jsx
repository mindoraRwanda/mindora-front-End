import React from "react";
// import TherapistPhoto from '../../assets/images/male-doctor1.jpg'
// import { AiFillStar } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ClickButton } from "../Buttons/ClickButton";

export const TherapistCard =({Photo, Name, Location, Type, stars, myData,id})=>{
    const navigate = useNavigate();
        if(!Name || !Type){
            return null
        }
            return(
                <React.Fragment>
                    <div>
                        <Fade direction="right" duration={600}>
                    <div id="therapist__card" className="bg-white drop-shadow-xl border csm:border-none csm:drop-shadow-2xl  w-80 px-8 py-6 flex-col items-center text-center">
                        <div className="flex-col w-full items-center text-center">
                            <img className="w-24 m-auto shadow-lg h-24 rounded-circle" src={Photo} alt="" />
                            <h1 className=" font-interFont text-lg mt-3 font-bold " >{Name}</h1>
                            <p className=" text-sm font-interFont mb-4 ">{Location}</p>
                        </div>
                        <div className="w-full flex justify-between gap-2 items-center text-center">
                            <div className="flex-col font-bold text-center gap-2 w-full">
                                <p>{Type}</p>
                                <span className="w-1/2 m-auto flex items-center justify-center gap-1 text-center ">
                                    {stars}
                                    {/* <AiFillStar className=" w-96 text-yellowColor "/>
                                    <AiFillStar className=" w-96 text-yellowColor "/>
                                    <AiFillStar className=" w-96 text-yellowColor "/>
                                    <AiFillStar className=" w-96 text-yellowColor "/>
                                    <AiFillStar className= " w-96 text-white "/> */}
                                </span>
                            </div>
                            {/* <div className="flex-col items-center text-center">
                           
                           
                            </div> */}
                        </div>
                        <div className="flex gap-2 w-full justify-center items-center mt-2">
                            <Link to={`/profile-view/${id}`}> <ClickButton Name='Profile' id='therapist--btn'/></Link>
                            <ClickButton Name='Book' id='therapist--btn' onClick={()=>{
                                navigate('/book-appointments',{state:myData})
                            }} /> 
                        </div>
                      
                    </div>
                    </Fade>

                    </div>
        </React.Fragment>
)
}
TherapistCard.prototype = {
    Photo: PropTypes.string,
    Name: PropTypes.string.isRequired,
    Location: PropTypes.string,
    Type: PropTypes.string,
    stars: PropTypes.array,
    salary: PropTypes.number.isRequired,
}