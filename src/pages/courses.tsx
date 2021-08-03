import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Course } from "../components/Cards/Course";
import { Header } from "../components/Header";

const courses = [
  {
    id: "09683305-81a7-4f98-ab69-d1ad26afec6a",
    image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    name: "Conceitos da programação",
    slug: "conceitos-da-programacao",
  },
  {
    id: "9606ba32-b149-4f41-8537-1945cf4d17fe",
    image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    name: "Aprendendo Java",
    slug: "aprendendo-java",
  },
  {
    id: "a630d88a-7653-4e16-94cf-1bb787a8e611",
    image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    name: "Desenvolvendo seu primeiro aplicativo",
    slug: "desenvolvendo-seu-primeiro-aplicativo",
  },
  {
    id: "a630d88a-88-4e16-4e16-1bb787a8e6176531",
    image: "https://img.icons8.com/color/452/visual-studio-code-2019.png",
    name: "Aprendendo JavaScript",
    slug: "aprendendo-javascript",
  },
];

export default function Modules(): JSX.Element {
  return (
    <>
      <Header />

      <Box px={20} my={16}>
        <Heading marginBottom={10}>
          Olá, Diego! <br />
          Veja nossos cursos
        </Heading>

        <SimpleGrid
          minChildWidth={300}
          spacing={8}
          width="full"
          justifyItems="space-between"
        >
          {courses?.map((course) => (
            <Course
              key={course.id}
              image={course.image}
              name={course.name}
              slug={course.slug}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
