import { useInfiniteQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

const PAGE_LIMIT = 20;

export function useProducts() {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) =>
      productService.getProducts(pageParam, PAGE_LIMIT),
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
