"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface PersonalAvatarProps {
  /**
   * Path to your actual photo/portrait in /public (e.g. "/avatar.jpg" or "/ayushmaan.png").
   * When omitted, renders a clean, tasteful minimalist monogram portrait placeholder.
   */
  imageSrc?: string;
  alt?: string;
  className?: string;
}

const GREETING_MESSAGES = [
  "Hey! 👋",
  "You found me! ✨",
  "Namaste! 🙏",
  "Glad you're here :)",
];

export default function PersonalAvatar({
  imageSrc,
  alt = "Kumar Ayushmaan",
  className = "",
}: PersonalAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const bubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setMessageIndex((prev) => (prev + 1) % GREETING_MESSAGES.length);
    setShowSpeechBubble(true);

    if (bubbleTimeoutRef.current) {
      clearTimeout(bubbleTimeoutRef.current);
    }
    bubbleTimeoutRef.current = setTimeout(() => {
      setShowSpeechBubble(false);
    }, 2600);
  };

  useEffect(() => {
    return () => {
      if (bubbleTimeoutRef.current) clearTimeout(bubbleTimeoutRef.current);
    };
  }, []);

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* =========================================================================
       * Interactive Speech Bubble (Appears on Click)
       * ========================================================================= */}
      {showSpeechBubble && (
        <div
          role="status"
          aria-live="polite"
          className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 animate-pop-in pointer-events-none"
        >
          <div className="relative px-3.5 py-1 rounded-full bg-[#18181c]/95 border border-white/20 text-zinc-100 text-xs font-medium tracking-wide shadow-xl backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap">
            <span>{GREETING_MESSAGES[messageIndex]}</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#18181c]/95" />
          </div>
        </div>
      )}

      {/* =========================================================================
       * Avatar Circle Frame
       * ========================================================================= */}
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        aria-label="Interactive avatar of Kumar Ayushmaan. Click for a friendly greeting."
        className="relative group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f16a4b] rounded-full"
      >
        {/* Soft Ambient Glow (blushes warm coral/rose on hover) */}
        <div
          className={`absolute -inset-2.5 rounded-full blur-xl transition-all duration-500 pointer-events-none ${
            isHovered
              ? "bg-[#f16a4b]/35 opacity-100 scale-105"
              : "bg-white/[0.03] opacity-30 scale-95"
          }`}
        />

        {/* Circular portrait frame */}
        <div
          className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[2px] transition-all duration-300 ease-out ${
            isHovered
              ? "ring-2 ring-[#f16a4b]/70 shadow-[0_0_26px_rgba(241,106,75,0.35)] scale-[1.03]"
              : "ring-1 ring-white/15 shadow-md"
          }`}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#111114] flex items-center justify-center border border-white/10">
            {imageSrc ? (
              /* Profile Image Mode */
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={alt}
                  fill
                  sizes="128px"
                  className="object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Subtle blush overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-full bg-[#f16a4b]/15 pointer-events-none transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ) : (
              /* Minimalist Monogram Portrait Placeholder */
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#18181d] via-[#111115] to-[#0a0a0d]">
                <div className="absolute inset-0 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-2 rounded-full border border-white/[0.02]" />

                {/* Monogram Initials */}
                <span
                  className={`font-mono text-2xl sm:text-3xl font-semibold tracking-wider transition-all duration-300 ${
                    isHovered
                      ? "text-[#f16a4b] drop-shadow-[0_0_12px_rgba(241,106,75,0.6)]"
                      : "text-zinc-200"
                  }`}
                >
                  KA
                </span>

                {/* Two subtle blush cheek dots */}
                <div
                  className={`flex items-center justify-between w-12 mt-1 transition-all duration-300 ${
                    isHovered ? "opacity-90 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <span className="w-2.5 h-1.5 rounded-full bg-[#f16a4b] blur-[1px]" />
                  <span className="w-2.5 h-1.5 rounded-full bg-[#f16a4b] blur-[1px]" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Small live status dot */}
        <span
          className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#0c0c0c] p-[2px] flex items-center justify-center"
          title="Active & building"
        >
          <span className="w-full h-full rounded-full bg-emerald-400" />
        </span>
      </button>

      {/* Subtle micro label */}
      <span className="mt-2 text-[11px] font-mono tracking-wider text-zinc-500 transition-colors duration-200 group-hover:text-zinc-300">
        {isHovered ? ":3" : "ayushmaan"}
      </span>
    </div>
  );
}
