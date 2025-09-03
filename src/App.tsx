import NavBar from "./components/NavBar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatform";


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "aside"`, // mobile view
        md: `"nav nav" "aside main"`, // desktop view
      }}
      templateColumns={{ base: "1fr", md: "250px 1fr" }} // sidebar width
      gap={4} // spacing between columns
      p={4} // padding around entire grid
    >
      {/* Navigation */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Sidebar */}
      <GridItem area="aside" p={2}>
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      {/* Main Content */}
      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameList
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
