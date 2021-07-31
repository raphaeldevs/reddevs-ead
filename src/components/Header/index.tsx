import { Flex, Image } from "@chakra-ui/react";

import Profile from "./Profile";

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      maxWidth={1440}
      maxHeight={118}
      width="full"
      px={20}
      backgroundColor="dark.400"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image alt="Logo da RED" src="/logo.svg" width={200} />
      <Profile isAuthenticated />
    </Flex>
  );
}
