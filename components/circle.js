import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Circle() {
  return (
    <Box>
      <SimpleGrid
        m={"0 auto"}
        maxW={"6xl"}
        columns={{ base: "1", sm: 3, md: 3, lg: 3, xl: 3 }}
        spacing={{ base: 6, sm: 4, md: 12, lg: 16, xl: 24 }}
        px={{ base: 28, sm: 8, md: 24, lg: 28, xl: 2 }}
      >
        <Box>
          <Center
            bg={"#D5D8D7"}
            w={{
              base: "150px",
              sm: "150px",
              md: "200px",
              lg: "250px",
              xl: "300px",
            }}
            rounded={"full"}
            h={{
              base: "150px",
              sm: "150px",
              md: "200px",
              lg: "250px",
              xl: "300px",
            }}
          >
            <Text
              fontSize={{
                base: "sm",
                sm: "sm",
                md: "lg",
                lg: "2xl",
                xl: "xl",
              }}
            >
              New Trading Training
            </Text>
          </Center>
        </Box>
        <Box>
          <Center
            bg={"#D5D8D7"}
            w={{
              base: "150px",
              sm: "150px",
              md: "200px",
              lg: "250px",
              xl: "300px",
            }}
            rounded={"full"}
            h={{
              base: "150px",
              sm: "150px",
              md: "200px",
              lg: "250px",
              xl: "300px",
            }}
          >
            <Text
              fontSize={{
                base: "sm",
                sm: "sm",
                md: "lg",
                lg: "2xl",
                xl: "xl",
              }}
            >
              Passive Program
            </Text>
          </Center>
        </Box>
        <Box>
          <Center
            bg={"#D5D8D7"}
            w={{
              base: "150px",
              sm: "150px",
              md: "200px",
              lg: "260px",
              xl: "300px",
            }}
            rounded={"full"}
            h={{
              base: "150px",
              sm: "150px",
              md: "200px",
              lg: "260px",
              xl: "300px",
            }}
          >
            <Text
              fontSize={{
                base: "sm",
                sm: "sm",
                md: "lg",
                lg: "2xl",
                xl: "xl",
              }}
            >
              Intern Trading Friendly
            </Text>
          </Center>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Circle;
