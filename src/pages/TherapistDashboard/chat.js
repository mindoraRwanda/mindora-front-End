import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack, BiDotsHorizontalRounded, BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
// import { Incoming, Outgoing } from "../../components/messages/message";
import "../../styles/chat.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { RxCross2 } from "react-icons/rx";
// import { useDispatch } from "react-redux";
// import { format } from "timeago.js";
import axios from "axios";
import { BASE_URL } from "../../utils";

export const Chat = () => {
  const ref = useRef();
  // const dispatch = useDispatch();
  let userdata = JSON.parse(localStorage.getItem("userdata"));
  let token = localStorage.getItem("token");
  // const [conversations, setConversations] = useState([]);
  // const [partnerconversations, setPartnerConversations] = useState([]);
  // const [firstchat, setFirstchat] = useState(false);
  // const [messages, setMessages] = useState([]);
  const [patients, setPatients] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchterm, setSearchterm] = useState("");
  const [chatOpen, setChatopen] = useState(false);
  const [isSmallscreen, setSmallscreen] = useState(window.innerWidth < 768);
  const [groupParticipants, setGroupParticipants] = useState([]);
  const [currentChatPatient, setCurrentChatPatient] = useState(null);
  // const [currentConversation, setCurrentConversation] = useState("");
  const [mymessage,setMymessage] = useState("");
  const [ischatrightempty,setChatrightempty] = useState(true);
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && chatOpen) {
      setSmallscreen(false);
      document.getElementById("chat-left").style.display = "flex";
      document.getElementById("chat-left").style.flexDirection = "column";
      document.getElementById("chat-back").style.display = "none";
    } else if (window.innerWidth >= 768 && !chatOpen) {
      setSmallscreen(false);
      document.getElementById("chat-right").style.display = "flex";
    } else if (window.innerWidth < 768 && chatOpen) {
      setSmallscreen(true);
      document.getElementById("chat-left").style.display = "none";
      document.getElementById("chat-right").style.display = "flex";
      document.getElementById("chat-back").style.display = "flex";
    } else {
      setSmallscreen(true);
      document.getElementById("chat-right").style.display = "none";
      document.getElementById("chat-left").style.display = "flex";
      document.getElementById("chat-left").style.flexDirection = "column";
    }
  });
  useEffect(() => {
    GetPatients(token);
    // GetConversations(userdata._id, "therapist");
  }, [token,userdata?._id]);

  function GetPatients(token) {
    axios({
      method: "GET",
      url: `${BASE_URL}/user/all`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setPatients(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // function GetMessages(id) {
  //   axios({
  //     method: "GET",
  //     url: `${BASE_URL}/messages/${id}`,
  //   })
  //     .then((res) => {
  //       setMessages(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // function GetConversations(id, role) {
  //   axios({
  //     method: "GET",
  //     url: `${BASE_URL}/conversation/${id}`,
  //   })
  //     .then((res) => {
  //       role === "therapist"
  //         ? setConversations(res.data)
  //         : setPartnerConversations(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  function SendMessage(message) {
    axios({
      method: "POST",
      url: `${BASE_URL}/messages/`,
      data: message
    })
      .then((res) => {
        console.log(res);
        // messages.push(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // function CreateConversation(data) {
  //   console.log("loading...");
  //   axios({
  //     method: "POST",
  //     url: `${BASE_URL}/conversation`,
  //     data: data,
  //   }).then((res)=>{
  //     // console.log(res,"got convo");
  //     let convoholder = partnerconversations;
  //     convoholder.push(res.data);
  //     setPartnerConversations(convoholder);
  //     setCurrentConversation(res.data._id);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }

  // useEffect(()=>{
  //   if (partnerconversations.length > 0) {
  //     for (let i in partnerconversations) {
  //       partnerconversations[i].members.includes(userdata._id)
  //         ? setFirstchat(false)
  //         : setFirstchat(true);
  //     }
  //   }
  // },[partnerconversations,userdata._id])

  // useEffect(()=>{
  //   if(currentConversation.length>0){
  //     GetMessages(currentConversation)
  //   }
  // },[currentConversation,messages,currentChatPatient])
  
  // useEffect(()=>{
  //   if(firstchat){ 
  //     CreateConversation({
  //       senderId: userdata._id,
  //       receiveId: currentChatPatient._id,
  //     })}
  // },[firstchat,userdata._id,currentChatPatient._id])
  
  useEffect(()=>{
    console.log(currentChatPatient,"effect");
    if((currentChatPatient !== null)&&(!isSmallscreen)){
      document.getElementById(currentChatPatient.title).style.background = "#D1D5DB"
    }
    else if((currentChatPatient !== null)&&(isSmallscreen)){
      document.getElementById(currentChatPatient.title).style.background = "transparent"
    }
    const handleClicks = (e) => {
      const target = e.target
      if((!target.closest("#searching-id")&&(!target.closest("#searching-id2")))){
        setSearching(false)
      }
    }
    document.addEventListener("click",handleClicks)
    return ()=>{
      document.removeEventListener("click",handleClicks)
    }
  },[searching,isSmallscreen]);
  console.log(patients,"patients");
  const [conversations,setConversations] = useState([{title:"draft",body:"this is draft"},{title:"draft2",body:"this is draft2"}])
  return (
    <div>
      <div className="w-full text-blue-700 text-xl font-bold ">Chats</div>
      <div
        className="flex w-full h-[80vh] md:h-[78vh] overflow-auto h-fit rounded-lg mt-2 "
        id="chat-container"
      >
        <div
          className="relative w-full h-full border-b border-gray-300 mr-1 md:mr-0 md:w-[320px] cm:w-[350px] rounded-xl md:rounded-r-none "
          id="chat-left"
        >
          <div
            className="absolute hidden flex-col w-full h-full z-[11] bg-white border border-gray-300 rounded-md md:rounded-l-md "
            id="new-group"
          >
            <div className="h-[120px] w-full rounded-t-md md:rounded-tl-md md:rounded-tr-none bg-blue-700 ">
              <div className="flex mt-[70px] text-white gap-5 ml-5 items-center ">
                <BiArrowBack
                  className="cursor-pointer text-2xl"
                  onClick={() => {
                    document.getElementById("new-group").style.display = "none";
                  }}
                />
                <h1 className="text-xl">Add Group Participants</h1>
              </div>
            </div>
            <div className="w-full h-fit mt-[25px] ">
              <input
                className="w-[calc(100%-64px)] ml-8 border-b border-gray-400 text-gray-700 text-[15px] px-1 py-[2px] "
                placeholder="Type Patient Name"
                type={"text"}
              />
            </div>
            <SimpleBar className="relative h-[calc(100%-170px)] mt-2 ">
              {patients?.map((elt) => {
                return (
                  <div className="w-full h-[70px] sm:h-[70px] border-b border-gray-300 flex flex-wrap items-center ">
                    <div
                      className="w-[50px] h-[50px] rounded-full bg-gray-400 ml-4 "
                      id="profile"
                    ></div>
                    <div
                      className="text-sm font-semibold ml-2 "
                      id="names-message"
                    >
                      {elt?.Names}
                    </div>
                    <div className="ml-[calc(100%-215px)] ">
                      <input
                        type={"checkbox"}
                        value="jfnkjdk"
                        onChange={(e) => {
                          e.target.checked
                            ? setGroupParticipants([
                                ...groupParticipants,
                                e.target.value,
                              ])
                            : groupParticipants.splice(
                                groupParticipants.indexOf(e.target.value),
                                1
                              );
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </SimpleBar>
          </div>
          <div
            className="relative w-full h-[80px] rounded-xl md:rounded-r-none rounded-b-none px-3 flex justify-between items-center border border-gray-300 "
            id="chat-search"
          >
            <div className="w-[calc(100%-30px)] h-[50px] rounded-xl border-2 border-gray-300 flex bg-white ">
              <div className="w-[40px] h-full text-lg sm:text-xl flex items-center text-gray-600 justify-center cursor-pointer ">
                <BiSearch />
              </div>
              <input
                type={"text"}
                placeholder={"Search patients here..."}
                className="rounded-lg text-md w-full h-full pr-2 "
                onChange={(e) => {
                  setSearchterm(e.target.value);
                }}
                onFocus={() => {
                  setSearching(true);
                }}
                id="searching-id2"
              />
            </div>
            <BiDotsHorizontalRounded
              className="flex mr-1 text-xl cursor-pointer"
              id="chat-settings-reveal"
              onClick={() => {
                document.getElementById("chat-settings").style.display = "flex";
                document.getElementById("chat-settings-reveal").style.display =
                  "none";
                document.getElementById("chat-settings-hide").style.display =
                  "flex";
              }}
            />
            <RxCross2
              className="hidden mr-1 text-xl cursor-pointer"
              id="chat-settings-hide"
              onClick={() => {
                document.getElementById("chat-settings").style.display = "none";
                document.getElementById("chat-settings-reveal").style.display =
                  "flex";
                document.getElementById("chat-settings-hide").style.display =
                  "none";
              }}
            />
            <div
              className="absolute top-[65px] shadow-md shadow-gray-500 hidden flex-col w-[150px] px-3 py-1 right-0 bg-white z-10 rounded "
              id="chat-settings"
            >
              <div
                className="w-full cursor-pointer h-[40px] flex items-center "
                onClick={() => {
                  document.getElementById("new-group").style.display = "flex";
                  document.getElementById("chat-settings-hide").style.display =
                    "none";
                  document.getElementById(
                    "chat-settings-reveal"
                  ).style.display = "flex";
                  document.getElementById("chat-settings").style.display =
                    "none";
                }}
              >
                New Group
              </div>
              <div className="w-full cursor-pointer h-[40px] flex items-center ">
                New Chat
              </div>
              <div className="w-full cursor-pointer h-[40px] flex items-center ">
                Profile
              </div>
              <div className="w-full cursor-pointer h-[40px] flex items-center ">
                Chat Settings
              </div>
            </div>
          </div>
          <SimpleBar className="relative h-full md:h-[calc(100%-80px)] border-l ">
            <SimpleBar
              className={
                searching
                  ? "absolute flex flex-col h-[120px] w-full bg-white "
                  : "hidden"
              }
              id="searching-id"
            >
              {patients
                ?.filter((item) =>
                  item?.Names?.toLowerCase().includes(searchterm?.toLowerCase())
                )
                .map((elt) => {
                  return (
                    <div
                      className="w-full h-[40px] cm:pr-1 border-l border-b border-r border-gray-300 flex items-center cursor-pointer"
                      onClick={() => {
                        setCurrentChatPatient(elt);
                        // GetConversations(elt._id, "user");
                        // GetConversations(userdata._id, "therapist")
                      }}
                    >
                      <div
                        className="w-[30px] h-[30px] rounded-full bg-gray-400 ml-3 "
                        id="profile"
                      ></div>
                      <div
                        className="text-sm ml-4 cursor-default"
                        id="names-message"
                      >
                        {elt?.Names}
                      </div>
                    </div>
                  );
                })}
            </SimpleBar>
            {conversations?.map((elt) => {
              console.log(elt,"convo");
              return (
                <div
                  id={elt.title}
                  style={{
                    background:((currentChatPatient?.title === elt.title)&&(!isSmallscreen)) ? "#D1D5DB" : "transparent"
                  }}
                  className={((currentChatPatient?.title === elt.title)&&(!isSmallscreen)) ? "w-full h-[80px] sm:h-[90px] cm:pr-1 border-l border-b border-r border-gray-300 flex items-center chatpatient bg-gray-300 cursor-pointer " : "w-full h-[80px] sm:h-[90px] cm:pr-1 border-l border-b border-r border-gray-300 flex items-center chatpatient cursor-pointer"}
                  onClick={(e) => {
                    setCurrentChatPatient(elt);
                    setChatrightempty(false);
                    if (window.innerWidth < 768) {
                      document.getElementById("chat-left").style.display =
                        "none";
                      document.getElementById("chat-right").style.display =
                        "flex";
                      setChatopen(true);
                    }
                  }}
                >
                  <div
                    className="w-[50px] sm:w-[70px] md:w-[60px] h-[50px] sm:h-[70px] md:h-[60px] rounded-full bg-gray-400 ml-3 "
                    id="profile"
                  ></div>
                  <div
                    className="text-md sm:text-xl md:text-md font-semibold ml-3 "
                    id="names-message"
                  >
                    {/* {elt?.Names} */}
                    {elt?.title}
                    <div className="text-sm sm:text-base md:text-sm font-normal ">
                      you sent a file
                    </div>
                  </div>
                  <div
                    className="h-full ml-[calc(100%-260px)] sm:ml-[calc(100%-320px)] md:ml-[calc(100%-290px)] text-xs sm:text-sm md:text-xs py-[18px] flex flex-col justify-between md:justify-start md:mt-4 md:gap-1.5 items-end "
                    id="time-messagenumber"
                  >
                    {/* {format(elt.createdAt)} */}
                    <div className="w-[17px] sm:w-[20px] md:w-[17px] h-[17px] sm:h-[20px] md:h-[17px] bg-blue-700 text-white flex justify-center items-center mt-1 rounded-full ">
                      3
                    </div>
                  </div>
                </div>
              );
            })}
          </SimpleBar>
        </div>
        {
        (!ischatrightempty) ? (
          <div
            className="max-h-[100%] hidden md:flex flex-col w-full md:w-[calc(100%-320px)] cm:w-[calc(100%-350px)] rounded-xl md:rounded-none md:rounded-r-xl bg-white border md:border-l md:border-b md:border-t md:border-r border-gray-300 "
            id="chat-right"
          >
            <div
              className="w-full rounded-tr-xl h-[80px] flex justify-between items-center border-b border-gray-300 "
              id="search-right-top"
            >
              <div className="flex items-center w-fit h-fit ml-2">
                <BiArrowBack
                  className={
                    window.innerWidth < 768 || isSmallscreen
                      ? "mr-1 font-bold flex"
                      : "hidden"
                  }
                  id="chat-back"
                  onClick={() => {
                    let width = window
                      .getComputedStyle(document.getElementById("profile"))
                      .getPropertyValue("width");
                    if (
                      parseInt(width.slice(0, 2)) === 50 ||
                      parseInt(width.slice(0, 2)) === 70
                    ) {
                      document.getElementById("chat-left").style.display =
                        "flex";
                      document.getElementById("chat-left").style.flexDirection =
                        "column";
                      document.getElementById("chat-right").style.display =
                        "none";
                      setChatopen(false);
                    }
                  }}
                />
                <div className="relative flex h-[50px] w-[50px] rounded-full bg-gray-400 items-end ">
                  <div className="bg-green-600 h-[10px] w-[10px] -mt-1 ml-1 rounded-full absolute z-[2] "></div>
                </div>
                <div className="text-xl font-bold ml-2 ">
                  {currentChatPatient?.title}
                  <div className="text-sm font-normal">Patient</div>
                </div>
              </div>
              <div className="mr-4 text-3xl">
                <BsThreeDots />
              </div>
            </div>
            <div
              className="h-[calc(100%-80px)] w-full flex flex-col justify-end "
              id="actual-chat"
            >
              <div className="max-h-[calc(100%-50px)] flex flex-col-reverse overflow-auto ">
                {

                }
              </div>
              <div
                className="w-full h-[50px] flex items-center border-t border-gray-300 rounded-br-xl "
                id="chat-right-bottom"
              >
                <div className="h-full w-[40px] flex justify-end mr-2 items-center text-xl ">
                  <MdOutlineEmojiEmotions className="cursor-pointer" />
                </div>
                <input
                  type={"text"}
                  placeholder={"Enter message here"}
                  className="border-0 h-full w-[calc(100%-95px)] text-md px-2 "
                  onChange={(e)=>{
                    setMymessage(e.target.value)
                  }}
                />
                <div className="flex justify-center items-center border-l border-gray-300 h-full w-fit px-2">
                  <div className="w-[35px] h-[25px] bg-blue-800 rounded-xl flex justify-center items-center text-white cursor-pointer">
                    <IoSend onClick={()=>{
                      SendMessage({
                        // conversitionId: currentConversation,
                        sender: userdata._id,
                        test: mymessage,
                      });
                      // console.log("messages");
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="max-h-[100%] hidden md:flex flex-col w-full md:w-[calc(100%-320px)] cm:w-[calc(100%-350px)] rounded-xl md:rounded-none md:rounded-r-xl bg-white border md:border-l md:border-b md:border-t md:border-r border-gray-300 "
            id="chat-right"
          >
            <div className="text-5xl font-semibold mt-[calc(50%-200px)] ml-10 mr-10 text-center text-gray-300 leading-[60px] cursor-default ">Open a Chat Your Messages Will Appear Here</div>
          </div>
        )}
      </div>
    </div>
  );
};
