import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  isActive: boolean;
}

export function Button({
  children,
  isActive,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <ChakraButton
      minHeight={75}
      whiteSpace="normal"
      px={4}
      backgroundColor={isActive ? "secondary" : "dark.300"}
      borderRadius={0}
      justifyContent="left"
      _hover={{
        backgroundColor: isActive ? "secondary" : "dark.500",
        cursor: isActive ? "default" : "pointer",
      }}
      _active={{
        backgroundColor: "dark.400",
        pointerEvents: isActive ? "none" : "auto",
      }}
      fontSize="1.25rem"
      fontWeight="semibold"
      color="gray.medium"
      textAlign="left"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}
