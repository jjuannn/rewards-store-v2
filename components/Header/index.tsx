import { FC } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import brandLogo from "assets/icons/aerolab-logo-2.svg";
import dropdownLogo from "assets/icons/aeropay-1.svg";

const Header: FC = () => {
  return (
    <Flex
      as="header"
      height={"128px"}
      padding={"40px 20px"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Image src={brandLogo} width={"38.77px"} height={"36px"} alt="logo" />
      <Flex
        width={"143px"}
        height={"40px"}
        padding={"8px 16px"}
        borderRadius={"16px"}
      >
        <Image src={dropdownLogo} width={"20px"} height={"24px"} alt="logo" />
        <Text marginLeft={"8px"}>3000</Text>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Text}>
                {isOpen ? "V" : "A"}
              </MenuButton>
              <MenuList>
                <Box>lorem ipsum asdbbbbb</Box>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Flex>
  );
};
/** rightIcon={<ChevronDownIcon />} */
export default Header;
