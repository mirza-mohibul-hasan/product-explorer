import type { Product } from "../types/product";
import type { SortOrder } from "../types/filters";

export function sortProducts(products: Product[], order: SortOrder) {
  return [...products].sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price,
  );
}
