import { VStack, HStack, Image, Button, Divider } from "@chakra-ui/react";
import { HiOutlineSelector } from "react-icons/hi";

export default function Header() {
  return (
    <>
      <VStack w="full" p={0}>
        <HStack
          w={"full"}
          paddingBottom={2}
          paddingTop={4}
          px={4}
          justify="space-between"
        >
          <HStack w={"full"} spacing={8}>
            <Image src={"images/logo.png"} h={8} paddingRight={16} />
            <Button variant={"ghost"} colorScheme="teal" isActive={true}>
              Rent
            </Button>
            <Button variant={"ghost"} colorScheme="teal">
              Buy
            </Button>
            <Button variant={"ghost"} colorScheme="teal">
              Sell
            </Button>
            <Button
              variant={"ghost"}
              colorScheme="teal"
              rightIcon={<HiOutlineSelector />}
            >
              Manage property
            </Button>
            <Button
              variant={"ghost"}
              colorScheme="teal"
              rightIcon={<HiOutlineSelector />}
            >
              Resources
            </Button>
          </HStack>
          <Button variant="outline" colorScheme="teal">
            Login
          </Button>
          <Button variant="solid" colorScheme="teal">
            Sign up
          </Button>
        </HStack>
        <Divider shadow={"base"} />
      </VStack>
    </>
  );
}
