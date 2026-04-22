"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroMockup() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm rounded-[2.5rem] border border-border bg-card p-3 shadow-[0_0_80px_rgba(56,189,248,0.12)]"
      initial={{ opacity: 0, y: 24, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ rotate: 0, y: -6 }}
    >
      <div className="absolute -inset-3 -z-10 rounded-[3rem] bg-gradient-to-br from-sky-500/15 to-lime-300/10 blur-2xl" />
      <Image
        src="/mobile-mockup.png"
        alt="Doku mobile app mockup"
        width={900}
        height={1600}
        className="rounded-[2.2rem] border border-border object-cover"
        priority
      />
    </motion.div>
  );
}
