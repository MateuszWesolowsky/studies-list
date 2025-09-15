import { formatPrice } from "../../utils/formatting";
import type { Study } from "../../types/types";
import type { AppDispatch } from "../../store";
import { useAppDispatch } from "../../hooks/hooks";
import { addToCart } from "../cart/cartSlice";
import { useEffect } from "react";
import { Button } from "../common/Button";

interface StudyModalProps {
  study: Study;
  isOpen: boolean;
  onClose: () => void;
}

export const StudyModal = ({ study, isOpen, onClose }: StudyModalProps) => {
  const dispatch = useAppDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(study));
    onClose();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{study.name}</h2>
          <button
            onClick={onClose}
            className=" hover:text-gray-400 text-2xl font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-medium">Kod badania:</span>
              <p className="text-lg">{study.code}</p>
            </div>
            <div>
              <span className="font-medium">Kategoria:</span>
              <p className="text-lg">{study.category}</p>
            </div>
            <div>
              <span className="font-medium">Cena:</span>
              <p className="text-lg text-green-600">
                {formatPrice(study.price)}
              </p>
            </div>
            <div>
              <span className="font-medium">Czas wykonania:</span>
              <p className="text-lg">{study.etaMinutes} minut</p>
            </div>
            <div>
              <span className="font-medium">Przygotowanie:</span>
              <p className="text-lg">{study.preparation}</p>
            </div>
          </div>

          <div>
            <span className="font-medium">Opis badania:</span>
            <p className="mt-2">{study.description}</p>
          </div>
        </div>

        <div className="p-6 border-t flex justify-end space-x-4">
          <Button
            label="Zamknij modal"
            onClick={onClose}
            className="px-6 py-2 border bg-red-600 hover:bg-red-700 rounded-lg text-white  transition-colors cursor-pointer"
          >
            Zamknij
          </Button>
          <Button
            label="Dodaj do koszyka"
            onClick={handleAddToCart}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Dodaj do koszyka
          </Button>
        </div>
      </div>
    </div>
  );
};
