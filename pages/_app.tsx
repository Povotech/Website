import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
      <title>PovoTech</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="porto vecchio, povo, tech, ordinateur, depannage, informatique" />
        <meta name="author" content="PovoTech" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
