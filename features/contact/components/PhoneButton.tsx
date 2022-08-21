import { Tooltip, useClipboard } from "@chakra-ui/react";
import { FC } from "react";
import { SocialMediaButton } from "./SocialMediaButton";
import { MdPhone } from "react-icons/md";

const povoTechNumber = "06.84.17.55.99";

export const PhoneButton: FC = () => {
  const { hasCopied, onCopy } = useClipboard(povoTechNumber);
  return (
    <Tooltip
      label={hasCopied ? "Numéro copié !" : povoTechNumber}
      closeOnClick={false}
      hasArrow
    >
      <span>
        <SocialMediaButton
          aria-label="phone"
          icon={<MdPhone />}
          onClick={onCopy}
        />
      </span>
    </Tooltip>
  );
};
