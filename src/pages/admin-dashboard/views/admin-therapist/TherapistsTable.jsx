import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {FetchAllTherapists} from "../../../../reduxSlices/FetchAllTherapists/FetchAllTherapists";
import {ActivateTherapist} from "../../../../reduxSlices/ActivateTherapist/ActivateTherapist";
import {DeleteTherapist} from "../../../../reduxSlices/DeleteTherapist/DeleteTherapist";

export const TherapistsTable = () => {
  // Fetch All therapist on Admin dashboard
  const AllTherapist = useSelector((state)=> state.AllTherapists.data);
  const isLoading = useSelector((state)=> state.AllTherapists.isLoading);
  const errors = useSelector((state)=> state.AllTherapists.error);
 
  const dispatch = useDispatch();
  

  // Activate Therapist
  const therapistActivated = useSelector((state)=>state.activateTherapist.activated)
  // Activate Therapist

  // Delete Therapist
  const Deleted = useSelector((state)=> state.deleteTherapist.DeleteTherepist)
  // const[isActive, setIsActive] = useState(false);

  // console.log(AllTherapist.Active);
  const HandleActiveTherapist = (id)=>{
    dispatch(ActivateTherapist(localStorage.getItem("token"),id))
  }
  console.log(Deleted, 'Deleted');

  const HandleDeleteTherapist = (id)=>{
    dispatch(DeleteTherapist(localStorage.getItem("token"),id))
  }

  useEffect(()=>{
    dispatch(FetchAllTherapists(localStorage.getItem("token")))
  }, [dispatch, therapistActivated, Deleted])



  console.log(AllTherapist);
 

 
  
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
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Type
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Location
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Email
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Status
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
            { AllTherapist.map((therapistAll) => (
              <TableRow key={therapistAll._id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {therapistAll.Names}
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
                        {therapistAll.therapist_type}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {therapistAll.location.province}
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" variant="h6">
                    {therapistAll.email}
                  </Typography>
                </TableCell>
                <TableCell align="right">

                  {
                    therapistAll.Active === true &&  <Button  onClick={()=>HandleActiveTherapist(therapistAll._id)} sx={{bgcolor: '#604343'}} variant="contained" size="small">approved</Button>
                  }
                  {
                    therapistAll.Active === false  &&  <Button onClick={()=>HandleActiveTherapist(therapistAll._id)}   variant="contained" size="small">Pending</Button>
                  }
                  {/* {
                    therapistAll.Active === 'rejected'  &&  <Button sx={{bgcolor: 'red'}} variant="contained" size="small">{therapistAll.Active}</Button>
                  } */}
                </TableCell>
                <TableCell align="right">
                  <Box display={'flex'} width='100%' gap= '5px' alignItems='right' >
                    <IconButton onClick={()=>HandleDeleteTherapist(therapistAll._id)}>
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

