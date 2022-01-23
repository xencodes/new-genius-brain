import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";

function Body() {
  return (
    <Box>
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "xl", sm: "lg", md: "2xl", lg: "4xl", xl: "5xl" }}
        textAlign={"center"}
      >
        Did We Mention...
      </Text>
      <Text
        textAlign={"center"}
        fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "2xl", xl: "3xl" }}
        mt={{ base: 4, sm: 6, md: 8, lg: 10, xl: 12 }}
        px={{ base: 2, sm: 6, md: 5, lg: 8, xl: 0 }}
      >
        You can join our free program to learn how to trade and make money in
        the FOREX Market
      </Text>
      <Text
        textAlign={"center"}
        fontSize={{ base: "md", sm: "lg", md: "2xl", lg: "2xl", xl: "3xl" }}
        mt={{ base: 2, sm: 4, md: 6, lg: 8, xl: 10 }}
        px={{ base: 2, sm: 6, md: 5, lg: 8, xl: 0 }}
      >
        Our team hosts bi-weekly webinars and send Trading Signals chat!
      </Text>
      <Center mt={{ base: 8, sm: 14, md: 20, lg: 24, xl: 14 }}>
        <Button
          w={{ base: 40, sm: 40, md: 40, lg: 40, xl: 40 }}
          fontWeight={"bold"}
          fontSize={"xl"}
        >
          JOIN US
        </Button>
      </Center>
    </Box>
  );
}

export default Body;
