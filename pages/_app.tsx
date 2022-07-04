import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "../components/Layout";
import { theme } from "styles/_theme";
import { UserContextProvider } from "context/user/userProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
