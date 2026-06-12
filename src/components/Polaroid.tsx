import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  caption: string;
  date: string;
  side: "left" | "right";
  rotate: number;
};

export function Polaroid({ src, caption, date, side, rotate }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const translate = side === "left" ? "-translate-x-6" : "translate-x-6";

  return (
    <div
      ref={ref}
      className={`flex w-full ${side === "left" ? "justify-start" : "justify-end"}`}
    >
      <div
        style={{
          transform: visible
            ? `rotate(${rotate}deg) translateY(0)`
            : `rotate(${rotate}deg) translateY(24px)`,
          opacity: visible ? 1 : 0,
          transition: "opacity 700ms ease, transform 700ms ease",
        }}
        className={`relative ${translate} bg-white p-3 pb-5 shadow-[0_12px_30px_-10px_rgba(95,40,40,0.35)] rounded-sm max-w-[78%] sm:max-w-[320px]`}
      >
        {/* tape */}
        <span
          aria-hidden
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#f4e6c1]/70 rotate-[-4deg] shadow-sm"
        />
        <div className="w-full aspect-square overflow-hidden bg-[#f1ece4]">
          <img
            src={src}
            alt={caption}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <p
          className="mt-3 text-center text-[#3a2a2a] leading-snug"
          style={{ fontFamily: "Caveat, cursive", fontSize: "1.35rem" }}
        >
          {caption}
        </p>
        <p
          className="text-center text-[#8a6e6e] -mt-1"
          style={{ fontFamily: "Caveat, cursive", fontSize: "1rem" }}
        >
          {date}
        </p>
      </div>
    </div>
  );
}
