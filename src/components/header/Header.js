import * as React from "react";
import HeaderIcons from "./HeaderIcons";
import DropDownMenu from "./DropDownMenu";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleClick}
            sx={{
              display: { xs: "block", md: "none" },
              cursor: "pointer",
            }}
          >
            Fake Store
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <HeaderIcons />
          </Box>
        </Toolbar>
        <Toolbar>
          <DropDownMenu />
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={handleClick}
            sx={{
              display: { xs: "none", md: "block" },
              cursor: "pointer",
            }}
          >
            Fake Store
          </Typography>
          <Box sx={{ flexGrow: 1, px: { xs: 0, md: 5 } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                className={"StyledInputBase"}
                sx={{ width: "100%" }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <HeaderIcons />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
