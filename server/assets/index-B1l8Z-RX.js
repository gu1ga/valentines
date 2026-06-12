import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { P as PASSCODE } from "./memories-DszWNTAI.js";
function LoginPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [shake, setShake] = useState(false);
  const [err, setErr] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErr("Diga seu nome primeiro💗");
      triggerShake();
      return;
    }
    if (code.trim().toLowerCase() === "guilherme") {
      setErr("hmm, não seria tão óbivo… eu sou seu ... ??");
      triggerShake();
      return;
    }
    if (code.trim().toLowerCase() === "namorado") {
      setErr("É verdade, mas carinhosamente, eu sou seu ... ??");
      triggerShake();
      return;
    }
    if (code.trim().toLowerCase() === "amorzinho" || code.trim().toLowerCase() === "amor") {
      setErr("Fico feliz em ser, mas quando estou cheio de amor e solto aquela poesia, eu sou ... ??");
      triggerShake();
      return;
    }
    if (code.trim().toLowerCase() === "brega") {
      setErr("No diminutivo...");
      triggerShake();
      return;
    }
    if (code.trim().toLowerCase() !== PASSCODE.toLowerCase()) {
      setErr("hmm, ainda não é essa…");
      triggerShake();
      return;
    }
    sessionStorage.setItem("valentine", JSON.stringify({
      name: "Raíssa",
      ok: true
    }));
    navigate({
      to: "/rail"
    });
  };
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center px-4 relative overflow-hidden", style: {
    background: "radial-gradient(ellipse at top, #fde7e1 0%, #f7d9d2 35%, #e9c9d6 70%, #c9d9e3 100%)"
  }, children: [
    /* @__PURE__ */ jsx(FloatingHearts, {}),
    /* @__PURE__ */ jsxs("form", { onSubmit, className: `relative z-10 w-full max-w-sm bg-white/90 backdrop-blur rounded-2xl p-7 shadow-[0_20px_50px_-20px_rgba(120,40,60,0.45)] border border-white ${shake ? "animate-[shake_0.45s_ease]" : ""}`, children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center text-[#b23a48] leading-none", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "2.6rem"
      }, children: "Como você consegue ser tão linda?" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-[#7a4a55] mt-1", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "1.2rem"
      }, children: "Só uma mulher tem o login e senha do meu coração, digite o nome dela abaixo:" }),
      /* @__PURE__ */ jsx("label", { className: "block mt-6 text-sm font-medium text-[#5a2230]", children: "Seu Nome" }),
      /* @__PURE__ */ jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. mon amour", className: "mt-1 w-full rounded-lg border border-[#e7c9c9] bg-white px-3 py-2.5 text-[#2b1b1b] outline-none focus:border-[#b23a48] focus:ring-2 focus:ring-[#f7c8c8] transition" }),
      /* @__PURE__ */ jsx("label", { className: "block mt-4 text-sm font-medium text-[#5a2230]", children: "Senha" }),
      /* @__PURE__ */ jsx("input", { type: "password", value: code, onChange: (e) => setCode(e.target.value), placeholder: "•••••••", className: "mt-1 w-full rounded-lg border border-[#e7c9c9] bg-white px-3 py-2.5 text-[#2b1b1b] outline-none focus:border-[#b23a48] focus:ring-2 focus:ring-[#f7c8c8] transition" }),
      err && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-[#b23a48] text-center", children: err }),
      /* @__PURE__ */ jsx("button", { type: "submit", className: "mt-6 w-full rounded-full bg-[#b23a48] text-white py-3 font-medium tracking-wide hover:bg-[#9a2f3c] active:scale-[0.98] transition shadow-[0_8px_20px_-8px_rgba(178,58,72,0.7)]", children: "Abra meu coração 💌" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-[#8a6e6e]", style: {
        fontFamily: "Caveat, cursive",
        fontSize: "1.05rem"
      }, children: "(Hey, docinho… a senha tem a ver comigo, quem eu sou?)" })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      ` })
  ] });
}
function FloatingHearts() {
  const hearts = Array.from({
    length: 14
  });
  return /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "absolute inset-0 overflow-hidden", children: [
    hearts.map((_, i) => {
      const left = i * 7.3 % 100;
      const delay = i % 7 * 0.7;
      const dur = 9 + i % 5;
      const size = 14 + i * 3 % 18;
      return /* @__PURE__ */ jsx("span", { className: "absolute text-[#e98a9c]/70 select-none", style: {
        left: `${left}%`,
        bottom: `-40px`,
        fontSize: `${size}px`,
        animation: `floatUp ${dur}s linear ${delay}s infinite`
      }, children: "♥" }, i);
    }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-110vh) rotate(40deg); opacity: 0; }
        }
      ` })
  ] });
}
export {
  LoginPage as component
};
