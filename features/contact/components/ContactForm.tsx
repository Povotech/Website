import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { BsPerson, BsAt, BsCalculator } from "react-icons/bs";

const FirstNameInput: FC = () => (
  <FormControl isRequired>
    <FormLabel>Prénom</FormLabel>
    <InputGroup>
      <InputLeftElement>
        <BsPerson />
      </InputLeftElement>
      <Input type="text" name="firstName" placeholder="Votre prénom" />
    </InputGroup>
  </FormControl>
);

const LastNameInput: FC = () => (
  <FormControl isRequired>
    <FormLabel>Nom</FormLabel>
    <InputGroup>
      <InputLeftElement>
        <BsPerson />
      </InputLeftElement>
      <Input type="text" name="lastName" placeholder="Votre nom" />
    </InputGroup>
  </FormControl>
);

const EmailInput: FC = () => (
  <FormControl isRequired>
    <FormLabel>Email</FormLabel>
    <InputGroup>
      <InputLeftElement>
        <BsAt />
      </InputLeftElement>
      <Input type="mail" name="email" placeholder="Votre email" />
    </InputGroup>
  </FormControl>
);

const FactureInput: FC = () => {
  return (
    <FormControl>
      <FormLabel>Numéro de facture</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <BsCalculator />
        </InputLeftElement>
        <Input
          type="text"
          name="facture"
          placeholder="Votre numéro de facture"
        />
      </InputGroup>
    </FormControl>
  );
};

export const ContactForm: FC = () => {
  return (
    <Box
      borderRadius="lg"
      p={8}
      color={"gray.700"}
      shadow="base"
      border={"1px"}
      borderColor={"brand.700"}
    >
      <VStack spacing={5} w={"xl"}>
        <FirstNameInput />
        <LastNameInput />
        <EmailInput />
        <FactureInput />
        <Button
          colorScheme="blue"
          bg="blue.400"
          color="white"
          _hover={{
            bg: "blue.500",
          }}
        >
          Envoyer
        </Button>
      </VStack>
    </Box>
  );
};
