import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Box,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "aside"`, // mobile view
        md: `"nav nav" "aside main"`, // desktop view
      }}
    >
      {/* Navigation */}
      <GridItem area="nav" bg="teal.500" px={6} py={4} color="white">
        <Text fontSize="xl" fontWeight="bold">
          Navigation
        </Text>
      </GridItem>

      {/* Aside (Sidebar) */}
      <GridItem
        area="aside"
        bg="gray.100"
        p={4}
        borderRight={{ md: "1px solid" }}
        borderColor="gray.300"
      >
        <Text mb={2}>🏠 Dashboard</Text>
        <Text mb={2}>⚙️ Settings</Text>
        <Text>👤 Profile</Text>
      </GridItem>

      {/* Main Content */}
      <GridItem area="main" bg="gray.50" p={6}>
        <Text fontSize="2xl" mb={2}>
          Main Content
        </Text>
        <Text>This is your main content area using Grid layout.</Text>
      </GridItem>
    </Grid>
  );
}

export default App;
