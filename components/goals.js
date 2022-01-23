import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Goals() {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
        spacing={{ base: 6, sm: 20, md: 10, lg: 12, xl: 20 }}
        m={"0 auto"}
        maxW={"7xl"}
      >
        <Box>
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={{
                base: "lg",
                sm: "md",
                md: "2xl",
                lg: "3xl",
                xl: "5xl",
              }}
              ml={{ base: 10, sm: 40, md: 14, lg: 14, xl: 10 }}
            >
              Your Goals Matter To Us
            </Text>
            <Text
              fontSize={{
                base: "lg",
                sm: "md",
                md: "xl",
                lg: "2xl",
                xl: "3xl",
              }}
              mt={{ base: 5, sm: 4, md: 0, lg: 0, xl: 0 }}
              ml={{ base: 10, sm: 0, md: 14, lg: 14, xl: 10 }}
              textAlign={"center"}
            >
              learn as you earn
            </Text>
            <Text
              mt={{ base: 3, sm: 5, md: 6, lg: 8, xl: 10 }}
              ml={{ base: 10, sm: 0, md: 14, lg: 14, xl: 10 }}
              fontSize={{
                base: "md",
                sm: "xl",
                md: "xl",
                lg: "2xl",
                xl: "3xl",
              }}
              textAlign={"center"}
            >
              We provide the best training for Market & Analysis to grow your
              income.
            </Text>
          </Box>
        </Box>
        <Box>
          <Image
            w={{
              base: "300px",
              sm: "350px",
              md: "400px",
              lg: "500px",
              xl: "600px",
            }}
            ml={{ base: 10, sm: 36, md: 0, lg: 0, xl: 0 }}
            src="/assest/computer.png"
            alt="computer"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Goals;
