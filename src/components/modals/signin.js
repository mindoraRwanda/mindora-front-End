import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../features/authorization/authslice";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router";
//import logo from "../../assets/icons/logo.png";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewpassword, setViewpassword] = useState(false);
  const dispatch = useDispatch();
  let {loading} = useSelector((state)=>state.auth);
  const {unauthorizerduser_wrongpage} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-[100%] bg-[rgba(0,0,0,0.8)] hidden fixed z-50 justify-center"
      id="signin"
    >
      {/* <div className="w-full h-[100%] hidden flex-col bg-[rgba(255,255,255,1)] items-center">
                <div className="w-full h-fit mt-20 text-3xl sm:text-5xl text-blue-700 font-semibold text-center">Welcome Back</div>
                <form className="w-full sm:w-[640px] mt-4 h-fit flex flex-col sm:justify-center py-2 px-16">
                    <div className="flex flex-col w-full">
                    <label className="mt-5 sm:text-2xl">Email or Phone number</label>
                    <input type={"text"} placeholder={"email or phone number"} className="w-full h-fit py-3 sm:py-4 rounded-lg mt-2 sm:mt-3 text-sm sm:text-2xl text-gray-500 px-3 sm:px-5 border-gray-400 border shadow-md shadow-gey-600"/>
                    </div>
                    <div className="flex flex-col w-full sm:w-[49%] sm:ml-[1%]">
                    <label className="mt-5 sm:mt-2">Password</label>
                    <div className="flex w-full h-fit sm:text-lg mt-2 text-sm text-gray-500 border-gray-400 shadow-md shadow-gey-600">
                    <input type={viewpassword ? "text" : "password"} placeholder={"Password"} className="w-[calc(100%-40px)] h-fit py-3 border-y border-l border-gray-400 rounded-l-lg sm:py-3 px-3"/>
                    <div className="flex h-full w-[40px] text-2xl justify-center items-center text-gray-500 border-y border-r rounded-r-lg border-gray-400" onClick={()=>{
                        setViewpassword(!viewpassword);
                    }}>
                        <AiFillEye className={viewpassword ? "hidden" : "flex"}/>
                        <AiFillEyeInvisible className={viewpassword ? "flex" : "hidden"}/>
                    </div>
                    </div>
                    </div>
                    <p className="text-blue-500 mt-3 cursor-pointer">Forgot Your Password?</p>
                    <div className="w-full h-fit flex justify-center mt-2"><button className="w-[150px] h-10 flex justify-center items-center mt-2 bg-gray-700 rounded-md cursor-pointer text-white text-lg">Log In</button></div>
                </form>
                <button className="w-[90px] h-10 flex justify-between items-center bg-gray-700 rounded-md cursor-pointer mt-5 text-white text-lg px-3" onClick={()=>{
                        document.getElementById("signin").style.display = "none";
                    }}><BiArrowBack/>Back
                </button>
            </div> */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
      >
        <main id="page-content" class="flex flex-auto flex-col max-w-full">
          <div id="signin-hider" className="flex justify-center items-center absolute right-0 mr-12 mt-5 h-8 w-8 bg-purple-500 text-white text-xl rounded-full cursor-pointer z-20" onClick={()=>{
            if(unauthorizerduser_wrongpage){
              navigate("/therapists-list")
            }
            else{
              document.getElementById("signin").style.display = "none";
            }
            }}><RxCross2/></div>
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
            <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
            <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>
            <div className="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
              <div className="mb-8 text-center">
                <div className="w-full justify-center ml-5 font-sans mr-10 text-4xl flex font-medium">
                        <div className="px-2 bgpurple-600 text-purple-600 ml-1 h-fit">MINDORA</div>
                </div>
                <div className="text-gray-500 text-md">
                  Welcome, please sign in to your Account
                </div>
              </div>
              <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                <div className="p-5 lg:p-6 grow w-full">
                  <div className="sm:p-5 lg:px-10 lg:py-8">
                    <form onsubmit="return false;" class="space-y-6">
                      <div className="space-y-1">
                        <label className="font-medium">Email</label>
                        <input
                          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full shadow-sm shadow-gray-300"
                          type="text"
                          id="tk-pages-sign-in-email"
                          placeholder="Enter your email"
                          onChange={(e)=>{
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-medium">Password</label>
                        <div className="flex items-center w-full shadow-sm shadow-gray-300 block border border-gray-200 rounded">
                          <input
                            className="px-5 py-3 w-[calc(100%-40px)] rounded-l leading-6"
                            type={viewpassword ? "text" : "password"}
                            id="tk-pages-sign-in-password"
                            placeholder="Enter your password"
                            onChange={(e)=>{
                              setPassword(e.target.value);
                            }}
                          />
                          <div
                            className="flex h-fit w-[40px] text-2xl justify-center items-center text-gray-500 rounded-r cursor-pointer"
                            onClick={() => {
                              setViewpassword(!viewpassword);
                            }}
                          >
                            <AiFillEye
                              className={viewpassword ? "hidden" : "flex"}
                            />
                            <AiFillEyeInvisible
                              className={viewpassword ? "flex" : "hidden"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-[#EB3535] invisible h-0 " id="signin-error">Invalid Password</div>
                      <div>
                        <button className="relative flex justify-center items-center border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded bg-purple-700 hover:bg-[rgba(83,120,219,0.7)] text-white" onClick={(e)=>{
                          e.preventDefault();
                          dispatch(Login({
                            email: email,
                            password: password,
                          }))
                        }}>
                          <span className={loading ? "text-transparent" : ""}>Sign In</span>
                          <div className={loading ? "absolute z-[2] h-full w-full bg-[rgba(83,120,219,0.7)] flex justify-center items-center rounded-md " : "hidden"}>
                            <Bars height="30" width="30" color="white" />
                          </div>
                        </button>
                        <div className="space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0 mt-4">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="border border-gray-200 rounded h-4 w-4 text-purple-500 cursor-pointer"
                            />
                            <span className="ml-2">Remember me</span>
                          </label>
                          <span
                            className="inline-block text-purple-500 cursor-pointer"
                          >
                            Forgot Password?
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
                  Don’t have an account yet?
                  <div
                    className="font-medium text-purple-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("signin").style.display = "none";
                      document.getElementById("signup").style.display = "flex";
                    }}
                  >
                    Join us today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
