import axios from "axios";
import {
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  SORT_PRODUCTS,
} from "./product.action.types";
export const getProducts = (page) => async (dispatch) => {
  let res = await axios.get(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12`
  );
  let data = await res.data.data;
  dispatch({ type: GET_PRODUCTS, payload: data });
};
export const sortProducts = (page, order) => async (dispatch) => {
  let res = await axios.get(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&sort=price&order=${order}`
  );
  let data = await res.data.data;
  dispatch({ type: SORT_PRODUCTS, payload: data });
};
export const filterProducts = (page, querry) => async (dispatch) => {
  let res = await axios.get(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&filter=${querry}`
  );
  let data = await res.data.data;
  dispatch({ type: FILTER_PRODUCTS, payload: data });
};
