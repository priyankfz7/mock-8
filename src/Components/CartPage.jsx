import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleCartItem from "./SingleCartItem";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cartManager.cartItems);
  //console.log(cartItems);
  return (
    <Box>
      <Heading align="center">Cart Page</Heading>
      <Box w="30%" m="auto" mt="20px">
        <Heading
          size="lg"
          mb="20px"
          borderBottom="1px solid gainsboro"
        >{`Cart Total: $${cartItems.reduce((acc, i) => {
          return acc + i.price * i.quantity;
        }, 0)}`}</Heading>
        <Heading size="lg" mb="20px" borderBottom="1px solid gainsboro">
          Delivery charges: $50
        </Heading>
        <Heading
          size="lg"
          mb="20px"
          borderBottom="1px solid gainsboro"
        >{`Payable Amount: $${
          cartItems.reduce((acc, i) => {
            return acc + i.price * i.quantity;
          }, 0) + 50
        }`}</Heading>
      </Box>
      <Box>
        {cartItems.map((i) => (
          <SingleCartItem key={i.id + Math.random()} {...i} />
        ))}
      </Box>
    </Box>
  );
};

export default CartPage;
