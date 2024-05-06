import React from "react";
import PropTypes from 'prop-types'
import { Card, CardHeader, CardContent, Typography } from "@mui/material";


export const StatisticsCard =({CardIcon,StatisticsNumber,CardTitle})=>{
    return(
        <React.Fragment>
            <Card variant="outlined" sx={{width: '350px', display: 'flex', borderColor: '#604343' }} >
                <CardHeader
                    avatar={CardIcon}
                        // <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        //   R
                        // </Avatar>
                        
                />
                <CardContent>
                    <Typography variant="h1">
                       {StatisticsNumber}
                    </Typography>
                    <Typography variant="body1">
                        {CardTitle}
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

StatisticsCard.propTypes ={
    CardIcon: PropTypes.any,
    StatisticsNumber: PropTypes.number.isRequired,
    CardTitle : PropTypes.string.isRequired,
}