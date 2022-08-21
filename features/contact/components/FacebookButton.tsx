import Link from "next/link";
import { SocialMediaButton } from "./SocialMediaButton";
import { BsFacebook } from "react-icons/bs";
import { FC } from "react";

export const FacebookButton: FC = () => (
  <Link href="https://www.facebook.com/povotech2a">
    <SocialMediaButton
      aria-label="facebook"
      icon={<BsFacebook size="28px" />}
    />
  </Link>
);
