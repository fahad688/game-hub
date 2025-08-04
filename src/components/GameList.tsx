import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/hooks/useGame";
import GameCard from "./GameCard";

const GameList = () => {
  const { games, error } = useGame();
  return (
    <div>
      <h1>Game List</h1>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} p={6}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameList;
