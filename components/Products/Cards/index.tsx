import { FC } from "react";
import {
  Box,
  Button,
  ButtonSpinner,
  Flex,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useProducts } from "hooks/useProducts";
import { useUser } from "hooks/useUser";
interface IProductCardProps {
  id: string;
  name: string;
  category: string;
  cost: number;
  img: string;
}

const ProductCard: FC<IProductCardProps> = ({
  id,
  name,
  cost,
  img,
  category,
}) => {
  const { redeemProduct, redeemProductState } = useProducts();
  const { userData } = useUser();

  const ableToRedeem = userData.data?.points! >= cost;

  return (
    <Box
      data-cy={"product-card"}
      maxWidth="350px"
      minW={"300px"}
      marginX="10px"
      marginY="30px"
    >
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
            data-cy={`product-card-name`}
            size="mobileL1"
            variant="default"
            lineHeight={"24px"}
            color="neutrals.900"
          >
            {name}
          </Text>
          <Text
            data-cy="product-card-category"
            size="mobileL2"
            variant="allCapsL2"
            color="neutrals.600"
          >
            {category}
          </Text>
        </Box>
      </Flex>
      <Button
        data-cy="redeem-product-button"
        colorScheme={"brand.default"}
        bg={ableToRedeem ? "brand.default" : "neutrals.500"}
        _hover={{ bg: ableToRedeem ? "brand.default" : "neutrals.600" }}
        disabled={redeemProductState.loading || !ableToRedeem}
        padding="24px"
        borderRadius={"16px"}
        marginTop="16px"
        width="100%"
        onClick={() => redeemProduct(id, cost)}
        color={ableToRedeem ? "white" : "brand.900"}
      >
        {!redeemProductState.loading && (
          <>
            {ableToRedeem ? (
              <>
                Redeem for{" "}
                <span data-cy="product-card-cost" style={{ marginLeft: "5px" }}>
                  {cost}
                </span> points
              </>
            ) : (
              <span data-cy="product-card-required-cost">
                You need {cost} points
              </span>
            )}
          </>
        )}
        {redeemProductState.loading && (
          <>
            <ButtonSpinner />
          </>
        )}
      </Button>
    </Box>
  );
};

export { ProductCard };
