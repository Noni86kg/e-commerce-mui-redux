import { ActionTypes } from "../constants/action-types";

export const addProducts = (products) => {
  return {
    type: ActionTypes.ADD_PRODUCTS,
    payload: products,
  };
};

export const howManyProduct = (id, num) => {
  return {
    type: ActionTypes.HOWMANY_PRODUCT,
    payload: { id, num },
  };
};

export const removeSelectedProduct = (id) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: id,
  };
};

export const logIn = (username) => {
  return {
    type: ActionTypes.LOG_IN,
    payload: username,
  };
};
