import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  metacritic: number;
}


const useGame = (selectedGenre: Genre | null,selectedPlatform: Platform | null,selectedSortOder: string | null) => useData<Game>("/games", {
  params: {
    genres: selectedGenre?.id,
    platforms: selectedPlatform?.id,
    ordering: selectedSortOder
  },
}, [selectedGenre?.id,selectedPlatform?.id,selectedSortOder] );

export default useGame;