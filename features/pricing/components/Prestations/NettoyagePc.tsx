import { UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { MdCleaningServices } from "react-icons/md";
import { FeaturePrice } from "./FeaturePrice";

export const NettoyagePc: FC = () => (
  <FeaturePrice
    icon={<Icon as={MdCleaningServices} w={10} h={10} />}
    price={"30€ / Heure / PC"}
    title={"Nettoyage PC Software ou Hardware"}
  >
    <UnorderedList fontSize={"small"}>
      <ListItem>Nettoyage Logiciel après contamination par un virus</ListItem>
      <ListItem>
        Nettoyage Physique poussière changement de pâte thermique ,ect..
      </ListItem>
    </UnorderedList>
  </FeaturePrice>
);
