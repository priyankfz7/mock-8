import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/Cart/cart.action";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(product);
  const handleAdd = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  useEffect(() => {
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
      )
      .then((res) => setProduct(res.data.data));
  }, []);
  return (
    <Flex justify="space-between" w="75%" m="auto" mt="100px">
      <Box w="35%">
        <Image src={product.image} w="100%" alt={product.title} />
      </Box>
      <Box w="45%">
        <Heading size="md" mb="10px">
          {product.title}
        </Heading>
        <Text mb="10px">{product.brand}</Text>
        <Text mb="10px">{product.category}</Text>
        <Heading size="15px" mb="20px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </Heading>
        <Heading size="lg" mb="30px">{`$${product.price}`}</Heading>

        <Button onClick={handleAdd}>Add To Cart</Button>
      </Box>
    </Flex>
  );
};

export default SingleProductPage;
