import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ brand, title, image, category, price, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Box cursor="pointer" onClick={handleClick}>
      <Image src={image} w="100%" alt={title} />
      <Heading size="md">{title}</Heading>
      <Text>{brand}</Text>
      <Text>{category}</Text>
      <Heading size="lg">{`$${price}`}</Heading>
    </Box>
  );
};

export default SingleProduct;
