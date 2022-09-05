import { Box, Image, Heading, Text, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box px={12} py={2} height="4rem" bg="black">
      <HStack align="center" spacing={4}>
        <Image src="/cheese-icon.svg" w={10} />
        <Heading color="white" fontSize="2xl">
          Grand Cheese Race
        </Heading>
        <Spacer />
        <HStack color="white" fontSize="2xs" fontWeight="semibold">
          <Text>HOME</Text>
          <Text>/</Text>
          <Text>VOTING</Text>
          {/* <Text>/</Text>
          <Text>PAST VICTORS</Text> */}
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
