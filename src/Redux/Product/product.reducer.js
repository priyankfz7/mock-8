import { GET_PRODUCTS, SORT_PRODUCTS } from "./product.action.types";

const intState = {
  products: [],
};

export const ProductReducer = (state = intState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return { ...state, products: payload };
    }
    case SORT_PRODUCTS: {
      return { ...state, products: payload };
    }
    default: {
      return state;
    }
  }
};
