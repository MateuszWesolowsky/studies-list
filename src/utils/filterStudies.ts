import type { Study } from "../types/types";

export type SortOrder = "price-asc" | "price-desc" | null;

export const filterStudies = (
  studies: Study[],
  codeFilter: string,
  categoryFilter: string,
  sortOrder: SortOrder
): Study[] => {
  let filtered = studies;

  if (codeFilter) {
    filtered = filtered.filter(
      (el) =>
        el.code.toLowerCase().includes(codeFilter.toLowerCase()) ||
        el.name.toLowerCase().includes(codeFilter.toLowerCase())
    );
  }

  if (categoryFilter) {
    filtered = filtered.filter((el) => el.category === categoryFilter);
  }

  if (sortOrder) {
    filtered = [...filtered].sort((a, b) =>
      sortOrder === "price-asc" ? a.price - b.price : b.price - a.price
    );
  }

  return filtered;
};
