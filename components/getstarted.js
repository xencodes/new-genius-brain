import { Box, Button, Center } from "@chakra-ui/react";
import React from "react";

function Getstarted() {
  return (
    <Box>
      <Center>
        <Button
          w={{ base: 32, sm: 40, md: 52, lg: 56, xl: 64 }}
          colorScheme={"yellow"}
        >
          Get Started
        </Button>
      </Center>
    </Box>
  );
}

export default Getstarted;
