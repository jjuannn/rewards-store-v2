import { FC } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import aeropayLogo from "assets/icons/aeropay-2.svg";

const AeroCard: FC = () => {
  return (
    <Flex
      padding="16px"
      direction="column"
      height={"150px"}
      justifyContent="space-between"
      background={"neutrals.900"}
      borderRadius="8px"
      color="white"
      opacity="1"
      backgroundImage="repeating-radial-gradient( circle at 0 0, transparent 0, #252F3D 40px ), repeating-linear-gradient( #24242455, #242424 )"
    >
      <Box width="100%" display="flex">
        <Text size="mobileL1" variant="default">
          Aerocard
        </Text>
        <Image marginLeft={"auto"} src={aeropayLogo.src} width="24px" alt="" />
      </Box>
      <Box width="100%" display="flex">
        <Text size="mobileL1" variant="default">
          John Kite
        </Text>
        <Text marginLeft="auto" size="mobileL1" variant="default">
          07/23
        </Text>
      </Box>
    </Flex>
  );
};

export { AeroCard };
