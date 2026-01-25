import type { ProductsResponse } from "../types/product";
import { apiClient } from "./apiClient";

const PAGE_LIMIT = 20;

export const productService = {
  getProducts: async (
    skip = 0,
    limit = PAGE_LIMIT,
  ): Promise<ProductsResponse> => {
    const { data } = await apiClient.get<ProductsResponse>("/products", {
      params: { limit, skip },
    });
    return data;
  },
};
