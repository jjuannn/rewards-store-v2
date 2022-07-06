import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import Header from "components/Header";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const AppLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Box as="section" display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Flex direction="column" as="main" flex="1">
        {children}
      </Flex>
      <footer>footer</footer>
    </Box>
  );
};

export { AppLayout };
