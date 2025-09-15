interface FiltersSectionProps {
  codeFilter: string;
  setCodeFilter: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  sortOrder: "price-asc" | "price-desc" | null;
  setSortOrder: (value: "price-asc" | "price-desc" | null) => void;
  allCategories: string[];
}

export const FiltersSection = ({
  codeFilter,
  setCodeFilter,
  categoryFilter,
  setCategoryFilter,
  sortOrder,
  setSortOrder,
  allCategories,
}: FiltersSectionProps) => (
  <div className="mb-6 space-y-4">
    <div>
      <label htmlFor="search" className="block text-sm font-medium mb-1">
        Szukaj
      </label>
      <input
        type="text"
        id="search"
        placeholder="Wpisz nazwę lub kod badania..."
        value={codeFilter}
        onChange={(e) => setCodeFilter(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="category" className="block text-sm font-medium mb-1">
          Kategoria
        </label>
        <select
          id="category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Wszystkie kategorie</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sort" className="block text-sm font-medium mb-1">
          Sortuj według ceny
        </label>
        <select
          id="sort"
          value={sortOrder || ""}
          onChange={(e) =>
            setSortOrder(e.target.value as "price-asc" | "price-desc" | null)
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Domyślnie</option>
          <option value="price-asc">Cena rosnąco</option>
          <option value="price-desc">Cena malejąco</option>
        </select>
      </div>
    </div>
  </div>
);
