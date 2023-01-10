import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  howManyProduct,
  removeSelectedProduct,
} from "../../redux/actions/productsActions";
import CloseIcon from "@mui/icons-material/Close";
import EmptyCartImg from "../../assets/emptyCart.webp";

const HoverCart = () => {
  const { userCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHowMany = (id, num) => {
    if (num !== 0) {
      dispatch(howManyProduct((id = id), (num = num)));
    }
  };

  const deleteItem = (id) => {
    dispatch(removeSelectedProduct(id));
  };

  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <Box
      sx={{
        pt: 1,
      }}
    >
      {userCart.length ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            boxShadow: 3,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {userCart.map((item, index) => {
              const { image, title, price, id, howMany } = item;

              return (
                <Box
                  key={id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderBottom: "1px solid black",
                    p: 2,
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 2,
                      color: "#272727",
                    }}
                  >
                    <Typography sx={{ fontSize: "16px" }} variant="h6">
                      {title}
                    </Typography>
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
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        width: "20%",
                        minWidth: "50px",
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
                        alignItems: "flex-end",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
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
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "600", color: "black" }}
                      >
                        $ {howMany * price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <Button
              onClick={handleNavigate}
              variant="outlined"
              sx={{
                width: "100%",
              }}
            >
              Your Cart
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
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
            src={EmptyCartImg}
            alt={"Empty Cart"}
          />
        </Box>
      )}
    </Box>
  );
};

export default HoverCart;
