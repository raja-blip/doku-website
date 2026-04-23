"use client";

import { BellDot, ChevronLeft, ChevronRight, Files, Fingerprint, Maximize2, Users } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";

const slideIconMap = {
  users: Users,
  fingerprint: Fingerprint,
  bellDot: BellDot,
  files: Files,
} as const;

export type WalkthroughSlide = {
  title: string;
  description: string;
  videoSrc: string;
  iconKey: keyof typeof slideIconMap;
};

function enterFullscreen(video: HTMLVideoElement | null) {
  if (!video) return;
  const el = video as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
  if (el.requestFullscreen) {
    void el.requestFullscreen();
  } else if (el.webkitEnterFullscreen) {
    el.webkitEnterFullscreen();
  }
}

export function ProductWalkthrough({ slides }: { slides: WalkthroughSlide[] }) {
  const [active, setActive] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const count = slides.length;
  const safeIndex = ((active % count) + count) % count;
  const slide = slides[safeIndex];

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + count) % count);
    },
    [count],
  );

  const handleTouchStart = useCallback((event: TouchEvent<HTMLElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  }, []);

  const handleTouchEnd = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      if (touchStartX === null) return;
      const endX = event.changedTouches[0]?.clientX;
      if (typeof endX !== "number") return;

      const deltaX = endX - touchStartX;
      const minSwipeDistance = 40;

      if (deltaX > minSwipeDistance) {
        go(-1);
      } else if (deltaX < -minSwipeDistance) {
        go(1);
      }

      setTouchStartX(null);
    },
    [go, touchStartX],
  );

  const handleVolumeChange = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setIsMuted(video.muted || video.volume === 0);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.6 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;

    if (!isInView) {
      video.pause();
      return;
    }

    video.currentTime = 0;
    void video.play().catch(() => {
      // Autoplay can be blocked if browser policies change.
    });
  }, [isInView, isMuted, safeIndex]);

  return (
    <div ref={sectionRef} className="rounded-2xl border border-border bg-card p-3 sm:p-6">
      <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-start lg:gap-10">
        <div className="mx-auto flex w-full max-w-[220px] flex-col items-center gap-2 sm:max-w-[250px] lg:mx-0 lg:shrink-0 lg:max-w-[280px]">
          <div
            className="relative w-full touch-pan-y overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-lg ring-1 ring-white/5"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <video
              ref={videoRef}
              key={slide.videoSrc}
              controls
              playsInline
              autoPlay
              muted={isMuted}
              onVolumeChange={handleVolumeChange}
              preload="metadata"
              className="aspect-[9/19] w-full object-contain"
            >
              <source src={slide.videoSrc} type="video/mp4" />
            </video>
          </div>
          <button
            type="button"
            onClick={() => enterFullscreen(videoRef.current)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 transition hover:border-sky-400/40 hover:text-white"
          >
            <Maximize2 className="size-3.5" strokeWidth={1.5} aria-hidden />
            Fullscreen
          </button>
        </div>

        <div className="min-w-0 flex-1 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Previous clip"
              onClick={() => go(-1)}
              className="rounded-full border border-border bg-black/30 p-1.5 text-zinc-400 transition hover:border-zinc-500 hover:text-white sm:p-2"
            >
              <ChevronLeft className="size-4 sm:size-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Next clip"
              onClick={() => go(1)}
              className="rounded-full border border-border bg-black/30 p-1.5 text-zinc-400 transition hover:border-zinc-500 hover:text-white sm:p-2"
            >
              <ChevronRight className="size-4 sm:size-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="space-y-1.5">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
              Clip {safeIndex + 1} of {count}
            </p>
            <h3 className="text-lg font-semibold leading-tight text-white sm:text-2xl">{slide.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{slide.description}</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-0.5 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {slides.map((s, i) => {
              const I = slideIconMap[s.iconKey];
              const on = i === safeIndex;
              return (
                <button
                  key={s.videoSrc}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={on ? "true" : undefined}
                  className={`flex min-w-[5rem] shrink-0 flex-col items-center gap-1 rounded-xl border px-2 py-1.5 text-center transition sm:min-w-[5.5rem] sm:gap-1.5 sm:px-2.5 sm:py-2 ${
                    on
                      ? "border-sky-400/45 bg-sky-500/10 text-white"
                      : "border-border bg-black/25 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
                  }`}
                >
                  <I className={`size-4 sm:size-5 ${on ? "text-sky-400" : ""}`} strokeWidth={1} aria-hidden />
                  <span className="line-clamp-2 text-[10px] font-medium leading-tight">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
