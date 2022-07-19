import { FC, useEffect } from "react";
import { Flex, Link, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import brandLogo from "assets/icons/aerolab-logo-2.svg";
import collapsibleLogo from "assets/icons/aeropay-1.svg";
import { CollapsibleWindow } from "./Collapsible";
import ColoredText from "components/ColoredText";
import { useUser } from "hooks/useUser";

const Header: FC = () => {
  const { userData, getUserData } = useUser();

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      data-cy="header-component"
    >
      <Link href="/" data-cy="header-brand-logo">
        <Image src={brandLogo} width={"38.77px"} height={"36px"} alt="logo" />
      </Link>
      <Flex
        borderRadius="16px"
        border="2px solid"
        borderColor="neutrals.300"
        width={"143px"}
        height={"40px"}
        padding={"8px 16px"}
        alignItems="center"
        data-cy="points-container"
      >
        <Image
          data-cy="points-brand-logo"
          src={collapsibleLogo}
          width={"25px"}
          height={"25px"}
          alt="logo"
        />
        {userData.loading && <Spinner colorScheme={"red"} marginX="auto" />}
        {userData.data && (
          <ColoredText
            dataCy="user-points"
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
