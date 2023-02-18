import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const orders = useSelector((state) => state.orderManager.orders);
  console.log(orders);
  return (
    <Box>
      <Heading align="center">Your Placed Orders !!!</Heading>
      {orders.map((o) => (
        <Flex justify="space-between" w="55%" m="auto" mt="100px">
          <Box w="35%">
            <Image src={o.image} w="100%" alt={o.title} />
          </Box>
          <Box w="45%">
            <Heading size="md" mb="10px">
              {o.title}
            </Heading>
            <Text mb="10px">{o.brand}</Text>
            <Text mb="10px">{o.category}</Text>
            <Text mb="10px">{`Quantity: ${o.quantity}`}</Text>

            <Heading size="lg" mb="30px">{`$${o.price}`}</Heading>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Order;
