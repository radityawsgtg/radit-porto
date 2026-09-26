import type { CSSProperties } from "react";

// Seeded PRNG (mulberry32) so the layout is identical on every build. Change the seed for a new arrangement.
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = seeded(20260926);
const between = (a: number, b: number) => +(a + rand() * (b - a)).toFixed(2);

const ORBS = [
  { top: -12, left: -10, size: 46, color: "rgba(111, 32, 194, 0.45)", dur: 18 },
  { top: 30, left: 72, size: 40, color: "rgba(31, 138, 150, 0.28)", dur: 22 },
  { top: 68, left: -8, size: 38, color: "rgba(155, 44, 143, 0.30)", dur: 20 },
  { top: 8, left: 44, size: 26, color: "rgba(255, 216, 140, 0.10)", dur: 16 },
  { top: 78, left: 60, size: 34, color: "rgba(111, 32, 194, 0.35)", dur: 24 },
];

const SPARKLES = Array.from({ length: 26 }, () => ({
  top: between(2, 97),
  left: between(1, 98),
  size: between(8, 20),
  lo: between(0.12, 0.25),
  hi: between(0.5, 0.9),
  dur: between(2.5, 6),
  delay: between(-6, 0),
}));

// Puzzle outlines hug the left/right edges so they frame content instead of sitting under text.
const PUZZLES = Array.from({ length: 8 }, (_, i) => {
  const left = i % 2 === 0;
  return {
    top: +(6 + (i / 7) * 84 + between(-3, 3)).toFixed(2),
    left: left ? between(-2, 4) : between(90, 96),
    size: between(44, 80),
    gold: rand() < 0.35,
    rot: between(-40, 40),
    dur: between(6, 10),
    delay: between(-8, 0),
  };
});

type Vars = CSSProperties & Record<`--${string}`, string | number>;

export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {ORBS.map((o, i) => (
        <div
          key={`orb-${i}`}
          className="orb-breathe absolute rounded-full"
          style={{
            top: `${o.top}%`,
            left: `${o.left}%`,
            width: `${o.size}vmax`,
            height: `${o.size}vmax`,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            animationDuration: `${o.dur}s`,
            animationDelay: `${-i * 3}s`,
          }}
        />
      ))}

      {PUZZLES.map((p, i) => (
        <svg
          key={`puz-${i}`}
          viewBox="0 0 100 100"
          className="puzzle-float absolute"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            color: p.gold ? "#FFD88C" : "#BB83FF",
            opacity: p.gold ? 0.22 : 0.28,
            "--r": `${p.rot}deg`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          } as Vars}
        >
          <path
            d="M20 30 H40 C36 14 64 14 60 30 H80 V50 C96 46 96 74 80 70 V90 H60 C64 74 36 74 40 90 H20 V70 C36 74 36 46 20 50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {SPARKLES.map((s, i) => (
        <svg
          key={`spk-${i}`}
          viewBox="0 0 24 24"
          className="sparkle-twinkle absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            "--o-lo": s.lo,
            "--o-hi": s.hi,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          } as Vars}
        >
          <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" fill="#FFD88C" />
        </svg>
      ))}
    </div>
  );
}
