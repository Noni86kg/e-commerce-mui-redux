import { combineReducers } from "redux";
import { productsReducer, aboutUser } from "./productsReducer";
const reducers = combineReducers({
  cart: productsReducer,
  user: aboutUser,
});

export default reducers;
