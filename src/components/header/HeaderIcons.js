import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LoginIcon from "@mui/icons-material/Login";
import HoverCart from "./HoverCart";
import { logIn } from "../../redux/actions/productsActions";
import { useColorScheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const HeaderIcons = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { mode, setMode } = useColorScheme();
  const productsID = useSelector((state) => state.cart.productsID);
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (path) => {
    navigate(path);
  };

  const handleLogOut = () => {
    dispatch(logIn(""));
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
        {pathname !== "/cart" && pathname !== "/buying-process" && (
          <div className="cart--icon__hover--div">
            <div className="cart--icon__hover">
              <HoverCart />
            </div>
          </div>
        )}
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
      {username ? (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogOut}>Log out</MenuItem>
          </Menu>
        </div>
      ) : (
        <IconButton
          size="large"
          onClick={() => handleClick("/LogIn")}
          color="inherit"
        >
          <LoginIcon />
        </IconButton>
      )}
    </>
  );
};

export default HeaderIcons;
