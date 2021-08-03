import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";

const isAuthenticated = false;

export default function SignIn(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home | RED Devs EAD</title>
      </Head>

      <Container
        maxWidth={1280}
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex direction="column" flex="1" gridGap={12}>
          <Image alt="Logo da RED" src="/logo.svg" width={400} />
          <Heading as="h1" fontSize="3.5rem">
            BEM-VINDO À <br /> NOSSA PLATAFORMA
          </Heading>
          <Button
            leftIcon={<Icon as={FcGoogle} boxSize={9} />}
            maxWidth={320}
            justifyContent="space-between"
            borderRadius="full"
            padding={8}
            px={10}
            color="dark.500"
            fontWeight="bold"
            fontSize="1.3rem"
            onClick={() => {
              router.push("/courses");
            }}
          >
            Entrar com Google
          </Button>
        </Flex>
        <Flex direction="column" flex="1">
          <Image
            alt="Logo da RED"
            src="/images/hero-signin.svg"
            maxHeight={400}
          />
        </Flex>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  if (isAuthenticated) {
    return {
      redirect: {
        destination: "/courses",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
