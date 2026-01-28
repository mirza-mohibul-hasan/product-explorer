export type SortOrder = "asc" | "desc";

export interface ProductFilters {
  category?: string;
  search?: string;
  sortBy?: "price";
  sortOrder?: SortOrder;
  limit?: number;
}
