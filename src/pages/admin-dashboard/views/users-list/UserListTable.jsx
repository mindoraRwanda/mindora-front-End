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

export const Users = [
  {
    userName: "Thomas",
    email: "tryme@gmail.com",
    phone: "+2507688955446",
    gender: "Female",
  },
  {
    userName: "Emmanuel",
    email: "tryme@gmail.com",
    phone: "+2507688955446",
    gender: "Male",
  },
  {
    userName: "Mary",
    email: "tryme@gmail.com",
    phone: "+2507688955446",
    gender: "Female",
  },
  {
    userName: "Eric",
    email: "tryme@gmail.com",
    phone: "+2507688955446",
    gender: "Male",
  },
  {
    userName: "Esther",
    email: "tryme@gmail.com",
    phone: "+2507688955446",
    gender: "Female",
  },
  {
    userName: "Emmanuel",
    email: "tryme@gmail.com",
    phone: "+2507688955446",
    gender: "Male",
  }
];

const UserListTable = () => {
  
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
                  Email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Phone
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Gender
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
            {Users.map((User) => (
              <TableRow key={User.userName}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {User.userName}
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
                        {User.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {User.phone}
                  </Typography>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" variant="h6">
                    {User.gender}
                  </Typography>
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

export default UserListTable;
