import { useInfiniteQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

const PAGE_LIMIT = 20;

export function useProductsByCategory(category?: string) {
  return useInfiniteQuery({
    queryKey: ["products", "category", category],
    queryFn: ({ pageParam = 0 }) => {
      if (!category) {
        throw new Error("Category is required");
      }
      return productService.getProductsByCategory(
        category,
        pageParam,
        PAGE_LIMIT,
      );
    },
    enabled: !!category,
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
