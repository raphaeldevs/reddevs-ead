import { Avatar, Text, Icon, Button } from "@chakra-ui/react";

import { FiX } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

interface ProfileProps {
  isAuthenticated: boolean;
}

export default function Profile({
  isAuthenticated = false,
}: ProfileProps): JSX.Element {
  return (
    <Button
      maxHeight={12}
      height="full"
      padding={4}
      justifyContent="space-between"
      alignItems="center"
      borderRadius="full"
      backgroundColor="dark.300"
      gridGap="4"
      _hover={{
        backgroundColor: "dark.500",
      }}
      _active={{
        backgroundColor: "dark.300",
      }}
      onClick={
        isAuthenticated
          ? () => console.log("Sair [] =>")
          : () => console.log("Login [] <=")
      }
    >
      {isAuthenticated ? (
        <>
          <Avatar size="sm" name="Diego Marcelo" src="/images/diego.jpeg" />
          <Text fontWeight="medium">Diego Marcelo</Text>
          <Icon as={FiX} />
        </>
      ) : (
        <>
          <FaGoogle size="1.5rem" />
          <Text fontWeight="medium">Fazer login</Text>
        </>
      )}
    </Button>
  );
}
