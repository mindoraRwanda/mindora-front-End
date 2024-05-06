import { Typography, Box, TextField, Autocomplete, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React,{useState} from "react";
import {TherapistsTable} from "./TherapistsTable";




export const AdminTherapist = ()=>{
    const[value,setValue] = useState(null);
    const[filterType, setFilterType] = useState('');
    const[filterStatus, setFilterStatus] = useState('');

    // const[filterItems, setFilterItems] = useState('')
   
    // const handleFilterChange = (event) => {
    //     setFilterItems(event.target.value);
    //   };
    const HandleFilterTypeChange =(e)=>{
        setFilterType(e.target.value)
    }
    const HandleFilterStatus = (e)=>{
        setFilterStatus(e.target.value)
    }
      
    return(
        <React.Fragment>
            <Box justifyContent={'space-between'} alignItems={'center'} gap={'10px'} width={'100%'} display={'flex'}>
                <Typography variant="h3">
                    Therapist List
                </Typography>
                <Autocomplete
                    freeSolo
                    sx={{width: '350px'}}
                    // options={Therapists.map((therapist)=> therapist.TherapistName)}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="Search by name" variant="outlined" />
                    )}
                />
                <FormControl sx={{width:'250px'}} >
                    <InputLabel >Filter By Type</InputLabel>
                    <Select
                        value={filterType}
                        label="Filter By Type"
                        onChange={HandleFilterTypeChange}
                    >
                        <MenuItem value={10}>Children</MenuItem>
                        <MenuItem value={20}>Couple</MenuItem>
                        <MenuItem value={30}>Individual</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{width:'250px'}} >
                    <InputLabel >Filter By Status</InputLabel>
                    <Select
                        value={filterStatus}
                        label="Filter By Status"
                        onChange={HandleFilterStatus}
                    >
                        <MenuItem value={10}>Approved</MenuItem>
                        <MenuItem value={20}>Pending</MenuItem>
                        <MenuItem value={30}>Rejected</MenuItem>
                    </Select>
                </FormControl>
                {/* <TextField
                    label="Filter"
                    variant="outlined"
                    value={filterItems}
                    onChange={handleFilterChange}
                /> */}

            </Box>
            
            <Box>
                <TherapistsTable/>
            </Box>
        </React.Fragment>
    )
}