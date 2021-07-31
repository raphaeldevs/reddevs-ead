import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#9E1111",
    secondary: "#C60F0F",
    blue: "#187EF6",
    dark: {
      500: "#0F0F0F",
      400: "#1F1F1F",
      300: "#343434",
    },
    light: {
      500: "#DCDCDC",
      400: "#F2F2F2",
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  styles: {
    global: {
      body: {
        bg: "dark.500",
        color: "light.400",
      },
    },
  },
});
