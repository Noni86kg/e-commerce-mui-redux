import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CustomBtn from "../button/CustomBtn";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import CustomerInformations from "./CustomerInformations";
import ChooseDelivery from "./ChooseDelivery";
import FinalCheck from "./FinalCheck";
import { useNavigate } from "react-router-dom";

const steps = [
  "Customer informations",
  "Choose delivery",
  "Cheack your informations",
];

const BuyingProcess = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const navigate = useNavigate();

  const theme = useTheme();
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (isTrue) => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (isTrue) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClick = () => {
    navigate("/");
  };

  const isLight = theme.palette.mode === "light";

  return (
    <Box
      sx={{
        width: "100%",
        py: 5,
        minHeight: "70vh",
      }}
      className={isLight ? "bg-lightBlue__light" : "bg-lightBlue__dark"}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          maxWidth: "750px",
          mx: "auto",
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            width: "calc(100% - 80px)",
            p: 5,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel
                    {...labelProps}
                    className={
                      index > activeStep
                        ? "stepLabel__disable"
                        : "stepLabel__active"
                    }
                  >
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }} align="center">
                Thank you for buying
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <CustomBtn blueStyle handleClick={handleClick}>
                  Go to home page
                </CustomBtn>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && (
                <CustomerInformations
                  handleBack={handleBack}
                  handleNext={handleNext}
                  steps={steps}
                />
              )}
              {activeStep === 1 && (
                <ChooseDelivery
                  handleBack={handleBack}
                  handleNext={handleNext}
                  steps={steps}
                />
              )}
              {activeStep === 2 && (
                <FinalCheck
                  handleBack={handleBack}
                  handleNext={handleNext}
                  steps={steps}
                />
              )}
            </React.Fragment>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BuyingProcess;
