import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/_theme";
import { UserContextProvider } from "context/Users/userProvider";
import { ProductsContextProvider } from "context/Products/productsProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <ProductsContextProvider>
          <Component {...pageProps} />
        </ProductsContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
