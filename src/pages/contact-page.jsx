import React from "react";
// import { Loader } from "@googlemaps/js-api-loader";
import SubmitButton from "../components/Buttons/SubmitButton";
import { Navigation } from "../components/navigation";
import {Footer} from '../components/Footer/footer';
import googleMap from '../assets/images/Map.png';
import {BsFacebook,BsFillPhoneVibrateFill} from 'react-icons/bs';
import {AiOutlineMail,AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';
import {CiLocationOn} from 'react-icons/ci';
import { Fade } from "react-awesome-reveal";
import HeadSlider from "../components/Header/headSlider";



// const MapComponent = () => {
//     const mapRef = useRef(null);
  
//     useEffect(() => {
//       const loader = new Loader({
//         apiKey: 'YOUR_API_KEY',
//         version: 'weekly',
//       });
  
//       loader.load().then(() => {
//         new window.google.maps.Map(mapRef.current, {
//           center: { lat: 37.7749, lng: -122.4194 },
//           zoom: 8,
//         });
//       });
//     }, []);
//     return <div ref={mapRef} style={{ height: '400px' }} />;
// };

const ContactUs =()=>{
  
    return(
        <React.Fragment>
              <Navigation page={'contact'}/>
              <HeadSlider 
                Title={'Contact Us'}
                Text = 'We Love to hear from you. Contact us now and get a quick reply'
                id= 'ContactUs__Slider'
              />
              <div className=" p-4 csm:p-8 w-full flex-col mb-16  justify-center mt-8 gap-12">
                <div className="w-full flex justify-center text-center">
                <h1 id="Header--font"  className=" mt-5 font-primaryFont text-2xl font-bold w-full md:w-1/2 ">
                    We want to Hear From You and Our Team will respond as soon as possible.</h1>
                </div>
                <Fade direction="left" duration={1000}>
                    <div className="w-full m-auto csm:p-10 csm:border gap-5 mt-8 md:w-10/12  flex flex-col-reverse md:flex-row justify-between csm:rounded-md csm:bg-white csm:shadow-lg ">
                        <div className=" w-full md:w-96 flex-col">
                            <h1 className=" text-brandColor font-primaryFont font-bold text-lg md:text-xl mb-4  " >Contact Informations</h1>
                            <p className="font-sans text-base md:text-lg mb-4">Want to Hear From You and Our Team will respond as soon as possible.e want 
                            to Hear From You and Our Team will respond as soon as possible.</p>
                            <ul className=" flex gap-y-5 mb-8 flex-col ">
                                <li className="pricingCard--list"><AiOutlineMail  id="blueIcons"/>info@mindora.rw</li>
                                <li className="pricingCard--list"><BsFillPhoneVibrateFill  id="blueIcons"/>Phone</li>
                                <li className="pricingCard--list"><CiLocationOn  id="blueIcons"/> Gikondo, Kigali-Rwanda</li>
                            </ul>
                                <ul className="w-full flex gap-x-5 mt-8">
                                    <li className="pricingCard--list"><BsFacebook id="blueIcons"/></li>
                                    <li className="pricingCard--list"> <AiFillTwitterCircle id="blueIcons"/></li>
                                    <li className="pricingCard--list"><AiFillInstagram id="blueIcons"/></li>
                                    <li className="pricingCard--list"><AiFillLinkedin id="blueIcons"/></li>
                                </ul>
                        </div>
                            <form action="" id="SignupForm"  className=" formContainer">
                                        <div className="inputContainer" >
                                            <label className="formLabel"  htmlFor="firstName--input"> First Name:</label>
                                            <input className="formInput" type="text"  id="firstName--input" placeholder="enter first name" /> 
                                            <p className=" formError" >first name field is required</p>
                                        </div>


                                        {/* Last name Input */}
                                        <div className="inputContainer" >
                                            <label className="formLabel"  htmlFor="lastName--input">Last Name:</label>
                                            <input className="formInput" type="text"  id="lastName--input" placeholder="enter last name" /> 
                                            <p className=" formError" > last name field is required</p>
                                        </div>
                                    

                                    {/* Email and Phone Field */}
                                        <div className="inputContainer">
                                            <label className="formLabel"   htmlFor="phone--input">Phone:</label>
                                            <input className="formInput"  type="tel" id="phone--input" placeholder="enter contact " /> 
                                            <p className=" formError" >phone number is required</p>
                                        </div>
                                        <div className="inputContainer">
                                            <label className="formLabel"  htmlFor="emal--input">Email:</label>
                                            <input className="formInput"  type="email" id="email--input" placeholder='enter email' />
                                            <p className=" formError" >email field is required</p>
                                        </div>
                                        <div className="inputContainer">
                                            <label className="formLabel"  htmlFor="request--input">Request:</label>
                                            <textarea className="formInput"   placeholder="Enter request" id="request--input" cols="8" rows="5"></textarea>
                                            <p className=" formError">email field is required</p>
                                        </div>

                            <div className="w-full flex justify-center">
                                        <SubmitButton Title={'Submit'} id='contact__submit--btn'/>
                            </div>
                        
                            </form>
                    </div>
                </Fade>
                 {/* Form  */}
                 {/* <div className="w-3/6 m-auto mt-10 bg-lightGray p-8 flex-col gap-3"> */}
                
            </div>
            <div id="Contact__map--container" className="flex bg-no-repeat bg-center bg-cover 
            flex-col w-full mb-8">
                        {/* </div> */}
                    <div className=" mb-16 justify-center flex w-full">
                        <img src={googleMap} alt="" className="w-full" />
                    </div>
                    
            </div>
             
              <Footer/>
        </React.Fragment>
    )
}

export default ContactUs;