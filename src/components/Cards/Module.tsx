import { Heading, Image, Link as ChakraLink, useTheme } from "@chakra-ui/react";
import Link from "next/link";

interface ModuleProps {
  name: string;
  image: string;
  slug: string;
}

export function Module({ name, image, slug }: ModuleProps): JSX.Element {
  const theme = useTheme();
  return (
    <Link href={`/module/${slug}`} passHref>
      <ChakraLink
        display="flex"
        flex="1"
        minHeight={300}
        padding={8}
        py={10}
        flexDirection="column"
        backgroundColor="dark.400"
        justifyContent="space-evenly"
        alignItems="center"
        borderRadius="1rem"
        borderWidth="3px"
        borderColor="transparent"
        transition="0.5s"
        transform="translateY(0)"
        _hover={{
          transform: "translateY(-1rem)",
          borderColor: theme.colors.blue,
        }}
      >
        <Image alt={name} src={image} width="70%" maxWidth={250} />
        <Heading width="full" fontSize="1.5rem">
          {name}
        </Heading>
      </ChakraLink>
    </Link>
  );
}
