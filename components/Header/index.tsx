import { FC, useEffect } from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import brandLogo from "assets/icons/aerolab-logo-2.svg";
import dropdownLogo from "assets/icons/aeropay-1.svg";
import { CollapsibleWindow } from "./Collapsible";
import ColoredText from "components/ColoredText";
import { useUser } from "hooks/useUser";

const Header: FC = () => {
  const { userData, getUserData } = useUser();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Flex
      as="header"
      height={"130px"}
      margin="auto"
      width={"100%"}
      paddingX={{ xl: "5vw" }}
      padding={"40px 20px"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Image src={brandLogo} width={"38.77px"} height={"36px"} alt="logo" />
      <Flex
        borderRadius="16px"
        border="2px solid"
        borderColor="neutrals.300"
        width={"143px"}
        height={"40px"}
        padding={"8px 16px"}
        alignItems="center"
      >
        <Image src={dropdownLogo} width={"25px"} height={"25px"} alt="logo" />
        {userData.loading && <Spinner colorScheme={"red"} marginX="auto" />}
        {userData.data && (
          <ColoredText
            size={{ base: "desktopL1" }}
            variant="default"
            text={String(userData.data.points)}
            TextElement={Text}
            styles={{ marginLeft: "8px", display: "flex" }}
          />
        )}
        <CollapsibleWindow />
      </Flex>
    </Flex>
  );
};
export default Header;
