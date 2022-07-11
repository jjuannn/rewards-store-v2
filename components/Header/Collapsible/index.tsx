import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  Text,
  Flex,
  Image,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { AeroCard } from "../AeroCard";
import arrowLogo from "assets/icons/chevron-default.svg";
import aeropayLogo from "assets/icons/aeropay-3.svg";
import { ColoredButton } from "components/Products/ColoredButton";
import { useUser } from "hooks/useUser";
import { Toast } from "components/Toast";

const CollapsibleWindow: FC = () => {
  const { userAddCoins, addPoints } = useUser();
  const [amountOfPoints, setAmountOfPoints] = useState<1000 | 5000 | 7500>(
    1000
  );

  const toast = useToast();
  const toastIdRef = useRef<any>();

  const closeToast = useCallback(() => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, [toastIdRef, toast]);

  useEffect(() => {
    if (userAddCoins.success) {
      toastIdRef.current = toast({
        duration: 2000,
        position: "bottom-left",
        render: () => (
          <Toast
            text="Points added successfully. We added the balance to your account"
            status="success"
            onClose={closeToast}
          />
        ),
      });
    }
  }, [userAddCoins.success, toast, closeToast]);

  useEffect(() => {
    if (userAddCoins.error) {
      toastIdRef.current = toast({
        duration: 2000,
        position: "bottom-left",
        render: () => (
          <Toast
            text={userAddCoins.error.message}
            status="failure"
            onClose={closeToast}
          />
        ),
      });
    }
  }, [userAddCoins.error, toast, closeToast]);

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton marginLeft="auto" isActive={isOpen} as={Text}>
            <Image
              animation="rotate 4s linear"
              transform={isOpen ? "rotate(90deg)" : "rotate(270deg)"}
              src={arrowLogo.src}
              width="16px"
              height={"100%"}
              marginY="auto"
              alt=""
            />
          </MenuButton>
          <MenuList
            zIndex={"300"}
            padding="0"
            width={"315px"}
            height="400px"
            borderRadius="16px"
            border="2px solid"
            borderColor="neutrals.300"
            marginRight={"-18px"}
            marginTop={"15px"}
          >
            <Box
              padding="16px 24px"
              borderBottom="2px solid"
              borderColor="neutrals.300"
            >
              <Text size="mobileL1" variant="default" lineHeight={"27px"}>
                Add Balance
              </Text>
            </Box>
            <Flex direction="column" padding="24px">
              <AeroCard />
              <Flex justifyContent={"space-between"} marginTop="40px">
                <ColoredButton
                  styles={{
                    borderRadius: "12px",
                    width: "100%",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                  text="1000"
                  isActive={amountOfPoints === 1000}
                  onClick={() => {
                    setAmountOfPoints(() => 1000);
                  }}
                />
                <ColoredButton
                  styles={{
                    borderRadius: "12px",
                    width: "100%",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                  text="5000"
                  isActive={amountOfPoints === 5000}
                  onClick={() => {
                    setAmountOfPoints(() => 5000);
                  }}
                />
                <ColoredButton
                  styles={{
                    borderRadius: "12px",
                    width: "100%",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                  text="7500"
                  isActive={amountOfPoints === 7500}
                  onClick={() => {
                    setAmountOfPoints(() => 7500);
                  }}
                />
              </Flex>
              <Button
                colorScheme={"brand.default"}
                bg="brand.default"
                _hover={{ bg: "brand.hover" }}
                disabled={userAddCoins.loading ? true : false}
                padding="24px"
                borderRadius={"16px"}
                marginTop="16px"
                width="100%"
                onClick={() => addPoints(amountOfPoints)}
              >
                {userAddCoins.loading ? (
                  <Spinner colorScheme="purple" />
                ) : (
                  <>
                    <Image
                      marginX={"5px"}
                      src={aeropayLogo.src}
                      width="20px"
                      height={"20px"}
                      alt=""
                    />{" "}
                    Add Points
                  </>
                )}
              </Button>
            </Flex>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export { CollapsibleWindow };
