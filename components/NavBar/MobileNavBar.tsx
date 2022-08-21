import {
  Box,
  Text,
  useDisclosure,
  Flex,
  IconButton,
  Collapse,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavItem, NAV_ITEMS } from "../../config/navigation";
import { Logo } from "./Logo";

export const MobileNavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
        justifyContent="space-between"
      >
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
        <Logo />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => (
  <Flex
    py={2}
    as={Link}
    href={href ?? "#"}
    justify={"space-between"}
    align={"center"}
    _hover={{
      textDecoration: "none",
    }}
  >
    <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
      {label}
    </Text>
  </Flex>
);
