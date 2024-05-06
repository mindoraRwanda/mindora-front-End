import { Card, CardContent,Typography,IconButton, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React, { useState } from 'react'



const ComplaintsCard = ({content, title, clientName, CoplaintDate}) => {
    const[expanded, setExpanded] = useState(false);

    const HandleExpandCard =()=>{
        setExpanded(!expanded);
    }
  return (
    <React.Fragment>
        
        <Card variant='outlined'>
            {/* <CardMedia
                image={ClientImage}
                sx={{ height: 200 }}
                title={'Client Image'}
            /> */}
            <Box display={'flex'} color='#0082DE' fontWeight={'800'}  alignItems={'center'}>
                <IconButton><DateRangeIcon/></IconButton>
                <Typography variant='h5'>{CoplaintDate}</Typography>
            </Box>
            <CardContent>
                <Typography sx={{marginBottom:'15px'}} variant='h4'> Subject: {title}</Typography>
                <Typography sx={{fontWeight: 'bold',  marginBottom:'15px'}} variant='h5'>From: {clientName}</Typography>
                <Typography>{`${expanded ? content : content.substring(0, 140)}`}
                {expanded === false && '...'}
                
                <IconButton onClick={HandleExpandCard}>
                        {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                    </IconButton>
                </Typography>
                
            </CardContent>
            
           
        </Card>
    </React.Fragment>
  )
}

export default ComplaintsCard;
