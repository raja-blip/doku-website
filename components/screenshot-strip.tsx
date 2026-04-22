"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const shots = [
  { src: "/app-screenshots/screen-01.png", alt: "Doku app screenshot 1" },
  { src: "/app-screenshots/screen-02.png", alt: "Doku app screenshot 2" },
  { src: "/app-screenshots/screen-03.png", alt: "Doku app screenshot 3" },
  { src: "/app-screenshots/screen-04.png", alt: "Doku app screenshot 4" },
  { src: "/app-screenshots/screen-05.png", alt: "Doku app screenshot 5" },
  { src: "/app-screenshots/screen-06.png", alt: "Doku app screenshot 6" },
  { src: "/app-screenshots/screen-07.png", alt: "Doku app screenshot 7" },
  { src: "/app-screenshots/screen-08.png", alt: "Doku app screenshot 8" },
  { src: "/app-screenshots/screen-09.png", alt: "Doku app screenshot 9" },
  { src: "/app-screenshots/screen-10.png", alt: "Doku app screenshot 10" },
];

export function ScreenshotStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {shots.map((shot, index) => (
        <motion.div
          key={shot.src}
          className="overflow-hidden rounded-2xl border border-border bg-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          whileHover={{ y: -4 }}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={900}
            height={1900}
            className="aspect-[9/18] w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
