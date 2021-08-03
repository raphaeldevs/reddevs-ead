import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import { Module } from "components/Cards/Module";
import { Header } from "components/Header";

const data = {
  course: "Conceitos da Programação".toLowerCase(),
  modules: [
    {
      name: "Course Overview",
      slug: "course-overview",
      image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    },
    {
      name: "Course Overvieww",
      slug: "course-overvieww",
      image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    },
    {
      name: "Course Overviewww",
      slug: "course-overviewww",
      image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    },
    {
      name: "Course Overviewwww",
      slug: "course-overviewwww",
      image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    },
    {
      name: "Course Overviewwwww",
      slug: "course-overviewwwww",
      image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    },
  ],
};

export default function Modules(): JSX.Element {
  return (
    <>
      <Header />

      <Box px={20} my={16}>
        <Heading marginBottom={10}>
          Estes são os módulos do curso:{" "}
          <Text display="inline-block" color="blue">
            {data?.course}
          </Text>
        </Heading>

        <SimpleGrid
          minChildWidth={250}
          spacing={8}
          width="full"
          justifyItems="space-between"
        >
          {data?.modules.map((module) => (
            <Module
              key={module.slug}
              name={module.name}
              image={module.image}
              slug={module.slug}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
