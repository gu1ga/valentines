import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { memories } from "@/data/memories";
import { BackgroundAudio } from "@/components/BackgroundAudio";

export const Route = createFileRoute("/rail")({
  head: () => ({
    meta: [
      { title: "Te amo, Raíssa 💌" },
      { name: "description", content: "A little train of moments, just for you." },
    ],
  }),
  component: RailPage,
});

function RailPage() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [step, setStep] = useState(0);
  const total = memories.length;

  useEffect(() => {
    const raw = sessionStorage.getItem("valentine");
    if (!raw) {
      navigate({ to: "/" });
      return;
    }
    try {
      const v = JSON.parse(raw);
      if (!v.ok) navigate({ to: "/" });
      setName(v.name || "");
    } catch {
      navigate({ to: "/" });
    }
  }, [navigate]);

  const next = () => setStep((s) => Math.min(s + 1, total - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const m = memories[step];
  const atEnd = step === total - 1;

  return (
    <div
      className="min-h-[100dvh] relative overflow-hidden flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #fde7e1 0%, #f7d9d2 25%, #e9c9d6 55%, #c9d9e3 85%, #aac3d6 100%)",
      }}
    >
      {/* Header */}
      <header className="relative z-10 px-5 pt-6 pb-2 text-center shrink-0">
        <p
          className="text-[#7a4a55]"
          style={{ fontFamily: "Caveat, cursive", fontSize: "1.05rem" }}
        >
          A little train of moments
        </p>
        <h1
          className="text-[#b23a48] leading-tight mt-0.5"
          style={{ fontFamily: "Caveat, cursive", fontSize: "2rem" }}
        >
          💌 Happy Valentine's, Raísa! 💌
        </h1>
      </header>

      {/* Train track / progress */}
      <div className="relative z-10 px-5 mt-2 shrink-0">
        <div className="relative mx-auto max-w-md">
          <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-[#b23a48]/40" />
          <div className="relative flex justify-between items-center">
            {memories.map((_, i) => {
              const done = i <= step;
              return (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  aria-label={`Memory ${i + 1}`}
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    i === step
                      ? "bg-[#b23a48] border-[#b23a48] scale-125 shadow"
                      : done
                      ? "bg-[#b23a48]/70 border-[#b23a48]/70"
                      : "bg-white border-[#b23a48]/40"
                  }`}
                />
              );
            })}
          </div>
        </div>
        <p
          className="text-center mt-1 text-[#7a4a55]"
          style={{ fontFamily: "Caveat, cursive", fontSize: "1rem" }}
        >
          {m.station} Station  
        </p>
      </div>

      {/* Polaroid step */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-5 py-4">
        <button
          onClick={next}
          className="group relative block w-full max-w-[320px] focus:outline-none"
          aria-label="Next memory"
        >
          <PolaroidCard key={step} src={m.src} caption={m.caption} date={m.date} />
          <span
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full text-[#7a4a55] whitespace-nowrap"
            style={{ fontFamily: "Caveat, cursive", fontSize: "1.05rem" }}
          >
            {atEnd ? "tap to relive ♥" : "tap for the next stop →"}
          </span>
        </button>
      </main>

      {/* Controls */}
      <div className="relative z-10 px-5 pb-6 pt-8 flex items-center justify-between gap-3 shrink-0">
        <button
          onClick={prev}
          disabled={step === 0}
          className="px-4 py-2 rounded-full bg-white/80 backdrop-blur text-[#5a2230] border border-[#e7c9c9] shadow-sm disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition"
          style={{ fontFamily: "Caveat, cursive", fontSize: "1.15rem" }}
        >
          ← back
        </button>
        <button
          onClick={() => (atEnd ? setStep(0) : next())}
          className="px-5 py-2 rounded-full bg-[#b23a48] text-white shadow active:scale-95 transition"
          style={{ fontFamily: "Caveat, cursive", fontSize: "1.2rem" }}
        >
          {atEnd ? "start over ♥" : "next →"}
        </button>
      </div>

      <BackgroundAudio />
    </div>
  );
}

function PolaroidCard({
  src,
  caption,
  date,
}: {
  src: string;
  caption: string;
  date: string;
}) {
  return (
    <div
      className="bg-white p-3 pb-5 rounded-sm shadow-[0_18px_40px_-12px_rgba(95,40,40,0.45)] mx-auto"
      style={{
        transform: "rotate(-2deg)",
        animation: "polaroidIn 500ms ease both",
      }}
    >
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#f4e6c1]/80 rotate-[-4deg] shadow-sm"
      />
      <div className="w-full aspect-square overflow-hidden bg-[#f1ece4]">
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover pointer-events-none select-none"
          draggable={false}
        />
      </div>
      <p
        className="mt-3 text-center text-[#3a2a2a] leading-snug px-1"
        style={{ fontFamily: "Caveat, cursive", fontSize: "1.45rem" }}
      >
        {caption}
      </p>
      <p
        className="text-center text-[#8a6e6e] -mt-1"
        style={{ fontFamily: "Caveat, cursive", fontSize: "1rem" }}
      >
        {date}
      </p>
      <style>{`@keyframes polaroidIn {
        0% { opacity: 0; transform: rotate(-6deg) translateY(20px) scale(.96); }
        100% { opacity: 1; transform: rotate(-2deg) translateY(0) scale(1); }
      }`}</style>
    </div>
  );
}
