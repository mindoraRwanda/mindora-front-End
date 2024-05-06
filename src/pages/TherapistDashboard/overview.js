import React, { useEffect, useState } from "react";
import { BsEnvelope, BsThreeDots } from 'react-icons/bs';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BiSearch } from "react-icons/bi";
import nopic from '../../img/nopic.webp';
import moment from "moment";

ChartJS.register(ArcElement);

export const RealDashboard = () =>{
    const data1 = {
    labels: ['anxiety', 'Trauma', 'Mental Illness', 'Deppression'],
    datasets: [
        {
            label: '# of Votes',
            data: [23, 19, 10, 38],
            backgroundColor: [
                '#00337C',
                '#604343',
                '#763CEF',
                '#3F4E4F',
            ],
            borderColor: [
                'rgba(255, 255, 255, 0)',
                'rgba(255, 255, 255, 0)',
                'rgba(255, 255, 255, 0)',
                'rgba(255, 255, 255, 0)',
                ],
            borderWidth: 1,
        },
    ],
   };
   const data2 = {
   labels: ['MEN', 'CHILDREN'],
   datasets: [
       {
           label: '',
           data: [40, 10],
           backgroundColor: [
               '#00337C',
               '#604343',
           ],
           borderColor: [
               'rgba(255, 255, 255, 0)',
               'rgba(255, 255, 255, 0)',
               ],
           borderWidth: 1,
       },
   ],
  };
  const date = "2023-04-05";
  const time = "16:00:00";

  let dateObj = new Date(date);
  const timeObj = new Date(`2000-01-01T${time}Z`);

  dateObj.setHours(timeObj.getUTCHours());
  dateObj.setMinutes(timeObj.getUTCMinutes());
  dateObj.setSeconds(timeObj.getUTCSeconds());
  let eventTime = dateObj.toISOString();
  const rn = new Date();
  const [remainingTime,setRemainingTime] = useState("")

  useEffect(()=>{
    const interval = setInterval(()=>{
        const duration = moment.duration(moment(eventTime).diff(moment()));
        if(duration < 0){
            dateObj.setDate(dateObj.getDate()+2);
            eventTime = dateObj.toISOString();
        }
        const hours = Math.floor(duration.asHours());
        const mins = duration.minutes();
        const secs = duration.seconds();
        setRemainingTime(`${hours.toString()} hrs ${mins.toString()} mins ${secs.toString()} secs`)
    },1000)
    return ()=>clearInterval(interval)
  },[])

    return(
        <div className="relative w-full h-fit flex flex-wrap gap-[10px] lg:gap-[20px] pt-[20px] ">
            <div className="w-[calc(33%-15px)] lg:w-[calc(25%-20px)] h-[130px] sm:h-[150px] md:h-[200px] rounded-xl border border-gray-200 flex flex-col justify-between items-center ">
                <div className="font-bold text-[7px] sm:text-[10px] md:text-[13px] mt-[9px] w-full pl-[8px] sm:pl-[15px] md:pl-[20px] ">Groups</div>
                <div id="chart" className="w-[50px] sm:w-[75px] md:w-[100px] h-[50px] sm:h-[75px] md:h-[100px] ">
                    <div className="w-[50px] sm:w-[75px] md:w-[100px] h-[50px] sm:h-[75px] md:h-[100px] flex justify-center items-center absolute">
                        <div className="text-blue-700 text-[7px] sm:text-[11px] md:text-[13px] font-black ">
                            187
                            <div className="text-[3px] sm:text-[4px] md:text-[5px] font-base md:font-semibold ">
                                PATIENTS
                            </div>
                        </div>
                    </div>
                    <Doughnut data={data1}/>
                </div>
                <div className="w-full f-fit flex flex-wrap justify-center gap-x-1 sm:gap-x-[10px] md:gap-x-[12px] mb-2 md:mb-3 ">
                    <div id="group-combo" className="w-fit h-fit flex gap-[2px] md:gap-[3px] items-center ">
                        <div className="w-[3px] sm:w-[4px] md:w-[5px] h-[3px] sm:h-[4px] md:h-[5px] rounded-full bg-[#00337C] "></div>
                        <div className="text-[4px] sm:text-[6px] md:text-[8px] font-base ">Anxiety</div>
                    </div>
                    <div id="group-combo" className="w-fit h-fit flex gap-[2px] md:gap-[3px] items-center ">
                        <div className="w-[3px] sm:w-[4px] md:w-[5px] h-[3px] sm:h-[4px] md:h-[5px] rounded-full bg-[#604343] "></div>
                        <div className="text-[4px] sm:text-[6px] md:text-[8px] font-base ">Trauma</div>
                    </div>
                    <div id="group-combo" className="w-fit h-fit flex gap-[2px] md:gap-[3px] items-center ">
                        <div className="w-[3px] sm:w-[4px] md:w-[5px] h-[3px] sm:h-[4px] md:h-[5px] rounded-full bg-[#763CEF] "></div>
                        <div className="text-[4px] sm:text-[6px] md:text-[8px] font-base ">Mental Illness</div>
                    </div>
                    <div id="group-combo" className="w-fit h-fit flex gap-[2px] md:gap-[3px] items-center ">
                        <div className="w-[3px] sm:w-[4px] md:w-[5px] h-[3px] sm:h-[4px] md:h-[5px] rounded-full bg-[#3F4E4F] "></div>
                        <div className="text-[4px] sm:text-[6px] md:text-[8px] font-base ">Deppression</div>
                    </div>
                </div>
            </div>
            <div className="w-[calc(33%-15px)] lg:w-[calc(25%-20px)] h-[130px] sm:h-[150px] md:h-[200px] rounded-xl border border-gray-200 flex flex-col justify-between items-center ">
                <div className="font-bold text-[7px] sm:text-[10px] md:text-[13px] mt-[9px] w-full pl-[8px] sm:pl-[15px] md:pl-[20px] ">Gender</div>
                <div id="chart" className="w-[50px] sm:w-[75px] md:w-[100px] h-[50px] sm:h-[75px] md:h-[100px] ">
                    <div className="w-[50px] sm:w-[75px] md:w-[100px] h-[50px] sm:h-[75px] md:h-[100px] flex justify-center items-center absolute">
                        <div className="text-blue-700 text-[7px] sm:text-[11px] md:text-[13px] font-black ">
                            187
                            <div className="text-[3px] sm:text-[4px] md:text-[5px] font-base md:font-semibold ">
                                PATIENTS
                            </div>
                        </div>
                    </div>
                    <Doughnut data={data2}/>
                </div>
                <div className="w-full f-fit flex flex-col flex-wrap items-center gap-x-1 gap-y-[3px] mb-2 ">
                    <div id="group-combo" className="w-full h-fit flex justify-between items-center ">
                        <div className="flex items-center gap-[5px] ml-3 sm:ml-7 md:ml-14 ">
                            <div className="w-[3px] sm:w-[4px] md:w-[5px] h-[3px] sm:h-[4px] md:h-[5px] rounded-full bg-[#00337C] "></div>
                            <div className="text-[4px] sm:text-[6px] md:text-[8px] font-base ">MEN</div>
                        </div>
                        <div className="text-[4px] mr-4 sm:mr-8 md:mr-16 ">40%</div>
                    </div>
                    <div id="group-combo" className="w-full h-fit flex justify-between items-center ">
                        <div className="flex items-center gap-[5px] ml-3 sm:ml-7 md:ml-14 ">
                            <div className="w-[3px] sm:w-[4px] md:w-[5px] h-[3px] sm:h-[4px] md:h-[5px] rounded-full bg-[#3F4E4F] "></div>
                            <div className="text-[4px] sm:text-[6px] md:text-[8px] font-base ">WOMEN</div>
                        </div>
                        <div className="text-[4px] mr-4 sm:mr-8 md:mr-16 ">48%</div>
                    </div>
                </div>
            </div>
            <div className="w-[calc(33%-15px)] lg:w-[calc(25%-20px)] h-[130px] sm:h-[150px] md:h-[200px] rounded-xl border border-gray-200 flex flex-col items-center "></div>
            <div className="absolute top-[20px] right-0 w-[25%] h-[470px] rounded-xl border border-gray-200 hidden lg:flex flex-col items-center ">
                <h1 className="font-extrabold text-xs mt-[8px] ml-[8px] mb-[8px] text-left w-[calc(100%-16px)] " >Upcoming Appointments</h1>
                <div className="relative mt-[2px] mr-[8px] ml-[8px] w-[calc(100%-16px)] h-[55px] border rounded-lg flex items-center ">
                    <div className="w-[35px] h-[35px] rounded-full ml-[8px] " style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="font-bold ml-1 text-[10px] ">Emmanuel Flomoku </div>
                    <div className="flex flex-col items-end justify-center absolute right-[8px] ">
                        <div className="cursor-pointer"><BsThreeDots/></div>
                        <div className="text-[8px] ">{remainingTime}</div>
                    </div>
                </div>
                <div className="relative mt-[2px] mr-[8px] ml-[8px] w-[calc(100%-16px)] h-[55px] border rounded-lg flex items-center ">
                    <div className="w-[35px] h-[35px] rounded-full ml-[8px] " style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="font-bold ml-1 text-[10px] ">Hirwa Christian </div>
                    <div className="flex flex-col items-end justify-center absolute right-[8px] ">
                        <div className="cursor-pointer"><BsThreeDots/></div>
                        <div className="text-[8px] ">{remainingTime}</div>
                    </div>
                </div>
                <div className="relative mt-[2px] mr-[8px] ml-[8px] w-[calc(100%-16px)] h-[55px] border rounded-lg flex items-center ">
                    <div className="w-[35px] h-[35px] rounded-full ml-[8px] " style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="font-bold ml-1 text-[10px] ">Mugabe Claude </div>
                    <div className="flex flex-col items-end justify-center absolute right-[8px] ">
                        <div className="cursor-pointer"><BsThreeDots/></div>
                        <div className="text-[8px] ">{remainingTime}</div>
                    </div>
                </div>
                <div className="mt-4 border w-full h-0 "></div>
                <h1 className="font-extrabold text-xs mt-[8px] ml-[8px] mb-[8px] text-left w-[calc(100%-16px)] " >Previous Appointments</h1>
                <div className="my-[2px] mr-[8px] ml-[8px] w-[calc(100%-16px)] h-[30px] border rounded-lg flex items-center ">
                    <div className="border-r flex items-center justify-center w-1/3 text-[11px] h-full font-semibold cursor-pointer ">Day</div>
                    <div className="bg-blue-900 flex items-center justify-center w-1/3 text-[11px] text-white font-semibold h-full cursor-pointer ">Week</div>
                    <div className="border-l flex items-center justify-center w-1/3 text-[11px] h-full font-semibold cursor-pointer ">Month</div>
                </div>
                <div className="relative mt-[2px] mr-[8px] ml-[8px] w-[calc(100%-16px)] h-[55px] border rounded-lg flex items-center ">
                    <div className="w-[35px] h-[35px] rounded-full ml-[8px] " style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="font-bold ml-1 text-[10px] ">Mukiza Patience </div>
                    <div className="flex flex-col items-end justify-center absolute right-[8px] ">
                        <div className="cursor-pointer"><BsThreeDots/></div>
                        <div className="text-[8px] ">{moment().format("dddd MMMM DD")}</div>
                    </div>
                </div>
                <div className="relative mt-[2px] mr-[8px] ml-[8px] w-[calc(100%-16px)] h-[55px] border rounded-lg flex items-center ">
                    <div className="w-[35px] h-[35px] rounded-full ml-[8px] " style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="font-bold ml-1 text-[10px] ">Kundwa Helena </div>
                    <div className="flex flex-col items-end justify-center absolute right-[8px] ">
                        <div className="cursor-pointer"><BsThreeDots/></div>
                        <div className="text-[8px] ">{remainingTime}</div>
                    </div>
                </div>
                <div className="relative mt-[2px] mr-[8px] ml-[8px] w-[calc(100%-16px)] h-[55px] border rounded-lg flex items-center ">
                    <div className="w-[35px] h-[35px] rounded-full ml-[8px] " style={{background:`url(${nopic})`,backgroundPosition:"center",backgroundSize:"cover"}}></div>
                    <div className="font-bold ml-1 text-[10px] ">Mugabo Eric </div>
                    <div className="flex flex-col items-end justify-center absolute right-[8px] ">
                        <div className="cursor-pointer"><BsThreeDots/></div>
                        <div className="text-[8px] ">{remainingTime}</div>
                    </div>
                </div>
            </div>
            <div className="w-fit h-fit flex lg:hidden "><BsThreeDots/></div>
            <div className="w-full lg:w-[73%] h-fit border border-gray-200 rounded-xl flex flex-wrap py-[10px] sm:py-[15px] px-[10px] sm:px-[15px] ">
                <div className="w-full h-fit flex items-center">
                    <div className="font-bold sm:font-semibold text-[7px] sm:text-[10px] w-[calc(50%-51px)] ">Patients</div>
                    <div className="w-[calc(50%-56px)] mr-[5px] h-[20px] sm:h-[22px] md:h-[25px] rounded-md border border-gray-200 flex ">
                        <BiSearch className="text-gray-700 text-[7px] sm:text-[9px] md:text-[12px] font-bold flex h-full items-center ml-[5px] sm:ml-[8px] "/>
                        <input type={"text"} placeholder={"Enter Keywords here"} className="w-full h-full border-0 px-[5px] sm:px-[8px] text-[5px] sm:text-[9px] rounded-r-md " />
                    </div>
                    <div className="w-[150px] h-[20px] md:h-[25px] flex border border-gray-200 rounded text-[6px] md:text-[7px] ">
                        <div className="w-1/3 h-full rounded-l bg-blue-900 flex justify-center cursor-pointer items-center text-white border-r border-gray-200 ">ALL</div>
                        <div className="w-1/3 h-full rounded-l flex justify-center items-center cursor-pointer border-r border-gray-200 ">MEN</div>
                        <div className="w-1/3 h-full rounded-l flex justify-center items-center cursor-pointer ">WOMEN</div>
                    </div>
                </div>
                <div className="w-full h-fit rounded-xl">
                    <table className="w-[100%] h-fit">
                        <tr className="w-full h-[30px] text-[6px] sm:text-[10px] text-left sm:text-center ">
                            <th className="w-[37%] h-full pl-2 sm:text-left ">NAME</th>
                            <th className="w-[21%] h-full "><div className="w-full h-full flex justify-center items-center">Assigned Groups</div></th>
                            <th className="w-[21%] h-full text-center ">CHAT</th>
                            <th className="w-[21%] h-full text-center ">Appointments made</th>
                        </tr>
                        <tr className="w-full h-[30px] sm:h-[40px] text-[9px] text-left sm:text-center sm:text-[13px] border border-gray-200 ">
                            <td className="w-[37%] h-full items-center ">
                                <div className="w-full h-fit flex items-center gap-1">
                                    <div className="w-[20px] h-[20px] rounded-full bg-gray-400 ml-1 "></div>
                                    <div className="text-left">Migabo Alain</div>
                                </div>
                            </td>
                            <td className="w-[21%] h-full text-center ">6</td>
                            <td className="w-[21%] h-full ">
                                <div className="w-full h-full flex justify-center items-center ">
                                    <BsEnvelope className="text-[10px] cursor-pointer "/>
                                    <div className="absolute z-[2] h-[6px] sm:h-[7px] w-[6px] sm:w-[7px] ml-[9px] mb-[7px] cursor-pointer text-white rounded-full bg-blue-700 text-[4px] sm:text-[6px] font-bold flex justify-center items-center ">2</div>
                                </div>
                            </td>
                            <td className="w-[21%] h-full text-center ">
                                3
                            </td>
                        </tr>
                        <tr className="w-full h-[30px] sm:h-[40px] text-[9px] text-left sm:text-center sm:text-[13px] border border-gray-200 ">
                            <td className="w-[37%] h-full items-center ">
                                <div className="w-full h-fit flex items-center gap-1">
                                    <div className="w-[20px] h-[20px] rounded-full bg-gray-400 ml-1 "></div>
                                    <div className="text-left">Migabo Alain</div>
                                </div>
                            </td>
                            <td className="w-[21%] h-full text-center ">6</td>
                            <td className="w-[21%] h-full ">
                                <div className="w-full h-full flex justify-center items-center ">
                                    <BsEnvelope className="text-[10px] cursor-pointer "/>
                                    <div className="absolute z-[2] h-[6px] sm:h-[7px] w-[6px] sm:w-[7px] ml-[9px] mb-[7px] cursor-pointer text-white rounded-full bg-blue-700 text-[4px] sm:text-[6px] font-bold flex justify-center items-center ">2</div>
                                </div>
                            </td>
                            <td className="w-[21%] h-full text-center ">
                                3
                            </td>
                        </tr>
                        <tr className="w-full h-[30px] sm:h-[40px] text-[9px] text-left sm:text-center sm:text-[13px] border border-gray-200 ">
                            <td className="w-[37%] h-full items-center ">
                                <div className="w-full h-fit flex items-center gap-1">
                                    <div className="w-[20px] h-[20px] rounded-full bg-gray-400 ml-1 "></div>
                                    <div className="text-left">Migabo Alain</div>
                                </div>
                            </td>
                            <td className="w-[21%] h-full text-center ">6</td>
                            <td className="w-[21%] h-full ">
                                <div className="w-full h-full flex justify-center items-center ">
                                    <BsEnvelope className="text-[10px] cursor-pointer "/>
                                    <div className="absolute z-[2] h-[6px] sm:h-[7px] w-[6px] sm:w-[7px] ml-[9px] mb-[7px] cursor-pointer text-white rounded-full bg-blue-700 text-[4px] sm:text-[6px] font-bold flex justify-center items-center ">2</div>
                                </div>
                            </td>
                            <td className="w-[21%] h-full text-center ">
                                3
                            </td>
                        </tr>
                        <tr className="w-full h-[30px] sm:h-[40px] text-[9px] text-left sm:text-center sm:text-[13px] border border-gray-200 ">
                            <td className="w-[37%] h-full items-center ">
                                <div className="w-full h-fit flex items-center gap-1">
                                    <div className="w-[20px] h-[20px] rounded-full bg-gray-400 ml-1 "></div>
                                    <div className="text-left">Migabo Alain</div>
                                </div>
                            </td>
                            <td className="w-[21%] h-full text-center ">6</td>
                            <td className="w-[21%] h-full ">
                                <div className="w-full h-full flex justify-center items-center ">
                                    <BsEnvelope className="text-[10px] cursor-pointer "/>
                                    <div className="absolute z-[2] h-[6px] sm:h-[7px] w-[6px] sm:w-[7px] ml-[9px] mb-[7px] cursor-pointer text-white rounded-full bg-blue-700 text-[4px] sm:text-[6px] font-bold flex justify-center items-center ">2</div>
                                </div>
                            </td>
                            <td className="w-[21%] h-full text-center ">
                                3
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}