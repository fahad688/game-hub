import useGenre, { Genre } from "@/hooks/useGenre";
import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void,
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre,onSelectGenre }: Props) => {
  const { data, loading, error } = useGenre();

  if (loading) return <Spinner />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <List.Root gap={3} listStyleType="none" pl={0}>
      {data.map((genre) => (
        <ListItem
          key={genre.id}
          cursor="pointer"
          onClick={() => onSelectGenre(genre)}
        >
          <HStack>
            <Image
              src={genre.image_background}
              alt={genre.name}
              boxSize="32px"
              borderRadius="md"
              objectFit="cover"
            />
            <Text fontSize="sm"  fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
