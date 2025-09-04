import { Genre } from '@/hooks/useGenre';
import { Platform } from '@/hooks/usePlatform';
import { Heading } from '@chakra-ui/react'

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  return (
    <Heading
      as="h1"
      fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
      fontWeight="bold"
      marginY={5}
    >
      {selectedPlatform?.name || ""} {selectedGenre?.name || ""} Games
    </Heading>
  );
};

export default GameHeading