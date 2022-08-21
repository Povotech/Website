import { Link, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { SocialMediaButton } from "./SocialMediaButton";
import { MdMap } from "react-icons/md";
import { useRouter } from "next/router";

export const MapButton: FC = () => {
  const { push } = useRouter();
  return (
    <Tooltip label={"Où nous trouver ?"} hasArrow>
      <span>
        <SocialMediaButton
          aria-label="map"
          icon={<MdMap />}
          onClick={() => push("/contact#map", undefined, { scroll: false })}
        />
      </span>
    </Tooltip>
  );
};
