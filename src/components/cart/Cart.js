import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  howManyProduct,
  removeSelectedProduct,
} from "../../redux/actions/productsActions";
import CloseIcon from "@mui/icons-material/Close";
import EmptyCartImg from "../../assets/emptyCart.webp";
import CustomBtn from "../button/CustomBtn";

const Cart = () => {
  const { userCart, totalPrice } = useSelector((state) => state.cart);
  const theme = useTheme();
  const dispatch = useDispatch();

  const changeHowMany = (id, num) => {
    if (num !== 0) {
      dispatch(howManyProduct((id = id), (num = num)));
    }
  };

  const deleteItem = (id) => {
    dispatch(removeSelectedProduct(id));
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 5,
        minHeight: "70vh",
      }}
      className={
        theme.palette.mode === "light"
          ? "bg-lightBlue__light"
          : "bg-lightBlue__dark"
      }
    >
      {userCart.length ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            maxWidth: "550px",
            mx: "auto",
            backgroundColor: "white",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4, m: 4 }}>
            {userCart.map((item, index) => {
              const { image, title, price, id, howMany } = item;

              return (
                <Box
                  key={id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    borderBottom: "1px solid black",
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 5,
                      color: "#272727",
                    }}
                  >
                    <Typography variant="h6">{title}</Typography>
                    <CloseIcon
                      onClick={() => deleteItem(id)}
                      sx={{
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 5,
                    }}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        width: "20%",
                        minWidth: "100px",
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
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", md: "row" },
                        width: "100%",
                        alignItems: { xs: "flex-end", md: "flex-start" },
                        gap: 4,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          px: 2,
                          borderRadius: "50px",
                          backgroundColor: "#272727",
                          color: "white",
                          alignItems: "center",
                        }}
                      >
                        <IconButton
                          sx={{ p: 1, fontSize: "1rem", color: "white" }}
                          onClick={() => changeHowMany(id, howMany - 1)}
                        >
                          -
                        </IconButton>
                        <Box>{howMany}</Box>
                        <IconButton
                          sx={{ p: 1, fontSize: "1rem", color: "white" }}
                          onClick={() => changeHowMany(id, howMany + 1)}
                        >
                          +
                        </IconButton>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        <Typography variant="inherit" sx={{ fontSize: "13px" }}>
                          Price:
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: "600" }}>
                          $ {howMany * price}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              p: 4,
              pt: 0,
              gap: 4,
            }}
          >
            <CustomBtn
              variant="outlined"
              sx={{
                flex: "1",
              }}
              blackStyle
            >
              Buy
            </CustomBtn>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="inherit" sx={{ fontSize: "13px" }}>
                Total price:
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                $ {totalPrice.toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            maxWidth: "550px",
            mx: "auto",
            backgroundColor: "white",
            borderRadius: "15px",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "100%",
              display: "block",
              overflow: "hidden",
              width: "100%",
              borderRadius: "15px",
            }}
            src={EmptyCartImg}
            alt={"Empty Cart"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Cart;
