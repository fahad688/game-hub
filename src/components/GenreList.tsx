import useGenre from "@/hooks/useGenre";
import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data, loading, error } = useGenre();

  if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <List.Root gap={3} listStyleType="none" pl={0}>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              src={genre.image_background}
              alt={genre.name}
              boxSize="32px"
              borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="sm" fontWeight="400">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
