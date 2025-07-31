import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import GameList from "./components/GameList";
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
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      {/* Aside (Sidebar) */}
      <GridItem area="aside">
        <Text>Dashboard</Text>
        <Text>Settings</Text>
      </GridItem>

      {/* Main Content */}
      <GridItem area="main">
        <GameList />
      </GridItem>
    </Grid>
  );
}

export default App;
