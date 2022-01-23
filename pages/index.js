import { Box } from "@chakra-ui/react";
import Body from "../components/body";
import Circle from "../components/circle";
import Deals from "../components/deals";
import Getstarted from "../components/getstarted";
import Goals from "../components/goals";
import Homepage from "../components/homepage";
import Overwhelmed from "../components/overwhelmed";
import Whoarewe from "../components/whoarewe";
export default function Home() {
  return (
    <Box>
      <Box pb={{ base: 20, sm: 28, md: 32, lg: 52, xl: 52 }}>
        <Homepage />
      </Box>
      <Box pb={{ base: 24, sm: 28, md: 32, lg: 52, xl: 52 }}>
        <Whoarewe />
      </Box>
      <Box pb={{ base: 28, sm: 28, md: 32, lg: 52, xl: 64 }}>
        <Circle />
      </Box>
      <Box pb={{ base: 24, sm: 28, md: 32, lg: 52, xl: 64 }}>
        <Goals />
      </Box>
      <Box pb={{ base: 24, sm: 28, md: 32, lg: 52, xl: 64 }}>
        <Overwhelmed />
      </Box>
      <Box pb={{ base: 24, sm: 28, md: 32, lg: 52, xl: 64 }}>
        <Body />
      </Box>
      <Box pb={{ base: 24, sm: 28, md: 32, lg: 52, xl: 64 }}>
        <Deals />
      </Box>
      <Box>
        <Getstarted />
      </Box>
    </Box>
  );
}
