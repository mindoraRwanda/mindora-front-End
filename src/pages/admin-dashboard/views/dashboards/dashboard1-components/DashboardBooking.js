import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import TableComponent from "./Table";

const DashboardBooking = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card variant="outlined" >
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
              Recent Booking
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
        <TableComponent/>
        </Box>
      </CardContent>
    </Card>
  );
};

export default  DashboardBooking;
