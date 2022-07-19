import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/_theme";
import { UserContextProvider } from "context/Users/userProvider";
import { ProductsContextProvider } from "context/Products/productsProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Head>
      <title>Tech Zone</title>
      <ChakraProvider theme={theme}>
        <UserContextProvider>
          <ProductsContextProvider>
            <Component {...pageProps} />
          </ProductsContextProvider>
        </UserContextProvider>
      </ChakraProvider>
    </Head>
  );
}

export default MyApp;
