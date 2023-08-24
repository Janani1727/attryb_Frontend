import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box>
        <Flex
          justifyContent={"space-evenly"}
          bg={"pink"}
          padding={6}
          fontSize={20}
          fontWeight={"bold"}
        >
          <Link to="/">
            <Text
              fontFamily={"cursive"}
              color={"rgb(32, 39, 167)"}
              fontWeight={"bold"}
            >
              AttrybCar
            </Text>
          </Link>
          <Link to="/">Market Place</Link>
          <Link to="/oem">Add Inventory</Link>
          <Link to="/auth">Account</Link>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;