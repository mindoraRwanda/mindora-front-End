import React from "react";
import Teamlogo from '../../assets/images/OfficialLogo.png'
import facebook from '../../assets/icons/Facebook.png'
import twitter from '../../assets/icons/Twitter.png'
import instagram from '../../assets/icons/Facebook.png'
import linkdln from '../../assets/icons/LinkedIn.png'
import logo from '../../assets/icons/logo.png'

export const Footer = ()=>{
    return(
        <React.Fragment>
            <div id="pricingDescription" className=" bg-purple-700 px-4 md:px-20 py-8 ">
                <div className="flex mb-4 w-full">
                    <img src={logo} alt="" />
                    <div className="px-2 fon-bold text-blue-600 font-bold ml-1 mt-4 ">MINDORA</div>
                </div>
                <div className=" flex-col md:flex gap-14 md:flex-row w-full">
                   
                        <div className=" mb-8 w-full md:mb-0 flex-col md:w-1/2 gap-5">
                                <h1 id="Header--font" className="footerHead">About</h1>
                                <p className=" text-lg font-sans text-white ">At MINDORA, we are staffed by a team of dedicated professionals who are passionate about improving your mental health and well-being. We provide a safe and supportive online community, offering resources and support to help you navigate life's challenges."</p>
                        </div>

                        <div id="footerResponsive"  className=" w-full flex justify-between md:w-1/2 gap-4">
                            <ul>
                                <h1 id="Header--font" className="footerHead">Menu</h1>
                                <li className="footerList">Home</li>
                                <li className="footerList">About</li>
                                <li className="footerList">Services</li>
                                <li className="footerList">Therapist</li>
                                <li className="footerList">Pricing</li>
                                <li className="footerList">Contact</li>
                            </ul>
                            <ul>
                                <h1 id="Header--font" className="footerHead">Get In Touch</h1>
                                <li className="footerList"><img src={twitter} alt="" />
                                <a href="https://twitter.com/MentalHealthRw">Twitter</a></li>
                                <li className="footerList"><img src={instagram} alt="" /><a href="https://www.instagram.com/lifelineorganization/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">Instagram</a></li>
                                <li className="footerList"><img src={linkdln} alt="" />
                                <a href="https://www.linkedin.com/company/mentalhealthjourney/?originalSubdomain=rw">LinkedIn</a></li>
                            </ul>
                            <ul>
                                <h1 id="Header--font" className="footerHead">Contacts</h1>
                                <li className="footerList">+250 783 974 066</li>
                                <li className="footerList">+250 788 890 898</li>
                                <li className="footerList">+250 789 988 770</li>
                            </ul>
                        </div>
                        </div> 
                        <div className=" h-0.5 mt-10 flex w-full bg-white"></div>

                        <div  id="footerResponsive"  className="w-full mt-5 justify-between flex">
                            <p className="footerList">&copy; 2023 MINDORA</p>
                            <p className="footerList">Power by: KLab</p>
                        </div>
            </div>
           
        </React.Fragment>
    )
}

// function footerList(arg){
//     if(arg) return 
// }