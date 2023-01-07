import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Filter from "./Filter";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const FilterMob = ({ unfilteredData, handleFilterData }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <FilterAltOutlinedIcon /> Filter
        </Button>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className={"FilterMob"}
      >
        <Filter
          data={unfilteredData}
          handleFilterData={handleFilterData}
          isMob
          handleClose={handleClose}
        />
      </Menu>
    </div>
  );
};

export default FilterMob;
