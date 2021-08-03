import { Heading, Image, Link as ChakraLink, useTheme } from "@chakra-ui/react";
import Link from "next/link";

interface CourseProps {
  name: string;
  image: string;
  slug: string;
}

export function Course({ name, image, slug }: CourseProps): JSX.Element {
  const theme = useTheme();
  return (
    <Link href={`/course/${slug}`} passHref>
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
        <Image alt={name} src={image} width="70%" maxWidth={300} />
        <Heading width="full" fontSize="2rem">
          {name}
        </Heading>
      </ChakraLink>
    </Link>
  );
}
