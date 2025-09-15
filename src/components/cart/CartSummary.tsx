import { formatPrice } from "../../utils/formatting";

interface CartSummaryProps {
  totalPrice: number;
  totalTime: number;
  totalItems: number;
}

export const CartSummary = ({
  totalPrice,
  totalTime,
  totalItems,
}: CartSummaryProps) => (
  <div className="space-y-2 border-t pt-4">
    <div className="flex justify-between">
      <span className="">Łączna cena:</span>
      <span className="font-semibold">{formatPrice(totalPrice)}</span>
    </div>
    <div className="flex justify-between">
      <span className="">Łączny czas wykonania:</span>
      <span className="font-semibold">{totalTime} min</span>
    </div>
    <div className="flex justify-between">
      <span className="">Ilość badań:</span>
      <span className="font-semibold">{totalItems}</span>
    </div>
  </div>
);
