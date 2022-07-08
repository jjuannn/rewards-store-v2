import { ProductsActions } from "./productsActions";
import { IContextValues } from "./productsProvider";

export type ProductAction =
  // to-do tipar esto mejor
  | { type: ProductsActions.REDEEM_PRODUCT_LOADING }
  | { type: ProductsActions.REDEEM_PRODUCT_SUCCESS }
  | { type: ProductsActions.REDEEM_PRODUCT_FAILURE; payload: any };

const productsReducer = (
  state: IContextValues,
  action: ProductAction
): IContextValues => {
  const { type } = action;

  switch (type) {
    case ProductsActions.REDEEM_PRODUCT_LOADING:
      return {
        ...state,
        redeemProduct: {
          loading: true,
          success: false,
          error: null,
        },
      };
    case ProductsActions.REDEEM_PRODUCT_SUCCESS:
      return {
        ...state,
        redeemProduct: {
          loading: false,
          success: true,
          error: null,
        },
      };
    case ProductsActions.REDEEM_PRODUCT_FAILURE:
      return {
        ...state,
        redeemProduct: {
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export { productsReducer };
