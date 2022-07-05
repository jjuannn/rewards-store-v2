import { createContext, Dispatch } from "react";
import { IContextValues } from "./productsProvider";
import { ProductAction } from "./productsReducer";

export type ProductsContextProps = {
  productsState: IContextValues;
  dispatch: Dispatch<ProductAction>;
};

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);
