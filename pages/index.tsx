import { Flex } from "@chakra-ui/react";
import { MainImage } from "components/MainImage";
import { PresentationCards } from "components/PresentationCards";
import { PresentationTitle } from "components/PresentationTitle";
import { ProductsSection } from "components/Products";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Flex direction={{ base: "column", xl: "row" }}>
        <PresentationTitle /> <MainImage />
      </Flex>{" "}
      <PresentationCards />
      <ProductsSection />
    </>
  );
};

export default Home;
