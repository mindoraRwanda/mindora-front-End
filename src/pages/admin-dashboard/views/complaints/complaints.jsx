import {
  Typography,
  Box,
  Button,
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
// import ComplaintsCard from "../../components/Cards/ComplaintsCard";

const ComplaintsData = [
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. hfie  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Dec 22, 2022",
    clientName: "Thomas Gayflor",
    subject: "Therapist Fault",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Jan 3, 2023",
    clientName: "Marcus Suah",
    subject: "Unfriendly Therapist",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Nov 20, 2022",
    clientName: "Emmanuel K. Flomoku",
    subject: "Bad Session",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Nov 20, 2022",
    clientName: "Emmanuel K. Flomoku",
    subject: "Bad Session",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Nov 20, 2022",
    clientName: "Emmanuel K. Flomoku",
    subject: "Bad Session",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. hfie  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Dec 22, 2022",
    clientName: "Thomas Gayflor",
    subject: "Therapist Fault",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Jan 3, 2023",
    clientName: "Marcus Suah",
    subject: "Unfriendly Therapist",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Nov 20, 2022",
    clientName: "Emmanuel K. Flomoku",
    subject: "Bad Session",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Nov 20, 2022",
    clientName: "Emmanuel K. Flomoku",
    subject: "Bad Session",
  },
  {
    content:
      "hfie Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum soluta. Ducimus commodi aliquam deserunt qui hic? Dolorem nostrum accusamus consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. consequatur dignissimos facere architecto cumque enim minima quo consectetur. Quidem. ",
    doc: "Nov 20, 2022",
    clientName: "Emmanuel K. Flomoku",
    subject: "Bad Session",
  },
];

const Complaints = () => {
  const [value, setValue] = useState(null);
  const [filterByMonth, setFilterByMonth] = useState("");
  const [filterByYear, setFilterByYear] = useState("");

  const HandleFilterByMonth = (e) => {
    setFilterByMonth(e.target.value);
  };
  const HandleFilterByYear = (e) => {
    setFilterByYear(e.target.value);
  };
  return (
    <React.Fragment>
      <Box
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"10px"}
        width={"100%"}
        display={"flex"}
      >
        <Typography variant="h3">Complaints</Typography>
        <Autocomplete
          freeSolo
          sx={{ width: "350px" }}
          options={ComplaintsData.map((complaint) => complaint.clientName)}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search by Therapist"
              variant="outlined"
            />
          )}
        />
        <FormControl sx={{ width: "250px" }}>
          <InputLabel>Filter By Month</InputLabel>
          <Select
            value={filterByMonth}
            label="Filter By Month"
            type="date"
            onChange={HandleFilterByMonth}
          >
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
        <FormControl sx={{ width: "250px" }}>
          <InputLabel>Filter By Year</InputLabel>
          <Select
            value={filterByYear}
            label="Filter By Year"
            type="date"
            onChange={HandleFilterByYear}
          >
            <MenuItem value={10}>2023</MenuItem>
            <MenuItem value={20}>2024</MenuItem>
            <MenuItem value={30}>2025</MenuItem>
            <MenuItem value={10}>2026</MenuItem>
            <MenuItem value={20}>2027</MenuItem>
            <MenuItem value={30}>2028</MenuItem>
            <MenuItem value={10}>2029</MenuItem>
            <MenuItem value={20}>2030</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        {/* {ComplaintsData.map((complaint) => {
          return (
            <div></div>
            // <ComplaintsCard
            //   title={complaint.subject}
            //   clientName={complaint.clientName}
            //   content={complaint.content}
            //   CoplaintDate={complaint.doc}
            // />
          );
        })} */}
      </Box>
      <Box
        display={"flex"}
        width="100%"
        justifyContent={"center"}
        marginTop="30px"
      >
        <Button variant="contained">Load More</Button>
      </Box>
    </React.Fragment>
  );
};

export default Complaints;

// Appointments
