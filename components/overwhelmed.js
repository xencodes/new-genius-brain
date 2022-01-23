import { Box, Center, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Overwhelmed() {
  return (
    <Box>
      <Text
        textAlign={"center"}
        fontWeight={"hairline"}
        fontSize={{ base: "xl", sm: "xl", md: "3xl", lg: "4xl", xl: "5xl" }}
        px={{ base: 4, sm: 0, md: 0, lg: 0, xl: 0 }}
      >
        Overwhelmed by the Stock Market ?
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
        spacing={24}
        m={"0 auto"}
        maxW={"7xl"}
        mt={{ base: 6, sm: 5, md: 12, lg: 14, xl: 16 }}
        px={{ base: 0, sm: 6, md: 8, lg: 10, xl: 0 }}
      >
        <VStack mt={{ base: 10, sm: 12, md: 12, lg: 14, xl: 16 }} spacing={10}>
          <Image
            w={{
              base: "200px",
              sm: "300px",
              md: "350px",
              lg: "400px",
              xl: "500px",
            }}
            src="/assest/book.png"
            alt="book"
          />
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={{
                base: "xl",
                sm: "xl",
                md: "2xl",
                lg: "3xl",
                xl: "4xl",
              }}
              textAlign={"center"}
              px={{ base: 10, sm: 0, md: 0, lg: 0, xl: 0 }}
            >
              LEARN TO TRADE CORRECTLY
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{
                base: "md",
                sm: "md",
                md: "lg",
                lg: "xl",
                xl: "2xl",
              }}
              px={{ base: 16, sm: 0, md: 0, lg: 0, xl: 0 }}
              mt={{ base: 4, sm: 4, md: 4, lg: 4, xl: 6 }}
            >
              You&apos;re able to open a demo account, before you&apos;re ready
              to start trading
            </Text>
          </Box>
        </VStack>
        <VStack mt={{ base: 1, sm: 12, md: 12, lg: 14, xl: 16 }} spacing={10}>
          <Image
            w={{
              base: "200px",
              sm: "300px",
              md: "350px",
              lg: "400px",
              xl: "500px",
            }}
            src="/assest/right.png"
            alt="book"
          />
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={{
                base: "xl",
                sm: "xl",
                md: "2xl",
                lg: "3xl",
                xl: "4xl",
              }}
              textAlign={"center"}
              px={{ base: 10, sm: 0, md: 0, lg: 0, xl: 0 }}
            >
              RISK MANAGEMENT
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{
                base: "md",
                sm: "md",
                md: "lg",
                lg: "xl",
                xl: "2xl",
              }}
              px={{ base: 16, sm: 0, md: 0, lg: 0, xl: 0 }}
              mt={{ base: 4, sm: 4, md: 4, lg: 4, xl: 6 }}
            >
              Proper money management to enter the market confidently
            </Text>
          </Box>
        </VStack>
        <VStack mt={{ base: 1, sm: 12, md: 12, lg: 14, xl: 16 }} spacing={10}>
          <Image
            w={{
              base: "200px",
              sm: "300px",
              md: "350px",
              lg: "400px",
              xl: "500px",
            }}
            src="/assest/star.png"
            alt="book"
          />
          <Box>
            <Text
              fontWeight={"bold"}
              fontSize={{
                base: "xl",
                sm: "xl",
                md: "2xl",
                lg: "3xl",
                xl: "4xl",
              }}
              textAlign={"center"}
              px={{ base: 10, sm: 0, md: 0, lg: 0, xl: 0 }}
            >
              GUARANTEED
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{
                base: "md",
                sm: "md",
                md: "lg",
                lg: "xl",
                xl: "2xl",
              }}
              px={{ base: 16, sm: 0, md: 0, lg: 0, xl: 0 }}
              mt={{ base: 4, sm: 4, md: 4, lg: 4, xl: 6 }}
            >
              Nobody can predict the stock market, However when you trade with
              us,you are guaranteed to win 80%
            </Text>
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}

export default Overwhelmed;
