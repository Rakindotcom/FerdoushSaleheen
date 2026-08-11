"use client";

import { Pause, Play, RotateCcw, RotateCw, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

export function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setProgress((value) => (value >= 100 ? 0 : value + 0.12)), 100);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md md:p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <span className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#d6a642]">নির্বাচিত অডিও</span>
          <p className="truncate text-base font-medium text-white">আলহামদুলিল্লাহি রব্বিল আলামিন</p>
        </div>
        <div className="equalizer flex h-5 items-end gap-1" aria-hidden="true">
          {[10, 17, 13, 19].map((height, index) => <span key={index} className="w-0.5 rounded-full bg-[#d6a642]" style={{ height }} />)}
        </div>
      </div>

      <div className="mb-5">
        <div className="relative h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#986d25,#e7bb61)]" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-[0.65rem] tabular-nums text-[#8e8a80]">
          <span>০৩:৪২</span><span>১৮:৪২</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button type="button" aria-label="১৫ সেকেন্ড পেছনে" className="grid size-10 place-items-center rounded-full text-[#aaa69c] hover:bg-white/5 hover:text-white"><RotateCcw className="size-4" /></button>
        <button
          type="button"
          aria-label={playing ? "বিরতি দিন" : "শুনুন"}
          aria-pressed={playing}
          onClick={() => setPlaying((value) => !value)}
          className="grid size-14 place-items-center rounded-full bg-[linear-gradient(135deg,#b1802e,#ebc368)] text-black shadow-[0_0_28px_-8px_rgba(214,166,66,.8)] transition hover:scale-105"
        >
          {playing ? <Pause className="size-5 fill-current" /> : <Play className="ml-0.5 size-5 fill-current" />}
        </button>
        <button type="button" aria-label="১৫ সেকেন্ড সামনে" className="grid size-10 place-items-center rounded-full text-[#aaa69c] hover:bg-white/5 hover:text-white"><RotateCw className="size-4" /></button>
        <button type="button" aria-label="ভলিউম" className="hidden size-10 place-items-center rounded-full text-[#aaa69c] hover:bg-white/5 hover:text-white sm:grid"><Volume2 className="size-4" /></button>
        <button type="button" aria-label="প্লেব্যাক গতি" className="grid size-10 place-items-center rounded-full text-xs font-semibold text-[#aaa69c] hover:bg-white/5 hover:text-white">১×</button>
      </div>
    </div>
  );
}
