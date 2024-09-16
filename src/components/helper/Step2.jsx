// src/components/Step2.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Step2 = ({ onDataChange, onNext, onBack }) => {
  const [address, setAddress] = useState({ street: "", city: "", zip: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleSubmit = () => {
    onDataChange(address);
    onNext();
  };

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
        Step 2: Address
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 2, width: "100%", maxWidth: 600 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="street"
          label="Street"
          name="street"
          value={address.street}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          value={address.city}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="zip"
          label="ZIP"
          name="zip"
          value={address.zip}
          onChange={handleChange}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <Button variant="outlined" color="secondary" onClick={onBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Step2;
