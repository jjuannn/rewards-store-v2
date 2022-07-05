import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/Layout";
import { theme } from "styles/_theme";
import { UserContextProvider } from "context/Users/userProvider";
import { ProductsContextProvider } from "context/Products/productsProvider";
import "service/products";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <ProductsContextProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ProductsContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
