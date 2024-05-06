import React from "react";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Box,
  Menu,
  IconButton,
} from "@mui/material";
import HomeComplaints from "./HomeComplaints";





const activities = [
  {
    time: "09.50",
    color: "success.main",
    text: "Meeting with John",
  },
  {
    time: "09.46",
    color: "secondary.main",
    text: "Payment received from John Doe of $385.90",
  },
  {
    time: "09.47",
    color: "primary.main",
    text: "Project Meeting",
  },
  {
    time: "09.48",
    color: "warning.main",
    text: "New Sale recorded #ML-3467",
  },
  {
    time: "09.49",
    color: "error.main",
    text: "Payment was made of $64.95 to Michael Anderson",
  },
];

const Complaints = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return(
    <React.Fragment>
       <Card variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "0",
              }}
              gutterBottom
            >
              Complaints
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value={2023}>
                  2023
                </MenuItem>
                <MenuItem value={10}>January</MenuItem>
                <MenuItem value={20}>February</MenuItem>
                <MenuItem value={30}>March</MenuItem>
                <MenuItem value={10}>April</MenuItem>
                <MenuItem value={20}>May</MenuItem>
                <MenuItem value={30}>June</MenuItem>
                <MenuItem value={10}>July</MenuItem>
                <MenuItem value={20}>August</MenuItem>
                <MenuItem value={30}>September</MenuItem>
                <MenuItem value={10}>October</MenuItem>
                <MenuItem value={20}>November</MenuItem>
                <MenuItem value={30}>December</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <HomeComplaints/>
        </Box>
      </CardContent>
    </Card>
    </React.Fragment>
  )

};

export default Complaints;
