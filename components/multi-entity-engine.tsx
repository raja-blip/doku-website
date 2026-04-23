"use client";

import { Car, FileText, Home, UserCircle, Users } from "lucide-react";
import { useCallback, useState } from "react";

type BranchId = "profiles" | "vehicles" | "property";

const branches: {
  id: BranchId;
  label: string;
  /** Small eyebrow: how this branch differs from entities */
  tag: string;
  /** Line above doc chips when this branch is active */
  tetherCaption: string;
  docs: string[];
  Icon: typeof Users;
}[] = [
  {
    id: "profiles",
    label: "Profiles",
    tag: "Per person",
    tetherCaption: "Identity and school papers sit under whoever's profile is open.",
    docs: ["Aadhaar", "Passport", "Immunization", "School certificate"],
    Icon: Users,
  },
  {
    id: "vehicles",
    label: "Vehicles",
    tag: "Entity",
    tetherCaption: "Linked to this vehicle",
    docs: ["RC", "Insurance", "PUC"],
    Icon: Car,
  },
  {
    id: "property",
    label: "Property",
    tag: "Entity",
    tetherCaption: "Linked to this property",
    docs: ["Sale deed", "Tax receipt", "NOC"],
    Icon: Home,
  },
];

function DocChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/35 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium text-sky-100/95">
      <FileText className="size-3 shrink-0 text-sky-400/90" strokeWidth={1.5} aria-hidden />
      {label}
    </span>
  );
}

export function MultiEntityEngineGraphic() {
  const [active, setActive] = useState<BranchId | null>(null);

  const clear = useCallback(() => setActive(null), []);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-black/20 p-6 sm:p-10"
      onPointerLeave={clear}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,rgba(56,189,248,0.12),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 sm:gap-10">
        {/* Top row: Profiles — Hub — Vehicles */}
        <div className="flex w-full items-center justify-between gap-2 sm:gap-6">
          <BranchNode branch={branches[0]} active={active} setActive={setActive} />
          <div className="relative flex shrink-0 flex-col items-center">
            <div className="hidden h-px w-8 bg-gradient-to-r from-sky-500/50 to-transparent sm:absolute sm:right-full sm:top-1/2 sm:block sm:w-10 sm:-translate-y-1/2" />
            <div
              className="flex size-16 items-center justify-center rounded-2xl border border-sky-400/40 bg-zinc-950/80 shadow-[0_0_28px_rgba(56,189,248,0.25)] ring-1 ring-white/10 sm:size-20"
              aria-label="Household workspace: switch profile or entity"
            >
              <UserCircle className="size-9 text-sky-400 sm:size-10" strokeWidth={1} aria-hidden />
            </div>
            <div className="hidden h-px w-8 bg-gradient-to-l from-sky-500/50 to-transparent sm:absolute sm:left-full sm:top-1/2 sm:block sm:w-10 sm:-translate-y-1/2" />
          </div>
          <BranchNode branch={branches[1]} active={active} setActive={setActive} />
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-px bg-gradient-to-b from-sky-500/50 to-sky-500/20 sm:h-10" aria-hidden />
          <BranchNode branch={branches[2]} active={active} setActive={setActive} />
        </div>

        {/* Tethered docs — one panel, content swaps with hover */}
        <div
          className="min-h-[4.5rem] w-full max-w-md rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-center backdrop-blur-sm transition-opacity duration-200"
          aria-live="polite"
        >
          {active ? (
            <div className="flex flex-col items-center gap-2">
              <p className="max-w-sm text-[11px] leading-snug text-zinc-500">
                {branches.find((b) => b.id === active)?.tetherCaption}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {branches
                  .find((b) => b.id === active)!
                  .docs.map((d) => (
                    <DocChip key={d} label={d} />
                  ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-zinc-500">
              Hover a branch to see documents tethered to a person&apos;s profile or to an entity.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function BranchNode({
  branch,
  active,
  setActive,
}: {
  branch: (typeof branches)[number];
  active: BranchId | null;
  setActive: (id: BranchId | null) => void;
}) {
  const { label, tag, Icon } = branch;
  const isActive = active === id;

  return (
    <button
      type="button"
      onPointerEnter={() => setActive(id)}
      aria-pressed={isActive}
      className={`group/branch relative flex max-w-[7.5rem] flex-col items-center gap-1.5 rounded-xl border px-3 py-3 text-center transition sm:max-w-none sm:px-4 ${
        isActive
          ? "border-sky-400/50 bg-sky-500/15 shadow-[0_0_24px_rgba(56,189,248,0.2)]"
          : "border-white/10 bg-white/[0.04] hover:border-sky-400/30 hover:bg-white/[0.06]"
      }`}
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">{tag}</span>
      <Icon
        className={`size-7 shrink-0 transition-transform duration-200 sm:size-8 ${
          isActive ? "scale-110 text-sky-400" : "text-zinc-300 group-hover/branch:scale-105 group-hover/branch:text-sky-300/90"
        }`}
        strokeWidth={1}
        aria-hidden
      />
      <span className="text-xs font-medium text-zinc-200">{label}</span>
    </button>
  );
}
