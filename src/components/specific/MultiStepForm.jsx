// src/components/MultiStepForm.js
import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Step2 from "../helper/./Step2";
import Step3 from "../helper/./Step3";
import Step1 from "../helper/Step1";

const steps = ["Personal Information", "Address", "Review"];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  console.log(currentStep);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleDataChange = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 onDataChange={handleDataChange} onNext={nextStep} />;
      case 1:
        return (
          <Step2
            onDataChange={handleDataChange}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 2:
        return <Step3 data={formData} onBack={prevStep} />;
      default:
        return <Step1 onDataChange={handleDataChange} onNext={nextStep} />;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          Multi-Step Form
        </Typography>
        <Box
          sx={{
            width: "100%",
            mt: 2,
          }}
        >
          {renderStep()}
        </Box>

        <Box
          sx={{
            mt: 2,
          }}
        >
          <Typography variant="body1">
            Step {currentStep + 1} of {steps.length}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default MultiStepForm;
