import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import Order from "./Order";
import Product from "./Product";
import SingleProductPage from "./SingleProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

export default AllRoutes;
