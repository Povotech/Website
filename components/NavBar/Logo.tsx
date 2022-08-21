import { FC } from "react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export const Logo: FC = () => (
  <Link href={"/"}>
    <Text
      fontFamily={"heading"}
      color={"gray.800"}
      fontSize="3xl"
      cursor="pointer"
    >
      Povo
      <Text as={"span"} color={"brand.700"}>
        Tech
      </Text>
    </Text>
  </Link>
);
