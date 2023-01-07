import { ActionTypes } from "../constants/action-types";
const intialState = {
  userCart: [],
  productsID: [],
  totalPrice: 0,
};

const handleTotalPrice = (products) => {
  const prices = products.map((item) => item.price * item.howMany);

  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
  }

  return sum;
};

export const productsReducer = (state = intialState, { type, payload }) => {
  let newUserCart = [];
  let newTotalPrice = [];
  console.log(type);
  switch (type) {
    case ActionTypes.ADD_PRODUCTS:
      const newProduct = payload;
      newProduct["howMany"] = 1;

      newUserCart = [...state.userCart, newProduct];

      newTotalPrice = handleTotalPrice(newUserCart);
      return {
        ...state,
        userCart: newUserCart,
        productsID: [...state.productsID, payload.id],
        totalPrice: newTotalPrice,
      };
      break;

    case ActionTypes.HOWMANY_PRODUCT:
      const { id, num } = payload;

      newUserCart = state.userCart.map((item) => {
        if (item.id === id) {
          item.howMany = num;
        }
        return item;
      });

      newTotalPrice = handleTotalPrice(newUserCart);

      return {
        ...state,
        userCart: newUserCart,
        totalPrice: newTotalPrice,
      };
      break;

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      newUserCart = state.userCart.filter((item) => item.id !== payload);
      const newProductsID = state.productsID.filter((item) => item !== payload);
      newTotalPrice = handleTotalPrice(newUserCart);

      return {
        ...state,
        userCart: newUserCart,
        productsID: newProductsID,
        totalPrice: newTotalPrice,
      };
      break;

    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
