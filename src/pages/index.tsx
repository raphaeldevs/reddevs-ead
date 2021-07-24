import { useEffect, useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import {
  Flex,
  SimpleGrid,
  Heading,
  Image,
  Icon,
  Link as ChakraLink,
  Text
} from '@chakra-ui/react'

import { SiGooglescholar } from 'react-icons/si'
import { api } from '../services/api'

export type Lesson = {
  id: string
  title: string
  description?: string
  url: string
  created_at: Date
}

export default function Lesson() {
  const [lessons, setLessons] = useState<Lesson[]>([])

  useEffect(() => {
    ;(async () => {
      const { data: lessons } = await api.get<Lesson[]>('/lessons')

      setLessons(lessons)
    })()
  }, [])

  const getLesssonId = (url: string) => {
    try {
      const [id] = url.match(/([A-Z])\w+/g)

      return id
    } catch (error) {
      return 'FJeS2yzSeyE'
    }
  }

  return (
    <>
      <Head>
        <title>RED Devs | EAD</title>
        <meta name="description" content="A proof of concept of RED Devs EAD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex align="start" padding="4">
        <Image alt="Logo da RED" src="/logo.svg" width={200} />
      </Flex>

      <Flex padding="4" direction="column">
        <Heading textTransform="uppercase" color="brand.light" display="flex">
          <Icon as={SiGooglescholar} paddingRight="2" size="lg" /> Aulas
        </Heading>

        <SimpleGrid spacing="4" columns={2}>
          {lessons.map(lesson => (
            <Flex key={lesson.id}>
              <Image
                alt="thumbnail da aula"
                src={`https://img.youtube.com/vi/${getLesssonId(
                  lesson.url
                )}/maxresdefault.jpg`}
                width={200}
                marginRight="4"
              />
              <Flex direction="column">
                <Heading
                  textTransform="uppercase"
                  color="brand.light"
                  fontSize="lg"
                >
                  {lesson.title}
                </Heading>
                <Link href={`/lessons/${lesson.id}`} passHref>
                  <ChakraLink marginTop="8">
                    <Text fontWeight="bold">Assistir agora</Text>
                  </ChakraLink>
                </Link>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}
