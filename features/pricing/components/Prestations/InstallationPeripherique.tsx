import { ListItem, UnorderedList, Icon } from "@chakra-ui/react";
import { FeaturePrice } from "./FeaturePrice";
import { FaUsb } from "react-icons/fa";

export const InstallationPeripherique = () => (
  <FeaturePrice
    price="25€ / Heure / PC"
    title="Installation/Configuration d'un périphérique / Réseau domestique"
    icon={<Icon as={FaUsb} w={10} h={10} />}
  >
    <UnorderedList fontSize={"small"}>
      <ListItem>
        Nouveau périphérique ? Nouveau composant ? je vous fait
        l&apos;installation la mise à jour et la configuration !
      </ListItem>
    </UnorderedList>
  </FeaturePrice>
);
