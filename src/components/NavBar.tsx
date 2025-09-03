import { Flex, HStack, Image, Text, Box, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import Search from "./Search";

interface Props {
  onSearch: (text: string) => void;
}


const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex
      px={4}
      py={3}
      align="center"
      gap={4}
      wrap="wrap" // ensures responsiveness (items wrap on small screens)
    >
      {/* Logo + Title */}
      <HStack gap={2} minW="fit-content">
        <Image src={logo} boxSize="40px" alt="Logo" />
        <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
          Gaming Hub
        </Text>
      </HStack>
      <Spacer />
      {/* Search bar expands */}
      <Box flex="1" minW={{ base: "100%", md: "1040px" }} maxW="600px">
        <Search onSearch={onSearch} /> {/* pass down callback */}
      </Box>

      {/* Mode Toggle */}
      <ColorModeButton />
    </Flex>
  );
};

export default NavBar;
