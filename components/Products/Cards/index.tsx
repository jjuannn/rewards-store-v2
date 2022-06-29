import { FC } from "react";
import {} from "@chakra-ui/react";

interface IProductCardProps {
  name: string;
  cost: number;
}

const ProductCard: FC<IProductCardProps> = ({ name, cost }) => {
  return (
    <p>
      {name} ----- ${cost}
    </p>
  );
};

export { ProductCard };
