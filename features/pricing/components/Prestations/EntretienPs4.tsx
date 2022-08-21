import { UnorderedList, ListItem, Icon } from "@chakra-ui/react"
import { FC } from "react"
import { SiPlaystation4 } from "react-icons/si"
import { FeaturePrice } from "./FeaturePrice"

export const EntretienPs4: FC = () => (
    <FeaturePrice
      icon={<Icon as={SiPlaystation4} w={10} h={10} />}
      price={"40€"}
      title={"Entretien PS4"}
    >
      <UnorderedList fontSize={"small"}>
        <ListItem>
        Forfait nettoyage poussière et changement pâte thermique
        </ListItem>
      </UnorderedList>
    </FeaturePrice>
  );
  