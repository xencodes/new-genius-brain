import {
  Box,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Deals() {
  return (
    <Box>
      <Text
        fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Deals
      </Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
        m={"0 auto"}
        maxW={"6xl"}
        spacing={{ base: 4, sm: 4, md: 6, lg: 6, xl: 0 }}
      >
        <VStack mt={{ base: 6, sm: 8, md: 12, lg: 14, xl: 16 }}>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "2xl", xl: "3xl" }}
          >
            PREMIUM PROGRAM
          </Text>
          <Box>
            <Text
              fontWeight={"medium"}
              fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "xl", xl: "2xl" }}
            >
              Starting at $140 /mo
            </Text>
            <UnorderedList
              fontSize={{ base: "md", sm: "lg", md: "xl", lg: "xl", xl: "xl" }}
            >
              <ListItem>webinars</ListItem>
              <ListItem>Daily Trading Signals</ListItem>
              <ListItem>Tips</ListItem>
              <ListItem>Analysis</ListItem>
              <ListItem>Chat with Our Team</ListItem>
              <ListItem>Start a Demo Account</ListItem>
              <ListItem>Lifetime Mentorship</ListItem>
            </UnorderedList>
          </Box>
        </VStack>
        <VStack mt={{ base: 6, sm: 8, md: 12, lg: 14, xl: 16 }}>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "2xl", xl: "3xl" }}
          >
            FREE PROGRAMM
          </Text>
          <Box>
            <UnorderedList
              fontSize={{ base: "md", sm: "lg", md: "xl", lg: "xl", xl: "xl" }}
            >
              <ListItem>webinars</ListItem>
              <ListItem>Trading Signals</ListItem>
              <ListItem>Tips + Learning</ListItem>
            </UnorderedList>
            <Text
              textAlign={"center"}
              fontSize={{ base: "md", sm: "lg", md: "xl", lg: "xl", xl: "xl" }}
            >
              Experience
            </Text>
          </Box>
        </VStack>
        <VStack mt={{ base: 6, sm: 8, md: 12, lg: 14, xl: 16 }}>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "2xl", xl: "3xl" }}
          >
            PREMIUM PROGRAM(2)
          </Text>
          <Box>
            <Text
              fontWeight={"medium"}
              fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "xl", xl: "2xl" }}
            >
              Starting at $160 /mo
            </Text>
            <UnorderedList
              fontSize={{ base: "md", sm: "lg", md: "xl", lg: "xl", xl: "xl" }}
            >
              <ListItem>Risk Management</ListItem>
              <ListItem>30% Profit Split</ListItem>
              <ListItem>Bot Assistant</ListItem>
              <ListItem>Trading Experts</ListItem>
              <ListItem>Channels</ListItem>
              <ListItem>Mentorships</ListItem>
              <ListItem>Analysis</ListItem>
              <ListItem>Signals</ListItem>
            </UnorderedList>
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}

export default Deals;
