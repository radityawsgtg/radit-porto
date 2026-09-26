import type { CSSProperties } from "react";

export type DecoItem = {
  /** File name in /public/deco, without extension */
  src: string;
  /** Position + size utilities, e.g. "top-[40%] -left-10 w-40 md:w-72" */
  className: string;
  rotate?: number;
  delay?: number;
};

// By default illustrations sit behind page content (parent <main> must be `isolate` so -z-10 stays inside it).
// `front` layers them over cards for depth; place those on card corners, never over text.
export default function Deco({ items, front = false }: { items: DecoItem[]; front?: boolean }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${front ? "z-30" : "-z-10"}`}>
      {items.map((item, i) => (
        <img
          key={item.src + i}
          src={`/deco/${item.src}.webp`}
          alt=""
          loading="lazy"
          className={`deco-float absolute h-auto ${item.className}`}
          style={{
            "--r": `${item.rotate ?? 0}deg`,
            animationDelay: `${item.delay ?? -i * 1.7}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
