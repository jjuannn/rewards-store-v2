import { useContext } from "react";
import { ProductsContext } from "context/Products/productsContext";
import { ProductsActions } from "context/Products/productsActions";

function useProducts() {
  const { productsState, dispatch } = useContext(ProductsContext);

  const redeemProduct = async (productId: string) => {
    dispatch({ type: ProductsActions.REDEEM_PRODUCT_LOADING });
    try {
      await redeemProduct(productId);
      dispatch({ type: ProductsActions.REDEEM_PRODUCT_SUCCESS });
    } catch (err) {
      dispatch({ type: ProductsActions.REDEEM_PRODUCT_FAILURE, payload: err });
    }
  };
}

export { useProducts };
