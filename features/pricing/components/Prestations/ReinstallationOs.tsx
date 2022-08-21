import { Icon, UnorderedList, ListItem } from "@chakra-ui/react";
import { FC } from "react";
import { FeaturePrice } from "./FeaturePrice";
import { AiOutlineReload } from "react-icons/ai";

export const ReinstallationOs: FC = () => (
  <FeaturePrice
    icon={<Icon as={AiOutlineReload} w={10} h={10} />}
    title={"Réinstallation complète de l'OS"}
    price={"35€ / Heure / PC"}
  >
    <UnorderedList fontSize={"small"}>
      <ListItem>Formatage ( suppression des données du disque dur )</ListItem>
      <ListItem>
        Installation de Windows et activation avec mises à jour ( Licence non
        comprise )
      </ListItem>
      <ListItem>Installation des Logiciels de base</ListItem>
      <ListItem>
        Sauvegarde & restauration des données utilisateur sur le nouveau système
      </ListItem>
      <ListItem>Optimisation du système</ListItem>
    </UnorderedList>
  </FeaturePrice>
);
