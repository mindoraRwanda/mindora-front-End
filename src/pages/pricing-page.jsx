import React from "react";
import { Navigation } from "../components/navigation";
import PricingCard from "../components/Cards/pricing-card";
import pricingAvatar from '../assets/images/Avatar1.png'
import { ClickButton } from "../components/Buttons/ClickButton";
import { Footer } from "../components/Footer/footer";
import { Zoom, Fade } from "react-awesome-reveal";
import HeadSlider from "../components/Header/headSlider";

export const PricingPage=()=>{
    return(
        <React.Fragment>
            <div className="w-full h-full overflow-x-hidden">
            <Navigation page={"pricing"} />
           <HeadSlider
                Title={'Pricing'}
                id = 'pricingSlider'
                Text='We offered multiple payment methods in order to make it easy. You can pay for DAY, WEEK, Month or YEAR.'
           />
            <div id="pricingDescription"  className="flex w-full px-8 cm:px-24 mt-16 justify-center gap-20 items-center">
                <div  className="flex-col w-full cm:w-3/4 gap-10">
                    <Zoom direction="left" cascade>
                     <h1 id="Header--font" className="mb-2 font-primaryFont text-2xl font-bold">We are available 24/7. Smart Solutions for your Problems </h1>
                    <p className=" mb-4 text-lg font-sans ">Your challenges don't adhere to a schedule, and neither do we. At MINDORA, we understand that life's problems can arise at any hour. That's why we're available round the clock, ready to provide you with intelligent solutions and unwavering support. No matter when you need us, we're here to help you navigate life's complexities with confidence and care.
                    Our team of experienced professionals is dedicated to delivering personalized assistance tailored to your unique needs. We believe in smart solutions that address the root of the issue, helping you not just overcome challenges but also thrive. When you choose MINDORA, you're choosing a trusted partner in your journey toward a brighter and more resilient future. Your well-being is our priority, and we're here to support you every step of the way.
                 </p>
                 </Zoom>
                </div>
                <div className=" items-end cm:visible cm:flex hidden  justify-end">
                    <Zoom direction="right">
                    <img  src={pricingAvatar} alt="" />
                    </Zoom>
                </div>
            </div>
            <div className=" flex-col mb-16 mt-16 justify-center text-center items-center gap-16">
                <h1 id="Header--font" className="mb-5 font-primaryFont text-2xl font-bold">Pricing Plan For Therapy session</h1>
                <div id="pricingCard__container" className=" flex w-full justify-center gap-y-10">
                  
                <div id="sideCards" className="flex justify-center gap-x-80 gap-y-10 -z-6">

                     
                        <PricingCard
                            service='Family Therapy Service'
                            description={'Nurturing family well-being and strengthening bonds.'}
                            amount={20}
                            feature1= 'Family-Centered Approach'
                            feature2= 'Communication Improvement'
                            feature3 = 'Conflict Resolution'
                            feature4 = 'Problem-Solving Skills'
                            feature5 ='Strength-Based Approach'
                        />

                            <PricingCard
                                service='School Therapy Program'
                                description={'Fostering student well-being and nurturing growth.'}
                                amount={10}
                                feature1= 'Student-Centered Approach'
                                feature2= 'Professional Guidance'
                                feature3 = 'Individual and Group Support'
                                feature4 = 'Academic and Emotional Support'
                                feature5 ='Collaboration with Educational Staff'
                            />

                      
                    </div>
                    <div id="pricingCard__absolute" className="absolute m-auto ">
         
                        <PricingCard
                                service='Individual Therapy'
                                description={'Promoting personal wellness and growth.'}
                                amount={15}
                                feature1= 'Personalized Assessment'
                                feature2= 'Tailored Wellness Plans'
                                feature3 = 'Holistic Approach'
                                feature4 = 'Self-Discovery and Growth'
                                feature5 ='Long-Term Wellness'
                            />
                            

                    </div>

                    {/* <div id="pricingCard__absolute" className="absolute m-auto ">
         
                        <PricingCard
                                service='School Therapy Program'
                                description={'Fostering student well-being and nurturing growth.'}
                                amount={2}
                                feature1= 'Student-Centered Approach'
                                feature2= 'Professional Guidance'
                                feature3 = 'Individual and Group Support'
                                feature4 = 'Academic and Emotional Support'
                                feature5 ='Collaboration with Educational Staff'
                            />
                            

                    </div> */}
                </div>
            </div>

            <div className=" flex-col mb-16 mt-16 justify-center text-center items-center gap-16">
                <h1 id="Header--font" className="mb-5 font-primaryFont text-2xl font-bold">Pricing Plan For Premium Content</h1>
                <div id="pricingCard__container" className=" flex w-full justify-center gap-y-10">
                  
                <div id="sideCards" className="flex justify-center gap-x-80 gap-y-10 -z-6">

                     
                        <PricingCard
                            service='Training'
                            description={'Nurturing family well-being and strengthening bonds.'}
                            amount={30}
                            feature1= 'Comprehensive Curriculum'
                            feature2= 'Interactive Learning'
                            feature3 = 'Certification'
                            feature4 = 'Experienced Instructors'
                            feature5 ='Ongoing Support'
                        />

                            <PricingCard
                                service='E-Books'
                                description={'Fostering student well-being and nurturing growth.'}
                                amount={10}
                                feature1= 'Wide Range of Topics'
                                feature2= 'Accessibility'
                                feature3 = 'Expert Authorship'
                                feature4 = 'Interactive Elements'
                                feature5 ='Resources and References'
                            />

                      
                    </div>
                    <div id="pricingCard__absolute" className="absolute m-auto ">
         
                        <PricingCard
                                service='Workshop (Enroll Training & CPD Course)'
                                description={'Promoting personal wellness and growth.'}
                                amount={10}
                                feature1= 'Diverse Course Catalog'
                                feature2= 'Flexible Learning Options'
                                feature3 = 'Accredited Content'
                                feature4 = 'Experienced Instructors'
                                feature5 ='Networking Opportunities'
                            />
                            

                    </div>

                    {/* <div id="pricingCard__absolute" className="absolute m-auto ">
         
                        <PricingCard
                                service='School Therapy Program'
                                description={'Fostering student well-being and nurturing growth.'}
                                amount={2}
                                feature1= 'Student-Centered Approach'
                                feature2= 'Professional Guidance'
                                feature3 = 'Individual and Group Support'
                                feature4 = 'Academic and Emotional Support'
                                feature5 ='Collaboration with Educational Staff'
                            />
                            

                    </div> */}
                </div>
            </div>

            <div id="pricing__help" className="w-full flex-col text-center px-16 items-center mt-16 mb-16 justify-center">
                <Fade duration={3000} direction="top">
                <h1 id="Header--font" className="mb-2 font-primaryFont text-2xl font-bold">Need Additional Help?</h1>
                <p className=" w-full cm:w-1/2 m-auto text-center mb-4 text-lg font-sans">At MINDORA, we're here to assist you every step of the way. Our dedicated professionals are ready to provide guidance and collaborate with you to overcome obstacles and achieve your goals. Reach out to us today and let's work together to find the support you need for a brighter future.</p>
                <ClickButton  Name='Contact Us'  />
                </Fade>
            </div>
           
                    <Footer/>
                    </div>
        </React.Fragment>
    )
}