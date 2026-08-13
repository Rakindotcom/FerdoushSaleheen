"use client";

import {
  AlertCircle,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { AudiobookTrack } from "@/lib/audiobook-data";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "ferdous-salehin-audiobook-progress:v1";
const playbackRates = [0.75, 1, 1.25, 1.5, 2] as const;

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) return "00:00";

  const totalSeconds = Math.floor(value);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return hours > 0
    ? `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    : `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function AudiobookPlayer({ tracks, locale = "bn" }: { tracks: AudiobookTrack[]; locale?: "bn" | "en" }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const lastSavedSecond = useRef(-1);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const track = tracks[trackIndex];
  const copy = locale === "en" ? {
    playError: "The audio could not be played. Please try again.",
    nextError: "The next track could not be played. Please try again.",
    missing: "This audio is currently unavailable.",
    nowPlaying: "Now playing",
    track: "Track",
    seek: "Change audio position",
    loading: "Loading...",
    previous: "Previous track",
    pause: "Pause audio",
    play: "Play audio",
    next: "Next track",
    volume: "Volume",
    speed: "Speed",
  } : {
    playError: "অডিওটি চালু করা যায়নি। আবার চেষ্টা করুন।",
    nextError: "পরবর্তী অংশটি চালু করা যায়নি। আবার চেষ্টা করুন।",
    missing: "এই অডিওটি বর্তমানে পাওয়া যাচ্ছে না।",
    nowPlaying: "এখন শুনছেন",
    track: "ট্র্যাক",
    seek: "অডিওর অবস্থান পরিবর্তন করুন",
    loading: "লোড হচ্ছে…",
    previous: "আগের ট্র্যাক",
    pause: "অডিও বিরতি দিন",
    play: "অডিও চালু করুন",
    next: "পরবর্তী ট্র্যাক",
    volume: "ভলিউম",
    speed: "গতি",
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.playbackRate = playbackRate;
  }, [playbackRate, volume]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setError(null);
    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setError(copy.playError);
    }
  };

  const selectTrack = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= tracks.length) return;

    const shouldContinuePlaying = isPlaying;
    setTrackIndex(nextIndex);
    setCurrentTime(0);
    setDuration(0);
    setError(null);

    window.setTimeout(() => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.load();
      if (shouldContinuePlaying) {
        void audio.play().catch(() => {
          setError(copy.nextError);
        });
      }
    }, 0);
  };

  const restoreProgress = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);

    try {
      const savedValue = window.localStorage.getItem(STORAGE_KEY);
      if (!savedValue) return;

      const saved = JSON.parse(savedValue) as { src?: string; currentTime?: number };
      if (
        saved.src === track.src &&
        typeof saved.currentTime === "number" &&
        saved.currentTime > 0 &&
        saved.currentTime < audio.duration - 5
      ) {
        audio.currentTime = saved.currentTime;
        setCurrentTime(saved.currentTime);
      }
    } catch {
      // Resume is optional; playback still works when storage is unavailable.
    }
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(audio.currentTime);
    const currentSecond = Math.floor(audio.currentTime);
    if (currentSecond - lastSavedSecond.current < 5) return;

    lastSavedSecond.current = currentSecond;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ src: track.src, currentTime: audio.currentTime }),
      );
    } catch {
      // Playback still works when browser storage is unavailable.
    }
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  if (!track) return null;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#d6a642]/25 bg-[#0d0c0a] shadow-[0_30px_90px_-45px_rgba(214,166,66,.45)]">
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
        onLoadedMetadata={restoreProgress}
        onTimeUpdate={updateProgress}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          if (trackIndex < tracks.length - 1) selectTrack(trackIndex + 1);
        }}
        onError={() => {
          setIsPlaying(false);
          setError(copy.missing);
        }}
      />

      <div className="border-b border-white/[0.08] px-6 py-6 sm:px-8">
        <span className="text-xs font-semibold tracking-[0.13em] text-[#d6a642]">
          {copy.nowPlaying} · {copy.track} {trackIndex + 1}/{tracks.length}
        </span>
        <h2 className="mt-2 text-2xl font-medium text-white sm:text-3xl">{track.title}</h2>
      </div>

      <div className="space-y-7 p-6 sm:p-8">
        <div>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={1}
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => seek(Number(event.target.value))}
            aria-label={copy.seek}
            className="h-2 w-full cursor-pointer accent-[#d6a642]"
          />
          <div className="mt-2 flex justify-between font-mono text-xs text-[#8e8a81]">
            <span>{formatTime(currentTime)}</span>
            <span>{duration ? formatTime(duration) : copy.loading}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => selectTrack(trackIndex - 1)}
              disabled={trackIndex === 0}
              aria-label={copy.previous}
              className="grid size-11 place-items-center rounded-full border border-white/10 text-[#b8b3aa] transition hover:border-[#d6a642]/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <SkipBack className="size-5 fill-current" />
            </button>
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? copy.pause : copy.play}
              className="grid size-16 place-items-center rounded-full bg-[#d6a642] text-black shadow-[0_12px_35px_rgba(214,166,66,.25)] transition hover:scale-105 hover:bg-[#efc66a]"
            >
              {isPlaying ? <Pause className="size-7 fill-current" /> : <Play className="ml-1 size-7 fill-current" />}
            </button>
            <button
              type="button"
              onClick={() => selectTrack(trackIndex + 1)}
              disabled={trackIndex === tracks.length - 1}
              aria-label={copy.next}
              className="grid size-11 place-items-center rounded-full border border-white/10 text-[#b8b3aa] transition hover:border-[#d6a642]/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <SkipForward className="size-5 fill-current" />
            </button>
          </div>

          <label className="flex items-center gap-3 text-xs text-[#969289]">
            <Volume2 className="size-4" aria-hidden="true" />
            <span className="sr-only">{copy.volume}</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={(event) => setVolume(Number(event.target.value))}
              aria-label={copy.volume}
              className="w-24 cursor-pointer accent-[#d6a642]"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 border-t border-white/[0.08] pt-6">
          <span className="mr-2 text-xs text-[#77736b]">{copy.speed}</span>
          {playbackRates.map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => setPlaybackRate(rate)}
              aria-pressed={playbackRate === rate}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition",
                playbackRate === rate
                  ? "border-[#d6a642] bg-[#d6a642]/15 text-[#efc66a]"
                  : "border-white/10 text-[#8e8a81] hover:border-white/25 hover:text-white",
              )}
            >
              {rate}×
            </button>
          ))}
        </div>

        {error ? (
          <p role="alert" className="flex items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm text-red-200">
            <AlertCircle className="size-4 shrink-0" /> {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}
