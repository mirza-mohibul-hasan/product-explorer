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

    setSearch(q || "");
    setCategory(category || undefined);
    setSortBy(sortBy === "price" ? "price" : undefined);
    setSortOrder(order === "asc" || order === "desc" ? order : "asc");
  }, [params, setSearch, setCategory, setSortBy, setSortOrder]);
}
