import { useAppDispatch } from "../../hooks/hooks";
import type { AppDispatch } from "../../store";
import type { CartItem as CartItemType } from "../../types/types";
import { formatPrice } from "../../utils/formatting";
import { Button } from "../common/Button";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartSlice";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch<AppDispatch>();

  const handleRemove = () => dispatch(removeFromCart(item.id));
  const handleIncrease = () => dispatch(increaseQuantity(item.id));
  const handleDecrease = () => dispatch(decreaseQuantity(item.id));

  return (
    <li className="flex justify-between items-start pb-4 border-b last:border-b-0">
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm">Kod: {item.code}</p>
        <p className="text-sm">Ilość: {item.quantity}</p>
        <p className="text-sm">Czas: {item.etaMinutes} min</p>
        <p className="text-sm">Cena za szt.: {formatPrice(item.price)}</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
        <Button
          label="Usuń produkt"
          onClick={handleRemove}
          className="text-red-600 hover:text-red-800"
        >
          Usuń
        </Button>
        <div className="space-x-2">
          <Button
            label="Zwiększ ilość"
            onClick={handleIncrease}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            +
          </Button>

          <Button
            label="Zmniejsz ilość"
            onClick={handleDecrease}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            -
          </Button>
        </div>
      </div>
    </li>
  );
};
