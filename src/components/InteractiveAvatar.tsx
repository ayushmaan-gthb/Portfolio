"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface InteractiveAvatarProps {
  /**
   * Optional custom image source (e.g. "/avatar.jpg" or "/kumar-ayushmaan.png").
   * When omitted or empty, the built-in artistic vector portrait is displayed.
   */
  imageSrc?: string;
  /**
   * Accessible description for the avatar
   */
  alt?: string;
  /**
   * Additional styling for the outer wrapper
   */
  className?: string;
}

export default function InteractiveAvatar({
  imageSrc,
  alt = "Interactive portrait of Kumar Ayushmaan",
  className = "",
}: InteractiveAvatarProps) {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartInteraction = () => {
    setIsInteracting(true);
  };

  const handleEndInteraction = () => {
    setIsInteracting(false);
  };

  const handleClick = () => {
    setIsClicked(true);
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      setIsClicked(false);
    }, 1200);
  };

  return (
    <div
      className={`relative inline-block select-none group cursor-pointer ${className}`}
      onMouseEnter={handleStartInteraction}
      onMouseLeave={handleEndInteraction}
      onTouchStart={handleStartInteraction}
      onTouchEnd={handleEndInteraction}
      onClick={handleClick}
      onFocus={handleStartInteraction}
      onBlur={handleEndInteraction}
      tabIndex={0}
      role="button"
      aria-label={`${alt} — hover or tap to interact`}
    >
      {/* Ambient background glow (changes to warm rose-pink blush on hover/touch) */}
      <div
        className={`absolute -inset-4 sm:-inset-6 rounded-full blur-2xl sm:blur-3xl transition-all duration-700 pointer-events-none ${
          isInteracting || isClicked
            ? "bg-rose-500/25 scale-110 opacity-100"
            : "bg-indigo-500/10 scale-95 opacity-50"
        }`}
      />

      {/* Floating playful interaction tooltip / badge */}
      <div
        className={`absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg backdrop-blur-md border ${
          isInteracting || isClicked
            ? "opacity-100 -translate-y-1 bg-rose-950/80 border-rose-500/40 text-rose-200 shadow-rose-950/50"
            : "opacity-0 translate-y-2 bg-zinc-900/80 border-white/10 text-zinc-400"
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="inline-block animate-pulse text-rose-400">✨</span>
          <span>{isClicked ? "😊 *shy smile*" : "🌸 *blushing*"}</span>
        </span>
      </div>

      {/* Main Avatar Container */}
      <div
        className={`relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-[2px] transition-all duration-500 ease-out ${
          isInteracting || isClicked
            ? "scale-[1.03] ring-2 ring-rose-400/40 shadow-[0_0_35px_rgba(244,63,94,0.3)]"
            : "ring-1 ring-white/15 shadow-[0_0_20px_rgba(0,0,0,0.6)]"
        }`}
      >
        {/* Subtle border gradient sheen */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-b transition-opacity duration-500 ${
            isInteracting || isClicked
              ? "from-rose-400/30 via-pink-500/20 to-zinc-900/80 opacity-100"
              : "from-white/20 via-white/5 to-transparent opacity-80"
          }`}
        />

        {/* Inner frame containing image or vector portrait */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-[#070709] border border-white/10 flex items-center justify-center">
          {imageSrc ? (
            /* =========================================================================
             * Custom photo replacement mode:
             * When the user specifies `imageSrc`, their uploaded photo is shown with
             * reactive blush overlays on top!
             * ========================================================================= */
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Reactive blush overlay spots for custom photo */}
              <div
                className={`absolute top-[48%] left-[28%] w-10 h-7 rounded-full bg-rose-400/50 blur-md pointer-events-none transition-all duration-500 ease-out ${
                  isInteracting || isClicked
                    ? "opacity-90 scale-110"
                    : "opacity-0 scale-75"
                }`}
              />
              <div
                className={`absolute top-[48%] right-[28%] w-10 h-7 rounded-full bg-rose-400/50 blur-md pointer-events-none transition-all duration-500 ease-out ${
                  isInteracting || isClicked
                    ? "opacity-90 scale-110"
                    : "opacity-0 scale-75"
                }`}
              />

              {/* Gentle warm tint overlay */}
              <div
                className={`absolute inset-0 bg-rose-500/10 pointer-events-none transition-opacity duration-500 ${
                  isInteracting || isClicked ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ) : (
            /* =========================================================================
             * Default bespoke artistic vector portrait:
             * A clean, modern minimalist illustrated character with reactive
             * facial features (eyes, blush cheeks, smile) and smooth SVG transitions.
             * ========================================================================= */
            <svg
              viewBox="0 0 240 240"
              className="w-full h-full transition-transform duration-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Blush Soft Blur Filter */}
                <filter id="blushBlur" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4.5" />
                </filter>

                {/* Skin Gradient */}
                <linearGradient id="skinGrad" x1="120" y1="65" x2="120" y2="175" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#eed0ba" />
                  <stop offset="100%" stopColor="#dca889" />
                </linearGradient>

                {/* Hair Gradient */}
                <linearGradient id="hairGrad" x1="120" y1="35" x2="120" y2="115" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2b2d35" />
                  <stop offset="100%" stopColor="#14151a" />
                </linearGradient>

                {/* Garment Gradient */}
                <linearGradient id="jacketGrad" x1="120" y1="160" x2="120" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#22242c" />
                  <stop offset="100%" stopColor="#131418" />
                </linearGradient>

                {/* Glass Glare */}
                <linearGradient id="glassesGlare" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Background ambient circular pattern */}
              <circle cx="120" cy="120" r="105" fill="#111218" />
              <circle
                cx="120"
                cy="120"
                r="95"
                stroke="white"
                strokeOpacity={isInteracting || isClicked ? "0.08" : "0.03"}
                strokeDasharray="4 4"
                className="transition-all duration-700"
              />

              {/* Shoulders / Minimalist Clothing */}
              <path
                d="M48 240 C52 195 80 178 120 178 C160 178 188 195 192 240 Z"
                fill="url(#jacketGrad)"
              />
              {/* Inner t-shirt collar */}
              <path
                d="M98 178 C98 192 142 192 142 178 Z"
                fill="#0d0e12"
              />
              {/* Outer jacket collar lapel lines */}
              <path
                d="M80 186 L104 240 M160 186 L136 240"
                stroke="#323541"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Neck */}
              <path
                d="M102 142 L102 180 C102 186 138 186 138 180 L138 142 Z"
                fill="#cf9c7d"
              />

              {/* Head / Face Base */}
              <path
                d="M75 106 C75 160 92 174 120 174 C148 174 165 160 165 106 C165 62 148 54 120 54 C92 54 75 62 75 106 Z"
                fill="url(#skinGrad)"
              />

              {/* Ears */}
              <path d="M70 108 C67 98 75 92 77 114 Z" fill="#cf9c7d" />
              <path d="M170 108 C173 98 165 92 163 114 Z" fill="#cf9c7d" />

              {/* Stylish Textured Hair */}
              <path
                d="M68 95 C67 60 88 40 120 40 C154 40 174 58 172 95 C166 82 152 75 142 75 C132 75 128 78 120 73 C112 78 102 73 90 75 C80 77 71 85 68 95 Z"
                fill="url(#hairGrad)"
              />
              {/* Hair strands & bangs */}
              <path
                d="M92 68 C102 62 118 64 124 71 C130 63 144 65 152 70"
                stroke="#383b46"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Eyebrows */}
              <path
                d="M86 93 C92 90 100 90 104 93"
                stroke="#2a2c35"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={`transition-all duration-300 ${
                  isInteracting || isClicked ? "-translate-y-0.5" : ""
                }`}
              />
              <path
                d="M136 93 C140 90 148 90 154 93"
                stroke="#2a2c35"
                strokeWidth="2.5"
                strokeLinecap="round"
                className={`transition-all duration-300 ${
                  isInteracting || isClicked ? "-translate-y-0.5" : ""
                }`}
              />

              {/* Modern Minimal Glasses */}
              {/* Left Lens */}
              <rect
                x="82"
                y="97"
                width="28"
                height="22"
                rx="6"
                fill="url(#glassesGlare)"
                stroke="#1d1e24"
                strokeWidth="2.5"
              />
              {/* Right Lens */}
              <rect
                x="130"
                y="97"
                width="28"
                height="22"
                rx="6"
                fill="url(#glassesGlare)"
                stroke="#1d1e24"
                strokeWidth="2.5"
              />
              {/* Bridge */}
              <path
                d="M110 106 C115 103 125 103 130 106"
                stroke="#1d1e24"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Glasses Temples (Arms) */}
              <path d="M82 104 L72 102" stroke="#1d1e24" strokeWidth="2" strokeLinecap="round" />
              <path d="M158 104 L168 102" stroke="#1d1e24" strokeWidth="2" strokeLinecap="round" />

              {/* Eyes — Reactive Expression */}
              {isInteracting || isClicked ? (
                /* Happy curved / smiling eyes on hover/touch */
                <g className="transition-all duration-300">
                  <path
                    d="M89 110 C93 105 101 105 105 110"
                    stroke="#16171d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M135 110 C139 105 147 105 151 110"
                    stroke="#16171d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </g>
              ) : (
                /* Focused, calm eyes */
                <g className="transition-all duration-300">
                  <circle cx="96" cy="108" r="3.2" fill="#16171d" />
                  <circle cx="97.2" cy="106.8" r="1" fill="white" />
                  <circle cx="144" cy="108" r="3.2" fill="#16171d" />
                  <circle cx="145.2" cy="106.8" r="1" fill="white" />
                </g>
              )}

              {/* Nose */}
              <path
                d="M120 114 L118 126 C120 128 123 128 124 126"
                stroke="#b98567"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* =============================================================
               * THE BLUSH EFFECT:
               * Soft glowing rosy/coral circles situated on cheeks with
               * filter blur, smooth scale, and opacity transition!
               * ============================================================= */}
              <g
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: isInteracting || isClicked ? 0.95 : 0.05,
                  transform: isInteracting || isClicked ? "scale(1.15)" : "scale(0.8)",
                  transformOrigin: "120px 125px",
                }}
              >
                {/* Left Cheek Blush */}
                <ellipse
                  cx="87"
                  cy="124"
                  rx="12"
                  ry="7"
                  fill="#fb7185"
                  filter="url(#blushBlur)"
                />
                {/* Right Cheek Blush */}
                <ellipse
                  cx="153"
                  cy="124"
                  rx="12"
                  ry="7"
                  fill="#fb7185"
                  filter="url(#blushBlur)"
                />
                {/* Playful cute blush hatching / accent marks */}
                <g stroke="#f43f5e" strokeWidth="1.2" strokeLinecap="round" opacity={isInteracting || isClicked ? 0.8 : 0}>
                  <line x1="82" y1="126" x2="86" y2="122" />
                  <line x1="87" y1="126" x2="91" y2="122" />
                  <line x1="149" y1="126" x2="153" y2="122" />
                  <line x1="154" y1="126" x2="158" y2="122" />
                </g>
              </g>

              {/* Mouth — Shifts into warm smile when blushing */}
              {isInteracting || isClicked ? (
                <path
                  d="M109 142 C114 150 126 150 131 142"
                  stroke="#8e4c3c"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              ) : (
                <path
                  d="M112 144 C116 146 124 146 128 144"
                  stroke="#965a4a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              )}
            </svg>
          )}
        </div>
      </div>

      {/* Subtle indicator hint for desktop & mobile */}
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-zinc-500 tracking-wider transition-colors duration-300 group-hover:text-rose-300/80">
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
            isInteracting || isClicked ? "bg-rose-400" : "bg-zinc-600"
          }`}
        />
        <span>{isInteracting || isClicked ? "blushing!" : "hover / tap me"}</span>
      </div>
    </div>
  );
}
