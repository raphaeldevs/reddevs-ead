import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    white: "#dcdcdc",
    dark: "#9e1111",
    light: "#c60f0f",
    black: "#0f0f0f",
  },
};

const fonts = {
  heading: "Roboto",
  body: "Roboto",
};

export const theme = extendTheme({ colors, fonts });
