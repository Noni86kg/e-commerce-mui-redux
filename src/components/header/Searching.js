import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCard/ProductCard";
import { getData } from "../../utility/Axios";
import { useLocation } from "react-router-dom";

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

const Searching = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const location = useLocation();

  const handleGetData = async () => {
    const { productsData, loading } = await getData("");
    setIsLoading(loading);
    setData(productsData);
  };

  const handleChange = (event) => {
    const value = event.target.value;

    setSearchValue(value);
    setFilteredData(
      data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleFocus = () => {
    if (isLoading) {
      handleGetData();
    }
  };

  useEffect(() => {
    setSearchValue("");
  }, [location]);

  return (
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
          value={searchValue}
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </Search>
      {searchValue !== "" && (
        <Box sx={{ position: "relative", width: "100%", top: "12px" }}>
          <Box
            sx={{
              position: "absolute",
              ml: { xs: 0, sm: 3 },
              mr: { xs: 0, sm: 2 },
              width: { xs: "calc(100% - 80px)", sm: "calc(100% - 120px)" },
              minHeight: "250px",
              zIndex: 10,
              p: 5,
              height: filteredData.length
                ? {
                    xs: "calc(100vh - 128px - 80px)",
                    sm: "calc(100vh - 64px - 80px)",
                  }
                : "250px",
              overflow: "auto",
            }}
            className={isLight ? "bg-Blue__light" : "bg-Blue__dark"}
          >
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "250px",
                }}
              >
                <CircularProgress
                  className="circularProgress"
                  sx={{ color: "white" }}
                />
              </Box>
            ) : filteredData.length ? (
              <Grid
                container
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
                  gap: "16px",
                }}
              >
                {filteredData.map((item) => {
                  return <ProductCard item={item} key={item.id} />;
                })}
              </Grid>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "250px",
                }}
              >
                <Typography variant="h6" sx={{ fontSize: "48px" }}>
                  There is no items
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Searching;
