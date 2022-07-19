import { FC } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import successLogo from "assets/icons/system-success.svg";
import errorLogo from "assets/icons/system-error.svg";
import crossLogo from "assets/icons/cross-active.svg";

interface IToastProps {
  text: string;
  status: "success" | "failure";
  onClose: () => void;
}

const Toast: FC<IToastProps> = ({ text, status, onClose }) => {
  const borderColor = status === "success" ? "green.default" : "red.default";
  const imageSource = status === "success" ? successLogo.src : errorLogo.src;

  return (
    <Flex
      data-cy="state-toast"
      background="neutrals.100"
      width={"100%"}
      maxWidth="500px"
      padding="24px"
      border={`2px solid`}
      borderColor={borderColor}
      borderRadius="12px"
    >
      <Flex maxWidth={"75%"}>
        <Image
          marginRight="15px"
          src={imageSource}
          width="25px"
          height="25px"
          alt=""
        />
        <Text size="mobileL1" variant="default" color="neutrals.600">
          {text}
        </Text>
      </Flex>
      <Image
        _hover={{ cursor: "pointer" }}
        onClick={onClose}
        marginLeft={"auto"}
        src={crossLogo.src}
        width="20px"
        height="20px"
        alt=""
      />
    </Flex>
  );
};

export { Toast };
