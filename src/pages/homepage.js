import React, { useEffect, useState } from "react";
import { Navigation } from "../components/navigation";
import img1 from '../img/rec1.png';
import img2 from '../img/rec2.png';
import img3 from '../img/rec3.png';
import back2 from '../assets/images/female-doctor2.jpg';
import back3 from '../assets/images/team5.png';
import back4 from '../assets/images/male-doctor2.jpg';
import Therapist1 from '../assets/images/male-doctor1.jpg'
import { Footer } from "../components/Footer/footer";
import {AiFillStar} from 'react-icons/ai';
import { TherapistCard } from "../components/Cards/therapist-card";
import { Testimonial } from "../components/testimonial/testimonial";
import { useDispatch, useSelector } from "react-redux";
import {FetchTherapists} from "../reduxSlices/FetchTherapists/FetchTherapists";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import { Autoplay, Pagination } from "swiper";
import team1 from "../img/team1.jpg";
import team2 from "../img/team2.jpg";
import team3 from "../img/team3.jpg";
import team4 from "../img/team4.jpg";
import team5 from "../img/team5.jpg";
import team6 from "../img/team6.jpg";
import team7 from "../img/team7.jpg";
import lifeline from "../img/lifeline.jpg";
import neveragan from "../img/neveragan.jpg";
import agis from "../img/aegis.png";
import ur from "../img/ur.jpg";
import klab from "../img/klab.png";

