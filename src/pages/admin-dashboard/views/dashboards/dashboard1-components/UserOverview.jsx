import React, { useState } from 'react';
import ReactApexCharts from 'react-apexcharts';
import { Box } from '@mui/system';
import { Card, CardContent, Typography } from '@mui/material';

const AreaChart = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
            {
              name: "Female",
              data: [355, 390, 300, 350, 390, 180, 355, 190, 300, 350, 390, 180],
            },
            {
              name: "Male",
              data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
            },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
            show: false,
          },
      },
      legend: {
        show: false,
      },
    colors: ["#0082DE", "#604343"],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yaxis: {
        title: {
          text: 'Users/Patients'
        }
      }
    }
  });

  return (
    <React.Fragment>
        <Card
      variant="outlined"
      sx={{
        paddingBottom: "0",
      }}
    >
      <CardContent
        sx={{
          paddingBottom: "16px !important",
        }}
      >
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "center",
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
              Users Statistics
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#0082DE",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#0082DE",
                }}
              >
                Female
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#604343",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#604343",
                }}
              >
                Male
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "25px",
          }}
        >
           <ReactApexCharts 
            series={chartOptions.series} 
            options={chartOptions.options} 
            type="area" 
            height={350}
            />
        </Box>
      </CardContent>
    </Card>
    </React.Fragment>
    
  );
}

export default AreaChart;
