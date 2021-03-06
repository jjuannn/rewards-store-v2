import { FC } from "react";
import { Flex, Image } from "@chakra-ui/react";
import heroIllustration from "assets/illustrations/hero-desktop.png";

const MainImage: FC = () => {
  return (
    <Flex
      overflowX="hidden"
      justifyContent={"center"}
      position={{ base: "relative", xl: "static" }}
      top="90px"
      zIndex={"50"}
    >
      <Image
        data-cy="presentation-img"
        backgroundImage={{
          xl: "linear-gradient(90deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
        }}
        borderRadius="50px"
        backgroundSize={{ xl: "100% 100%" }}
        backgroundPosition={{ xl: "center center" }}
        backgroundRepeat={{ xl: "no-repeat" }}
        src={heroIllustration.src}
        width={{ base: "580px", xl: "720px" }}
        minWidth={{ base: "580px", xl: "720px" }}
        height={{ base: "518px", xl: "600px" }}
        alt=""
      />
    </Flex>
  );
};

export { MainImage };
