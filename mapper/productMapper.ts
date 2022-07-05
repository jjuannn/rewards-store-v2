import { Product } from "entity/product";

export interface IApiResponse {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: { hdUrl: string };
}

function productMapper(apiResponse: IApiResponse): Product {
  const { _id, name, cost, category, img } = apiResponse;
  return new Product(_id, name, cost, category, img.hdUrl);
}

export { productMapper };
