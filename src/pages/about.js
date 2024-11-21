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
import why from '../img/qt.webp';
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
import team8 from "../img/team8.jpg";
import team9 from "../img/team9.jpg";
import team10 from "../img/team10.jpg";
import team11 from "../img/team11.jpg";
import team12 from "../img/team12.jpg";
import team13 from "../img/team13.jpg";
import team14 from "../img/team14.jpg"
import team15 from "../img/team15.png"
import team16 from "../img/team16.png"
import test from "../img/secrenn.heic"


export const About = () => {
    let loginStatus = Boolean(localStorage.getItem("loginstatus"));
    return(
        <div>
            <Navigation page={"about"}/>
            <Header Title={'About Us'}/>
            <div className="flex flex-col mt-5 sm:flex-row h-fit w-fit lg:w-full">
                <div className="flex-col w-full sm:w-1/2 lg:ml-12">
                    <div className="mx-10 text-2xl font-medium leading-7 text-center lg:text-4xl sm:text-left md:text-3xl sm:mx-10 lg:w-4/5">We are here to solve Mental Problems</div>
                    <div className="mx-10 mt-2 text-base font-light leading-4 text-center sm:text-left lg:text-xl md:text-lg md:leading-5 sm:mx-10 lg:mt-6 lg:w-4/5">At MINDORA, we are dedicated to addressing and solving mental health challenges. Our mission is to provide support, resources, and a caring community to help individuals navigate and overcome mental health issues. You don't have to face these challenges alone – we are here to help you on your journey to mental well-being.</div>
                </div>
                <div className="flex justify-center sm:w-1/2 lg:justify-end lg:mr-20">
                    <video src={videoFile} loop controls className="h-40 mt-5 w-80 sm:mt-0 lg:w-4/5 lg:h-56"/>
                </div>
            </div>
            <div className="flex flex-col items-center w-full gap-2 mt-5 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-evenly lg:px-20 xl:gap-5">
                <div className="flex flex-col items-center border-2 w-72 xl:w-80 h-52 rounded-xl">
                    <FaHeartbeat className="w-16 mt-2 text-purple-700 h-fit"/>
                    <div className="w-full mt-3 text-lg font-semibold text-center text-purple-500">Core Values</div>
                    <div className="mt-2 mb-3 text-lg font-light leading-5 text-center ml-7 mr-7">
                    Compassion, Support, Community. Helping individuals overcome.
                    </div>
                </div>
                <div className="flex flex-col items-center border-2 w-72 xl:w-80 h-52 rounded-xl">
                    <FaHandHoldingMedical className="w-16 mt-2 text-purple-700 h-fit"/>
                    <div className="w-full mt-3 text-lg font-semibold text-center text-purple-500">Vision</div>
                    <div className="mt-2 mb-3 text-lg font-light leading-5 text-center ml-7 mr-7">Promoting mental well-being, one person at a time.</div>
                </div>
                <div className="flex flex-col items-center border-2 w-72 xl:w-80 h-52 rounded-xl">
                    <FaRocket className="w-16 mt-2 text-purple-700 h-fit"/>
                    <div className="w-full mt-3 text-lg font-semibold text-center text-purple-500">Mission</div>
                    <div className="mt-2 mb-3 text-lg font-light leading-5 text-center ml-7 mr-7">Empowering individuals with resources and support for mental well-being.</div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full sm:flex-row">
                <div className="flex justify-end w-full pl-20">
                    <div className="flex justify-end w-full mt-20 bg-black h-80 rounded-xl lg:w-4/5" style={{background:`url(${test})`,backgroundPosition:"center",backgroundSize:"cover"}}>
                        <div className="flex items-center justify-center w-20 h-20 -mr-10 text-3xl font-semibold text-purple-500 bg-white rounded-full shadow-md -mt-7 shadow-gray-400">5+</div>
                    </div>
                </div>
                <div className="flex flex-col w-full sm:ml-16">
                    <div className="w-full pl-20 pr-10 mt-2 text-2xl font-semibold text-center sm:pl-0 sm:text-3xl sm:mt-5 md:text-4xl lg:6xl">What We Do</div>
                    <div className="mt-1 ml-20 mr-10 text-sm text-center text-purple-500 sm:ml-0">We Offered the best Counselling Services:</div>
                    <div className="w-full pl-20 pr-10 sm:pl-0">
                        <div className="flex items-center px-2 py-2 mt-2 border-2 border-gray-500 rounded-3xl">
                            <FaHandsHelping className="text-3xl text-purple-700 w-fit"/>
                            <div className="flex flex-col ml-1 w-fit">
                                <div className="text-xl font-semibold">Mental Health Support</div>
                                <div className="mt-1 font-light leading-4 text-md">
                                Tele-Therapy Sessions, Hotline Support, Peer Support Groups. 
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pl-20 pr-10 sm:pl-0">
                        <div className="flex items-center px-2 py-2 mt-2 border-2 border-gray-500 rounded-3xl">
                            <GiLifeInTheBalance className="text-3xl text-purple-700 w-fit"/>
                            <div className="flex flex-col ml-1 w-fit">
                                <div className="text-xl font-semibold">Awareness & Wellmess</div>
                                <div className="mt-1 font-light leading-4 text-md">
                                Mental Health Resources,Mental Health Articles and Blogs and Videos, Personalized wellness Plans,Workshop (Enroll Training & CPD Course).
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pl-20 pr-10 sm:pl-0">
                        <div className="flex items-center px-2 py-2 mt-2 border-2 border-gray-500 rounded-3xl">
                            <FaHandHoldingMedical className="text-3xl text-purple-700 w-fit"/>
                            <div className="flex flex-col ml-1 w-fit">
                                <div className="text-xl font-semibold">Holistic Approach </div>
                                <div className="mt-1 font-light leading-4 text-md">Sense my mood (AI), CheckIn (Self-Assessment Tools),</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{background:`url(${img1})`,backgroundPosition:"center",backgroundSize:"cover",paddingTop:30,paddingBottom:30,marginTop:50}}>
                <div className="w-full text-xl font-semibold text-center sm:text-2xl md:text-3xl lg:5xl lg:mt-4">Why Choose Us</div>
                <div>
                <div className="flex flex-col items-center w-full px-10 h-fit md:flex-row md:justify-evenly">
                    <div className="w-full mt-2 h-fit md:w-1/2">
                    At MINDORA, we stand out as a beacon of excellence in healthcare therapy. Our unwavering commitment to your well-being and our comprehensive approach to therapy set us apart. With a team of dedicated professionals, cutting-edge techniques, and a caring environment, we are your trusted partners on your journey to better health. Choose us for a path to a healthier, more vibrant life
                        <div className="flex justify-center w-full h-fit md:justify-end">
                            <div className="w-fit h-fit flex rounded-3xl border-grey-300 border-2 bg-white md:-mr-[50%] lg:-mr-[20%] mt-5 z-10">
                                <div className="flex flex-col items-center px-12 py-2 text-3xl font-semibold border-r-2 w-fit h-fit sm:text-5xl border-grey-300">
                                    <div>5k<sup>+</sup></div>
                                    <div className="text-base font-normal">Users</div>
                                </div>
                                <div className="flex flex-col items-center px-12 py-2 text-3xl font-semibold w-fit h-fit sm:text-5xl">
                                    <div>10<sup>+</sup></div>
                                    <div className="text-base font-normal">Therapists</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden ml-10 w-60 h-60 md:flex" style={{background:`url(${why})`,backgroundPosition:"center",backgroundSize:"cover", borderRadius: "20px"}} ></div>
                </div>
                </div>
            </div>
            <div className="w-full mt-8 mb-8 text-xl font-semibold text-center bg-white sm:text-2xl md:text-3xl lg:5xl">Meet Our Team</div>
                <div className="flex flex-col flex-wrap items-center w-full gap-5 mb-10 bg-white h-fit sm:flex-row sm:justify-center md:px-10 lg:px-40 lg:gap-10 xl:px-40 xl:gap-20">
                    <Member img={team1} mname={"Kwizera Rulinda"} role={"Co-founder & CEO"} specialty={"Clinical Psychologist"}/>
                    <Member img={team16} mname={"Nicole Marizan"} role={"Co-founder & SEO"} specialty={"Software engineer"}/>
                     <Member img={team8} mname={"Takudzwa Tarutira"} role={"Co-founder & CTO"} specialty={"AI and Machine leaning Engineer"}/>
                    <Member img={team15} mname={"Umukundwa Larissa"} role={"co-founder & CPO"} specialty={"Mental health advocate"}/>
                    <Member img={team13} mname={"Bizimana Clement"} role={"COO of MINDORA"} specialty={"Business Operations"}/>
                    <Member img={team12} mname={"M. Lisa Cynthia"} role={"MRO"} specialty={"Psychologist"}/>
                    <Member img={team3} mname={"Noella Nizigama "} role={"DIO"} specialty={"Disability & Inclusion Expert"}/>
                    <Member img={team9} mname={"DR Gahire Hubert"} role={"PPO"} specialty={"Medical Doctor"}/>
                    <Member img={team14} mname={"Utuje Benie"} role={"Content Creator"} specialty={"Clinical Psychologist"}/>
                    <Member img={team7} mname={"Kevin Ishimwe"} role={"UX"} specialty={"Software Engineer"}/>
                    <Member img={team4} mname={"Muhire Leon Pierre"} role={"Marketing Director"} specialty={"Business & Market Strategist"}/>
                    
                    
                </div>
            <Footer/>
        </div>
    )
}