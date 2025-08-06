import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  metacritic: number;
}


const useGame = () => useData<Game>("/games");

export default useGame;