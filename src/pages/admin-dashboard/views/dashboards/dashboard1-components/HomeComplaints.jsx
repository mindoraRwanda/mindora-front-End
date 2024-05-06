import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const complaints = [
  {
    client: "Emmanuel", 
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ipsam voluptates eaque nihil neque sit repellendus aliquam eveniet corrupti, est laborum iusto praesentium incidunt quibusdam dolore debitis labore quis? Non.",
    date: "03/30/23",
  },
  {
    client: "Thomas", 
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ipsam voluptates eaque nihil neque sit repellendus aliquam eveniet corrupti, est laborum iusto praesentium incidunt quibusdam dolore debitis labore quis? Non.",
    date: "02/04/23",
  },
  {
    client: "Majah", 
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ipsam voluptates eaque nihil neque sit repellendus aliquam eveniet corrupti, est laborum iusto praesentium incidunt quibusdam dolore debitis labore quis? Non.",
    date: "03/30/23",
  },
  {
    client: "Perfect", 
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ipsam voluptates eaque nihil neque sit repellendus aliquam eveniet corrupti, est laborum iusto praesentium incidunt quibusdam dolore debitis labore quis? Non.",
    date: "03/05/23",
  },
  {
    client: "Rebecca", 
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ipsam voluptates eaque nihil neque sit repellendus aliquam eveniet corrupti, est laborum iusto praesentium incidunt quibusdam dolore debitis labore quis? Non.",
    date: "01/23/23",
  }
];

const HomeComplaints = () => {
  
  return (
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
              Message
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Date
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {complaints.map((complaint) => (
          <TableRow key={complaint.client}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {complaint.client}
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
                    {complaint.message.substring(0,10)}<span>....</span>
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {complaint.date}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HomeComplaints;
