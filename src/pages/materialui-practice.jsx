import React from 'react'
import {Typography} from "@mui/material"

const MaterialUI = () => {
  return (
    <React.Fragment>
        <Typography variant='h3' align='center'  color={'primary'}  >
            I am new here
        </Typography>
        <Typography variant='body1' color={'secondary'}>
            I am the second render
        </Typography>
    </React.Fragment>
  )
}

export default MaterialUI
