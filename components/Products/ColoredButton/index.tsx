import { Button, Text } from "@chakra-ui/react";
import { FC, CSSProperties } from "react";

interface IColoredButtonProps {
  text: string;
  styles?: CSSProperties;
  isActive?: boolean;
  onClick: () => any;
  dataCy?: string;
}

const ColoredButton: FC<IColoredButtonProps> = ({
  text,
  styles,
  isActive,
  onClick,
  dataCy,
}) => {
  return (
    <Button
      data-cy={dataCy}
      borderRadius={"16px"}
      onClick={onClick}
      colorScheme={isActive ? "brand.hover" : "brand.light2"}
      bg={isActive ? "brand.default" : "brand.light"}
      _hover={{ bg: isActive ? "brand.hover" : "brand.light2" }}
      style={styles}
    >
      <Text
        data-cy={`button-text-$`}
        size={{ base: "mobileL1" }}
        variant="default"
        sx={{
          background: !isActive && "brand.default",
          WebkitBackgroundClip: !isActive ? "text" : "",
          WebkitTextFillColor: !isActive ? "transparent" : "",
          backgroundClip: !isActive ? "text" : "",
          textFillColor: !isActive ? "transparent" : "",
          ...styles,
        }}
      >
        {text}
      </Text>
    </Button>
  );
};

export { ColoredButton };
