import { useAppSelector } from "./hooks";
import type { RootState } from "../store";

export const useCartCalculations = () => {
  const items = useAppSelector((state: RootState) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalTime = items.reduce(
    (sum, item) => sum + item.etaMinutes * item.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return { totalPrice, totalTime, totalItems, items };
};
