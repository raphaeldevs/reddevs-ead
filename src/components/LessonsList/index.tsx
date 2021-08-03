import { Box, Flex, Text } from "@chakra-ui/react";
import { Button } from "./Button";

interface LessonsListProps {
  lessons: any;
  currentLessonId: string;
  setCurrentLesson: (lesson) => void;
}

export function LessonsList({
  lessons,
  currentLessonId,
  setCurrentLesson,
}: LessonsListProps): JSX.Element {
  return (
    <Box
      borderRadius="1rem"
      width="full"
      maxWidth={400}
      maxHeight={450}
      overflow="hidden"
    >
      <Flex
        flex={1}
        direction="column"
        width="full"
        height="full"
        overflowY="auto"
        backgroundColor="dark.400"
        borderRadius="1rem"
        sx={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "primary",
            borderRadius: "16px",
          },
        }}
      >
        {lessons.map((lesson, index) => {
          const isActive = currentLessonId === lesson.id;
          return (
            <Button
              key={lesson.title}
              onClick={() => setCurrentLesson(lesson)}
              title={
                isActive
                  ? "Você está assistindo essa aula"
                  : `Assitir ${lesson.title}`
              }
              isActive={isActive}
            >
              {`${index + 1}. ${lesson.title}`}
            </Button>
          );
        })}
      </Flex>
    </Box>
  );
}
