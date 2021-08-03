import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Header } from "../../components/Header";
import { LessonsList } from "../../components/LessonsList";

const lessons = [
  {
    id: "module-1",
    title: "Iniciando projeto com NextJS",
    url: "https://youtu.be/GyulV4RZbZE",
    description: "Iniciando projeto com NextJS",
  },
  {
    id: "module-2",
    title: "Iniciando projeto com NextJS 2",
    url: "https://youtu.be/HWOblzU6-hM",
    description: "Iniciando projeto com NextJS 2",
  },
  {
    id: "module-3",
    title: "Iniciando projeto com NextJS 3",
    url: "https://www.youtu.be/ZEKSY7XempM",
    description: "Iniciando projeto com NextJS 3",
  },
  {
    id: "module-4",
    title: "Iniciando projeto com NextJS 4",
    url: "https://youtu.be/6eEOegzrwJg",
    description: "Iniciando projeto com NextJS 4",
  },
  {
    id: "module-5",
    title: "Iniciando projeto com NextJS 5",
    url: "https://youtu.be/Df_gGM1h9No",
    description: "Iniciando projeto com NextJS 5",
  },
  {
    id: "module-6",
    title: "Iniciando projeto com NextJS 6",
    url: "https://youtu.be/0dLX40UMUKo",
    description: "Iniciando projeto com NextJS 6",
  },
  {
    id: "module-6",
    title: "Iniciando projeto com NextJS 7",
    url: "https://youtu.be/Pky_34RBSsk",
    description: "Iniciando projeto com NextJS 7",
  },
];

export default function WatchLesson(): JSX.Element {
  const [currentLesson, setCurrentLesson] = useState(lessons?.[0]);

  return (
    <>
      <Header />
      <Flex
        width="full"
        justifyContent="space-between"
        py={16}
        px={20}
        gridGap={10}
      >
        <Flex direction="column" flex={1}>
          <ReactPlayer
            url={currentLesson?.url}
            width={800}
            height={450}
            controls
            playing
          />
          <Heading mt={8} mb={4}>
            {currentLesson?.title}
          </Heading>
          <Text size="md" paragraph>
            {currentLesson?.description}
          </Text>
        </Flex>

        <LessonsList
          lessons={lessons}
          currentLessonId={currentLesson?.id}
          setCurrentLesson={(lesson) => setCurrentLesson(lesson)}
        />
      </Flex>
    </>
  );
}
