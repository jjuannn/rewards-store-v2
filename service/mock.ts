import products from "../cypress/fixtures/products.json";
import { Product } from "entity/product";
import { productMapper } from "mapper/productMapper";

function getProductsMock(): Product[] {
  return products.map((product) => productMapper(product));
}

export { getProductsMock };
