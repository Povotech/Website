import { SocialMediaButton } from "./SocialMediaButton";
import { MdMail } from "react-icons/md";
import { FC } from "react";
import { Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";

const povotechMail = "contact.povotech@gmail.com";

export const MailButton: FC = () => {
  const { push } = useRouter();
  return (
    <Tooltip label={povotechMail} hasArrow>
      <span>
        <SocialMediaButton
          aria-label="mail"
          icon={<MdMail />}
          onClick={() => push(`mailto:${povotechMail}`)}
        />
      </span>
    </Tooltip>
  );
};
