import { ADD_ORDER, GET_ORDERS } from "./order.action.types";
export const getOrders = () => async (dispatch) => {
  dispatch({ type: GET_ORDERS });
};

export const addOrder = (order) => (dispatch) => {
  dispatch({ type: ADD_ORDER, payload: order });
};
