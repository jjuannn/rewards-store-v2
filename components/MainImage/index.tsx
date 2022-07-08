import { FC } from "react";
import { Flex, Image } from "@chakra-ui/react";
import heroIllustration from "assets/illustrations/hero-desktop.png";
import { TopDivider } from "./TopDivider";

const MainImage: FC = () => {
  return (
    <Flex
      overflowX="hidden"
      justifyContent={"center"}
      position="relative"
      top="33px"
      backgroundImage="linear-gradient(90deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)"
      backgroundSize="100% 87.4%"
      backgroundPosition={"center center"}
      backgroundRepeat="no-repeat"
    >
      <TopDivider />
      <Image
        src={heroIllustration.src}
        width={{ base: "580px", xl: "897px" }}
        minWidth={{ base: "580px", xl: "897px" }}
        height={{ base: "518px", xl: "795px" }}
        alt=""
      />
    </Flex>
  );
};

export { MainImage };
