import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root
      width="300px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      _dark={{ bg: "gray.800" }}
    >
      <Skeleton height="200px" width="100%" />

      <CardBody>
        <Stack gap={2}>
          <Skeleton height="20px" width="60%" />
          <Skeleton height="16px" width="50%" />
          <Skeleton height="16px" width="40%" />
        </Stack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
