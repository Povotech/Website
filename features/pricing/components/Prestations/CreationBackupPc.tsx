import { Icon, ListItem, UnorderedList } from "@chakra-ui/react";
import { FC } from "react";
import { FeaturePrice } from "./FeaturePrice";
import { MdBackup } from "react-icons/md";

export const CreationBackupPc: FC = () => (
  <FeaturePrice
    icon={<Icon as={MdBackup} w={10} h={10} />}
    price={"35€ / PC"}
    title={"Création de Backup Système"}
  >
    <UnorderedList fontSize={"small"}>
      <ListItem>
        Création d&apos;une sauvegarde de votre système que vous pourrez vous même
        restaurer.
      </ListItem>
    </UnorderedList>
  </FeaturePrice>
);
