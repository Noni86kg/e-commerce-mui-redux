import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { getData } from "../../utility/Axios";
import { changeData } from "../../utility/Utility";
import SkeletonChildren from "../loading/Loading";
import Filter from "./Filter";
import FilterMob from "./FilterMob";
import ProductCard from "../productCard/ProductCard";
import SortBy from "./SortBy";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import noProductImg from "../../assets/no_products.webp";

const Category = ({ path }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [unfilteredData, setUnfilteredData] = useState([]);
  const [sortByValue, setSortByValue] = useState("Popularity");
  const theme = useTheme();

  const handleGetData = async () => {
    const { productsData, loading } = await getData(path);
    setIsLoading(loading);
    setData(productsData);
    setUnfilteredData(productsData);
  };

  const handleSortData = (name) => {
    const newData = changeData(name, data);
    if (newData) {
      setData(newData);
      setSortByValue(name);
    }
  };

  const handleFilterData = (filteredData) => {
    if (sortByValue === "Popularity") {
      setData(filteredData);
    } else {
      const newData = changeData(sortByValue, filteredData);
      setData(newData);
    }
  };

  useEffect(() => {
    handleGetData();
  }, [path]);

  return (
    <Box
      className={
        theme.palette.mode === "light"
          ? "bg-lightBlue__light"
          : "bg-lightBlue__dark"
      }
    >
      {isLoading ? (
        <SkeletonChildren numOfChildren={15} isGrid />
      ) : (
        <Container maxWidth="xl" sx={{ display: "flex" }}>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Filter data={unfilteredData} handleFilterData={handleFilterData} />
          </Box>
          {data.length ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                my: 4,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "space-between", md: "flex-end" },
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <FilterMob
                    unfilteredData={unfilteredData}
                    handleFilterData={handleFilterData}
                  />
                </Box>
                <SortBy
                  handleSortData={handleSortData}
                  sortByValue={sortByValue}
                />
              </Box>
              <Grid
                container
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
                  gap: "16px",
                }}
              >
                {data.map((item) => {
                  return <ProductCard item={item} key={item.id} />;
                })}
              </Grid>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                pt: 5,
                my: 4,
              }}
            >
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  objectFit: "cover",
                  maxWidth: "862px",
                }}
                src={noProductImg}
                alt={"No products"}
              />
            </Box>
          )}
        </Container>
      )}
    </Box>
  );
};

export default Category;
