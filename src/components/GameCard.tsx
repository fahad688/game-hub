import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import type { Game } from "@/hooks/useGame";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
      bg="white"
      _dark={{ bg: "gray.800" }}
    >
      <Image
        src={game.background_image}
        alt={game.name}
        objectFit="cover"
        height="200px"
        width="100%"
      />

      <CardBody>
        <Stack>
          <Heading fontSize="lg">{game.name}</Heading>

          <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.300" }}>
            Released: {new Date(game.released).toLocaleDateString()}
          </Text>

          <Box fontSize="sm" color="yellow.500">
            ⭐ {game.rating}
          </Box>
        </Stack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
