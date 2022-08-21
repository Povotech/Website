import { FC, ReactElement } from "react";
import { Text, Stack, Flex } from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

export const Feature: FC<FeatureProps> = ({ title, text, icon }) => {
  return (
    <Stack alignItems={"center"}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"black"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text fontSize={"medium"}  color={"gray.600"}>{text}</Text>
    </Stack>
  );
};
