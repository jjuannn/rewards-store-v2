import { Box, Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ColoredButton } from "../ColoredButton";

interface IPaginationProps {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  paginate: (pageNumber: any) => void;
}

const Pagination: FC<IPaginationProps> = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justifyContent={"center"}>
      {pageNumbers.map((number) => {
        const isPageSelected = currentPage === number;
        return (
          <ColoredButton
            dataCy={`pagination-button${isPageSelected ? "-selected" : ""}`}
            isActive={isPageSelected}
            text={String(number)}
            onClick={() => paginate(number)}
            key={number}
            styles={{ marginLeft: "5px", marginRight: "5px" }}
          />
        );
      })}
    </Flex>
  );
};

export { Pagination };
