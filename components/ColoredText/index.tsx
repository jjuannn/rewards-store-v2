import { ComponentWithAs, HeadingProps, TextProps } from "@chakra-ui/react";
import { CSSProperties, FC } from "react";

interface IColoredTextProps {
  TextElement: ComponentWithAs<any, HeadingProps | TextProps>;
  text: string;
  size: { base?: string; sm?: string; md?: string; lg?: string; xl?: string };
  variant?: string;
  background?:
    | "brand.default"
    | "brand.hover"
    | "specials.illustrationBg"
    | "sectionBg";
  styles?: CSSProperties;
  dataCy?: string;
}

const ColoredText: FC<IColoredTextProps> = ({
  TextElement,
  text,
  size,
  variant,
  styles,
  background = "brand.default",
  dataCy,
}) => {
  return (
    <TextElement
      data-cy={dataCy}
      size={size}
      variant={variant}
      sx={{
        background,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
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
