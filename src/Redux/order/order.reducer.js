import { ADD_ORDER, GET_ORDERS } from "./order.action.types";

const intState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

export const orderReducer = (state = intState, { type, payload }) => {
  switch (type) {
    case ADD_ORDER: {
      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(payload);
      localStorage.setItem("orders", JSON.stringify(orders));
      return { ...state, orders: [...state.orders, payload] };
    }
    case GET_ORDERS: {
      return state;
    }
    default: {
      return state;
    }
  }
};
