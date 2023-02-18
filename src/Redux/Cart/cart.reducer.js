import {
  ADD_TO_CART,
  DEC_QUANTITY,
  GET_CART_ITEMS,
  INC_QUANTITY,
} from "./cart.actiontypes";

const intState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

export const CartReducer = (state = intState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      return { ...state, cartItems: [...state.cartItems, payload] };
    }
    case GET_CART_ITEMS: {
      return state;
    }
    case INC_QUANTITY: {
      console.log(payload);
      let newCart = state.cartItems.map((i) => {
        if (i.id === payload) {
          return { ...i, quantity: i.quantity + 1 };
        } else {
          return i;
        }
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cartItems: [...newCart] };
    }
    case DEC_QUANTITY: {
      console.log(payload);
      let newCart = state.cartItems.map((i) => {
        if (i.id === payload) {
          return { ...i, quantity: i.quantity - 1 };
        } else {
          return i;
        }
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cartItems: [...newCart] };
    }
    default: {
      return state;
    }
  }
};
