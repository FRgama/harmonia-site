import type { CSSProperties } from "react";

const STARS = [
  { x: 8, y: 18, delay: "-1.2s", duration: "3.8s", size: "large" },
  { x: 17, y: 72, delay: "-3.1s", duration: "5.2s", size: "small" },
  { x: 26, y: 38, delay: "-0.6s", duration: "4.4s", size: "small" },
  { x: 34, y: 88, delay: "-2.4s", duration: "5.6s", size: "small" },
  { x: 43, y: 16, delay: "-4.1s", duration: "4.8s", size: "large" },
  { x: 51, y: 58, delay: "-1.8s", duration: "3.6s", size: "small" },
  { x: 60, y: 30, delay: "-3.7s", duration: "5.4s", size: "large" },
  { x: 68, y: 82, delay: "-0.9s", duration: "4.2s", size: "small" },
  { x: 77, y: 12, delay: "-2.8s", duration: "5.8s", size: "large" },
  { x: 85, y: 47, delay: "-4.5s", duration: "3.9s", size: "small" },
  { x: 94, y: 76, delay: "-1.5s", duration: "5.1s", size: "large" },
  { x: 5, y: 52, delay: "-3.4s", duration: "4.6s", size: "small" },
  { x: 39, y: 43, delay: "-0.3s", duration: "5.3s", size: "small" },
  { x: 73, y: 63, delay: "-2.1s", duration: "4.1s", size: "small" },
  { x: 90, y: 24, delay: "-4.8s", duration: "5.7s", size: "small" },
  { x: 12, y: 43, delay: "-2.7s", duration: "4.9s", size: "small" },
  { x: 22, y: 8, delay: "-0.8s", duration: "5.5s", size: "small" },
  { x: 30, y: 61, delay: "-3.6s", duration: "4.3s", size: "small" },
  { x: 47, y: 84, delay: "-1.4s", duration: "5.7s", size: "small" },
  { x: 55, y: 6, delay: "-4.3s", duration: "4.1s", size: "small" },
  { x: 64, y: 48, delay: "-0.5s", duration: "5.1s", size: "small" },
  { x: 72, y: 92, delay: "-2.3s", duration: "4.7s", size: "small" },
  { x: 81, y: 68, delay: "-3.9s", duration: "5.3s", size: "small" },
  { x: 88, y: 34, delay: "-1.1s", duration: "4.5s", size: "small" },
  { x: 97, y: 8, delay: "-3.3s", duration: "5.9s", size: "small" },
];

type SubtleStarfieldProps = {
  count?: 15 | 20 | 25;
};

export function SubtleStarfield({ count = 15 }: SubtleStarfieldProps) {
  return (
    <div className="subtle-starfield__stars" aria-hidden="true">
      {STARS.slice(0, count).map(({ x, y, delay, duration, size }) => (
        <span
          key={`${x}-${y}`}
          className={`subtle-starfield__star subtle-starfield__star--${size}`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            "--twinkle-delay": delay,
            "--twinkle-duration": duration,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
