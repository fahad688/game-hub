import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

const GameList = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface fetchGamesResponse {
    count: number;
    results: Game[];
  }

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchGamesResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Game List</h1>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
