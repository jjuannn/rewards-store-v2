import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import ColoredText from "components/ColoredText";
import { FC } from "react";

const PresentationTitle: FC = () => {
  return (
    <Flex
      justifyContent={"center"}
      direction="column"
      alignItems={"center"}
      maxWidth={{ base: "300px", xl: "600px" }}
      margin={{ base: "auto", xl: "0" }}
    >
      <Text
        textTransform={"uppercase"}
        size={{ base: "mobileL1", xl: "desktopL1" }}
        variant={"allCapsL1"}
        color="neutrals.600"
      >
        EXPLORE THE
      </Text>
      <ColoredText
        TextElement={Heading}
        text="TECH"
        size={{ base: "mobileL1", xl: "desktopL1" }}
      />
      <Heading
        marginBottom={"20px"}
        size={{ base: "mobileL1", xl: "desktopL1" }}
        textTransform={"uppercase"}
      >
        ZONE
      </Heading>
      <Text
        size={{ base: "mobileL1", xl: "desktopL1" }}
        lineHeight={"24px"}
        fontWeight="600"
        textAlign={"center"}
        color="neutrals.600"
        marginBottom="40px"
      >
        Here you’ll be able to redeem all of your hard-earned points and
        exchange them for cool tech.
      </Text>
      <Button
        height={"64px"}
        width="305px"
        background="brand.default"
        _hover={{ background: "brand.hover" }}
        colorScheme={"brand.default"}
        color="white"
        padding="0px"
        borderRadius={"28px"}
        gap="10px"
      >
        <Text
          size={{ base: "mobileL1", xl: "desktopL1" }}
          variant={"allCapsL1"}
          as="a"
          href="#products-section"
          display="block"
          padding="1em"
          width={"100%"}
        >
          VIEW ALL PRODUCTS
        </Text>
      </Button>
    </Flex>
  );
};

export { PresentationTitle };
