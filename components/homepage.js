import {
  Box,
  Button,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Typist from "react-typist";

function Home() {
  return (
    <Box p={{ base: 4, md: 8, lg: 12, xl: 16 }}>
      <HStack spacing={{ base: 2, md: 6, lg: 12, xl: 14 }} cursor={"pointer"}>
        <Image
          w={{
            base: "40px",
            sm: "60px",
            md: "90px",
            lg: "100px",
            xl: "100px",
          }}
          src="/assest/brain.png"
          alt="brain"
        />
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
        >
          GeniusBrain
        </Text>
        <Spacer />
        <Link passHref href={"/about"}>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
          >
            About
          </Text>
        </Link>
      </HStack>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
        mt={{ base: 8, sm: 10, md: 10, lg: 19, xl: 16 }}
        spacing={{ base: 7, sm: 7, md: 9, lg: 12, xl: 14 }}
        px={{ base: 2, sm: 0, md: 0, lg: 0, xl: 0 }}
      >
        <Box>
          <Text
            fontWeight={"hairline"}
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "4xl",
              lg: "5xl",
              xl: "6xl",
            }}
          >
            Market Signals
          </Text>
          <Text
            mt={{ base: 1, sm: 2, md: 4, lg: 6, xl: 3 }}
            fontWeight={"bold"}
            fontSize={{
              base: "4xl",
              sm: "2xl",
              md: "4xl",
              lg: "5xl",
              xl: "6xl",
              "2xl": "8xl",
            }}
          >
            <Typist>Lead to Positive Returns</Typist>
          </Text>
        </Box>

        <Box>
          <Image
            w={{
              base: "230px",
              sm: "250px",
              md: "300px",
              lg: "400px",
              xl: "600px",
            }}
            src="/assest/meeting.png"
            alt="meeting"
          />
        </Box>
      </SimpleGrid>
      <HStack
        mt={{ base: 8, sm: 10, md: 10, lg: 12, xl: 10 }}
        spacing={{ base: 4, sm: 6, md: 8, lg: 10, xl: 12 }}
        px={{ base: 2, sm: 0, md: 0, lg: 0, xl: 0 }}
      >
        <Button
          w={{ base: 24, sm: 24, md: 28, lg: 28, xl: 32 }}
          fontWeight={"bold"}
          rounded={"full"}
          colorScheme={"telegram"}
        >
          <a
            href="https://t.me/Geniussignalbot"
            target={"_blank"}
            rel="noreferrer"
          >
            Join Us
          </a>
        </Button>
        <Button
          w={{ base: 28, sm: 28, md: 28, lg: 28, xl: 32 }}
          fontWeight={"hairline"}
          rounded={"full"}
        >
          Learn more
        </Button>
      </HStack>
    </Box>
  );
}

export default Home;
