"use client";

import Image from "next/image";
import { useState } from "react";

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

type WalkthroughScreensProps = {
  screens: WalkthroughScreen[];
};

export function WalkthroughScreens({ screens }: WalkthroughScreensProps) {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-white sm:text-xl">Key product moments</h3>
        <p className="max-w-2xl text-sm text-zinc-500">
          Annotated stills sit below the clips. Replace <span className="font-mono text-xs text-zinc-400">wt-01…wt-06</span>{" "}
          in <span className="font-mono text-xs text-zinc-400">public/app-screenshots/</span> when your finals are ready.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {screens.map((s) => (
          <ScreenCard key={s.src} screen={s} />
        ))}
      </div>
    </div>
  );
}

function ScreenCard({ screen }: { screen: WalkthroughScreen }) {
  const [broken, setBroken] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-sm ring-1 ring-white/5 transition hover:border-sky-400/25 hover:ring-sky-400/10">
      <div className="relative aspect-[9/19] w-full max-w-[220px] bg-zinc-950 sm:max-w-none">
        {broken ? (
          <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-2 border-b border-dashed border-zinc-700 p-4 text-center">
            <span className="text-xs text-zinc-500">Missing image</span>
            <code className="break-all text-[10px] text-zinc-600">{screen.src}</code>
          </div>
        ) : (
          <>
            <Image
              src={screen.src}
              alt={screen.callout}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover object-top"
              onError={() => setBroken(true)}
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
      <div className="border-t border-white/10 p-4">
        <p className="text-sm leading-relaxed text-zinc-400">{screen.caption}</p>
      </div>
    </article>
  );
}
