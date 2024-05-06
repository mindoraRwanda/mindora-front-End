import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {BiArrowBack} from 'react-icons/bi';
import {IoArrowForwardOutline} from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { Bars } from "react-loader-spinner";
import { PatientSignup, TherapistSignup } from "../../features/authorization/authslice";

export const SignUp = () => {
    const [names,setNames] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPasswod] = useState("");
    const [therapist,setTherapist] = useState(false);
    let {loading} = useSelector((state)=>state.auth);
    const [province,setProvince] = useState("");
    const [district,setDistrict] = useState("");
    const [therapy_type,setTherapy_type] = useState("");
    const [street,setStreet] = useState("");
    const [licence_no,setLicence_no] = useState("");
    const [skills,setSkills] = useState("");
    const [diploma,setDiploma] = useState(null);
    const [policies,setPolicies] = useState(false);
    const [checkup,setCheckup] = useState(false);
    const [gender,setGender] = useState("");
    const dispatch = useDispatch();
    let wrong_credential_style = "w-full h-fit py-2 sm:py-3 sm:text-lg rounded-md mt-1 text-sm text-gray-500 px-3 border-gray-400 border shadow-md shadow-gey-600 ring-1 ring-red-500 opacity-70";
    let right_credential_style = "w-full h-fit py-2 sm:py-3 sm:text-lg rounded-md mt-1 text-sm text-gray-500 px-3 border-gray-400 border shadow-md shadow-gey-600 ring-1 ring-green-500 opacity-70";
    let no_credential_style = "w-full h-fit py-2 sm:py-3 sm:text-lg rounded-md mt-1 text-sm text-gray-500 px-3 border-gray-400 border shadow-md shadow-gey-600 ring-1 ring-gray-300";
    function add () {
        const data = new FormData();
        data.append("Names",names);
        data.append("email",email);
        data.append("password",password);
        data.append("phoneNumber",phone);
        data.append("Gender",gender);
        data.append("location[province]",province);
        data.append("location[district]",district);
        data.append("location[street]",street);
        data.append("therapist_type",therapy_type);
        data.append("licence_number",licence_no);
        data.append("Skill",skills);
        data.append("Degree",diploma);
        data.append("profile_picture",diploma);
        data.append("Question1",checkup);
        data.append("Question2",policies);
        dispatch(TherapistSignup(data));
    }
    return(
        <>
        <div className="w-full h-[100%] bg-[rgba(0,0,0,0.8)] hidden fixed z-50 flex justify-center" id="signup">
            <div className="w-[340px] sm:w-[530px] h-fit mt-[35vh] bg-white rounded-xl flex flex-col" id="account-types">
                <div className="w-full h-fit py-4 text-3xl font-bold flex justify-between bg-[#F4F5F6]">
                    <div className="ml-[40px]">Account Type</div>
                    <div className="flex justify-center items-center h-10 w-10 bg-[#604343] text-white text-3xl rounded-full mr-2 cursor-pointer" onClick={()=>{
                    document.getElementById("signup").style.display = "none";
                }}><RxCross2/></div>
                </div>
                <div className="flex py-8 sm:py-12 px-4 sm:px-10 justify-between sm:justify-between gap-2 sm:gap-5 text-base sm:text-xl font-normal sm:font-semibold bg-white">
                    <button className="bg-purple-300 flex justify-center text-white cursor-pointer rounded-xl sm:py-3 py-2 px-3 sm:px-6" onClick={()=>{
                        document.getElementById("account-types").style.display = "none";
                        document.getElementById("sign-up-form").style.display = "flex";
                        setTherapist(true);
                    }}>As a Therapist</button>
                    <button className="bg-gray-400 flex justify-center text-white cursor-pointer rounded-xl sm:py-3 py-2 px-3 sm:px-6" onClick={()=>{
                        document.getElementById("account-types").style.display = "none";
                        document.getElementById("sign-up-form").style.display = "flex";
                        setTherapist(false);
                    }}>Seeking for Therapy</button>
                </div>
            </div>
            <div className="w-full h-[100%] hidden flex-col bg-[rgba(255,255,255,1)] items-center" id="sign-up-form">
                <div className="w-full h-fit mt-3 sm:mt-10 text-2xl sm:text-2xl text-purple-700 font-semibold text-center">Create Account</div>
                <form className="w-full lg:w-[1024px] h-fit flex flex-col sm:flex-row flex-wrap py-2 sm:py-5 px-16">
                    <div className="flex flex-col w-full sm:w-[49%]">
                    <label className="mt-2">Names</label>
                    <input type={"text"} placeholder={"Your First Name Here"} className={no_credential_style} onChange={(e)=>{
                        setNames(e.target.value)
                    }}/>
                    </div>
                    <div className="flex flex-col w-full sm:w-[49%] sm:ml-[2%]">
                    <label className="mt-5 sm:mt-2">E-mail</label>
                    <input type={"text"} placeholder={"Enter Your E-mail please"} className={no_credential_style} id="sign-up-input-email" onChange={(e)=>{
                        setEmail(e.target.value);
                        if (e.target.value === "") {
                            document.getElementById("sign-up-input-email").className = no_credential_style;
                        }
                        else if(e.target.value === "") {
                            document.getElementById("sign-up-input-email").className = right_credential_style;
                        }
                        else{
                            document.getElementById("sign-up-input-email").className = wrong_credential_style;
                        }
                    }}
                    onBlur={()=>{
                        if (email === "") {
                            document.getElementById("sign-up-input-email").className = no_credential_style;
                        }
                        else if(email === "") {
                            document.getElementById("sign-up-input-email").className = right_credential_style;
                            document.getElementById("signup-email-error").style.display = "flex";
                        }
                        else{
                            document.getElementById("sign-up-input-email").className = wrong_credential_style;
                        }
                    }}/>
                    <div className="h-0 text-red-700 text-[13px] hidden " id="signup-email-error">Your email is not valid</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[49%]">
                    <label className="mt-5 sm:mt-2">Gender</label>
                    <div className="flex gap-2 items-center pt-4 text-gray-500">
                    <input type={"radio"} value={"Male"} onChange={(e)=>{
                        setGender(e.target.value)
                    }}/>
                    <label>Male</label>
                    <input type={"radio"} value={"Female"} className="ml-3" onChange={(e)=>{
                        setGender(e.target.value)
                    }} />
                    <label>Female</label>
                    </div>
                    <div className="h-0 text-red-700 text-[13px] hidden " id="signup-email-error">Your email is not valid</div>
                    </div>
                    <div className="flex flex-col w-full sm:w-[49%] sm:ml-[2%]">
                    <label className="mt-5 sm:mt-2">Phone Number</label>
                    <input type={"text"} placeholder={"Your Phone Number please"} className={no_credential_style} onChange={(e)=>{
                        setPhone(e.target.value)
                    }}/>
                    </div>
                    <div className="flex flex-col w-full sm:w-[49%]">
                    <label className="mt-5">Password</label>
                    <input type={"password"} placeholder={"Password"} className={no_credential_style} id="sign-up-input-password" onChange={(e)=>{
                        setPasswod(e.target.value)
                    }}/>
                    </div>
                    <div className="flex flex-col w-full sm:w-[49%] sm:ml-[2%]">
                    <label className="mt-5">Confirm Password</label>
                    <input type={"password"} placeholder={"Rewrite Password"} className={no_credential_style} id="sign-up-input-confirmpassword" onChange={(e)=>{
                        if ((e.target.value === password) || ((e.target.value === "")&&(password === ""))) {
                            document.getElementById("sign-up-input-confirmpassword").className = right_credential_style;
                            document.getElementById("signup-password-error").style.display = "none"
                        }
                        else{
                            document.getElementById("sign-up-input-confirmpassword").className = wrong_credential_style;
                            document.getElementById("signup-password-error").style.display = "flex"
                        }
                    }}/>
                    <div className="h-0 text-red-700 text-[13px] hidden " id="signup-password-error">Your Passwords have to match</div>
                    </div>
                    <p className="hidden text-purple-500 mt-3 cursor-pointer">Forgot Your Password?</p>
                    <div className="w-full h-fit flex justify-center mt-2"><button className={therapist ? ("w-[150px] h-10 hidden justify-center items-center bg-gray-700 mt-5 rounded-md cursor-pointer text-white text-lg") : ("w-[150px] h-10 mt-5 flex justify-center items-center bg-purple-700 hover:bg-[rgba(83,120,219,1)] rounded-md cursor-pointer text-white text-lg")} onClick={(e)=>{
                        e.preventDefault();
                        dispatch(PatientSignup({
                            Names: names,
                            email: email,
                            password: password,
                            phoneNumber: phone,
                            Gender: gender,
                        }))
                    }}><span id="register-sign-up" className={loading ? "hidden" : "flex"}>Register</span><div className={loading ? "absolute z-[2] h-[40px] w-[150px] bg-[rgba(83,120,219,0.7)] flex justify-center items-center rounded-md " : "hidden"}>
                        <Bars height="20" width="20" color="white" />
                    </div></button>
                    </div>
                    <div className="w-full h-fit flex justify-center"><p className="mt-3 cursor-pointer">Already Has an Account? <span className="text-purple-500" onClick={()=>{
                      document.getElementById("signup").style.display = "none";
                      document.getElementById("signin").style.display = "flex";
                    }}>Sign In</span></p></div>
                </form>
                <div className={therapist ? ("flex w-full lg:w-[1024] h-fit justify-between lg:justify-center px-16 lg:gap-[700px]") : ("flex w-full lg:w-[1024] h-fit justify-center lg:justify-center px-16 lg:gap-[700px]")}>
                <button className="w-[90px]  h-10 flex justify-between items-center bg-purple-700 rounded-md cursor-pointer text-white text-lg px-3" onClick={()=>{
                        document.getElementById("sign-up-form").style.display = "none";
                        document.getElementById("account-types").style.display = "flex";
                        setTherapist(false);
                    }}>
                    <BiArrowBack/>Back
                </button>
                <button className={therapist ? ("w-[90px] h-10 flex justify-between items-center bg-purple-700 rounded-md cursor-pointer text-white text-lg px-3") : ("hidden")} onClick={()=>{
                    document.getElementById("sign-up-form").style.display = "none";
                    document.getElementById("sign-up-form2").style.display = "flex";
                }}>
                    Next<IoArrowForwardOutline/>
                </button>
                </div>
            </div>
            <div className="w-full h-[100vh] overflow-auto hidden flex-col bg-[rgba(255,255,255,1)] items-center" id="sign-up-form2">
                <div className="w-full h-fit mt-3 sm:mt-10 text-2xl sm:text-2xl text-purple-700 font-semibold text-center">Let Us Know About you by filling this form</div>
                <form className="w-full cm:w-[980px] h-fit flex flex-col flex-wrap py-2 sm:py-5 px-16 ">
                    <div className="flex flex-col sm:flex-row cm:flex-wrap sm:justify-between sm:gap-2 cm:gap-0 ">
                    <div className="flex flex-col w-full sm:w-[33%] cm:w-[280px] ">
                    <label className="mt-2">Location (Province)</label>
                    <select className="w-full h-fit py-2 sm:py-3 sm:text-[12px] md:text-base cm:text-lg rounded-md mt-1 text-sm text-gray-500 px-3 border-gray-400 border shadow-md shadow-gey-600 ring-1 ring-gray-300" id="province" onChange={(e)=>{
                        setProvince(e.target.value);
                    }}>
                        <option selected disabled>Choose your Province</option>
                        <option value={"south"}>Southern Province</option>
                        <option value={"west"}>Western Province</option>
                        <option value={"east"}>Eastern Province</option>
                        <option value={"kigali"}>Kigali City</option>
                    </select>
                    </div>
                    <div className="flex flex-col w-full sm:w-[33%] cm:w-[280px]">
                    <label className="mt-2">Location (District)</label>
                    <select className="w-full h-fit py-2 sm:py-3 sm:text-[12px] md:text-base cm:text-lg rounded-md mt-1 text-sm text-gray-500 px-3 border-gray-400 border shadow-md shadow-gey-600 ring-1 ring-gray-300" id="province" onChange={(e)=>{
                        setDistrict(e.target.value);
                    }}>
                        <option selected disabled>Choose your District</option>
                        <option value={"Karongi"} className={(province === "west") ? "flex" : "hidden"}>Karongi</option>
                        <option value={"Ngororero"} className={(province === "west") ? "flex" : "hidden"}>Ngororero</option>
                        <option value={"Nyabihu"} className={(province === "west") ? "flex" : "hidden"}>Nyabihu</option>
                        <option value={"Nyamasheke"} className={(province === "west") ? "flex" : "hidden"}>Nyamasheke</option>
                        <option value={"Rubavu"} className={(province === "west") ? "flex" : "hidden"}>Rubavu</option>
                        <option value={"Rusizi"} className={(province === "west") ? "flex" : "hidden"}>Rusizi</option>
                        <option value={"Huye"} className={(province === "south") ? "flex" : "hidden"}>Huye</option>
                        <option value={"Gisagara"} className={(province === "south") ? "flex" : "hidden"}>Gisagara</option>
                        <option value={"Nyaruguru"} className={(province === "south") ? "flex" : "hidden"}>Nyaruguru</option>
                        <option value={"Ruhango"} className={(province === "south") ? "flex" : "hidden"}>Ruhango</option>
                        <option value={"Muhanga"} className={(province === "south") ? "flex" : "hidden"}>Muhanga</option>
                        <option value={"Kamonyi"} className={(province === "south") ? "flex" : "hidden"}>Kamonyi</option>
                        <option value={"Nyamagabe"} className={(province === "south") ? "flex" : "hidden"}>Nyamagabe</option>
                        <option value={"Nyanza"} className={(province === "south") ? "flex" : "hidden"}>Nyanza</option>
                        <option value={"Musanze"} className={(province === "north") ? "flex" : "hidden"}>Musanze</option>
                        <option value={"Gicumbi"} className={(province === "north") ? "flex" : "hidden"}>Gicumbi</option>
                        <option value={"Burera"} className={(province === "north") ? "flex" : "hidden"}>Burera</option>
                        <option value={"Gakenke"} className={(province === "north") ? "flex" : "hidden"}>Gakenke</option>
                        <option value={"Rulindo"} className={(province === "north") ? "flex" : "hidden"}>Rulindo</option>
                        <option value={"Bugesera"} className={(province === "east") ? "flex" : "hidden"}>Bugesera</option>
                        <option value={"Gatsibo"} className={(province === "east") ? "flex" : "hidden"}>Gatsibo</option>
                        <option value={"Kayonza"} className={(province === "east") ? "flex" : "hidden"}>Kayonza</option>
                        <option value={"Kirehe"} className={(province === "east") ? "flex" : "hidden"}>Kirehe</option>
                        <option value={"Ngoma"} className={(province === "east") ? "flex" : "hidden"}>Ngoma</option>
                        <option value={"Nyagatare"} className={(province === "east") ? "flex" : "hidden"}>Nyagatare</option>
                        <option value={"Rwamagana"} className={(province === "east") ? "flex" : "hidden"}>Rwamagana</option>
                        <option value={"Nyarugenge"} className={(province === "kigali") ? "flex" : "hidden"}>Nyarugenge</option>
                        <option value={"Kicukiro"} className={(province === "kigali") ? "flex" : "hidden"}>Kicukiro</option>
                        <option value={"Gasabo"} className={(province === "kigali") ? "flex" : "hidden"}>Gasabo</option>
                    </select>
                    </div>
                    <div className="flex flex-col w-full sm:w-[33%] cm:w-[280px]">
                    <label className="mt-2 sm:mt-2">Location (Street)</label>
                    <input type={"text"} placeholder={"Enter your street address"} className="w-full h-fit py-2 sm:py-[9px] sm:text-[12px] md:text-base cm:text-lg rounded-md mt-1 text-sm text-gray-500 px-3 border-gray-400 border shadow-md shadow-gey-600 ring-1 ring-gray-300" onChange={(e)=>{
                        setStreet(e.target.value)
                    }}/>
                    </div>
                    </div>
                    <div className="flex flex-col w-full">
                    <label className="mt-2">What type of therapy do you offer?</label>
                    <select className="w-full h-fit py-2 sm:py-3 sm:text-lg rounded-md mt-1 text-sm text-gray-500 px-3 border-gray-400 border shadow-md shadow-gey-600 ring-1 ring-gray-300" id="province" onChange={(e)=>{
                        setTherapy_type(e.target.value);
                    }}>
                        <option selected disabled>Choose your Therapy type</option>
                        <option value={"Psychologist"}>Psychologist</option>
                        <option value={"Psychiatrist"}>Psychiatrist</option>
                        <option value={"Psychoanalyst"}>Psychoanalyst</option>
                        <option value={"Psychotherapist"}>Psychotherapist</option>
                        <option value={"Mental Health Counselor"}>Mental Health Counselor</option>
                        <option value={"Family and Marriage Counselor"}>Family and Marriage Counselor</option>
                        <option value={"Addiction Counselor"}>Addiction Counselor</option>
                    </select>
                    </div>
                    <div className="flex flex-col w-full">
                    <label className="mt-2">Your Licence Number</label>
                    <input type={"text"} placeholder={"Your Phone Number please"} className={no_credential_style} onChange={(e)=>{
                        setLicence_no(e.target.value)
                    }}/>
                    </div>
                    <div className="flex flex-col w-full">
                    <label className="mt-2">What are your skills?</label>
                    <input type={"text"} placeholder={"Enter your skills here"} className={no_credential_style} onChange={(e)=>{
                        setSkills(e.target.value)
                    }}/>
                    </div>
                    <div className="flex flex-col w-full ">
                    <label className="mt-2">Place here any file that specifies your degree as a therapist</label>
                    <input type={"file"} className={no_credential_style} onChange={(e)=>{
                        setDiploma(e.target.files[0]);
                        console.log(e)
                    }}/>
                    </div>
                    <div className="flex flex-col w-full">
                    <label className="mt-2">Are you willing to undergo background checkup</label>
                    <div className="flex gap-2 items-center text-gray-500">
                    <input type={"radio"} value={"Yes"} onChange={(e)=>{
                        if (e.target.value === "yes") {
                            setCheckup(true)
                        }
                    }}/>
                    <label>Yes</label>
                    <input type={"radio"} value={"No"} className="ml-3" onChange={(e)=>{
                        if (e.target.value === "No") {
                            setCheckup(false)
                        }
                    }}/>
                    <label>No</label>
                    </div>
                    </div>
                    <div className="w-full h-fit flex mt-2 ">
                        <input type={"checkbox"} onChange={(e)=>{
                            setPolicies(e.target.checked)
                        }}/>
                        <label className="ml-1">By accepting this means you are aware and accept our <span className="text-purple-700">Pricing Policies</span></label>
                    </div>
                    <div className="w-full h-fit flex justify-center mt-2"><button className={policies ? "w-[150px] h-10 mt-5 relative flex justify-center items-center bg-purple-700 hover:bg-[rgba(83,120,219,1)] rounded-md cursor-pointer text-white text-lg" : "w-[150px] h-10 mt-5 flex justify-center items-center bg-[rgba(83,120,219,1)] rounded-md cursor-pointer text-white text-lg"} onClick={(e)=>{
                        e.preventDefault();
                        add()
                    }}><span id="register-sign-up" className={loading ? "hidden" : "flex"}>Register</span><div className={loading ? "absolute z-[2] h-[40px] w-[150px] bg-[rgba(83,120,219,0.7)] flex justify-center items-center rounded-md " : "hidden"}>
                        <Bars height="20" width="20" color="white" />
                    </div></button>
                    </div>
                    <div className="w-full h-fit flex justify-center"><p className="mt-3 cursor-pointer">Already Has an Account? <span className="text-purple-500" onClick={()=>{
                      document.getElementById("signup").style.display = "none";
                      document.getElementById("signin").style.display = "flex";
                    }}>Sign In</span></p></div>
                </form>
                <div className="flex w-full lg:w-[1024] h-fit justify-center lg:justify-center px-16 lg:gap-[700px]">
                <button className="w-[90px]  h-10 flex justify-between items-center bg-purple-700 rounded-md cursor-pointer text-white text-lg px-3" onClick={()=>{
                        document.getElementById("sign-up-form2").style.display = "none";
                        document.getElementById("sign-up-form").style.display = "flex";
                    }}>
                    <BiArrowBack/>Back
                </button>
                </div>
            </div>
        </div>
        </>
    )
}
