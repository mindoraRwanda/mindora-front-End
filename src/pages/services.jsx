import React from "react";
import {Link} from 'react-scroll'
// import { ClickButton } from "../components/Buttons/ClickButton";
// import SlideImage1 from '../assets/images/male-doctor2.jpg'
// import SlideImage2 from '../assets/images/male-doctor1.jpg'
// import SlideImage3 from '../assets/images/female-doctor2.jpg'
// import SlideImage4 from '../assets/images/female-doctor1.jpg'
import availableImage from '../assets/icons/available.png'
import supportImage from '../assets/icons/support.png'
import experienceImage from '../assets/icons/experience.png'
import backImage1 from '../assets/images/rehab.jpg'
import frontImage1 from '../assets/images/talk.jpg'
import backImage2 from '../assets/images/wellness.jpg'
import frontImage2 from '../assets/images/yoga.jpg'
import backImage3 from '../assets/images/aitool.jpg'
import frontImage3 from '../assets/images/vlaar.jpg'
import { ServicesValuesCard } from "../components/Cards/servicesValues-card";
import ServicesCard  from "../components/Cards/servicesDetails-card";
import ServicesDetailsImage from '../assets/images/background.png'
import { Footer } from "../components/Footer/footer";
import { Navigation } from "../components/navigation";
// import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
// import { Autoplay, Pagination } from "swiper";
import {  Zoom } from "react-awesome-reveal";
import Header from "../components/Header/header";

export const Services = ()=>{
    // const [color, setColor] = useState('white');
    // const childrenRef = useRef(null)
    // // const[activeScrool, setActiveScrool] = useState('')
    // // if(activeScrool === 'Children'){
    // //     setActiveScrool.scrollIntoView({ behavior: 'smooth' })
    // // }
    // const ChildrenNavigate = ()=>{
    //     setColor('black');
    //     childrenRef.current.scrollIntoView({ behavior: 'smooth' });
        
    // }
    
    const msg1 =<div> <span className="font-bold"> Tele-Therapy Sessions:</span> Mindora provides mental health counseling or therapy services through remote communication technologies. <br/> <br/>
    <span className="font-bold"> Hotline Support: </span> Mindora provides emergency  assistance and crisis intervention for individuals experiencing acute mental health crises, and providing immediate support during moments of distress through our Hotline.<br/> <br/>
    <span className="font-bold">Peer Support Groups: </span>Mindora allows the clients to connect,  share and gain vast experience  relarted to overcoming their daily challenges to resilient life.</div>
    
    const msg2 =<div> <span className="font-bold"> Mental Health Resources:</span> This part shall be composed of E-book recommendations, Mental Health Articles and Blogs and Videos
    <br/> <br/>
    <span className="font-bold">  Personalized wellness Plans:</span> Mindora provides tools help in personal activities such as Yoga, Mindfulness and Meditation, Deep Breathing Exercises, Journaling, Regular Exercise, Adequate Sleep, and Self-Care Activities<br/> <br/>
    <span className="font-bold"> Workshop (Enroll Training & CPD Course)</span> Mindora provides Training and Course on mental health counseling and therapy services.
    </div>

    const msg3 =<div> <span className="font-bold"> Sense my mood (AI): </span> Mindora offers a cutting-edge AI-driven service that detects and analyzes your emotional state, helping you gain insights into your mood and emotions. It provides real-time emotional awareness and guidance to support your mental well-being.<br/> <br/>
    <span className="font-bold">  CheckIn (Self-Assessment Tools): </span>Mindora's CheckIn service equips you with valuable self-assessment tools. These tools empower you to take charge of your mental health by allowing you to regularly monitor and evaluate your emotional state, providing valuable insights for self-improvement and well-being.<br/> <br/>
    </div>
    return(
        <React.Fragment>
            <div className="w-full overflow-x-hidden">
                    <Navigation page={'services'}/>
                    <Header Title={'What We Offer'}/>
                    <div className="w-full mt-4 p-4 csm:p-8 cm:p-14 flex flex-col gap-4 csm:justify-center csm:text-center">
                        <Zoom direction="left">
                        <h1 className=" font-primaryFont text-2xl font-bold  ">Save Your Valuable Time</h1>
                        <p className=" w-full cm:w-3/4 font-sans text-lg csm:m-auto ">We offered the best services to satisfy our clients. Our services are affordable and reliable. We offered the best services to satisfy our clients. Our services are affordable and reliable</p>
                        </Zoom>
                        <div className=" items-center flex flex-wrap gap-8 justify-center m-auto mt-8 w-full cm:w-3/4">
                            <ServicesValuesCard
                                Title={'Always Available'}
                                Description = 'We offered the best services to satisfy our clients. '
                                valueImage={availableImage}
                            />
                            <ServicesValuesCard
                                Title={'Support'}
                                Description = 'We offered the best services to satisfy our clients.  '
                                valueImage={supportImage}
                            />
                            <ServicesValuesCard
                                Title={'Experience'}
                                Description = 'We offered the best services to satisfy our clients. '
                                valueImage={experienceImage}
                            />
                        </div>
                    </div>
                    <div className="mt-8 hidden csm:flex  gap-4 p-8 cm:px-14">
                        <div  className="bg-purple-600 rounded-3xl w-full p-4 cm:p-8 ">
                            <ul className="flex items-center justify-center gap-8">
                                <Link activeClass='activeSection' spy={true} offset={-70}  to='Personally' smooth={true} duration={1000} >  <li className="font-bold text-white text-base cm:text-xl cursor-pointer ">Mental Health Support</li></Link>
                              <Link to='Family'  activeClass='activeSection' spy={true} offset={-70} smooth={true} duration={1000} > <li className="font-bold text-base cm:text-xl cursor-pointer text-white">Awareness & Wellmess</li></Link>
                               <Link to='Health'  activeClass='activeSection' spy={true} offset={-70} smooth={true} duration={1000} > <li className="font-bold text-base cm:text-xl cursor-pointer text-white">Holistic Approach</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${ServicesDetailsImage})` }} className=" bg-cover  bg-no-repeat bg-center flex flex-col gap-16 cm:gap-32 mb-16 w-full py-16 cm:py-32 px-4 csm:px-8 cm:px-14">
                        <ServicesCard
                            backImage={backImage1}
                            frontImage={frontImage1}
                            Id='Personally'
                            Title = 'Mental Health Support'
                            Description={msg1}
                        />
                        <ServicesCard
                            backImage={backImage2}
                            frontImage={frontImage2}
                            Id = 'Family'
                            Title = 'Awareness & Wellmess'
                            Description={msg2}
                        />
                        <ServicesCard
                            backImage={backImage3}
                            frontImage={frontImage3}
                            Id = 'Health'
                            Title = 'Holistic Approach'
                            Description={msg3}
                        />
                    </div>
                    <Footer/>
            </div>
        </React.Fragment>
    )
}