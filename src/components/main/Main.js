import React from "react";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import SwipeableCards from "./SwipeableCards";
import { useSelector } from "react-redux";

const Main = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return (
    <div>
      <SwipeableTextMobileStepper />
      <SwipeableCards />
    </div>
  );
};

export default Main;
