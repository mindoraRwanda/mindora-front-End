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
} from "@mui/material";

const products = [
  {
    patienceName: "Sunil Joshi",
    Email: "try@gmail.com",
    Phone: +2507783833877,
    Package: "Weekly",
    Status: "pending",
  },
  {
    patienceName: "Thomas Gayflor",
    Email: "try@gmail.com",
    Phone: +2507783833877,
    Package: "Yearly",
    Status: "approved",
  },
  {
    patienceName: "Jessical Kruah",
    Email: "try@gmail.com",
    Phone: +2507783833877,
    Package: "Monthly",
    Status: "rejected",
  },
  {
    patienceName: "Sunil Joshi",
    Email: "try@gmail.com",
    Phone: +2507783833877,
    Package: "Weekly",
    Status: "approved",
  },
  {
    patienceName: "Sunil Joshi",
    Email: "try@gmail.com",
    Phone: +2507783833877,
    Package: "Weekly",
    Status: "pending",
  }
];

const TableComponent = () => {
  
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
              Patience
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
              Package
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Status
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.patienceName}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {product.patienceName}
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
                    {product.Email}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.Phone}
              </Typography>
            </TableCell>
            <TableCell>
            <Typography color="textSecondary" variant="h6">
                {product.Package}
              </Typography>
            </TableCell>
            <TableCell align="right">
              {
                product.Status === 'pending' &&  <Button sx={{bgcolor: '#604343'}} variant="contained" size="small">{product.Status}</Button>
              }
              {
                product.Status === 'approved'  &&  <Button  variant="contained" size="small">{product.Status}</Button>
              }
               {
                product.Status === 'rejected'  &&  <Button sx={{bgcolor: 'red'}} variant="contained" size="small">{product.Status}</Button>
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
