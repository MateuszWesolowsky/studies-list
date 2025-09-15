interface ClearCartButtonProps {
  onClear: () => void;
  itemsCount: number;
}

export const ClearCartButton = ({
  onClear,
  itemsCount,
}: ClearCartButtonProps) => {
  if (itemsCount === 0) return null;

  return (
    <button
      onClick={onClear}
      className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
    >
      Wyczyść koszyk
    </button>
  );
};
