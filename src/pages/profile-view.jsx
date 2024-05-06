import React, { useEffect } from 'react'
import { Navigation } from '../components/navigation'
import { AiFillStar } from 'react-icons/ai'
import { Footer } from '../components/Footer/footer'
import ProfileImage from '../assets/images/male-doctor2.jpg'
import { ClickButton } from '../components/Buttons/ClickButton'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {FetchSingleTherapist} from '../reduxSlices/FetchIndividualTherapist/FetchSingleTherapist'
import { Photo } from '@mui/icons-material'
import { TherapistCard } from '../components/Cards/therapist-card'

const ProfileView = () => {
    // Getting single therapist form api
    const param = useParams();
    const {id} = param;
    const SingleTherapist = useSelector(state=> state.singleTherapist.data);
    const isLoading = useSelector(state=> state.singleTherapist.isLoading);
    const error = useSelector(state=> state.singleTherapist.error);
    const dispatch = useDispatch();

    console.log(SingleTherapist);
   
    useEffect(()=>{
        dispatch(FetchSingleTherapist(id))
    },[id])

  return (
    <React.Fragment>
        <Navigation/>
        <div className="w-full bg-brandColor p-8 relative flex justify-center items-baseline h-44 md:h-64"> 
            <img className='rounded-[50%] w-[120px] absolute m-auto top-28 md:top-48 flex  h-[120px] shadow-lg' src={Photo} alt="" />
        </div>
        <div className="w-full px-4 md:px-16  mt-20 justify-center itmes-center text-center flex-col gap-3">
            <div className="flex flex-col gap-1 text-center items-center justify-center">
                <h1 className='font-bold font-primaryFont text-xl md:text-2xl'>{SingleTherapist.Names}</h1>
                <p className='font-sans text-base md:text-lg'>{SingleTherapist.therapist_type}</p>
            </div>
        <div className="w-[100px] justify-center gap-0 items-center mt-2 m-auto flex">
            <AiFillStar className=" w-96 text-yellowColor "/><AiFillStar className=" w-96 text-yellowColor "/>
            <AiFillStar className=" w-96 text-yellowColor "/> <AiFillStar className=" w-96 text-yellowColor "/>
            <AiFillStar className=" w-96 text-yellowColor "/>
        </div>
        </div>
        <div className="flex gap-2 flex-col mt-8 px-4 md:px-16 md:justify-center md:text-center">
            <h1 className='font-bold font-sans m-auto text-2xl '>About Me</h1>
            <p>We offered the best services to satisfy our clients. Our services are affordable and reliable. We offered the best services 
                to satisfy our clients. Our services are affordable and reliable. We offered the best services to satisfy our clients. Our 
                services are affordable and reliable We offered the best services to satisfy our clients. Our services are affordable and 
                reliable</p>   
        </div>
        <div className="md:flex flex-col flex  md:flex-row p-4 md:p-8 justify-start md:justify-center gap-4">
            <div className="flex gap-2">
            <h4>Location:</h4>
                <h4 className='text-base font-bold'>{SingleTherapist?.location?.province}</h4>
            </div>
            <div className=" gap-2 flex  ">
                <h4>Patients:</h4>
                <h4 className='text-base font-bold'>30</h4>
            </div>
            <div className="flex gap-2">
                <h4>Avaibility:</h4>
                <h4 className='text-base font-bold'>Full Time</h4>
            </div>
        </div>
        <div className='flex w-full items-center gap-2 justify-center mb-8 p-8'>
            <Link to='/book-appointments/'>
                <ClickButton Name='Book Appointment'/>
            </Link>
            <Link to='/therapists-list'>
                <ClickButton id='CancelAppointment' Name='Therapist List'/>
            </Link>
        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default ProfileView
