import { Flex } from "@chakra-ui/react";
import { AppLayout } from "components/Layout";
import { MainImage } from "components/MainImage";
import { PresentationCards } from "components/PresentationCards";
import { PresentationTitle } from "components/PresentationTitle";
import { ProductsSection } from "components/Products";
import { Product } from "entity/product";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getProductsMock } from "service/mock";

interface IHomeProps {
  products: Product[];
}

const Home: NextPage<IHomeProps> = ({ products }) => {
  return (
    <>
      <AppLayout>
        <Flex
          data-cy="presentation-container"
          direction={{ base: "column", xl: "row" }}
          justifyContent={{ xl: "space-evenly" }}
          marginBottom={{ xl: "100px" }}
        >
          <PresentationTitle /> <MainImage />
        </Flex>
        <PresentationCards />
        <ProductsSection products={products} />
      </AppLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProductsMock();
  const stringifiedProducts = JSON.stringify(products);

  return {
    props: {
      products: JSON.parse(stringifiedProducts),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  /**
   * Workaround to mock API calls on SSR pages.
   * https://www.youtube.com/watch?v=6nEMt35-zBM&t=2222s&ab_channel=GonzaloPozzo
   */

  return {
    paths: [],
    fallback: process.env.NODE_ENV === "production" ? false : "blocking",
  };
};

export default Home;