export const Homepage = () => {

    // Fetch Active Therapists
    let ActiveTherapists = useSelector(state => state.therapistFetch.data);
    ActiveTherapists = ActiveTherapists?.slice(0,3);
    const isLoading = useSelector(state => state.therapistFetch.isLoading);
    const error = useSelector(state => state.therapistFetch.error);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(FetchTherapists())
    }, [dispatch])
    // Message
    const test_message = "I really loved the support I got from Mental helper platform. It has been 2 years having mentals and therapists from this platform";
    const test_editor = "Kellen";
    const test_editor_title = "Therapist";
    const loginStatus = Boolean(localStorage.getItem("loginstatus"))
    const [smallScreen,setSmallScreen] = useState(window.innerWidth<640)
    useEffect(()=>{
        function handleResize() {
            if(window.innerWidth < 640){
                setSmallScreen(true)
            }
            else{
                setSmallScreen(false)
            }
        }
        window.addEventListener("resize",handleResize)
    },[])
    return(
        <div>
            <Navigation page={"home"}/>
            <div className="relative w-full h-[calc(100vh-56px)]">
                <Swiper
                    modules={[Autoplay,Pagination]}
                    pagination={{clickable:true}}
                    autoplay={{delay:4000}}
                    speed={1000}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop
                    className="m-o p-0 h-full w-full sm:w-1/2 sm:float-right"
                    >
                    <SwiperSlide>
                        <div style={{
                            background:`url(${back2})`,
                            backgroundPosition:(window.innerWidth < 640) ? "top" : "center",
                            backgroundSize:(window.innerWidth < 640) ? "80vh" : "cover",
                            backgroundRepeat:"no-repeat",
                            width:"100%",
                            height:"100%"
                            }}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            background:`url(${back3})`,
                            backgroundPosition:(window.innerWidth < 640) ? "top" : "center",
                            backgroundSize:(window.innerWidth < 640) ? "80vh" : "cover",
                            backgroundRepeat:"no-repeat",
                            width:"100%",
                            height:"100%"
                            }}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{
                            background:`url(${back4})`,
                            backgroundPosition:(window.innerWidth < 640) ? "top" : "center",
                            backgroundSize:(window.innerWidth < 640) ? "80vh" : "cover",
                            backgroundRepeat:"no-repeat",
                            width:"100%",
                            height:"100%"
                            }}></div>
                    </SwiperSlide>
                </Swiper>
                <div className="absolute top-0 z-10 h-[calc(100vh-56px)] w-full sm:pr-[50%] bg-gradient-to-b sm:bg-gradient-to-l from-[rgba(198,89,220,0.2)] via-purple-700 to-purple-900 flex flex-col justify-end sm:justify-center pb-10 ">
                    <h1 className="text-2xl csm:text-4xl xl:text-[45px] font-bold text-white text-center ">THERAPY IS FOR EVERYONE</h1>
                    <div className="relative mt-5 w-[90%] ml-[5%] text-white shadow-md shadow-[rgba(37,99,235,0.5)] ">
                        <div className="h-full overflow-hidden leading-5 csm:leading-6 p-6 csm:text-lg xl:text-xl ">
                            Welcome to MINDORA, a safe and supportive online community dedicated to improving your mental health and well-being. We understand that life can be challenging at times, and we believe that everyone deserves access to resources and support that can help them navigate those challenges.<br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-semibold text-lg w-full text-center mt-20 sm:text-2xl md:text-3xl lg:5xl lg:mt-10">How To Use</div>
            <div className="flex flex-wrap sm:flex-nowrap py-5 w-full gap-5 sm:gap-none lg:justify-center">
                <div className="ml-16 sm:ml-5 sm:mr-0 mr-16 w-full h-64 bg-gradient-to-t from-gray-900 to-purple-700 lg:w-72 flex-col mt-5 rounded-md">
                    <div className="h-52 w-full" style={{background:`url(${img1})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                    <div className="w-full font-medium text-center text-white sm:text-2xl text-3xl">Create Account</div>
                </div>
                <div className="ml-16 mr-16 h-64 sm:mx-0 w-full bg-gradient-to-t from-gray-900 to-purple-700 lg:w-72 flex-col mt-5 rounded-md">
                    <div className="h-52 w-full" style={{background:`url(${img2})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                    <div className="w-full font-medium text-center text-white text-3xl sm:text-2xl">Search Therapit</div>
                </div>
                <div className="ml-16 mr-16 sm:ml-0 sm:mr-5 h-64 w-full bg-gradient-to-t from-gray-900 lg:w-72 to-purple-700 flex-col mt-5 rounded-md">
                    <div className="h-52 w-full mt-1" style={{background:`url(${img3})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                    <div className="w-full font-medium text-center text-white text-3xl sm:text-2xl">Book Session</div>
                </div>
            </div>
            <div className="font-semibold text-lg w-full text-center mt-2 sm:text-2xl md:text-3xl lg:5xl lg:mt-4">Some Popular Therapists</div>
            <div className="w-full py-5 flex flex-col flex-wrap items-center gap-5 lg:flex-row justify-center">
                {
                    ActiveTherapists?.map((activeTherapist)=>{
                        return(
                            <TherapistCard
                            id = {activeTherapist._id}
                            myData = {ActiveTherapists}
                            Name={activeTherapist.Names}
                            Photo ={activeTherapist.profile_picture}
                            Location = {activeTherapist.location.province}
                            Type = {activeTherapist.therapist_type}
                            stars ={[<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>]}
                            salary = {40}
                        />
                        ) 
                    })
                }
            </div>
            <div className="font-semibold text-lg w-full text-center mt-2 sm:text-2xl md:text-3xl lg:5xl lg:mt-4">Testimonials</div>
            <div id="testimonial-container" className="w-full h-fit px-[8%] ">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination = {{clickable: true}}
                    autoplay ={{delay: 5000}}
                    speed={1000}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    className=" shadow-lg shadow-gray-400"
                >
                    <SwiperSlide>
                        <Testimonial 
                        test_editor={"KWIZERA Rulinda"} 
                        test_editor_title={"CEO of MINDORA"} 
                        test_message={"MINDORA plays a vital role in your mental health journey. Our platform is your steadfast companion, offering resources, a caring community, and expert guidance. We're here to ensure you never face mental health challenges alone."} 
                        test_img={team1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial 
                        test_editor={"Muhire Leon Pierre"} 
                        test_editor_title={"Marketing Director"} 
                        test_message={"Your well-being matters, and MINDORA understands that deeply. We provide unwavering support, valuable tools, and a nurturing community. MINDORA is your trusted partner in prioritizing and improving your mental health."} 
                        test_img={team4}/>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial 
                        test_editor={"Noella Nizigama"} 
                        test_editor_title={"Psychologist"} 
                        test_message={"MINDORA is more than a platform, it's a lifeline for your mental health. With us, you have access to a supportive community, expert resources, and personalized care. Your well-being is our top priority."} 
                        test_img={team3}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial 
                        test_editor={'Murenzi Patrick'} 
                        test_editor_title={"Clinical Psychologist"} 
                        test_message={"Your mental health journey is significant, and MINDORA recognizes its importance. We offer a dedicated space, valuable insights, and a compassionate community. MINDORA stands with you every step of the way."} 
                        test_img={team5}/>
                    </SwiperSlide>
                    
                </Swiper>
                
            </div>
            <div className="font-semibold text-lg w-full text-center mt-4 sm:text-2xl md:text-3xl lg:5xl lg:mt-6">Our Partners</div>
            <div className="flex gap-10 w-full justify-center items-center mt-5 mb-10">
                <div className="flex justify-center gap-5 w-full flex-wrap">
                    {/* <div className="flex-col w12 h-fit justify-center">
                        <div className="flex-col h-12 ml-6 w-12" style={{background:"url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/250px-Coat_of_arms_of_Rwanda.svg.png')",backgroundOrigin:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        <div className="w-24 text-xs text-center">Rwanda Ministry Of ICT</div>
                    </div> */}
                    <div className="flex-col w12 h-fit justify-center">
                        <div className="flex-col  h-12 ml-6 w-12" style={{background:"url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/250px-Coat_of_arms_of_Rwanda.svg.png')",backgroundOrigin:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        <div className="w-24 text-xs text-center">Huye District</div>
                    </div>
                    <div className="flex-col w12 h-fit justify-center">
                        <div className="flex-col mt-3 h-6 ml-6 w-12" style={{background:"url('https://www.rbc.gov.rw/fileadmin/templates/web/images/RBC-LOGO_Sept30_2019-Regular.png')",backgroundOrigin:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                        <div className="w-24 text-xs text-center">Rwanda Biomedical Center</div>   
                    </div>
                    <div className="flex-col w12 h-fit justify-center">
                        <div className="flex-col h-12 ml-6 w-12">
                            <img src={lifeline} alt="" className="w-full h-full object-contain"/>
                        </div>
                        <div className="w-24 text-xs text-center">
                            Lifeline Organization
                        </div>
                    </div>
                    <div className="flex-col w12 h-fit justify-center">
                        <div className="flex-col h-12 ml-6 w-12">
                            <img src={neveragan} alt="" className="w-full h-full object-contain"/>
                        </div>
                        <div className="w-24 text-xs text-center">
                        NeverAgain-Rwanda
                        </div>
                    </div>
                    <div className="flex-col w12 h-fit justify-center">
                        <div className="flex-col h-12 ml-6 w-12">
                            <img src={agis} alt="" className="w-full h-full object-contain"/>
                        </div>
                        <div className="w-24 text-xs text-center">
                            AEGIS TRUST
                        </div>
                    </div>
                    <div className="flex-col w12 h-fit justify-center">
                        <div className="flex-col h-12 ml-6 w-12">
                            <img src={ur} alt="" className="w-full h-full object-contain"/>
                        </div>
                        <div className="w-24 text-xs text-center">
                            University Of Rwanda
                        </div>
                    </div>
                    <div className="flex-col w12 h-fit justify-center">
                        <div className="flex-col h-12 ml-6 w-12">
                            <img src={klab} alt="" className="w-full h-full object-contain"/>
                        </div>
                        <div className="w-24 text-xs text-center">
                            KLAB Rwanda
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}