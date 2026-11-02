import React from "react";

export interface BentoGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
  ariaLabel?: string;
}

export function BentoGrid({
  children,
  columns = 3,
  className = "",
  ariaLabel,
}: BentoGridProps) {
  const colClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      role={ariaLabel ? "group" : undefined}
      aria-label={ariaLabel}
      className={`grid grid-cols-1 auto-rows-fr gap-4 ${colClasses[columns]} sm:gap-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function BentoItem({
  children,
  span = 1,
  className = "",
}: {
  children: React.ReactNode;
  span?: 1 | 2 | 3;
  className?: string;
}) {
  const spanClasses = {
    1: "col-span-1",
    2: "col-span-1 md:col-span-2",
    3: "col-span-1 md:col-span-2 lg:col-span-3",
  };

  return (
    <div className={`${spanClasses[span]} ${className}`}>
      {children}
    </div>
  );
}
