import { Container, Stack, StackProps } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { NavBar } from "./NavBar";

export const Layout: FC<PropsWithChildren<StackProps>> = ({
  children,
  ...props
}) => (
  <Container maxW={"5xl"}>
    <NavBar />
    <Stack
      textAlign={"center"}
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 10, md: 20 }}
      {...props}
    >
      {children}
    </Stack>
  </Container>
);