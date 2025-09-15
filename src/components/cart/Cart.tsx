import { useAppDispatch } from "../../hooks/hooks";
import { useCartCalculations } from "../../hooks/useCartCalculations";
import type { AppDispatch } from "../../store";
import { CartItem } from "./CartItem";
import { clearCart } from "./cartSlice";
import { CartSummary } from "./CartSummary";
import { ClearCartButton } from "./ClearCartButton";
import { EmptyCart } from "./EmptyCart";

export const Cart = () => {
  const dispatch = useAppDispatch<AppDispatch>();

  const { totalPrice, totalTime, totalItems, items } = useCartCalculations();

  const handleClearCart = () => dispatch(clearCart());

  return (
    <>
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Koszyk badań</h2>
          <ul className="space-y-4 mb-6">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <h3 className="text-2xl font-bold mb-4">Podsumowanie</h3>
          <CartSummary
            totalPrice={totalPrice}
            totalTime={totalTime}
            totalItems={totalItems}
          />
          <ClearCartButton
            onClear={handleClearCart}
            itemsCount={items.length}
          />
        </div>
      )}
    </>
  );
};
