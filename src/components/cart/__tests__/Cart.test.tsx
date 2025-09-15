beforeAll(() => {
  vi.stubGlobal("localStorage", {
    getItem: vi.fn(() => "[]"),
    setItem: vi.fn(),
    removeItem: vi.fn(),
  });
});

import { describe, it, expect, beforeEach, vi, beforeAll } from "vitest";
import cartReducer, {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../cartSlice";
import type { Study } from "../../../types/types";

const mockStudy: Study = {
  id: "1",
  name: "Badanie krwi",
  code: "BK001",
  price: 100,
  etaMinutes: 30,
  category: "Krew",
  preparation: "Na czczo",
  description: "Podstawowe badanie krwi",
};

describe("cartSlice", () => {
  let state: ReturnType<typeof cartReducer>;

  beforeEach(() => {
    state = { items: [] };
    vi.clearAllMocks();
  });

  it("should add an item to the cart", () => {
    state = cartReducer(state, addToCart(mockStudy));
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it("should increase quantity if the same item is added", () => {
    state = cartReducer(state, addToCart(mockStudy));
    state = cartReducer(state, addToCart(mockStudy));
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it("should remove an item from the cart", () => {
    state = cartReducer(state, addToCart(mockStudy));
    state = cartReducer(state, removeFromCart("1"));
    expect(state.items.length).toBe(0);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it("should increase item quantity", () => {
    state = cartReducer(state, addToCart(mockStudy));
    state = cartReducer(state, increaseQuantity("1"));
    expect(state.items[0].quantity).toBe(2);
  });

  it("should decrease item quantity", () => {
    state = cartReducer(state, addToCart(mockStudy));
    state = cartReducer(state, addToCart(mockStudy));
    state = cartReducer(state, decreaseQuantity("1"));
    expect(state.items[0].quantity).toBe(1);
  });

  it("should remove item if quantity reaches 0", () => {
    state = cartReducer(state, addToCart(mockStudy));
    state = cartReducer(state, decreaseQuantity("1"));
    expect(state.items.length).toBe(0);
  });

  it("should clear the cart", () => {
    state = cartReducer(state, addToCart(mockStudy));
    state = cartReducer(state, clearCart());
    expect(state.items.length).toBe(0);
    expect(localStorage.removeItem).toHaveBeenCalledWith("cart");
  });
});
