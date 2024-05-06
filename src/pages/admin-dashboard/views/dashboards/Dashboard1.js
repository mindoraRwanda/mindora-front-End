import React from "react";
import { Grid, Box } from "@mui/material";
import BadgeIcon from '@mui/icons-material/Badge';
import SickIcon from '@mui/icons-material/Sick';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {
  BlogCard,
} from "./dashboard1-components";
import { StatisticsCard } from "../../components/Cards/statistics-card";
import TherapistOverview from "./dashboard1-components/TherapistOverview";
import UserOverview from "./dashboard1-components/UserOverview";
import DashboardBooking from "./dashboard1-components/DashboardBooking";
import Complaints from "./dashboard1-components/Complaints";

const Dashboard1 = () => {
  // 2

  return (
    <Box>
      <Box display={'flex'}>
        <StatisticsCard
          CardTitle={'Total Therapists'}
          StatisticsNumber= {500}
          CardIcon = {<BadgeIcon sx={{width: '60px', height: '60px', color: '#0082DE'
        }}/>}
        />
        <StatisticsCard
          CardTitle={'Total Patients'}
          StatisticsNumber= {1000}
          CardIcon = {<SickIcon sx={{width: '60px', height: '60px', color: '#604343'
        }}/>}
        />
        <StatisticsCard
          CardTitle={'Pending Appointments'}
          StatisticsNumber= {200}
          CardIcon = {<BookmarkIcon sx={{width: '60px', height: '60px', color: '#0082DE'
        }}/>}
        />
      </Box>
      
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={12} >
          <TherapistOverview/>
          <UserOverview/>
          {/* <TherapistOverview/> */}
          {/* <TherapistOverview /> */}
        </Grid>
        {/* ------------------------- row 2 ------------------------- */}
        <Grid item xs={12} lg={4}>
         <Complaints/>
        </Grid>
        <Grid item xs={12} lg={8}>
          <DashboardBooking/>
        </Grid>
        {/* ------------------------- row 3 ------------------------- */}
        {/* <BlogCard /> */}
      </Grid>
    </Box>
  );
};

export default Dashboard1;
