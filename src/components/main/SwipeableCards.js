import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { getData } from "../../utility/Axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import ProductCard from "../productCard/ProductCard";
import SkeletonChildren from "../loading/Loading";

const SwipeableCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [maxSteps, setMaxSteps] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [numOfChildren, setNumOfChildren] = useState(6);
  const theme = useTheme();

  const handleNumNextAndBack = (myWidth) => {
    if (myWidth >= 1536) {
      setNumOfChildren(6);
      setMaxSteps(data.length / 6);
    } else if (myWidth >= 1200) {
      setNumOfChildren(5);
      setMaxSteps(data.length / 5);
    } else if (myWidth >= 900) {
      setNumOfChildren(4);
      setMaxSteps(data.length / 4);
    } else if (myWidth >= 600) {
      setNumOfChildren(2);
      setMaxSteps(data.length / 2);
    } else {
      setNumOfChildren(1);
      setMaxSteps(data.length);
    }
  };

  const handleResize = () => {
    window.addEventListener("resize", () => {
      const myWidth = window.innerWidth;
      handleNumNextAndBack(myWidth);
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep.toFixed(2) == maxSteps.toFixed(2) - 1
        ? 0
        : 2 + prevActiveStep > maxSteps.toFixed(2)
        ? maxSteps - 1
        : 1 + prevActiveStep
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0
        ? maxSteps - 1
        : prevActiveStep - 1 < 0
        ? 0
        : prevActiveStep - 1
    );
  };

  const handleGetData = async () => {
    const { productsData, loading } = await getData("");
    setIsLoading(loading);
    setData(productsData);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(() => {
    handleNumNextAndBack(window.innerWidth);
  }, [data]);

  useEffect(() => {
    handleResize();
    setActiveStep(0);
  }, [window, isLoading]);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#3B8AD9" : "#5D5D5D",
      }}
    >
      {isLoading ? (
        <SkeletonChildren numOfChildren={numOfChildren} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "calc(100% - 12px)",
              position: "absolute",
            }}
          >
            <Button
              size="small"
              variant="contained"
              sx={{
                minWidth: "0px",
                px: 0,
                zIndex: "3",
                borderRadius: "50%",
              }}
              onClick={handleBack}
            >
              <KeyboardArrowLeft />
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                minWidth: "0px",
                px: 0,
                zIndex: "3",
                borderRadius: "50%",
              }}
              onClick={handleNext}
            >
              <KeyboardArrowRight />
            </Button>
          </Box>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            className={"SwipeableViews"}
            style={{
              backgroundColor:
                theme.palette.mode === "light" ? "#3B8AD9" : "#5D5D5D",
            }}
          >
            {data?.map((item, index) => (
              <ProductCard item={item} key={item.id} isSwipeableViews />
            ))}
          </SwipeableViews>
        </Box>
      )}
    </Box>
  );
};

export default SwipeableCards;
