import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";

const NavBar = () => {
  return (
    <HStack px={6} py={4} align="center">
      <Image src={logo} boxSize="60px" alt="Logo" />
      <Text fontSize="2xl" fontWeight="bold">
        Gaming Hub
      </Text>
      <Spacer />

      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
