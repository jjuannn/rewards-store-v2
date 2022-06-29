import { Select } from "@chakra-ui/react";
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
  setFilter: Dispatch<SetStateAction<ProductsCategories>>;
}

const ProductsSelect: FC<ISelectOptions> = ({ setFilter }) => {
  return (
    <Select
      size="lg"
      onChange={(e) => {
        setFilter(e.target.value as ProductsCategories);
      }}
    >
      {options.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </Select>
  );
};

export { ProductsSelect };
