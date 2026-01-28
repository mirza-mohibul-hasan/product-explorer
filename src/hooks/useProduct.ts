import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

export function useProduct(productId?: number) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => {
      if (!productId) throw new Error("Product ID is required");
      return productService.getProductById(productId);
    },
    enabled: !!productId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
