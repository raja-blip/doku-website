"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type FolderFallacyCardProps = {
  src: string;
  title: string;
  description: string;
  imageAlt: string;
};

export function FolderFallacyCard({ src, title, description, imageAlt }: FolderFallacyCardProps) {
  return (
    <motion.article
      initial={false}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-8"
    >
      <div className="flex shrink-0 justify-center">
        <Image
          src={src}
          alt={imageAlt}
          width={512}
          height={512}
          className="max-h-[200px] w-auto object-contain"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      </div>
    </motion.article>
  );
}
