import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { FC } from "react";

export const SocialMediaButton: FC<IconButtonProps> = (props) => (
  <IconButton
    variant="ghost"
    size="lg"
    fontSize="3xl"
    _hover={{
      bg: "brand.700",
      color: "white",
    }}
    isRound
    {...props}
  />
);
