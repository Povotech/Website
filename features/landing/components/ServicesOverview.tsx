import { SimpleGrid, Icon, Box } from "@chakra-ui/react";
import { FC } from "react";
import { Feature } from "../../../components/Feature";
import { AiOutlineCloudServer } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineCleaningServices } from "react-icons/md";

export const ServicesOverview: FC = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={AiOutlineCloudServer} w={10} h={10} />}
          title={"Sauvegarde de vos données"}
          text={
            "Nous sauvegardons vos données sur un disque dur externe pour éviter toute perte de données et nous pouvons mettre en place un système de Backup automatisé."
          }
        />
        <Feature
          icon={<Icon as={HiOutlineDesktopComputer} w={10} h={10} />}
          title={"Installation d'un Ordinateur"}
          text={
            "Nous proposons des installations & réinstallations complètes de vos OS ainsi qu'un montage intégral de votre ordinateur que vous commanderez en pièce détachées."
          }
        />
        <Feature
          icon={<Icon as={MdOutlineCleaningServices} w={10} h={10} />}
          title={"Entretien de votre matériel"}
          text={
            "Nous entretenons votre ordinateur pour prolonger son espérance de vie de la poussière au changement de la pâte thermique tout y passe !"
          }
        />
      </SimpleGrid>
    </Box>
  );
};
