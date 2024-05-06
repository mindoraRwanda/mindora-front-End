import React, { useEffect, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { BsCalendar3, BsFillChatLeftDotsFill } from "react-icons/bs";
import { MdOutlineManageAccounts } from 'react-icons/md';
import { IoIosNotificationsOutline, IoIosPeople } from 'react-icons/io';
import { VscSearch } from 'react-icons/vsc';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Nav } from "../../components/modals/dashboardnav";
import { logout, setRole } from "../../features/authorization/authslice";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import { RxCrossCircled } from "react-icons/rx";
import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im';
import { GoCalendar } from "react-icons/go";
import { BallTriangle, Bars, InfinitySpin, TailSpin } from "react-loader-spinner";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { format } from "timeago.js";
import nopic from '../../img/nopic.webp';
import logo from '../../assets/icons/logo.png'; 


export const Dashboard = () => {
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const {loginStatus}=useSelector((state)=>state.auth);
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    const navigate = useNavigate();
    const [notifications,setNotifications] = useState(false);
    const [date,setDate] = useState("");
    const [message,setMessage] = useState("");
    const [startTime,setStarttime] = useState("");
    const [endTime,setEndtime] = useState("");
    const [loading,setLoading] = useState(false);
    const [patients,setPatients] = useState([]);
    const [appointments,setAppointments] = useState([]);
    const [currentappointment,setCurrentappointment] = useState({})
    const respondPatient = (data,token,id) =>{
        axios({
            method:"PATCH",
            url:`${BASE_URL}/therapist/provide/appointment/${id}`,
            data:data,
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        const GetPatients = (token) =>{
            setLoading(true)
            axios({
                method: "GET",
                url:`${BASE_URL}/therapist/appointment/all`,
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }).then((res)=>{
                setLoading(false);
                setPatients(res.patients);
                setAppointments(res.data);
                console.log(res);
            }).catch((err)=>{
                setLoading(false)
                console.log(err);
            })
        }
        GetPatients(token);
        const handleClicks = (e) => {
          const target = e.target
          if((!target.closest("#notification")&&(!target.closest("#notification-popup")))){
            setNotifications(false)
          }
        }
        document.addEventListener("click",handleClicks)
        return ()=>{
          document.removeEventListener("click",handleClicks)
        }
      },[notifications])
    return(
        <div>
        <Nav/>
        <div id="notification-message" className="fixed bg-[rgba(0,0,0,0.7)] hidden z-10 h-[100vh] w-[100vw] flex justify-center items-center ">
            <SimpleBar className="relative h-[70vh] w-[80vw] bg-white flex flex-col justify-center items-center ">
                <div className="w-[80vw] fixed h-[60px] bg-blue-700 text-white flex items-center ">
                    <div className="px-4 flex gap-4 items-center " id="notification-header">
                        <GoCalendar className="text-red-700 text-4xl font-bold "/>
                        <h1 className="font-extrabold text-xl ">New Appointment</h1>
                    </div>
                    <div className="text-2xl text-white ml-[calc(100%-300px)] w-fit cursor-pointer z-[2] " onClick={()=>{
                        document.getElementById("notification-message").style.display = "none"
                    }}>
                        <RxCrossCircled/>
                    </div>
                </div>
                <div className="px-7 sm:px-14 lg:px-[calc(100%-780px)] mt-[70px] ">
                    Hey <span className="font-semibold">{userdata?.Names}</span>,<br/>
                    <span className="font-semibold">{currentappointment?.patientId?.Names}</span> just requested an appointment with you so go through this information and let us know if you can approve it or not.
                </div>
                <div className="px-7 sm:px-14 lg:px-[calc(100%-780px)] mt-2 "><span className="font-semibold">{currentappointment?.patientId?.Names}</span> Says the reason he is seeking for therapy here:</div>
                <div className="px-7 sm:px-14 lg:px-[calc(100%-780px)] flex flex-wrap justify-between items-center ">
                    <span className="w-[calc(100%-60px)] border p-2 rounded shadow shadow-gray-300 ">{currentappointment?.reason}</span>
                </div>
                <div className="px-7 sm:px-14 lg:px-[calc(100%-780px)] mt-4 ">If you feel like you can provide therapy to this patient you will need to provide time when to start therapy and send information</div>
                <div className="mt-4 px-7 sm:px-14 lg:px-[calc(100%-780px)] flex flex-col gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                    <label className=" text-lg" htmlFor="birthDate">Starting Date:</label>
                    <input className=" py-4 sm:py-2 px-4 border md:border-2 rounded-md outline-none w-full sm:w-[70%] "   type="date" id="birthDate" placeholder="Enter DOB" onChange={(e)=>{
                        setDate(e.target.value)
                    }} />
                </div>
                <div className="px-7 sm:px-14 lg:px-[calc(100%-780px)] flex flex-col sm:gap-4 sm:flex sm:flex-row text-start sm:text-center sm:items-center  justify-between">
                    <label className="text-md" htmlFor="method">Sessions Time:</label>
                    <div className="flex justify-between w-[100%] sm:w-[70%] ">
                        <div className=" w-[40%] flex flex-col  sm:flex sm:flex-col text-start sm:text-center sm:items-start  justify-start">
                            <label  htmlFor="appointmentDate">Start Time:</label>
                            <input className="py-2 px-2 border md:border-2 rounded-md outline-none w-full sm:w-[100%] " type="time" onChange={(e)=>{
                                setStarttime(e.target.value)
                            }} />
                        </div>
                        <div className=" flex w-[40%] flex-col sm:flex sm:flex-col text-start sm:text-center sm:items-start  justify-start">
                            <label  htmlFor="appointmentDate">End Time:</label>
                            <input className="py-2 px-2 border md:border-2 rounded-md outline-none w-full sm:w-[100%] " type="time" onChange={(e)=>{
                                setEndtime(e.target.value)
                            }} />
                        </div>
                    </div>                       
                </div>
                <div className="mb-5 px-7 sm:px-14 lg:px-[calc(100%-780px)] mt-4 flex flex-col ">
                    <label className="mb-2 text-lg">Any further Information you might need to provide to him?</label>
                    <textarea className="h-[100px] w-full border-2 rounded-md p-2 " placeholder="Your message here..." onChange={(e)=>{
                        setMessage(e.target.value)
                    }}></textarea>
                </div>
                <button className="relative w-[100px] h-[30px] py-1 text-center mb-5 bg-blue-700 rounded-md text-white text-center font-bold ml-[calc(50%-50px)] flex justify-center " onClick={(e)=>{
                    e.preventDefault();
                    respondPatient(
                        {
                            suggestDate:date,
                            startTime:startTime,
                            endTime:endTime,
                            comment:message,
                        },
                        token,
                        currentappointment._id
                    )
                }}>
                    <span className={loading ? "hidden" : "flex w-fit "}>Submit</span>
                    <div className={loading ? "absolute z-[2] h-full w-full bg-[rgba(83,120,219,0.7)] flex justify-center items-center rounded-md top-0 right-0 left-0 " : "hidden"}>
                        <Bars height="20" width="20" color="white" />
                    </div>
                </button>
            </SimpleBar>
        </div>
        <div className="flex flex-wrap">
        <div className="flex flex-col w-[40px] sm:w-[60px] lg:w-[80px] xl:w-[20%] min-h-max mt-[3vh] ml-[10px] sm:ml-[15px] lg:ml-[25px] bg-gray-100 rounded-lg">
            <div className="w-full xl:w-fit h-[90px] flex justify-center items-center font-bold text-2xl sm:text-3xl" id="dashboard-navigation-logo">
                <FaBars className="cursor-pointer flex xl:hidden" onClick={()=>{
                    document.getElementById("dashboard-navigation").style.display = "flex";
                }}/>
                <div className="hidden xl:flex px-5">
                <div className="ml-5 lg:ml-20 font-sans text-xl flex font-medium">
                    <span className="mb-0.5"><img src={logo} alt="MIndora" /> </span>
                    <div className="px-2 text-blue-600 font-bold bg-purple-600 ml-1 mt-4 ">MINDORA</div>
                </div>
                </div>
            </div>
            <div className="w-full h-0 border border-gray-300"></div>
            <NavLink to={"/therapist-dashboard/overview"}>
                <div className="w-full h-[60px] mt-2 flex justify-center items-center text-gray-700 font-bold text-2xl sm:text-3xl ">
                    <div className="xl:w-full xl:h-fit xl:flex xl:pl-10 xl:items-center">
                        <AiOutlineDashboard/>
                        <div className="hidden xl:flex text-lg ml-3">Dashboard</div>
                    </div>
                </div>
            </NavLink>
            <NavLink to={"/therapist-dashboard/calendar"}>
                <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-base sm:text-lg lg:text-xl ">
                    <div className="xl:w-full xl:h-fit xl:flex xl:pl-10 xl:items-center">
                        <BsCalendar3/>
                        <div className="hidden xl:flex text-lg ml-5">Appointments</div>
                    </div>
                </div>
            </NavLink>
            <NavLink to={"/therapist-dashboard/patients"}>
                <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-base sm:text-xl lg:text-2xl ">
                    <div className="xl:w-full xl:h-fit xl:flex xl:pl-9 xl:items-center">
                        <IoIosPeople/>
                        <div className="hidden xl:flex text-lg ml-5">Patients</div>
                    </div>    
                </div>
            </NavLink>
            <NavLink to={"/therapist-dashboard/dashboard-chat"}>
                <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-base sm:text-lg lg:text-xl ">
                    <div className="xl:w-full xl:h-fit xl:flex xl:pl-9 xl:items-center">
                        <BsFillChatLeftDotsFill/>
                        <div className="hidden xl:flex text-lg ml-5 -mt-1">Messages</div>
                        <div className="w-[15px] sm:w-[18px] h-[15px] sm:h-[18px] bg-blue-700 ml-[10px] xl:ml-6 lg:ml-[12px] z-[2] -mt-[30px] lg:-mt-[30px] xl:mt-0 rounded-full flex justify-center items-center text-[5px] sm:text-[10px] lg:text-[13px] text-white ">5</div>
                    </div>
                </div>
            </NavLink>
            <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-base ">
                <div className="w-full h-0 border border-gray-300"></div>
            </div>
            <NavLink to={"/therapist-dashboard/edit-account"}>
                <div className="w-full h-[60px] flex justify-center items-center text-gray-700 font-bold text-xl sm:text-2xl lg:text-3xl ">
                    <div className="xl:w-full xl:h-fit xl:flex xl:pl-9 xl:items-center">
                        <MdOutlineManageAccounts/>
                        <div className="hidden xl:flex text-lg ml-5">Edit Account</div>
                    </div>
                </div>
            </NavLink>
            <div className="w-full h-[60px] flex justify-center items-center text-red-600 font-bold text-xl lg:text-2xl ">
                <div className="xl:w-full xl:h-fit xl:flex xl:pl-9 xl:items-center cursor-pointer" onClick={()=>{
                        dispatch(logout());
                        dispatch(setRole(""));
                        navigate("/");
                    }}>
                    <BiLogOut className="cursor-pointer"/>
                    <div className="hidden xl:flex text-lg ml-7">Log Out</div>
                </div>
            </div>
        </div>
        <div className="w-[calc(100%-70px)] sm:w-[calc(100%-95px)] lg:w-[calc(100%-155px)] xl:w-[calc(80%-75px)] ml-[10px] sm:ml-[15px] lg:ml-[25px] ">
        <div id="dashboard-top-bar" className="h-[60px] lg:h-[80px] bg-gray-100 mt-[3vh] rounded-xl flex items-center ">
            <div className="w-[calc(100%-170px)] sm:w-[calc(100%-320px)] ml-[5px] sm:ml-[10px] lg:ml-[15px] h-[40px] lg:h-[50px] rounded-md bg-white flex ">
                <VscSearch className="text-gray-700 flex h-full items-center ml-[5px] sm:ml-[10px] "/>
                <input type={"text"} placeholder={"Enter Keywords here"} className="w-full border-0 px-[5px] sm:px-[10px] text-[10px] sm:text-[13px] rounded-r-md " />
            </div>
            <div className="relative w-[25px] sm:w-[35px] lg:w-[40px] h-[25px] sm:h-[35px] lg:h-[40px] bg-white border border-gray-300 flex justify-center items-center rounded-full ml-[5px] sm:ml-[10px] lg:ml-[15px] cursor-pointer " id="notification" onClick={()=>{
                setNotifications(!notifications);
            }}>
                <SimpleBar id="notification-popup" className={notifications ? "flex absolute z-[2] py-[6px] bg-white rounded-md shadow shadow-gray-300 h-[80px] w-[200px] csm:w-[340px] top-[40px] sm:top-[47px] lg:top-[60px] -right-[50px] csm:-right-[80px] md:-right-[130px] " : "hidden"} >
                    <div className={loading ? "h-[80px] w-full bg-white rounded-md flex justify-center items-center absolute top-0" : "hidden"}>
                        <TailSpin
                            height="50"
                            width="50"
                            color="#618bed"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    {
                        appointments?.map((elt)=>{
                            if(elt.status === "requesting"){
                                return(
                                    <div className="w-full h-[28px] my-[2px] px-2 flex items-center " onClick={()=>{
                                        setCurrentappointment(elt);
                                        document.getElementById("notification-message").style.display = "flex"
                                    }}>
                                        <div className="w-[23px] h-[23px] rounded-full bg-gray-500 " id="notification-desc"></div>
                                        <div className="text-[7px] csm:text-[9px] w-[calc(100%-90px)] leading-none ml-1 csm:ml-[8px] "><span className="font-semibold">{elt?.patientId.Names}</span> booked you {format(elt?.ceatedAt)}</div>
                                        <div className="text-[7px] h-[12px] w-fit px-1 csm:px-2 rounded-md bg-blue-700 text-white flex justify-center items-center font-semibold ml-[3px] " onClick={()=>{
                                            document.getElementById("notification-message").style.display = "flex";
                                        }}>View more</div>
                                    </div>
                                )
                            }
                        })
                    }
                </SimpleBar>
                <IoIosNotificationsOutline className="sm:text-lg lg:text-2xl"/>
                {/* <div className="w-[10px] sm:w-[15px] h-[10px] sm:h-[15px] bg-blue-700 -ml-[8px] sm:-ml-[10px] lg:-ml-[15px] z-[2] -mt-[8px] sm:-mt-[12px] lg:-mt-[16px] rounded-full flex justify-center items-center text-[6px] sm:text-[10px] sm:font-bold text-white ">5</div> */}
            </div>
            <div className="w-0 h-[40px] border ml-[5px] sm:ml-[10px] lg:ml-[15px] border-gray-300 "></div>
            <div className="h-[30px] sm:h-[40px] lg:h-[50px] w-[30px] sm:w-[40px] lg:w-[50px] rounded-full ml-[5px] sm:ml-[10px] lg:ml-[15px] " style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
            <div className="text-[10px] sm:text-[15px] lg:text-[17px] font-bold w-fit h-fit ml-[5px] sm:ml-[10px] mr-[5px] sm:mr-[10px] lg:mr-[15px] ">
                {userdata?.Names}
                <div className="font-normal text-[7px] sm:text-[11px] lg:text-[13px] ">Therapist</div>
            </div>
        </div>
        <div className="h-full w-full pt-[10px]">
            <Outlet/>
        </div>
        </div>
        </div>
        </div>
    )
}