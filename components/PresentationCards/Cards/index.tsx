import { FC } from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import ColoredText from "components/ColoredText";

interface IPresentationCardProps {
  index: number;
  img: string;
  title: string;
  text: string;
  icon: string;
}

const PresentationCard: FC<IPresentationCardProps> = ({
  index,
  img,
  title,
  text,
  icon,
}) => {
  return (
    <Flex
      direction={"column"}
      padding={"12px"}
      width="100%"
      height={"auto"}
      borderWidth="1px"
      borderRadius="32px"
      overflow="hidden"
      zIndex={"5"}
      bg="rgba(218, 228, 242, 0.5)"
    >
      <Box
        border="1px solid"
        borderRadius={"32px"}
        borderColor={"neutrals.300"}
      >
        <Box
          width={"100%"}
          height="314px"
          backgroundImage="linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)"
          backgroundSize="100% 100%"
          backgroundPosition={"center center"}
          backgroundRepeat="no-repeat"
          borderTopRadius={"32px"}
        >
          <Image
            margin="auto"
            height={"100%"}
            width="100%"
            maxWidth={"300px"}
            src={img}
            alt=""
          />
        </Box>
        <Flex
          padding={"24px"}
          direction={"column"}
          justifyContent="center"
          bg="white"
          borderBottomRadius="32px"
        >
          <Flex alignItems="center">
            <Flex
              marginRight={"16px"}
              alignItems="center"
              justifyContent="center"
              height={"40px"}
              bg="brand.light"
              borderRadius={"lg"}
              width="40px"
            >
              <Image height={"26px"} width="26px" src={icon} alt="" />{" "}
            </Flex>
            <ColoredText
              TextElement={Heading}
              text={`${index} - ${title}`}
              size={{ base: "mobileL3" }}
              background="specials.illustrationBg"
            />
          </Flex>
          <Text
            marginTop={"20px"}
            size="mobileL1"
            lineHeight={"24px"}
            variant="default"
            color="neutrals.600"
          >
            {text}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export { PresentationCard };
