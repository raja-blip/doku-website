"use client";

import { CSSProperties, ReactNode, useEffect, useState } from "react";

type CursorGlowProps = {
  children: ReactNode;
};

export function CursorGlow({ children }: CursorGlowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      style={
        {
          "--mouse-x": `${position.x}px`,
          "--mouse-y": `${position.y}px`,
          background:
            "radial-gradient(32px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.16), rgba(5, 5, 5, 0) 70%)",
        } as CSSProperties
      }
      className="min-h-screen"
    >
      {children}
    </div>
  );
}
