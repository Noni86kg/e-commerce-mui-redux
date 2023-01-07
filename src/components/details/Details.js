import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { getData } from "../../utility/Axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import SkeletonChildren from "../loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/actions/productsActions";

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const theme = useTheme();
  const { id } = useParams();
  const idFixed = id.slice(1, id.length);
  const dispatch = useDispatch();
  const productsID = useSelector((state) => state.cart.productsID);
  const idNum = parseInt(idFixed);
  const isAdded = productsID.includes(idNum);

  const handleGetData = async () => {
    const { productsData, loading } = await getData(`/${idFixed}`);
    setIsLoading(loading);
    setData(productsData);
  };

  const addProduct = () => {
    dispatch(addProducts(data));
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        p: 5,
      }}
      className={
        theme.palette.mode === "light"
          ? "bg-lightBlue__light"
          : "bg-lightBlue__dark"
      }
    >
      {isLoading ? (
        <Box sx={{ width: "90%", maxWidth: "550px", height: "70vh" }}>
          <SkeletonChildren numOfChildren={1} />
        </Box>
      ) : (
        <Card
          sx={{
            width: "90%",
            maxWidth: "550px",
            p: 2,
            backgroundColor:
              theme.palette.mode === "light" ? "rgb(200, 200, 200)" : "#272728",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "100%",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <CardMedia
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "5px",
                  backgroundSize: "contain",
                }}
                image={data.image}
                title={data.title}
              />
            </Box>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                }}
              >
                <Rating name="disabled" value={data.rating.rate} disabled />
                <Typography align={"center"} variant="inherit" component="p">
                  ({data.rating.count})
                </Typography>
              </Box>
              <Typography
                align={"center"}
                variant="h6"
                sx={{
                  py: 2,
                  fontSize: "26px",
                  lineHeight: "28px",
                }}
              >
                {data.title}
              </Typography>
              <Typography
                align={"center"}
                variant="inherit"
                sx={{ mt: 4, mb: 1 }}
              >
                {data.description}
              </Typography>
            </CardContent>
          </Box>

          <CardActions
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                className={"Details-price"}
                sx={{
                  background: "red",
                  py: 2,
                  px: 4,
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "white",
                }}
                align={"center"}
                variant="inherit"
                component="span"
              >
                ${data.price}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{ width: "100%" }}
              size="large"
              disabled={isAdded}
              onClick={addProduct}
            >
              {isAdded ? "Added to cart" : "Add to cart"}
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default Details;
