import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import HoverCart from "./HoverCart";
import { useColorScheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderIcons = () => {
  const { mode, setMode } = useColorScheme();
  const productsID = useSelector((state) => state.cart.productsID);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
        className={"cart--icon"}
      >
        <IconButton
          size="large"
          color="inherit"
          onClick={() => handleClick("/cart")}
        >
          <Badge badgeContent={productsID.length} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <div className="cart--icon__hover--div">
          <div className="cart--icon__hover">
            <HoverCart />
          </div>
        </div>
      </Box>
      <IconButton
        size="large"
        onClick={() => {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        }}
        color="inherit"
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
      <IconButton
        size="large"
        // onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </>
  );
};

export default HeaderIcons;
