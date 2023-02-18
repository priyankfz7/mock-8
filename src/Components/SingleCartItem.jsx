import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decQuan, incQuan } from "../Redux/Cart/cart.action";
import { addOrder } from "../Redux/order/order.actions";

const SingleCartItem = ({
  image,
  id,
  brand,
  category,
  price,
  title,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <Flex justify="space-between" w="55%" m="auto" mt="100px">
      <Box w="35%">
        <Image src={image} w="100%" alt={title} />
      </Box>
      <Box w="45%">
        <Heading size="md" mb="10px">
          {title}
        </Heading>
        <Text mb="10px">{brand}</Text>
        <Text mb="10px">{category}</Text>
        <Box>
          <Button
            isDisabled={quantity <= 1}
            onClick={() => dispatch(decQuan(id))}
          >
            -
          </Button>
          <Button>{quantity}</Button>
          <Button onClick={() => dispatch(incQuan(id))}>+</Button>
        </Box>
        <Heading size="lg" mb="30px">{`$${price}`}</Heading>

        <Button
          onClick={() => {
            dispatch(
              addOrder({
                image,
                id,
                brand,
                category,
                price,
                title,
                quantity,
              })
            );
            alert("order placed successfully");
          }}
        >
          Place order
        </Button>
      </Box>
    </Flex>
  );
};

export default SingleCartItem;
