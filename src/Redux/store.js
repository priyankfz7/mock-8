import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./Cart/cart.reducer";
import { orderReducer } from "./order/order.reducer";
import { ProductReducer } from "./Product/product.reducer";

const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Reducer = combineReducers({
  productManager: ProductReducer,
  cartManager: CartReducer,
  orderManager: orderReducer,
});

export const store = legacy_createStore(
  Reducer,
  composeInhancer(applyMiddleware(thunk))
);
