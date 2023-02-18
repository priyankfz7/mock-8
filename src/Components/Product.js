import { Box, Button, Heading, Select, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  getProducts,
  sortProducts,
} from "../Redux/Product/product.actions";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const [page, setPage] = useState(1);
  console.log(page);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productManager.products);
  const handleSort = (order) => {
    dispatch(sortProducts(page, order));
  };
  const handleFilter = (querry) => {
    dispatch(filterProducts(page, querry));
  };
  useEffect(() => {
    dispatch(getProducts(page));
  }, [page]);
  return (
    <div>
      <Heading align="center">Products Page</Heading>
      <Box w="30%" ml="30px">
        <Select
          placeholder="sort by Price"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </Select>
        <Select
          placeholder="sort by category"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="kids">kids</option>
          <option value="homedecor">homedecor</option>
          <option value="women">women</option>
        </Select>
      </Box>

      <SimpleGrid
        w="80%"
        m="auto"
        templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
        gap="30px"
      >
        {products.map((p) => (
          <SingleProduct key={p.id} {...p} />
        ))}
      </SimpleGrid>
      <Box m="auto">
        <Button
          isDisabled={page <= 1}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          Prev
        </Button>
        <Button>{page}</Button>
        <Button
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Product;
