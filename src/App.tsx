import NavBar from "./components/NavBar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


function App() {
   const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
   const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
   const [selectedSortOder, setSelectedSortOder] = useState<string | null>(null);
   const [searchText, setSearchText] = useState<string>("");

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
        <NavBar onSearch={(text) => setSearchText(text)} />
        {/* pass callback */}
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
        <Box pl={6} pb={3}>
          <GameHeading
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </Box>

        <HStack>
          <Box pl={6}>
            <PlatformSelector
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
          </Box>
          <SortSelector
            onSelectSortOrder={(sortOrder) => setSelectedSortOder(sortOrder)}
            selectedSortOder={selectedSortOder}
          />
        </HStack>
        <GameList
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          selectedSortOder={selectedSortOder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
