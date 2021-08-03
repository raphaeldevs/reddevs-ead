import { Box, Button, Flex, Text } from "@chakra-ui/react";

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
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "red",
            borderRadius: "16px",
          },
        }}
      >
        {lessons.map((lesson, index) => {
          const isActive = currentLessonId === lesson.id;
          return (
            <Button
              key={lesson.title}
              minHeight={75}
              whiteSpace="normal"
              px={4}
              backgroundColor={isActive ? "secondary" : "dark.300"}
              borderRadius={0}
              justifyContent="left"
              cursor="pointer"
              _hover={{
                backgroundColor: "dark.500",
              }}
              _active={{
                backgroundColor: "dark.400",
              }}
              onClick={() => setCurrentLesson(lesson)}
            >
              <Text
                fontSize="1.25rem"
                fontWeight="semibold"
                color="gray.medium"
                align="left"
              >
                {`${index + 1}. ${lesson.title}`}
              </Text>
            </Button>
          );
        })}
      </Flex>
    </Box>
  );
}
