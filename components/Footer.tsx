import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box color={"gray.700"}>
      <Container
        as={Stack}
        maxW={"100wh"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© {year} PovoTech</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/povotech2a"}
          >
            <FaFacebook />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
