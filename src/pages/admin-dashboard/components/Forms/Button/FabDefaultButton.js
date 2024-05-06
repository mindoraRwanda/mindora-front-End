import React from "react";

import { Box, Typography, Fab } from "@mui/material";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { AddToPhotosOutlined,AssignmentIndOutlined, CheckCircleOutlineOutlined } from "@mui/icons-material";


import BaseCard from "../../BaseCard/BaseCard";

const FabDefaultButton = () => {
  return (
    <BaseCard title="Default FAB" chiptitle="Floating Action Buttons">
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Fab
            color="primary"
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <SendOutlinedIcon />
          </Fab>
          <Fab
            color="secondary"
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <AddToPhotosOutlined />
          </Fab>
          <Fab
            disabled
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <AssignmentIndOutlined />
          </Fab>
        </Box>
        <Box
          sx={{
            mt: 2,
            display: {
              xs: "inline-block",
              sm: "flex",
            },
            justifyContent: "center",
          }}
        >
          <Fab
            color="primary"
            variant="extended"
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <CheckCircleOutlineOutlined />
            <Typography
              sx={{
                ml: 1,
                textTransform: "capitalize",
              }}
            >
              Primary
            </Typography>
          </Fab>
          <Fab
            color="secondary"
            variant="extended"
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <CheckCircleOutlineOutlined />
            <Typography
              sx={{
                ml: 1,
                textTransform: "capitalize",
              }}
            >
              Secondary
            </Typography>
          </Fab>
          <Fab
            disabled
            variant="extended"
            sx={{
              mr: 1,
              mb: {
                xs: 1,
                sm: 0,
                lg: 0,
              },
            }}
          >
            <CheckCircleOutlineOutlined />
            <Typography
              sx={{
                ml: 1,
                textTransform: "capitalize",
              }}
            >
              Disabled
            </Typography>
          </Fab>
        </Box>
      </Box>
    </BaseCard>
  );
};

export { FabDefaultButton };
