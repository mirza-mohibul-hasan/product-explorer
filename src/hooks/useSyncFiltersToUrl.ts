import { useEffect } from "react";
import { useSearchParams } from "react-router";
import type { ProductFilters } from "../types/filters";

export function useSyncFiltersToUrl(filters: ProductFilters) {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: Record<string, string> = {};

    if (filters.search) params.q = filters.search;
    if (filters.category) params.category = filters.category;
    if (filters.sortBy) params.sortBy = filters.sortBy;
    if (filters.sortOrder) params.order = filters.sortOrder;

    setSearchParams(params);
  }, [filters, setSearchParams]);
}
