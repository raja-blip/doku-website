"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";

export type WalkthroughScreen = {
  /** Public path, e.g. /app-screenshots/wt-01.png */
  src: string;
  /** Short label chip (Setup, Backup, …) */
  tag: string;
  /** Bold callout on the image */
  callout: string;
  /** One line of supporting copy below */
  caption: string;
};

export type WalkthroughColumn = {
  /** Column heading, e.g. Setup */
  title: string;
  /** One line under the title */
  description: string;
  screens: WalkthroughScreen[];
};

type WalkthroughScreensProps = {
  columns: WalkthroughColumn[];
};

function columnHeadingId(columnIndex: number) {
  return `wt-col-${columnIndex}`;
}

export function WalkthroughScreens({ columns }: WalkthroughScreensProps) {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-white sm:text-xl">Key product moments</h3>
        <p className="max-w-2xl text-sm text-zinc-500">
          Three tracks—setup, documents, and utilities—each with its own stills you can step through.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-6 xl:gap-8">
        {columns.map((col, colIndex) => (
          <ColumnCarousel key={col.title} column={col} columnIndex={colIndex} />
        ))}
      </div>
    </div>
  );
}

function ColumnCarousel({ column, columnIndex }: { column: WalkthroughColumn; columnIndex: number }) {
  const { screens, title, description } = column;
  const headingId = columnHeadingId(columnIndex);
  const [index, setIndex] = useState(0);
  const n = screens.length;
  const safeIndex = n === 0 ? 0 : index % n;
  const screen = screens[safeIndex] ?? null;

  const goPrev = useCallback(() => {
    if (n === 0) return;
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    if (n === 0) return;
    setIndex((i) => (i + 1) % n);
  }, [n]);

  if (!screen || n === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center text-sm text-zinc-500">
        <p className="font-medium text-zinc-400">{title}</p>
        <p className="mt-1">Add at least one screenshot for this column.</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col" aria-labelledby={headingId}>
      <div className="mb-4 space-y-1">
        <h4 id={headingId} className="text-base font-semibold text-white">
          {title}
        </h4>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>

      <article className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-sm ring-1 ring-white/5">
        <ScreenSlide key={screen.src} screen={screen} />

        {n > 1 ? (
          <div className="flex items-center justify-between gap-2 border-t border-white/10 px-2 py-2">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-sky-400/40 hover:text-white"
              aria-label={`Previous ${title} screenshot`}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <div className="flex flex-1 flex-wrap items-center justify-center gap-1.5">
              {screens.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === safeIndex ? "w-6 bg-sky-400" : "w-3 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`${title} screenshot ${i + 1} of ${n}`}
                  aria-current={i === safeIndex ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-sky-400/40 hover:text-white"
              aria-label={`Next ${title} screenshot`}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        ) : null}

        <div className="border-t border-white/10 p-4">
          <p className="text-sm leading-relaxed text-zinc-400">{screen.caption}</p>
        </div>
      </article>
    </section>
  );
}

function ScreenSlide({ screen }: { screen: WalkthroughScreen }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="relative mx-auto aspect-[9/19] w-full max-w-[min(100%,280px)] bg-zinc-950 lg:max-w-none">
      {broken ? (
        <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-2 p-4 text-center">
          <span className="text-xs text-zinc-500">Missing image</span>
          <code className="break-all text-[10px] text-zinc-600">{screen.src}</code>
        </div>
      ) : (
        <>
          <Image
            key={screen.src}
            src={screen.src}
            alt={screen.callout}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover object-top"
            onError={() => setBroken(true)}
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 pt-16">
            <p className="mb-1 inline-flex rounded-md border border-sky-500/40 bg-sky-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sky-200">
              {screen.tag}
            </p>
            <p className="text-sm font-semibold leading-snug text-white drop-shadow-md">{screen.callout}</p>
          </div>
        </>
      )}
    </div>
  );
}
