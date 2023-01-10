import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import openImg from "../../assets/open.avif";
import laptopImg from "../../assets/laptop.avif";
import jeweleryImg from "../../assets/jewelery.avif";
import menImg from "../../assets/men.avif";
import womenImg from "../../assets/women.avif";
import { useNavigate } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    path: "/all-products",
    label: "Welcome to fake Store",
    imgPath: openImg,
  },
  {
    path: "/electronics",
    label: "Electronics",
    imgPath: laptopImg,
  },
  {
    path: "/jewelery",
    label: "Jewelery",
    imgPath: jeweleryImg,
  },
  {
    path: "/men's-clothing",
    label: "Men's clothing",
    imgPath: menImg,
  },
  {
    path: "/women's-clouthing",
    label: "Women's clouthing",
    imgPath: womenImg,
  },
];

const SwipeableTextMobileStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const hrefPath = () => {
    navigate(images[activeStep].path);
  };

  return (
    <>
      <Link
        underline="none"
        sx={{
          zIndex: "2",
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pt: 5,
        }}
      >
        <Typography
          variant="h2"
          onClick={hrefPath}
          sx={{
            color: "white",
            position: "relative",
            fontSize: { xs: "36px", md: "72px" },
            fontWeight: 700,
            letterSpacing: { xs: "0.5px", md: "2px" },
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          {images[activeStep].label}
        </Typography>
      </Link>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "black",
        }}
        className={"swipeableTextMobileStepper"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            width: "calc(100% - 24px)",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            sx={{ minWidth: "0px", px: 0, py: 5, zIndex: "3" }}
            onClick={handleBack}
          >
            <KeyboardArrowLeft />
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{ minWidth: "0px", px: 0, py: 5, zIndex: "3" }}
            onClick={handleNext}
          >
            <KeyboardArrowRight />
          </Button>
        </Box>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "500px",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </>
  );
};

export default SwipeableTextMobileStepper;
