import { Box, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { ContactForm } from "./ContactForm";
import { FacebookButton } from "./FacebookButton";
import { MailButton } from "./MailButton";
import { MapButton } from "./MapButton";
import { PhoneButton } from "./PhoneButton";

export const ContactPanel: FC = () => {
  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        mx={{ base: 5, md: 16, lg: 10 }}
        px={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Contactez-nous
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <PhoneButton />
                <MailButton />
                <FacebookButton />
                <MapButton />
              </Stack>
              <ContactForm />
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};
