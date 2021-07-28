import { Flex, Image } from "@chakra-ui/react";

export function Header(): JSX.Element {
  return (
    <Flex as="header" maxWidth={1480} w="100%" h="20" mx="auto" mt="4" px="6">
      <Image alt="Logo da RED" src="/logo.svg" width={200} />
    </Flex>
  );
}
