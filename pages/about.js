import React from "react";
import { Box, Text, Heading, Center } from "@chakra-ui/react";
export default function About() {
  return (
    <Box>
      <Box mt={{ base: 4, sm: 6, md: 8, lg: 12, xl: 16 }}>
        <Center>
          <Text
            fontWeight={"bold"}
            fontSize={{
              base: "2xl",
              sm: "3xl",
              md: "4xl",
              lg: "5xl",
              xl: "5xl",
            }}
          >
            Who Are We ?
          </Text>
        </Center>
        <Center>
          <Text
            fontWeight={"bold"}
            fontSize={{
              base: "2xl",
              sm: "3xl",
              md: "4xl",
              lg: "5xl",
              xl: "6xl",
            }}
            mt={{ base: 4, sm: 6, md: 10, lg: 14, xl: 20 }}
          >
            Trading & Investing Group
          </Text>
        </Center>
        <Text
          textAlign={"center"}
          fontSize={{
            base: "xl",
            sm: "2xl",
            md: "3xl",
            lg: "4xl",
            xl: "4xl",
          }}
          mt={{ base: 8, sm: 10, md: 12, lg: 14, xl: 12 }}
          px={{ base: 5, sm: 7, md: 14, lg: 20, xl: 64, "2xl": 72 }}
        >
          our community is a Top Tier Trading & Investing group primary based on
          ForEX & Crypto currency
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{
            base: "xl",
            sm: "2xl",
            md: "3xl",
            lg: "4xl",
            xl: "4xl",
          }}
          mt={{ base: 4, sm: 8, md: 12, lg: 10, xl: 12 }}
          px={{ base: 2, sm: 3, md: 14, lg: 20, xl: 64, "2xl": 72 }}
        >
          we invite new traders to the $2.4 Qua-Trillion ForEX Market & provide
          learning opportunities to build financial wealth through programs,
          webinars, market signals all done with real team members.
        </Text>
      </Box>
    </Box>
  );
}
