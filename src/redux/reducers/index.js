import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  cart: productsReducer,
  user: selectedProductsReducer,
});

export default reducers;
