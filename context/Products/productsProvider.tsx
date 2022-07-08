import { FC, useReducer } from "react";
import { ProductsContext } from "./productsContext";
import { productsReducer } from "./productsReducer";

export interface IContextValues {
  redeemProduct: { loading: boolean; success: boolean; error: any };
}

const INITIAL_VALUES: IContextValues = {
  redeemProduct: { loading: false, success: false, error: null },
};

interface IProductsContextProvider {
  children: JSX.Element | JSX.Element[];
}

const ProductsContextProvider: FC<IProductsContextProvider> = ({
  children,
}) => {
  const [productsState, dispatch] = useReducer(productsReducer, INITIAL_VALUES);

  return (
    <ProductsContext.Provider
      value={{
        productsState,
        dispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContextProvider };
