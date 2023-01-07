import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
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
      <IconButton
        size="large"
        color="inherit"
        onClick={() => handleClick("/cart")}
      >
        <Badge badgeContent={productsID.length} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
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
