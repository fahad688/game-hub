import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

 export interface Game {
    id: number;
    name: string;
    background_image: string;
    released: string;
    rating: number;
    metacritic: number;
  }

  interface fetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGame = () => {
   
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<fetchGamesResponse>("/games", {signal: controller.signal})
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return; // Ignore if the request was cancelled
        setError(err.message);
      });
    return () => controller.abort(); // Cleanup function to cancel the request if the component unmounts
  }, []);

  return { games, error };

}

export default useGame;