interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => (
  <div className="flex justify-center gap-2 mt-6">
    <button
      onClick={() => onPageChange(page - 1)}
      disabled={page === 1}
      className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
    >
      Poprzednia
    </button>
    <span>
      Strona {page} z {totalPages}
    </span>
    <button
      onClick={() => onPageChange(page + 1)}
      disabled={page === totalPages}
      className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
    >
      Następna
    </button>
  </div>
);
