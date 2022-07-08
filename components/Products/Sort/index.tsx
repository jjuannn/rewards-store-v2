import { Flex } from "@chakra-ui/react";
import { ColoredButton } from "components/Products/ColoredButton";
import { Dispatch, FC, SetStateAction } from "react";
import { SortOrders } from "../types";

interface ISortOrder {
  sortOrder: string;
  changeSortOrder: Dispatch<SetStateAction<SortOrders>>;
  resetPagination: (page: number) => void;
}

const SortFilter: FC<ISortOrder> = ({
  sortOrder,
  changeSortOrder,
  resetPagination,
}) => {
  return (
    <Flex
      overflow={{ base: "scroll", md: "hidden" }}
      direction="row"
      marginY="24px"
      paddingY="5px"
    >
      <ColoredButton
        isActive={sortOrder === SortOrders.MOST_RECENT}
        text={SortOrders.MOST_RECENT}
        styles={{
          margin: "0px 5px 0px 0px",
          minWidth: "140px",
          height: "40px",
          padding: "8px 16px",
          color: "white",
        }}
        onClick={() => {
          resetPagination(1);
          changeSortOrder(SortOrders.MOST_RECENT);
        }}
      />
      <ColoredButton
        isActive={sortOrder === SortOrders.LOWEST_PRICE}
        text={SortOrders.LOWEST_PRICE}
        styles={{
          margin: "0px 5px 0px 0px",
          minWidth: "140px",
          height: "40px",
          padding: "8px 16px",
          color: "white",
        }}
        onClick={() => {
          resetPagination(1);
          changeSortOrder(SortOrders.LOWEST_PRICE);
        }}
      />
      <ColoredButton
        isActive={sortOrder === SortOrders.HIGHEST_PRICE}
        text={SortOrders.HIGHEST_PRICE}
        styles={{
          margin: "0px 5px 0px 0px",
          minWidth: "140px",
          height: "40px",
          padding: "8px 16px",
          color: "white",
        }}
        onClick={() => {
          resetPagination(1);
          changeSortOrder(SortOrders.HIGHEST_PRICE);
        }}
      />
    </Flex>
  );
};

export { SortFilter };
