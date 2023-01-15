import * as React from "react";
import HeaderIcons from "./HeaderIcons";
import DropDownMenu from "./DropDownMenu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Searching from "./Searching";
import { useNavigate } from "react-router-dom";

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
          <Searching />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <HeaderIcons />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
