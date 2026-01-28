import type { Product, ProductsResponse } from "../types/product";
import { apiClient } from "./apiClient";

const PAGE_LIMIT = 20;

export const productService = {
  // Get all products
  getProducts: async (
    skip = 0,
    limit = PAGE_LIMIT,
  ): Promise<ProductsResponse> => {
    const { data } = await apiClient.get<ProductsResponse>("/products", {
      params: { limit, skip },
    });
    return data;
  },

  // Get a single product by ID
  getProductById: async (id: number): Promise<Product> => {
    const { data } = await apiClient.get<Product>(`/products/${id}`);
    return data;
  },

  // Search products
  searchProducts: async (
    query: string,
    skip = 0,
    limit = PAGE_LIMIT,
  ): Promise<ProductsResponse> => {
    const { data } = await apiClient.get<ProductsResponse>("/products/search", {
      params: { q: query, limit, skip },
    });
    return data;
  },

  // Get products by category
  getProductsByCategory: async (
    category: string,
    skip = 0,
    limit = PAGE_LIMIT,
  ): Promise<ProductsResponse> => {
    const { data } = await apiClient.get<ProductsResponse>(
      `/products/category/${category}`,
      {
        params: { limit, skip },
      },
    );
    return data;
  },

  // Get categories
  getCategories: async (): Promise<string[]> => {
    const { data } = await apiClient.get<string[]>("/products/categories");
    return data;
  },
};
