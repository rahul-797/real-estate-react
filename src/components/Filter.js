import {
  Box,
  Button,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function Filter({
  type,
  setType,
  location,
  setLocation,
  price,
  setPrice,
  moveInDate,
  setMoveInDate,
}) {
  return (
    <Box alignSelf={"center"} borderRadius="lg" borderWidth="1px" w="4xl">
      <HStack justify={"center"} p={4} height="24" gap={"4%"}>
        <VStack alignItems={"flex-start"}>
          <Text fontSize={"sm"}>Location</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              colorScheme="teal"
            >
              {location}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setLocation("New York, USA");
                }}
              >
                New York, USA
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setLocation("London, UK");
                }}
              >
                London, UK
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
        <Divider orientation="vertical" />
        <VStack alignItems={"flex-start"}>
          <Text fontSize={"sm"}>Select Move-In date</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              colorScheme="teal"
            >
              {moveInDate}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setMoveInDate("15 Nov, 2022");
                }}
              >
                15 Nov, 2022
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setMoveInDate("1 Jan, 2023");
                }}
              >
                1 Jan, 2023
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
        <Divider orientation="vertical" />
        <VStack alignItems={"flex-start"}>
          <Text fontSize={"sm"}>Price</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<BsChevronDown />}
              colorScheme="teal"
            >
              {price === "3000" ? "$1000 - $3000" : "$3000 - $5000"}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setPrice("3000");
                }}
              >
                $1000 - $3000
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPrice("5000");
                }}
              >
                $3000 - $5000
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
        <Divider orientation="vertical" />
        <VStack alignItems={"flex-start"}>
          <Text fontSize={"sm"}>Property type</Text>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="teal"
              rightIcon={<BsChevronDown />}
            >
              {type}
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setType("House");
                }}
              >
                House
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setType("Office");
                }}
              >
                Office
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
      </HStack>
    </Box>
  );
}
