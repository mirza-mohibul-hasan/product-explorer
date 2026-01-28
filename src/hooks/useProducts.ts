import { useInfiniteQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";
import type { ProductFilters } from "../types/filters";

const PAGE_LIMIT = 20;

export function useProducts(filters: ProductFilters) {
  const { category, search } = filters;

  return useInfiniteQuery({
    queryKey: ["products", category, search, filters.limit],
    queryFn: ({ pageParam = 0 }) => {
      const limit = filters.limit || PAGE_LIMIT;
      if (search) {
        return productService.searchProducts(search, pageParam, limit);
      }

      if (category) {
        return productService.getProductsByCategory(category, pageParam, limit);
      }

      return productService.getProducts(pageParam, limit);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.reduce(
        (sum, page) => sum + page.products.length,
        0,
      );
      return loaded < lastPage.total ? loaded : undefined;
    },
  });
}
