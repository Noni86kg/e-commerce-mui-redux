import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const SortBy = ({ handleSortData, sortByValue }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (name) => {
    setAnchorEl(null);
    handleSortData(name);
  };

  const isLight = theme.palette.mode === "light";

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            color: isLight ? "#1976D2" : "#272727",
          }}
          variant="p"
          component="p"
        >
          Sort by:
        </Typography>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
          sx={{
            color: isLight ? "var(--mui-palette-primary-main)" : "black",
            border: isLight
              ? "1px solid rgba(var(--mui-palette-primary-mainChannel) / 0.5);"
              : "1px solid black",
            "&:hover": {
              background: isLight
                ? "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity));"
                : "rgba(0,0,0,0.1)",
              border: isLight
                ? "1px solid var(--mui-palette-primary-main);"
                : "1px solid black",
            },
            textTransform: "initial",
          }}
        >
          {sortByValue}
        </Button>
      </Box>
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
        <MenuItem onClick={() => handleClose("Price: Low to High")}>
          Price: Low to High
        </MenuItem>
        <MenuItem onClick={() => handleClose("Price: High to Low")}>
          Price: High to Low
        </MenuItem>
        <MenuItem onClick={() => handleClose("Name: A to Z")}>
          Name: A to Z
        </MenuItem>
        <MenuItem onClick={() => handleClose("Name: Z to A")}>
          Name: Z to A
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SortBy;
