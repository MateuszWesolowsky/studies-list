import { describe, it, expect } from "vitest";
import { filterStudies } from "../../../utils/filterStudies";

const studies = [
  {
    id: "1",
    code: "A1",
    name: "Test 1",
    category: "Cat1",
    price: 100,
    etaMinutes: 10,
    preparation: "None",
    description: "Opis 1",
  },
  {
    id: "2",
    code: "B2",
    name: "Test 2",
    category: "Cat2",
    price: 200,
    etaMinutes: 20,
    preparation: "None",
    description: "Opis 2",
  },
  {
    id: "3",
    code: "C3",
    name: "Test 3",
    category: "Cat1",
    price: 50,
    etaMinutes: 5,
    preparation: "None",
    description: "Opis 3",
  },
];

describe("filterStudies", () => {
  it("filters by code or name", () => {
    const result = filterStudies(studies, "A1", "", null);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("1");
  });

  it("filters by category", () => {
    const result = filterStudies(studies, "", "Cat1", null);
    expect(result).toHaveLength(2);
  });

  it("sorts by price ascending", () => {
    const result = filterStudies(studies, "", "", "price-asc");
    expect(result[0].price).toBe(50);
    expect(result[2].price).toBe(200);
  });

  it("sorts by price descending", () => {
    const result = filterStudies(studies, "", "", "price-desc");
    expect(result[0].price).toBe(200);
    expect(result[2].price).toBe(50);
  });

  it("combines filters and sort", () => {
    const result = filterStudies(studies, "Test", "Cat1", "price-desc");
    expect(result).toHaveLength(2);
    expect(result[0].price).toBe(100);
    expect(result[1].price).toBe(50);
  });
});
