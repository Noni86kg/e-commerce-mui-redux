import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import FooterBtns from "./FooterBtns";
import { handleDeliveryMode } from "../../redux/actions/productsActions";
import Paper from "@mui/material/Paper";

export const post = [
  {
    name: "PTT",
    deliveryTime: [30, 35],
    price: 5,
  },
  {
    name: "Post Express",
    deliveryTime: [5, 7],
    price: 15,
  },
  {
    name: "Superman",
    deliveryTime: [0, 1],
    price: 500,
  },
];

const ChooseDelivery = ({ handleBack, handleNext, steps }) => {
  const [selected, setSelected] = useState(0);

  const dispatch = useDispatch();
  const deliveryModel = useSelector((state) => state.user.deliveryModel);

  const IsNextValid = () => {
    handleNext(true);

    dispatch(handleDeliveryMode(selected));
  };

  useEffect(() => {
    setSelected(deliveryModel);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Typography variant="h6" align="center">
          Choose your delivery
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            alignItems: "center",
          }}
        >
          {post.map((item, index) => {
            return (
              <Paper
                key={index}
                elevation={selected === index ? 3 : 1}
                sx={{
                  width: { xs: "90%", md: "100%" },
                  maxWidth: "220px",
                  cursor: "pointer",
                  color: "#272727",
                  backgroundColor:
                    selected === index ? "rgba(0,0,0,0.075)" : "white",
                }}
                onClick={() => setSelected(index)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    mx: 2,
                    my: 4,
                  }}
                >
                  <Typography variant="inherit" sx={{ fontWeight: 600 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="inherit">
                    Time delivery: {item.deliveryTime[0]} -{" "}
                    {item.deliveryTime[1]} days
                  </Typography>
                  <Typography variant="inherit">Cost: ${item.price}</Typography>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Box>
      <FooterBtns
        activeStep={1}
        handleBack={handleBack}
        handleNext={IsNextValid}
        steps={steps}
      />
    </>
  );
};

export default ChooseDelivery;
