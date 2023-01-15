import React from "react";
import Box from "@mui/material/Box";
import CustomBtn from "../button/CustomBtn";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { restartCart } from "../../redux/actions/productsActions";

const FooterBtns = ({ activeStep, handleBack, handleNext, steps }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const dispatch = useDispatch();

  const goNext = () => {
    handleNext(true);

    if (activeStep === steps.length - 1) {
      dispatch(restartCart());
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <CustomBtn
        color="inherit"
        disabled={activeStep === 0}
        handleClick={handleBack}
        sx={{
          "&:hover": {
            background: "rgba(0,0,0,0.08)",
          },
        }}
      >
        Back
      </CustomBtn>
      <Box sx={{ flex: "1 1 auto" }} />
      <CustomBtn handleClick={goNext} blueStyle>
        {activeStep === steps.length - 1 ? "Finish" : "Next"}
      </CustomBtn>
    </Box>
  );
};

export default FooterBtns;
