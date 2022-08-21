import {
  Flex,
  Box,
  Link,
  Popover,
  Text,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { NAV_ITEMS } from "../../config/navigation";
import { Logo } from "./Logo";

export const DesktopNavBar = () => {
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
      >
        <Flex
          flex={{ base: 1 }}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Logo />
          <DesktopNav />
        </Flex>
      </Flex>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = "gray.600";
  const linkHoverColor = "gray.800";
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
