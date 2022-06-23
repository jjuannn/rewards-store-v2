import { ComponentWithAs, HeadingProps, TextProps } from "@chakra-ui/react";
import { FC } from "react";

interface IColoredTextProps {
  TextElement: ComponentWithAs<any, HeadingProps | TextProps>;
  text: string;
  size: { base?: string; sm?: string; md?: string; lg?: string; xl?: string };
  variant?: string;
  styles?: any;
}

const ColoredText: FC<IColoredTextProps> = ({
  TextElement,
  text,
  size,
  variant,
  styles,
}) => {
  return (
    <TextElement
      size={size}
      variant={variant}
      sx={{
        background: "brand.default",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
        ...styles,
      }}
    >
      {text}
    </TextElement>
  );
};

export default ColoredText;
