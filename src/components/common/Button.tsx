type ButtonProps = {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Button = ({
  label,
  onClick,
  children,
  className,
}: ButtonProps) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`px-2 py-1 rounded-lg text-sm font-medium transition-colors ${className}`}
  >
    {children}
  </button>
);
