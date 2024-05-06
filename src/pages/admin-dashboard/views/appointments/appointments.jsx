import { Typography, Box, TextField, Autocomplete, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React,{useState} from "react";
import AppointmentsTable from "./AppointmentsTable";
import { AppointmentsData } from "./AppointmentsTable";




const Appointments = ()=>{
    const[value,setValue] = useState(null);
    const[filterByPackage, setFilterByPackage] = useState('');
    const [filterByStatus, setFilterByStatus] = useState('');

    const HandleFilterByPackage = (e)=>{
        setFilterByPackage(e.target.value)
    }
    const HandleFilterByStatus =(e)=>{
        setFilterByStatus(e.target.value)
    }
      
    return(
        <React.Fragment>
            <Box justifyContent={'space-between'} alignItems={'center'} gap={'10px'} width={'100%'} display={'flex'}>
                <Typography variant="h3">
                    Appointments
                </Typography>
                <Autocomplete
                    freeSolo
                    sx={{width: '350px'}}
                    options={AppointmentsData.map((appointment)=> appointment.therapistName)}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="Search by Therapist" variant="outlined" />
                    )}
                />
                <FormControl sx={{width:'250px'}} >
                    <InputLabel >Filter By Package</InputLabel>
                    <Select
                        value={filterByPackage}
                        label="Filter By Package"
                        onChange={HandleFilterByPackage}
                    >
                        <MenuItem value={10}>Weekly</MenuItem>
                        <MenuItem value={20}>Monthly</MenuItem>
                        <MenuItem value={30}>Yearly</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{width:'250px'}} >
                    <InputLabel >Filter By Status</InputLabel>
                    <Select
                        value={filterByStatus}
                        label="Filter By Status"
                        onChange={HandleFilterByStatus}
                    >
                        <MenuItem value={10}>Approved</MenuItem>
                        <MenuItem value={20}>Pending</MenuItem>
                        <MenuItem value={30}>Refund</MenuItem>
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
                <AppointmentsTable/>
            </Box>
        </React.Fragment>
    )
}

export default Appointments;

// Appointments