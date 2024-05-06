import React, { useEffect } from "react";
import { Navigation } from "../components/navigation";
import videoFile from "../Video/vid1.mp4";
import {FaRocket} from 'react-icons/fa';
import{FaHeartbeat} from 'react-icons/fa';
import {FaHandHoldingMedical} from 'react-icons/fa';
import {FaChild} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import {IoIosSchool} from 'react-icons/io';
import {IoIosPersonAdd} from 'react-icons/io';
import {MdOutlineFamilyRestroom} from 'react-icons/md';
import {IoMdHeartHalf} from 'react-icons/io';
import {GiHealingShield} from 'react-icons/gi';
import {FaHandsHelping} from 'react-icons/fa';
import {GiLifeInTheBalance} from 'react-icons/gi';
import img1 from '../img/rec4.png';
import why from '../img/why.png';
import { Footer } from "../components/Footer/footer";
import { Member } from "../components/Cards/team-card";
import Header from "../components/Header/header";
import team1 from "../img/team1.jpg";
import team2 from "../img/team2.jpg";
import team3 from "../img/team3.jpg";
import team4 from "../img/team4.jpg";
import team5 from "../img/team5.jpg";
import team6 from "../img/team6.jpg";
import team7 from "../img/team7.jpg";

export const About = () => {
    let loginStatus = Boolean(localStorage.getItem("loginstatus"));
    return(
        <div>
            <Navigation page={"about"}/>
            <Header Title={'About Us'}/>
            <div className="flex flex-col sm:flex-row h-fit mt-5 w-fit lg:w-full">
                <div className="flex-col w-full sm:w-1/2 lg:ml-12">
                    <div className="text-2xl lg:text-4xl sm:text-left text-center md:text-3xl sm:mx-10 font-medium mx-10 leading-7 lg:w-4/5">We are here to solve Mental Problems</div>
                    <div className="mt-2 text-base sm:text-left lg:text-xl text-center font-light md:text-lg md:leading-5 mx-10 sm:mx-10 leading-4 lg:mt-6 lg:w-4/5">At MINDORA, we are dedicated to addressing and solving mental health challenges. Our mission is to provide support, resources, and a caring community to help individuals navigate and overcome mental health issues. You don't have to face these challenges alone – we are here to help you on your journey to mental well-being.</div>
                </div>
                <div className="sm:w-1/2 flex justify-center lg:justify-end lg:mr-20">
                    <video src={videoFile} loop controls className="w-80 h-40 mt-5 sm:mt-0 lg:w-4/5 lg:h-56"/>
                </div>
            </div>
            <div className="flex-col gap-2 mt-5 w-full flex items-center sm:flex-row sm:flex-wrap sm:justify-center lg:justify-evenly lg:px-20 xl:gap-5">
                <div className="w-72 xl:w-80 h-52 flex flex-col border-2 items-center rounded-xl">
                    <FaHeartbeat className="h-fit w-16 mt-2 text-purple-700"/>
                    <div className="text-lg font-semibold w-full text-center mt-3 text-purple-500">Core Values</div>
                    <div className="text-lg mt-2 ml-7 mr-7 leading-5 font-light text-center mb-3">
                    Compassion, Support, Community. Helping individuals overcome.
                    </div>
                </div>
                <div className="w-72 xl:w-80 h-52 flex flex-col border-2 items-center rounded-xl">
                    <FaHandHoldingMedical className="h-fit w-16 mt-2 text-purple-700"/>
                    <div className="text-lg font-semibold w-full text-center mt-3 text-purple-500">Vision</div>
                    <div className="text-lg mt-2 ml-7 mr-7 leading-5 font-light text-center mb-3">Promoting mental well-being, one person at a time.</div>
                </div>
                <div className="w-72 xl:w-80 h-52 flex flex-col border-2 items-center rounded-xl">
                    <FaRocket className="h-fit w-16 mt-2 text-purple-700"/>
                    <div className="text-lg font-semibold w-full text-center mt-3 text-purple-500">Mission</div>
                    <div className="text-lg mt-2 ml-7 mr-7 leading-5 font-light text-center mb-3">Empowering individuals with resources and support for mental well-being.</div>
                </div>
            </div>
            <div className="flex-col flex items-center w-full sm:flex-row">
                <div className="pl-20 w-full flex justify-end">
                    <div className="flex h-80 w-full bg-black justify-end rounded-xl mt-20 lg:w-4/5" style={{background:"url('https://i.insider.com/5ec827273f73707932588946?width=700')",backgroundPosition:"center",backgroundSize:"cover"}}>
                        <div className="h-20 w-20 -mt-7 shadow-md shadow-gray-400 -mr-10 bg-white rounded-full text-purple-500 flex items-center justify-center font-semibold text-3xl">5+</div>
                    </div>
                </div>
                <div className="flex flex-col w-full sm:ml-16">
                    <div className="font-semibold text-2xl w-full pl-20 sm:pl-0 pr-10 text-center mt-2 sm:text-3xl sm:mt-5 md:text-4xl lg:6xl">What We Do</div>
                    <div className="text-purple-500 text-center ml-20 sm:ml-0 mr-10 text-sm mt-1">We Offered the best Counselling Services:</div>
                    <div className="pl-20 pr-10 w-full sm:pl-0">
                        <div className="border-2 border-gray-500 rounded-3xl px-2 py-2 flex items-center mt-2">
                            <FaHandsHelping className="text-purple-700 text-3xl w-fit"/>
                            <div className="flex flex-col ml-1 w-fit">
                                <div className="text-xl font-semibold">Mental Health Support</div>
                                <div className="text-md font-light mt-1 leading-4">
                                Tele-Therapy Sessions, Hotline Support, Peer Support Groups. 
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-20 pr-10 w-full sm:pl-0">
                        <div className="border-2 border-gray-500 rounded-3xl px-2 py-2 flex items-center mt-2">
                            <GiLifeInTheBalance className="text-purple-700 text-3xl w-fit"/>
                            <div className="flex flex-col ml-1 w-fit">
                                <div className="text-xl font-semibold">Awareness & Wellmess</div>
                                <div className="text-md font-light mt-1 leading-4">
                                Mental Health Resources,Mental Health Articles and Blogs and Videos, Personalized wellness Plans,Workshop (Enroll Training & CPD Course).
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-20 pr-10 w-full sm:pl-0">
                        <div className="border-2 border-gray-500 rounded-3xl px-2 py-2 flex items-center mt-2">
                            <FaHandHoldingMedical className="text-purple-700 text-3xl w-fit"/>
                            <div className="flex flex-col ml-1 w-fit">
                                <div className="text-xl font-semibold">Holistic Approach </div>
                                <div className="text-md font-light mt-1 leading-4">Sense my mood (AI), CheckIn (Self-Assessment Tools),</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:`url(${img1})`,backgroundPosition:"center",backgroundSize:"cover",paddingTop:30,paddingBottom:30,marginTop:50}}>
                <div className="font-semibold text-xl w-full text-center sm:text-2xl md:text-3xl lg:5xl lg:mt-4">Why Choose Us</div>
                <div>
                <div className="w-full h-fit flex flex-col items-center px-10 md:flex-row md:justify-evenly">
                    <div className="w-full h-fit mt-2 md:w-1/2">
                    At MINDORA, we stand out as a beacon of excellence in healthcare therapy. Our unwavering commitment to your well-being and our comprehensive approach to therapy set us apart. With a team of dedicated professionals, cutting-edge techniques, and a caring environment, we are your trusted partners on your journey to better health. Choose us for a path to a healthier, more vibrant life
                        <div className="flex w-full h-fit justify-center md:justify-end">
                            <div className="w-fit h-fit flex rounded-3xl border-grey-300 border-2 bg-white md:-mr-[50%] lg:-mr-[20%] mt-5 z-10">
                                <div className="w-fit h-fit py-2 px-12 text-3xl sm:text-5xl font-semibold flex flex-col items-center border-r-2 border-grey-300">
                                    <div>15k<sup>+</sup></div>
                                    <div className="text-base font-normal">Users</div>
                                </div>
                                <div className="w-fit h-fit py-2 px-12 text-3xl sm:text-5xl font-semibold flex flex-col items-center">
                                    <div>15k<sup>+</sup></div>
                                    <div className="text-base font-normal">Therapists</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-60 h-60 hidden md:flex ml-10" style={{background:`url(${why})`,backgroundPosition:"center",backgroundSize:"cover"}} ></div>
                </div>
                </div>
            </div>
            <div className="font-semibold text-xl w-full bg-white text-center sm:text-2xl md:text-3xl lg:5xl mt-8 mb-8">Meet Our Team</div>
                <div className="w-full h-fit flex flex-col items-center gap-5 mb-10 bg-white sm:flex-row flex-wrap sm:justify-center md:px-10 lg:px-40 lg:gap-10 xl:px-40 xl:gap-20">
                    <Member img={team1} mname={"Kwizera Rulinda"} task={"CEO of MINDORA"}/>
                    <Member img={team4} mname={"Muhire Leon Pierre"} task={"Marketing Director"}/>
                    <Member img={team3} mname={"Noella Nizigama"} task={" Psychologist"}/>
                    <Member img={team2} mname={"Uwirora  Gilbert"} task={"Clinical Psychologist"}/>
                    <Member img={team5} mname={"Murenzi Patrick"} task={"Clinical Psychologist"}/>
                    <Member img={team6} mname={"Nsengiyumva Athanaze"} task={"Clinical Psychologist"}/>
                    <Member img={team7} mname={"Ishimwe Kevin"} task={"Software Engineer"}/>
                </div>
            <Footer/>
        </div>
    )
}