import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { S as SONG_URL, a as SONG_TITLE, m as memories } from "./memories-DszWNTAI.js";
function BackgroundAudio() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.55;
    a.muted = false;
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);
  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = !a.muted;
    setMuted(a.muted);
    if (!a.muted && a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {
      });
    }
  };
  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {
      });
    } else {
      a.pause();
      setPlaying(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-2 shadow-lg border border-[#e7d8c9]", children: [
    /* @__PURE__ */ jsx("audio", { ref: audioRef, src: SONG_URL, loop: true, preload: "auto" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: togglePlay,
        "aria-label": playing ? "Pause music" : "Play music",
        className: "w-9 h-9 rounded-full bg-[#b23a48] text-white flex items-center justify-center text-sm shadow-sm hover:bg-[#9a2f3c] transition",
        children: playing ? "❚❚" : "▶"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggleMute,
        "aria-label": muted ? "Unmute" : "Mute",
        className: "w-9 h-9 rounded-full bg-[#f7c8c8] text-[#5a2230] flex items-center justify-center text-base hover:bg-[#f1b2b2] transition",
        children: muted ? "🔇" : "🔊"
      }
    ),
    /* @__PURE__ */ jsxs(
      "span",
      {
        className: "hidden sm:inline text-sm text-[#5a2230] pr-1",
        style: { fontFamily: "Caveat, cursive", fontSize: "1.1rem" },
        children: [
          muted ? "tap 🔊 for " : "",
          SONG_TITLE
        ]
      }
    )
  ] });
}
function RailPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);
  const total = memories.length;
  useEffect(() => {
    const raw = sessionStorage.getItem("valentine");
    if (!raw) {
      navigate({
        to: "/"
      });
      return;
    }
    try {
      const v = JSON.parse(raw);
      if (!v.ok) navigate({
        to: "/"
      });
      setName(v.name || "");
    } catch {
      navigate({
        to: "/"
      });
    }
  }, [navigate]);
  const next = () => setStep((s) => Math.min(s + 1, total - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const m = memories[step];
  const atEnd = step === total - 1;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-[100dvh] relative overflow-hidden flex flex-col", style: {
    background: "linear-gradient(180deg, #fde7e1 0%, #f7d9d2 25%, #e9c9d6 55%, #c9d9e3 85%, #aac3d6 100%)"
  }, children: [
    /* @__PURE__ */ jsxs("header", { className: "relative z-10 px-5 pt-6 pb-2 text-center shrink-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[#7a4a55]", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "1.05rem"
      }, children: "A little train of moments" }),
      /* @__PURE__ */ jsx("h1", { className: "text-[#b23a48] leading-tight mt-0.5", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "2rem"
      }, children: "💌 Happy Valentine's, Raísa! 💌" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-5 mt-2 shrink-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-md", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-3 right-3 top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-[#b23a48]/40" }),
        /* @__PURE__ */ jsx("div", { className: "relative flex justify-between items-center", children: memories.map((_, i) => {
          const done = i <= step;
          return /* @__PURE__ */ jsx("button", { onClick: () => setStep(i), "aria-label": `Memory ${i + 1}`, className: `w-3.5 h-3.5 rounded-full border-2 transition-all ${i === step ? "bg-[#b23a48] border-[#b23a48] scale-125 shadow" : done ? "bg-[#b23a48]/70 border-[#b23a48]/70" : "bg-white border-[#b23a48]/40"}` }, i);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-center mt-1 text-[#7a4a55]", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "1rem"
      }, children: [
        m.station,
        " Station"
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "relative z-10 flex-1 flex items-center justify-center px-5 py-4", children: /* @__PURE__ */ jsxs("button", { onClick: next, className: "group relative block w-full max-w-[320px] focus:outline-none", "aria-label": "Next memory", children: [
      /* @__PURE__ */ jsx(PolaroidCard, { src: m.src, caption: m.caption, date: m.date }, step),
      /* @__PURE__ */ jsx("span", { className: "absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full text-[#7a4a55] whitespace-nowrap", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "1.05rem"
      }, children: atEnd ? "tap to relive ♥" : "tap for the next stop →" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-5 pb-6 pt-8 flex items-center justify-between gap-3 shrink-0", children: [
      /* @__PURE__ */ jsx("button", { onClick: prev, disabled: step === 0, className: "px-4 py-2 rounded-full bg-white/80 backdrop-blur text-[#5a2230] border border-[#e7c9c9] shadow-sm disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "1.15rem"
      }, children: "← back" }),
      /* @__PURE__ */ jsx("button", { onClick: () => atEnd ? setStep(0) : next(), className: "px-5 py-2 rounded-full bg-[#b23a48] text-white shadow active:scale-95 transition", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "1.2rem"
      }, children: atEnd ? "start over ♥" : "next →" })
    ] }),
    /* @__PURE__ */ jsx(BackgroundAudio, {})
  ] });
}
function PolaroidCard({
  src,
  caption,
  date
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 pb-5 rounded-sm shadow-[0_18px_40px_-12px_rgba(95,40,40,0.45)] mx-auto", style: {
    transform: "rotate(-2deg)",
    animation: "polaroidIn 500ms ease both"
  }, children: [
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#f4e6c1]/80 rotate-[-4deg] shadow-sm" }),
    /* @__PURE__ */ jsx("div", { className: "w-full aspect-square overflow-hidden bg-[#f1ece4]", children: /* @__PURE__ */ jsx("img", { src, alt: caption, className: "w-full h-full object-cover pointer-events-none select-none", draggable: false }) }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-center text-[#3a2a2a] leading-snug px-1", style: {
      fontFamily: "Caveat, cursive",
      fontSize: "1.45rem"
    }, children: caption }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-[#8a6e6e] -mt-1", style: {
      fontFamily: "Caveat, cursive",
      fontSize: "1rem"
    }, children: date }),
    /* @__PURE__ */ jsx("style", { children: `@keyframes polaroidIn {
        0% { opacity: 0; transform: rotate(-6deg) translateY(20px) scale(.96); }
        100% { opacity: 1; transform: rotate(-2deg) translateY(0) scale(1); }
      }` })
  ] });
}
export {
  RailPage as component
};
