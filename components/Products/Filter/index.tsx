import { Select, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { ProductsCategories } from "../types";

const options = [
  ProductsCategories.ALL_PRODUCTS,
  ProductsCategories.LAPTOPS,
  ProductsCategories.CAMERAS,
  ProductsCategories.SMART_HOME,
  ProductsCategories.AUDIO,
  ProductsCategories.MONITORS,
  ProductsCategories.PC_ACCESSORIES,
  ProductsCategories.GAMING,
  ProductsCategories.TABLETS_AND_E_READERS,
  ProductsCategories.PHONES,
  ProductsCategories.DRONES,
];

interface ISelectOptions {
  currentFilter: ProductsCategories;
  setFilter: Dispatch<SetStateAction<ProductsCategories>>;
  resetPagination: (page: number) => void;
}

const ProductsSelect: FC<ISelectOptions> = ({
  setFilter,
  currentFilter,
  resetPagination,
}) => {
  return (
    <Select
      maxWidth={"500px"}
      borderRadius="16px"
      size="lg"
      color="#8FA3BF"
      fontWeight={"600"}
      onChange={(e) => {
        resetPagination(1);
        setFilter(e.target.value as ProductsCategories);
      }}
    >
      {options.map((option) => {
        const isFilterSelected = currentFilter === option;
        return (
          <option
            style={{
              background: isFilterSelected ? "#E6EDF7" : "",
              color: "#8FA3BF",
              fontWeight: "600",
            }}
            key={option}
          >
            {option}
          </option>
        );
      })}
    </Select>
  );
};

export { ProductsSelect };
