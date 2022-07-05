import { productMapper } from "mapper/productMapper";
import { IApiResponse } from "mapper/productMapper";
import { axios } from "./_index";

async function redeemProduct(productId: string) {
  try {
    const req = await axios.post("/redeem", { productId });
    return req.data.message;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

async function getProducts() {
  try {
    const req = await axios.get("/products");
    return req.data.map((product: IApiResponse) => productMapper(product));
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export { redeemProduct, getProducts };
