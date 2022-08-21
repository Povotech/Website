import { Stack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { FC } from "react";
import { CreationBackupPc } from "./CreationBackupPc";
import { EntretienPs4 } from "./EntretienPs4";
import { InstallationPeripherique } from "./InstallationPeripherique";
import { MontagePc } from "./MontagePc";
import { NettoyagePc } from "./NettoyagePc";
import { ReinstallationOs } from "./ReinstallationOs";

export const Prestations: FC = () => (
  <Stack textAlign={"center"} alignItems={"center"} spacing={5}>
    <Heading size={"xl"}>Prestations</Heading>
    <Text color={"gray.600"} maxW={"3xl"}>
      Un diagnostic sans nécessité de démontage est gratuit.
      <br />
      Toutefois, le démontage de l&apos;ordinateur sera facturé 15€. Cette somme
      sera déduite de la facture finale en cas de réparation.
    </Text>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <ReinstallationOs />
      <CreationBackupPc />
      <NettoyagePc />
      <EntretienPs4 />
      <InstallationPeripherique />
      <MontagePc />
    </SimpleGrid>
  </Stack>
);
