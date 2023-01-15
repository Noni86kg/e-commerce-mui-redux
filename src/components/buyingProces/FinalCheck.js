import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import FooterBtns from "./FooterBtns";
import { post } from "./ChooseDelivery";

const FinalCheck = ({ handleBack, handleNext, steps }) => {
  const { user, cart } = useSelector((state) => state);
  const { customerInfo, deliveryModel, username } = user;
  const { name, surname, address, phone, mail } = customerInfo;
  const { userCart, totalPrice } = cart;
  const points = Math.round(totalPrice / 10);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          width: "fit-content",
          mx: "auto",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: "1px solid #272727",
            borderRadius: "15px",
            p: 5,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1.7rem" }} align="center">
            Your information:
          </Typography>

          <Typography
            variant="inherit"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Name and surname:{" "}
            <span style={{ fontSize: "1.3rem", fontWeight: 400 }}>
              {name} {surname}
            </span>
          </Typography>

          <Typography
            variant="inherit"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Address:{" "}
            <span style={{ fontSize: "1.3rem", fontWeight: 400 }}>
              {address}
            </span>
          </Typography>

          <Typography
            variant="inherit"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Phone:{" "}
            <span style={{ fontSize: "1.3rem", fontWeight: 400 }}>{phone}</span>
          </Typography>

          <Typography
            variant="inherit"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Mail:{" "}
            <span style={{ fontSize: "1.3rem", fontWeight: 400 }}>{mail}</span>
          </Typography>

          {username && (
            <Typography
              variant="inherit"
              sx={{ fontSize: "0.9rem", fontWeight: 600 }}
            >
              Username:{" "}
              <span style={{ fontSize: "1.3rem", fontWeight: 400 }}>
                {username} ({points} points)
              </span>
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: "1px solid #272727",
            borderRadius: "15px",
            p: 5,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1.7rem" }} align="center">
            Your order:
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {userCart?.map((item) => {
              const { id, price, title, image, howMany } = item;
              return (
                <Box
                  key={id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 5,
                    alignItems: "flex-end",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 4, alignItems: "flex-end" }}>
                    <Box
                      sx={{
                        overflow: "hidden",
                        width: "50px",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          display: "block",
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={image}
                        alt={title}
                      />
                    </Box>
                    <Typography variant="inherit" sx={{ fontSize: "1.3rem" }}>
                      {title}{" "}
                    </Typography>
                  </Box>
                  <Typography variant="inherit" sx={{ fontWeight: 600 }}>
                    {howMany}x ${price}
                  </Typography>
                </Box>
              );
            })}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 5,
                borderBottom: "1px solid #272727",
                pb: 3,
              }}
            >
              <Typography variant="inherit" sx={{ fontSize: "1.3rem" }}>
                Delivery by {post[deliveryModel].name}
              </Typography>
              <Typography variant="inherit" sx={{ fontWeight: 600 }}>
                ${post[deliveryModel].price}.00
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="inherit" sx={{ fontSize: "1.3rem" }}>
                Total price:{" "}
                <span style={{ fontWeight: 600 }}>
                  ${totalPrice + post[deliveryModel].price}
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <FooterBtns
        activeStep={2}
        handleBack={handleBack}
        handleNext={handleNext}
        steps={steps}
      />
    </>
  );
};

export default FinalCheck;
