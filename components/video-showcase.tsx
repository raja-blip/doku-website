"use client";

import { motion } from "framer-motion";

const videos = [
  { base: "/feature-videos/video-01", title: "Instant OCR Search" },
  { base: "/feature-videos/video-02", title: "Expiry Alerts In Action" },
  { base: "/feature-videos/video-03", title: "Smart Auto-Categorization" },
];

export function VideoShowcase() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {videos.map((video, index) => (
        <motion.div
          key={video.base}
          className="overflow-hidden rounded-2xl border border-border bg-card p-3"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <p className="mb-2 text-sm text-zinc-300">{video.title}</p>
          <video
            controls
            preload="metadata"
            className="aspect-[9/16] w-full rounded-xl border border-border bg-black object-cover"
          >
            <source src={`${video.base}.mp4`} type="video/mp4" />
            <source src={`${video.base}.mov`} type="video/quicktime" />
          </video>
        </motion.div>
      ))}
    </div>
  );
}
