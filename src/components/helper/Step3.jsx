// src/components/Step3.js
import React from "react";
import { Typography, Box, Button } from "@mui/material";

const Step3 = ({ data, onBack }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography component="h2" variant="h6" gutterBottom>
        Step 3: Review
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mt: 2,
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Typography variant="body1">
          <strong>Name:</strong> {data.name}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {data.email}
        </Typography>
        <Typography variant="body1">
          <strong>Street:</strong> {data.street}
        </Typography>
        <Typography variant="body1">
          <strong>City:</strong> {data.city}
        </Typography>
        <Typography variant="body1">
          <strong>ZIP:</strong> {data.zip}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            width: "100%",
          }}
        >
          <Button variant="outlined" color="secondary" onClick={onBack}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Form submitted")}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Step3;
