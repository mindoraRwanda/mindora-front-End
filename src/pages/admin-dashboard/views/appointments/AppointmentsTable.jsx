import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const AppointmentsData = [
  {
    clientName: "Marcus Suah",
    therapistName: "Emmanuel K. Flomoku",
    package: "Weekly",
    amount: 500,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'refund',
  },
  {
    clientName: "Alex Ox",
    therapistName: "Marcus Suah",
    package: "Monthly",
    amount: 600,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'approved',
  },
  {
    clientName: "Eric Doupah",
    therapistName: "Thomas Gayflor",
    package: "Weekly",
    amount: 500,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'pending',
  },
  {
    clientName: "Douglas Nah",
    therapistName: "Alexandar Goi",
    package: "Yearly",
    amount: 900,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'refund',
  },
  {
    clientName: "Jessica Kruah",
    therapistName: "Majah KK",
    package: "Yearly",
    amount: 900,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'approved',
  },
  {
    clientName: "Marcus Suah",
    therapistName: "Emmanuel K. Flomoku",
    package: "Weekly",
    amount: 500,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'refund',
  },
  {
    clientName: "Alex Ox",
    therapistName: "Marcus Suah",
    package: "Monthly",
    amount: 600,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'approved',
  },
  {
    clientName: "Eric Doupah",
    therapistName: "Thomas Gayflor",
    package: "Weekly",
    amount: 500,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'pending',
  },
  {
    clientName: "Douglas Nah",
    therapistName: "Alexandar Goi",
    package: "Yearly",
    amount: 900,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'refund',
  },
  {
    clientName: "Jessica Kruah",
    therapistName: "Majah KK",
    package: "Yearly",
    amount: 900,
    type: "Children Therapy",
    startDate: "November 10, 2023",
    endDate: "December 2, 2023",
    status: 'approved',
  },
];

const AppointmentsTable = () => {
  
  return (
    <React.Fragment>
        <Table
          aria-label="simple table"
          sx={{
            mt: 3,
            whiteSpace: "nowrap",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Client
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Therapist
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Package
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Amount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Type
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Start Date
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  End Date
                </Typography>
              </TableCell>
              {/* <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Actions
                </Typography>
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {AppointmentsData.map((appointment) => (
              <TableRow key={appointment.clientName}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {appointment.clientName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {appointment.therapistName}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {appointment.package}
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" variant="h6">
                    ${appointment.amount} USD
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {appointment.type}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {appointment.startDate}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {appointment.endDate}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {
                    appointment.status === 'pending' &&  <Button sx={{bgcolor: '#604343'}} variant="contained" size="small">{appointment.status}</Button>
                  }
                  {
                    appointment.status === 'approved'  &&  <Button  variant="contained" size="small">{appointment.status}</Button>
                  }
                  {
                    appointment.status === 'refund'  &&  <Button sx={{bgcolor: 'red'}} variant="contained" size="small">{appointment.status}</Button>
                  }
                </TableCell>
                <TableCell align="right">
                  <Box display={'flex'} width='100%' gap= '5px' alignItems='right' >
                    <IconButton>
                      <DeleteForeverIcon sx={{color: 'red'}}/>
                    </IconButton>
                    <IconButton>
                      <VisibilityIcon sx={{color: '#0082DE'}} />
                    </IconButton>

                  </Box>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box display={'flex'} width='100%' justifyContent={'center'} marginTop='30px'>
            <Button variant="contained">Load More</Button>
        </Box>
        
    </React.Fragment>
    
  );
};

export default AppointmentsTable;
