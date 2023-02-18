import {
  ADD_TO_CART,
  DEC_QUANTITY,
  GET_CART_ITEMS,
  INC_QUANTITY,
} from "./cart.actiontypes";

export const getCartItems = () => async (dispatch) => {
  dispatch({ type: GET_CART_ITEMS });
};
export const addToCart = (item) => (dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch({ type: ADD_TO_CART, payload: item });
};

export const incQuan = (id) => (dispatch) => {
  dispatch({ type: INC_QUANTITY, payload: id });
};
export const decQuan = (id) => (dispatch) => {
  dispatch({ type: DEC_QUANTITY, payload: id });
};
