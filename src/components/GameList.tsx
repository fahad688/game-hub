import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "@/hooks/useGenre";
import { Platform } from "@/hooks/usePlatform";

interface Props {
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null;
}

const GameList = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, loading } = useGame(selectedGenre, selectedPlatform);

  return (
    <div>
      <h1>Game List</h1>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} p={6}>
        {loading
          ? // Show skeletons while loading
            Array(6)
              .fill(0)
              .map((_, i) => (
                <GameCardContainer key={i}>
                  {" "}
                  <GameCardSkeleton />
                </GameCardContainer>
              ))
          : // Show real game cards when data is loaded
            data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </div>
  );
};

export default GameList;
