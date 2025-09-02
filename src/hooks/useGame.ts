import useData from "./useData";
import { Genre } from "./useGenre";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  metacritic: number;
}


const useGame = (selectedGenre: Genre | null) => useData<Game>("/games", {
  params: {
    genres: selectedGenre?.id,
  },
}, [selectedGenre?.id] );

export default useGame;