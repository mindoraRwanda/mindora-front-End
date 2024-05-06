import React, { useEffect, useState } from "react";
import { Navigation} from "../components/navigation";
import { Typography, Box, TextField,FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AiFillStar } from 'react-icons/ai'
import { ClickButton } from "../components/Buttons/ClickButton";
import { TherapistCard } from "../components/Cards/therapist-card";
import { Footer } from "../components/Footer/footer";
import Header from "../components/Header/header";
import {FetchTherapists} from "../reduxSlices/FetchTherapists/FetchTherapists";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils";
import dr from "../assets/images/female-doctor1.jpg" 
import team1 from "../img/team1.jpg";
import team2 from "../img/team2.jpg";
import team3 from "../img/team3.jpg";
import team4 from "../img/team4.jpg";
import team5 from "../img/team5.jpg";
import team6 from "../img/team6.jpg";
import team7 from "../img/team7.jpg";

// export const TherapistsList = ()=>{
    // Getting Input Value\
    // const[value, setValue]= useState('');
    

  
    // Fetch all therapist
    // const[therapistsData, setTherapistsData] = useState([]);

  

    // axios.get('https://mental-health-vd45.onrender.com/api/therapist/all')
    // .then((res)=>{
    //     setTherapistsData(res.data)
    // }).catch((err)=>{
    //     console.log(err);
    // })


export const TherapistsList = ()=>{
    const[typeValue, setTypeValue] = useState('');
    const[filterByType, setFilterByType] = useState('');
    const HandleFilterByType = (e)=>{
        setFilterByType(e.target.value)
    }
    const Therapists = useSelector(state => state.therapistFetch.data);
    const isLoading = useSelector(state => state.therapistFetch.isLoading);
    const errors = useSelector(state=> state.therapistFetch.error);
    const dispatch = useDispatch();
    const loginStatus = localStorage.getItem("loginstatus")
    useEffect(()=>{
        dispatch(FetchTherapists())
    },[dispatch]);
    return(
        <div className="w-full h-full overflow-x-hidden">
           <Navigation page={'therapists'}/>
            <Header Title={'Therapists'}/>

            {/* Therapist list header */}
            <div className=" font-primaryFont mt-8  justify-center text-center p-5 items-center ">
                <h1 className=" md:text-3xl text-2xl font-primaryFont font-semibold mb-5 " >Find Your Perfect Therapist</h1>
                <div className=" flex flex-col cm:flex-row justify-center items-center text-center gap-10">
  
                        <TextField  value={typeValue} onChange={(e)=> setTypeValue(e.target.value)} label="Search by Therapist" variant="outlined" />
                
                
                <FormControl sx={{width:'250px'}} >
                    <InputLabel >Filter By Type</InputLabel>
                    <Select
                        value={filterByType}
                        label="Filter By Type"
                        onChange={HandleFilterByType}
                    >
                         <MenuItem value={''}>All</MenuItem>
                        <MenuItem value={'Psychologist'}>Psychologist</MenuItem>
                        <MenuItem value={'Psychotherapist'}>Psychotherapist</MenuItem>
                        <MenuItem value={'Psychiatrist'}>Psychiatrist</MenuItem>
                        <MenuItem value={'Psychoanalyst'}>Psychoanalyst</MenuItem>
                        <MenuItem value={'Family and marriage counselor'}>Family and marriage counselor</MenuItem>
                        <MenuItem value={'Addiction counselor'}>Addiction counselor</MenuItem>

                    </Select>
                </FormControl>
                  
                    
                </div>
            </div>
            <div className="flex-col items-center px-4 flex w-full csm:flex-row  csm:flex-wrap m-auto justify-center gap-x-10 csm:gap-x-20 gap-y-8 mb-10 mt-10">
            <TherapistCard
                        id={"1"}
                        myData={"myData"}
                        Name={"Noella Nizigama"}
                        Photo ={team3}
                        Location = {"Kigali"}
                        Type = {"Psychologist"}
                        stars ={[<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>]}
                />
                <TherapistCard
                        id={"2"}
                        myData={"myData"}
                        Name={"Uwirora Gilbert"}
                        Photo ={team2}
                        Location = {"Kigali"}
                        Type = {"Clinical Psychologist"}
                        stars ={[<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>]}
                    />
                    <TherapistCard
                        id={"1"}
                        myData={"myData"}
                        Name={"Murenzi Patrick"}
                        Photo ={team5}
                        Location = {"Kigali"}
                        Type = {"Psychologist"}
                        stars ={[<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>]}
                    />
                    <TherapistCard
                        id={"1"}
                        myData={"myData"}
                        Name={"Nsengiyumva Athanaze"}
                        Photo ={team6}
                        Location = {"Kigali"}
                        Type = {"Psychologist"}
                        stars ={[<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>]}
                    />
                    
                {
                   Therapists?.filter((therapist)=> therapist.Names.toLowerCase().includes(typeValue) || therapist.Names.includes(typeValue))
                   .filter((therapist)=> therapist.therapist_type.includes(filterByType)).map((therapist)=>{
                    return (
                        <TherapistCard
                        id={"1"}
                        myData={"myData"}
                        Name={"john doe"}
                        Photo ={dr}
                        Location = {"Kigali"}
                        Type = {"Psychologist"}
                        stars ={[<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>,<AiFillStar className=" w-96 text-yellowColor "/>]}
                    />
                    )
                   }) 
                }
                    
                   
            </div>
            <div className="w-full flex justify-center mb-16">
                <ClickButton Name='Load More' />
            </div>
            <Footer/>
        </div>
    )
}