"use client";

import React, { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  char: string;
  opacity: number;
}

const STAR_CHARS = ["✦", "★", "•", "✧", "+"];

export default function RainingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate subtle falling stars on client mount
    const generated: Star[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 96 + 2, // 2% to 98%
      size: Math.random() * 7 + 8, // 8px to 15px
      duration: Math.random() * 8 + 7, // 7s to 15s
      delay: Math.random() * 10, // staggered entrance
      char: STAR_CHARS[Math.floor(Math.random() * STAR_CHARS.length)],
      opacity: Math.random() * 0.4 + 0.15, // subtle opacity
    }));
    setStars(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="falling-star"
          style={{
            left: `${star.left}%`,
            fontSize: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        >
          {star.char}
        </span>
      ))}
    </div>
  );
}
