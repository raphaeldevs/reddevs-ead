import { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "~/contexts/AuthContext";

export default function SignIn(): JSX.Element {
  const router = useRouter();

  const { signIn, user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/courses");
    }
  }, [user, router]);

  async function handleSignIn(): Promise<void> {
    await signIn();

    router.push("/courses");
  }

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
            onClick={handleSignIn}
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
