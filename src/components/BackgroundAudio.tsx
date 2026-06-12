import { useEffect, useRef, useState } from "react";
import { SONG_URL, SONG_TITLE } from "@/data/memories";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.55;
    a.muted = false;
    a.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = !a.muted;
    setMuted(a.muted);
    if (!a.muted && a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-2 shadow-lg border border-[#e7d8c9]">
      <audio ref={audioRef} src={SONG_URL} loop preload="auto" />
      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause music" : "Play music"}
        className="w-9 h-9 rounded-full bg-[#b23a48] text-white flex items-center justify-center text-sm shadow-sm hover:bg-[#9a2f3c] transition"
      >
        {playing ? "❚❚" : "▶"}
      </button>
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute" : "Mute"}
        className="w-9 h-9 rounded-full bg-[#f7c8c8] text-[#5a2230] flex items-center justify-center text-base hover:bg-[#f1b2b2] transition"
      >
        {muted ? "🔇" : "🔊"}
      </button>
      <span
        className="hidden sm:inline text-sm text-[#5a2230] pr-1"
        style={{ fontFamily: "Caveat, cursive", fontSize: "1.1rem" }}
      >
        {muted ? "tap 🔊 for " : ""}{SONG_TITLE}
      </span>
    </div>
  );
}
