import { useInfiniteQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

const PAGE_LIMIT = 20;

export function useSearchProducts(query: string) {
  return useInfiniteQuery({
    queryKey: ["products", "search", query],
    queryFn: ({ pageParam = 0 }) =>
      productService.searchProducts(query, pageParam, PAGE_LIMIT),
    enabled: query.trim().length > 0,
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
