import React from 'react'
import {  Fade } from 'react-awesome-reveal';



const HeadSlider = ({Title, Text, id}) => {
    if(!Title){
        return null
    }
  return (
    <React.Fragment>
         <div id={id} className="w-full sliderStyle bg-no-repeat bg-center bg-cover relative flex">
                <div  className=" w-full  absolute justify-center items-center text-center z-10 flex-col flex m-auto top-0 bottom-0 left-0 right-0 bg-overlayColor ">
                  <Fade duration={1500} delay={500}
                   className='w-full relative flex justify-center flex-col items-center text-center '>
                    <h1 className=" text-white font-primaryFont text-2xl md:text-4xl w-1/2 " >{Title}</h1>
                    <p id='slider__paragraph' className=" font-sans text-2xl md:text-3xl text-white text-center w-3/4 md:w-1/2 ">{Text}</p>
                    </Fade >
                </div>
            </div>
    </React.Fragment>
  )
}

export default HeadSlider
