import { useInfiniteQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";
import type { ProductFilters } from "../types/filters";

const PAGE_LIMIT = 20;

export function useProducts(filters: ProductFilters) {
  const { category, search } = filters;

  return useInfiniteQuery({
    queryKey: ["products", category, search],
    queryFn: ({ pageParam = 0 }) => {
      if (search) {
        return productService.searchProducts(search, pageParam, PAGE_LIMIT);
      }

      if (category) {
        return productService.getProductsByCategory(
          category,
          pageParam,
          PAGE_LIMIT,
        );
      }

      return productService.getProducts(pageParam, PAGE_LIMIT);
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
