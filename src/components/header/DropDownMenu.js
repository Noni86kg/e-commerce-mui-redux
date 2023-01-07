import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const DropDownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div style={{ marginRight: "8px" }}>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => handleNavigate("/all-products")}
          sx={{
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          All products
        </MenuItem>

        <MenuItem
          onClick={() => handleNavigate("/electronics")}
          sx={{
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Electronics
        </MenuItem>

        <MenuItem
          onClick={() => handleNavigate("/jewelery")}
          sx={{
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Jewelery
        </MenuItem>

        <MenuItem
          onClick={() => handleNavigate("/men's-clothing")}
          sx={{
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Men's clothing
        </MenuItem>

        <MenuItem
          onClick={() => handleNavigate("/women's-clouthing")}
          sx={{
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Women's clouthing
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropDownMenu;
