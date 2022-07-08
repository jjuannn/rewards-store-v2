import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Box, Flex, Grid, Heading, useToast } from "@chakra-ui/react";
import ColoredText from "components/ColoredText";
import { ProductsSelect } from "./Filter";
import { SortFilter } from "./Sort";
import { ProductsCategories, SortOrders } from "./types";
import { ProductCard } from "./Cards";
import { Product } from "entity/product";
import { Toast } from "components/Toast";
import { useProducts } from "hooks/useProducts";
import { Pagination } from "./Pagination";

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

  const toast = useToast();
  const toastIdRef = useRef<any>();
  // toastId to prevent duplicated toasts
  const toastId = "redeem-success-toast";

  const closeToast = useCallback(() => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }, [toastIdRef, toast]);

  const { redeemProductState } = useProducts();

  useEffect(() => {
    if (redeemProductState.success) {
      if (!toast.isActive(toastId)) {
        toastIdRef.current = toast({
          duration: 2000,
          position: "bottom-left",
          render: () => (
            <Toast
              text="Product redeemed successfully. We deducted the amount from your account "
              status="success"
              onClose={closeToast}
            />
          ),
        });
      }
    }
  }, [redeemProductState.success, toast, closeToast]);

  useEffect(() => {
    if (redeemProductState.error) {
      toastIdRef.current = toast({
        duration: 2000,
        position: "bottom-left",
        render: () => (
          <Toast
            text={redeemProductState.error.message}
            status="failure"
            onClose={closeToast}
          />
        ),
      });
    }
  }, [redeemProductState.error, toast, closeToast]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 16;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentPosts = productsState.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Flex paddingX={"20px"} paddingY="30px" id="#products-section">
        <ColoredText
          TextElement={Heading}
          size={{ base: "mobileL2" }}
          text="TECH"
          styles={{ marginRight: "6px" }}
        />{" "}
        <Heading size={{ base: "mobileL2" }}> PRODUCTS</Heading>
      </Flex>
      <Box paddingX={"20px"}>
        <Flex alignItems={"center"} justifyContent="space-between">
          <ProductsSelect
            resetPagination={paginate}
            setFilter={setFilter}
            currentFilter={filter}
          />
          <Pagination
            currentPage={currentPage}
            paginate={paginate}
            productsPerPage={productsPerPage}
            totalProducts={productsState.length}
          />
        </Flex>
        <SortFilter
          resetPagination={paginate}
          sortOrder={sortOrder}
          changeSortOrder={setSortOrder}
        />
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gridGap="20px"
          justifyContent="center"
          alignItems="center"
          justifyItems={"center"}
        >
          {currentPosts.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </Grid>
        <Pagination
          currentPage={currentPage}
          paginate={paginate}
          productsPerPage={productsPerPage}
          totalProducts={productsState.length}
        />
      </Box>
    </>
  );
};

export { ProductsSection };
