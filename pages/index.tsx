import { Flex } from "@chakra-ui/react";
import { MainImage } from "components/MainImage";
import { PresentationCards } from "components/PresentationCards";
import { PresentationTitle } from "components/PresentationTitle";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Flex direction={{ base: "column", lg: "row" }}>
        <PresentationTitle /> <MainImage />
      </Flex>{" "}
      <PresentationCards />
    </>
  );
};

export default Home;
