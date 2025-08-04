import { Badge } from "@chakra-ui/react";

interface GameScoreProps {
  score: number;
}

const GameScore = ({ score }: GameScoreProps) => {
  let bg = "red.500";
  let color = "white";

  if (score >= 80) bg = "green.500";
  else if (score >= 60) bg = "yellow.400";

  return (
    <Badge
      bg={bg}
      color={color}
      fontSize="sm"
      px={2}
      py={1}
      borderRadius="md"
      fontWeight="bold"
    >
      {score}
    </Badge>
  );
};

export default GameScore;
