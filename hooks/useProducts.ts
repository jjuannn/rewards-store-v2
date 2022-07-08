import { useContext } from "react";
import { ProductsContext } from "context/Products/productsContext";
import { ProductsActions } from "context/Products/productsActions";
import { redeemProduct as redeemProductService } from "service/products";
import { useUser } from "./useUser";

function useProducts() {
  const { productsState, dispatch } = useContext(ProductsContext);
  const { redeemProduct: redeemProductState } = productsState;

  const { setUserData, userData } = useUser();

  const redeemProduct = async (productId: string, cost: number) => {
    dispatch({ type: ProductsActions.REDEEM_PRODUCT_LOADING });
    try {
      await redeemProductService(productId);
      dispatch({ type: ProductsActions.REDEEM_PRODUCT_SUCCESS });

      const newUserData = userData.data;
      setUserData({ ...newUserData, points: newUserData?.points! - cost });
    } catch (err) {
      dispatch({ type: ProductsActions.REDEEM_PRODUCT_FAILURE, payload: err });
    }
  };

  return { redeemProductState, redeemProduct };
}

export { useProducts };
