import { create } from "zustand";
import type { ProductFilters, SortOrder } from "../types/filters";

interface FilterState extends ProductFilters {
  setCategory: (category?: string) => void;
  setSearch: (search: string) => void;
  setSortBy: (sortBy?: "price") => void;
  setSortOrder: (order: SortOrder) => void;
  resetFilters: () => void;
}

const initialState: ProductFilters = {
  category: undefined,
  search: "",
  sortBy: undefined,
  sortOrder: "asc",
};

export const useProductFilterStore = create<FilterState>((set) => ({
  ...initialState,

  setCategory: (category) => set({ category }),
  setSearch: (search) => set({ search }),
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder }),

  resetFilters: () => set(initialState),
}));
