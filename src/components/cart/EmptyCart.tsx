export const EmptyCart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Koszyk badań</h2>
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium">Koszyk jest pusty</h3>
        <p className="mt-1">Dodaj badania do koszyka, aby zobaczyć je tutaj.</p>
      </div>
    </div>
  );
};
