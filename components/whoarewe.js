import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Whoarewe() {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
        maxW={"6xl"}
      >
        <Box>
          <Image
            w={{
              base: "200px",
              sm: "230px",
              md: "350px",
              lg: "350px",
              xl: "350px",
            }}
            src="/assest/cross.png"
            alt="cross"
            ml={{ base: 36, sm: 0, md: 0, lg: 0, xl: 0 }}
          />
        </Box>
        <Box mr={{ base: 0, sm: 0, md: 6, lg: 24, xl: 0 }}>
          <Box mt={{ base: 8, sm: 12, md: 16, lg: 20, xl: 24 }}>
            <Text
              fontWeight={"bold"}
              textAlign={"center"}
              fontSize={{
                base: "xl",
                sm: "2xl",
                md: "3xl",
                lg: "4xl",
                xl: "6xl",
              }}
            >
              Who Are We ?
            </Text>
          </Box>
          <Box>
            <Text
              textAlign={"center"}
              fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "3xl" }}
              mt={{ base: 2, sm: 4, md: 6, lg: 10, xl: 12 }}
            >
              We are a Top Tier Trading Group
            </Text>
          </Box>
          <Box>
            <Text
              textAlign={"center"}
              fontSize={{ base: "sm", sm: "sm", md: "xl", lg: "2xl" }}
              px={{ base: 6, sm: 4, md: 10, lg: 0, xl: 0 }}
              mt={{ base: 1, sm: 3, md: 4, lg: 8, xl: 8 }}
            >
              We invite new traders to the $2.4 qua-Trillion Forex Market & show
              them the ways to access endless possibilities
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Whoarewe;
