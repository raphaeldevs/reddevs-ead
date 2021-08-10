import { Box, Flex, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { Course } from "~/components/Cards/Course";
import { Header } from "~/components/Header";
import { useAuth } from "~/contexts/AuthContext";
import { api } from "~/services/api";
import { Course as CourseType } from "~/types";

export default function Modules(): JSX.Element {
  const { user } = useAuth();

  const { data: courses, isLoading } = useQuery(
    "courses",
    async () => (await api.get("/courses")).data.Items as CourseType[]
  );

  return (
    <>
      <Header />

      <Box px={20} my={16}>
        <Heading marginBottom={10}>
          Olá, {user?.name || "visitante"}! <br />
          Veja nossos cursos
        </Heading>

        {isLoading ? (
          <Flex padding="20" align="center" justify="center">
            <Spinner size="xl" />
          </Flex>
        ) : (
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
        )}
      </Box>
    </>
  );
}
