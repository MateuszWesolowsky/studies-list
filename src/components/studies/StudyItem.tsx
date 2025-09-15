import { formatPrice } from "../../utils/formatting";
import type { Study } from "../../types/types";
import { useAppDispatch } from "../../hooks/hooks";
import type { AppDispatch } from "../../store";
import { addToCart } from "../cart/cartSlice";

interface StudyItemProps {
  study: Study;
  onClick: () => void;
}

export const StudyItem = ({ study, onClick }: StudyItemProps) => {
  const dispatch = useAppDispatch<AppDispatch>();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart(study));
  };

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold">{study.name}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {study.code}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
        <div>
          <span>Kategoria:</span>
          <p className="font-medium">{study.category}</p>
        </div>
        <div>
          <span>Czas:</span>
          <p className="font-medium">{study.etaMinutes} min</p>
        </div>
        <div>
          <span>Przygotowanie:</span>
          <p className="font-medium">{study.preparation}</p>
        </div>
        <div>
          <span>Cena:</span>
          <p className="font-medium text-green-600">
            {formatPrice(study.price)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between items-center">
        <button
          data-testid="Dodaj do koszyka"
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
        >
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};
