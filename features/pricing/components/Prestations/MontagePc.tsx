import { ListItem, UnorderedList, Icon } from "@chakra-ui/react";
import { FeaturePrice } from "./FeaturePrice";
import { BiWrench } from "react-icons/bi";
import { FC } from "react";

export const MontagePc: FC = () => (
  <FeaturePrice
    price="70€ / PC"
    title="Montage PC"
    icon={<Icon as={BiWrench} w={10} h={10} />}
  >
    <UnorderedList fontSize={"small"}>
      <ListItem>
        Comprends uniquement la main d’œuvre , composants non compris
      </ListItem>
    </UnorderedList>
  </FeaturePrice>
);
