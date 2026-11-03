type BrandWordmarkProps = {
  className?: string;
};

export function BrandWordmark({ className = "" }: BrandWordmarkProps) {
  return (
    <span className={`brand-wordmark ${className}`}>
      HARMON
      <span className="brand-wordmark__ia">IA</span>
    </span>
  );
}