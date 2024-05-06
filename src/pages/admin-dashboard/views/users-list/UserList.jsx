import { Typography, Box, FormControl, InputLabel, MenuItem, Select, Autocomplete, TextField } from "@mui/material";
import React,{useState} from "react";
import UserListTable from "./UserListTable";
import {Users} from './UserListTable'




export const UserList = ()=>{
    const[value,setValue] = useState(null);
    const[filterGender, setFilterGender] = useState('');

    const HandelFilterGender = (e)=>{
        setFilterGender(e.target.value)
    }

      
    return(
        <React.Fragment>
            <Box justifyContent={'space-between'} alignItems={'center'} gap={'10px'} width={'100%'} display={'flex'}>
                <Typography variant="h3">
                    Users List
                </Typography>
                <Autocomplete
                    freeSolo
                    sx={{width: '350px'}}
                    // options={Therapists.map((therapist)=> therapist.TherapistName)}
                    options={Users.map((User)=> User.userName) }
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="Search by name" variant="outlined" />
                    )}
                />
                <FormControl sx={{width:'250px'}} >
                    <InputLabel >Filter By Gender</InputLabel>
                    <Select
                        value={filterGender}
                        label="Filter By Gender" 
                        onChange={HandelFilterGender}
                    >
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
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
             <UserListTable/>
            </Box>
        </React.Fragment>
    )
}