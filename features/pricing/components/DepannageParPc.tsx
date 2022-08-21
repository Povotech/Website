import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface DetailHoraireProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const DetailHoraire = ({ title, options, typePlan }: DetailHoraireProps) => {
  return (
    <Flex
      p={3}
      py={3}
      direction={{
        base: "column",
        md: "row",
      }}
    >
      <Heading size={"md"} flexBasis="100%">
        {title}
      </Heading>
      <List
        spacing={3}
        textAlign={{
          base: "center",
          md: "start",
        }}
        flexBasis="100%"
      >
        {options.map(({ id, desc }) => (
          <ListItem key={id}>
            <ListIcon as={FaCheckCircle} color="brand.700" />
            {desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"small"} flexBasis="100%">
        {typePlan}
      </Heading>
    </Flex>
  );
};
const DepannageParPc = () => {
  return (
    <Box width={"100%"}>
      <Stack spacing={4} direction={"column"}>
        <Stack p={5}>
          <Stack textAlign={"center"} alignItems={"center"}>
            <Heading size={"lg"}>Dépannage par PC</Heading>
            <Text color={"gray.600"} maxW={"3xl"}>
              Un diagnostic sans nécessité de démontage est gratuit. Toutefois,
              le démontage de l&apos;ordinateur sera facturé 15€. Cette somme
              sera déduite de la facture finale en cas de réparation.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <DetailHoraire
          title={"Standard"}
          typePlan="25€/Heure"
          options={[
            { id: 1, desc: "( 10h à 21h ) du Mardi au vendredi" },
            { id: 2, desc: "( 14h à 21h ) le Samedi" },
          ]}
        />
        <Divider />
        <DetailHoraire
          title={"Jours spéciaux"}
          typePlan="45€/Heure"
          options={[
            { id: 1, desc: "Dimanche/Samedi ( 10h - 14h )" },
            { id: 2, desc: "Jours fériés" },
          ]}
        />
        <Divider />
        <DetailHoraire
          title={"Nuit"}
          typePlan="55€/Heure"
          options={[{ id: 1, desc: "Tous les jours de 21h à 10h" }]}
        />
      </Stack>
    </Box>
  );
};

export default DepannageParPc;
