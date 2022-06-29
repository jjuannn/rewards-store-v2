import { Select } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";

const options = [
  "All Products",
  "Laptops",
  "Cameras",
  "Smart Home",
  "Audio",
  "Monitors & TV",
  "PC Accessories",
  "Gaming",
  "Tablets & E-readers",
  "Phones",
  "Drones",
];

interface ISelectOptions {
  setFilter: Dispatch<SetStateAction<string>>;
}

const ProductsSelect: FC<ISelectOptions> = ({ setFilter }) => {
  return (
    <Select
      size="lg"
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    >
      {options.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </Select>
  );
};

export { ProductsSelect };
