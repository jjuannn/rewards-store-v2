import { FC } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import aeropayLogo from "assets/icons/aeropay-3.svg";
interface IProductCardProps {
  name: string;
  category: string;
  cost: number;
  img: string;
}

const ProductCard: FC<IProductCardProps> = ({ name, cost, img, category }) => {
  return (
    <Box maxWidth="350px" minW={"300px"} marginX="10px" marginY="30px">
      <Flex
        border="2px solid"
        borderRadius={"32px"}
        borderColor={"neutrals.300"}
        direction="column"
        width={"100%"}
        height={"430px"}
      >
        <Flex justifyContent="center" alignItems={"center"} height={"350px"}>
          <Image
            width={"280px"}
            height="205px"
            margin={"auto"}
            src={img}
            alt=""
          />
        </Flex>
        <Box
          padding="24px 16px"
          borderTop="2px solid"
          borderColor={"neutrals.300"}
        >
          <Text
            size="mobileL1"
            variant="default"
            lineHeight={"24px"}
            color="neutrals.900"
          >
            {name}
          </Text>
          <Text size="mobileL2" variant="allCapsL2" color="neutrals.600">
            {category}
          </Text>
        </Box>
      </Flex>
      <Button
        colorScheme={"brand.default"}
        bg="brand.default"
        _hover={{ bg: "brand.hover" }}
        // disabled -- va cambiando segun sea loading o no
        padding="24px"
        borderRadius={"16px"}
        marginTop="16px"
        width="100%"
      >
        Redeem for{" "}
        <Image
          marginX={"5px"}
          src={aeropayLogo.src}
          width="20px"
          height={"20px"}
          alt=""
        />{" "}
        {cost}
      </Button>
    </Box>
  );
};

export { ProductCard };
