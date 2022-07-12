import { FC } from "react";
import styled from "@emotion/styled";
import { breakpoints } from "styles/breakpoints";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import ColoredText from "components/ColoredText";

interface ICardContainerProps {
  rotate: string;
}

const CardContainer = styled.div<ICardContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 32px;
  overflow: hidden;
  z-index: 1;
  background: rgba(218, 228, 242);
  box-shadow: 6px 6px 11px -6px rgba(0, 0, 0, 0, 1);
  border: 2px solid #dae4f2;
  transition: 0.2s;

  @media (min-width: ${breakpoints.xl}) {
    background: rgba(218, 228, 242, 0.5);
    z-index: 5000;

    &:not(:first-of-type) {
      margin-left: -50px;
    }

    &:hover,
    &:focus-within {
      transform: translateY(-1rem);
    }

    &:hover ~ &,
    &:focus-within ~ & {
      transform: translateX(50px);
    }
  }
`;
interface IPresentationCardProps {
  index: number;
  img: string;
  title: string;
  text: string;
  icon: string;
  rotate: string;
}

const PresentationCard: FC<IPresentationCardProps> = ({
  index,
  img,
  title,
  text,
  icon,
  rotate,
}) => {
  return (
    <CardContainer rotate={rotate} className="card">
      <Box
        height={"100%"}
        border="1px solid"
        borderRadius={"32px"}
        borderColor={"neutrals.300"}
      >
        <Box
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
            maxWidth={"340px"}
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
    </CardContainer>
  );
};

export { PresentationCard };
