import React from 'react'


const Header = ({Title}) => {
    
        if(!Title){
            return null
        }
    
  return (
    <React.Fragment>
            <div className=" flex justify-center  p-3">
                <h1 className=" md:text-3xl text-2xl text-purple  -500 font-primary ">{Title}</h1>
            </div>
    </React.Fragment>
  )
}

export default Header

