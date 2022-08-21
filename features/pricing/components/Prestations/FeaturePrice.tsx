import { FC, PropsWithChildren, ReactElement } from "react";
import { Text, Stack, Flex } from "@chakra-ui/react";

interface FeaturePriceProps {
  title: string;
  price?: string;
  icon: ReactElement;
}

export const FeaturePrice: FC<PropsWithChildren<FeaturePriceProps>> = ({
  title,
  price,
  icon,
  children,
}) => {
  return (
    <Stack textAlign="left">
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
      {price && (
        <Text fontWeight={"extrabold"} color={"brand.700"}>
          {price}
        </Text>
      )}
      {children}
    </Stack>
  );
};
