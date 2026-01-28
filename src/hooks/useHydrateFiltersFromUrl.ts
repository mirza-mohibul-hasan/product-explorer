import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useProductFilterStore } from "../store/useProductFilterStore";

export function useHydrateFiltersFromUrl() {
  const [params] = useSearchParams();
  const { setSearch, setCategory, setSortBy, setSortOrder } =
    useProductFilterStore();

  useEffect(() => {
    const q = params.get("q");
    const category = params.get("category");
    const sortBy = params.get("sortBy");
    const order = params.get("order");

    if (q) setSearch(q);
    if (category) setCategory(category);
    if (sortBy === "price") setSortBy("price");
    if (order === "asc" || order === "desc") setSortOrder(order);
  }, [params, setSearch, setCategory, setSortBy, setSortOrder]);
}
