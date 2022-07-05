import { Flex } from "@chakra-ui/react";
import { MainImage } from "components/MainImage";
import { PresentationCards } from "components/PresentationCards";
import { PresentationTitle } from "components/PresentationTitle";
import { ProductsSection } from "components/Products";
import { Product } from "entity/product";
import { productMapper } from "mapper/productMapper";
import type { NextPage } from "next";
import { getProducts } from "service/products";
import { axios } from "service/_index";

interface IHomeProps {
  products: Product[];
}

const Home: NextPage<IHomeProps> = ({ products }) => {
  return (
    <>
      <Flex direction={{ base: "column", xl: "row" }}>
        <PresentationTitle /> <MainImage />
      </Flex>
      <PresentationCards />
      <ProductsSection products={products} />
    </>
  );
};

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}

export default Home;
