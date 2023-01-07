import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/actions/productsActions";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, isSwipeableViews }) => {
  const { image, title, price, id } = item;
  const { rate, count } = item.rating;
  const isTitleLengthLong = title.length > 60 ? true : false;
  const titleFontSize =
    title.length > 70 ? "18px" : isTitleLengthLong ? "20px" : "24px";
  const titleLineHeight = isTitleLengthLong ? 1.6 : 1.2;
  const dispatch = useDispatch();
  const productsID = useSelector((state) => state.cart.productsID);
  const isAdded = productsID.includes(id);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/:${id}`);
  };

  const addProduct = () => {
    dispatch(addProducts(item));
  };

  return (
    <Card
      sx={{
        mx: isSwipeableViews ? 2 : 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className={"ProductCard"}
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
              cursor: "pointer",
            }}
            onClick={handleClick}
            image={image}
            title={title}
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
            <Rating name="disabled" value={rate} disabled />
            <Typography align={"center"} variant="inherit" component="p">
              ({count})
            </Typography>
          </Box>
          <Typography
            align={"center"}
            variant="h6"
            sx={{ fontSize: titleFontSize, lineHeight: titleLineHeight, pt: 2 }}
          >
            {title}
          </Typography>
        </CardContent>
      </Box>

      <CardActions sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            className={"ProductCard-price"}
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
            ${price}
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
  );
};

export default ProductCard;
