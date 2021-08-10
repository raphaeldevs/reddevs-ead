import { useRouter } from "next/router";

import { Avatar, Text, Icon, Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { useAuth } from "~/contexts/AuthContext";

export default function Profile(): JSX.Element {
  const router = useRouter();
  const { user, signIn, signOut } = useAuth();

  async function handleLoginButton(): Promise<void> {
    if (user) {
      await signOut();

      router.push("/");

      return;
    }

    await signIn();
  }

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
      onClick={handleLoginButton}
    >
      {user ? (
        <>
          <Avatar size="sm" name={user.name} src={user.avatar} />
          <Text fontWeight="medium">{user.name}</Text>
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
