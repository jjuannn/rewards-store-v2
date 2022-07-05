import { FC, useEffect, useState } from "react";
import { Box, Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import ColoredText from "components/ColoredText";
import { ProductsSelect } from "./Filter";
import { SortFilter } from "./Sort";
import { ProductsCategories, SortOrders } from "./types";
import { ProductCard } from "./Cards";
import { Product } from "entity/product";

interface IProductsSectionProps {
  products: Product[];
}

const ProductsSection: FC<IProductsSectionProps> = ({ products }) => {
  const [filter, setFilter] = useState<ProductsCategories>(
    ProductsCategories.ALL_PRODUCTS
  );
  const [sortOrder, setSortOrder] = useState<SortOrders>(
    SortOrders.MOST_RECENT
  );
  const [productsState, setProductsState] = useState<Product[]>(products);

  const filterProductsByCategories = () => {
    if (filter === ProductsCategories.ALL_PRODUCTS) {
      return products;
    }
    return products.filter((product) => product.category === filter);
  };

  const sortProducts = () => {
    const filteredProducts = filterProductsByCategories();
    switch (sortOrder) {
      case SortOrders.MOST_RECENT:
        return filteredProducts;
      case SortOrders.LOWEST_PRICE:
        return [...filteredProducts].sort((a, b) => a.cost - b.cost);
      case SortOrders.HIGHEST_PRICE:
        return [...filteredProducts].sort((a, b) => b.cost - a.cost);
      default:
        return products;
    }
  };

  useEffect(() => {
    const orderedProducts = sortProducts();
    setProductsState(() => orderedProducts);
  }, [sortOrder, filter]);

  return (
    <>
      <Flex paddingX={"20px"} paddingY="30px">
        <ColoredText
          TextElement={Heading}
          size={{ base: "mobileL2" }}
          text="TECH"
          styles={{ marginRight: "6px" }}
        />{" "}
        <Heading size={{ base: "mobileL2" }}> PRODUCTS</Heading>
      </Flex>
      <Box paddingX={"20px"}>
        <ProductsSelect setFilter={setFilter} />
        <SortFilter sortOrder={sortOrder} changeSortOrder={setSortOrder} />
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gridGap="20px"
          justifyContent="center"
          alignItems="center"
          justifyItems={"center"}
          marginTop="30px"
        >
          {productsState.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </Grid>
      </Box>
    </>
  );
};

export { ProductsSection };
