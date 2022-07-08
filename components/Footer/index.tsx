import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import ghLogoDefault from "assets/icons/github-default.svg";

const Footer: FC = () => {
  return (
    <Flex padding="50px" alignItems={"center"} justifyContent="center">
      <Image alt="" height={"32px"} src={ghLogoDefault.src} marginRight="5px" />
      <Text
        as="a"
        href="http://github.com/rewards-store-v2"
        rel="norefferer"
        target="_blank"
        size="mobileL1"
        variant="default"
        color="neutrals.500"
      >
        View on GitHub
      </Text>
    </Flex>
  );
};

export { Footer };
