import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/Layout";
import { theme } from "styles/_theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
