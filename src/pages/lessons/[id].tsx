import { useEffect, useState } from "react";

import Head from "next/head";

import ReactPlayer from "react-player/lazy";

import { Flex } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { api } from "../../services/api";

export default function Lesson(): JSX.Element {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    (async () => {
      if (!id) return;

      const {
        data: { url },
      } = await api.get(`/lessons/${id}`);

      setUrl(url);
    })();
  }, [id]);
  return (
    <>
      <Head>
        <title>RED Devs | EAD</title>
        <meta name="description" content="A proof of concept of RED Devs EAD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex width="full" justifyContent="center">
        <ReactPlayer url={url} controls />
      </Flex>
    </>
  );
}
