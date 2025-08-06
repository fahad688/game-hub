import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ transform: "scale(1.02)", transition: "0.3s" }}
      bg="white"
      _dark={{ bg: "gray.800" }}
    >
      {children}
    </Box>
  );
};
