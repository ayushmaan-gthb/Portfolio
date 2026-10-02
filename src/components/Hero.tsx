import React from "react";
import InteractiveAvatar from "./InteractiveAvatar";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-6 sm:px-10 py-12 sm:py-16 overflow-hidden bg-[#08080a] text-zinc-100 select-none">
      {/* =========================================================================
       * Background Ambient Lighting & Texture
       * Subtle radial glows and grain provide depth without clutter.
       * ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central ambient light orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-gradient-to-tr from-rose-500/[0.04] via-indigo-500/[0.03] to-transparent blur-3xl" />

        {/* Top subtle highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Minimal atmospheric dot matrix / subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* =========================================================================
       * Header / Micro Status Bar (Top of Hero)
       * Sets a minimal, high-end editorial tone.
       * ========================================================================= */}
      <header className="relative z-10 w-full max-w-5xl flex items-center justify-between animate-fade-in text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-zinc-400 font-mono tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-zinc-300">Available for Opportunities</span>
        </div>

        <div className="text-zinc-400 font-mono tracking-widest uppercase text-[11px] sm:text-xs">
          2026 // Vol. 01
        </div>
      </header>

      {/* =========================================================================
       * Main Focal Area (Center of Hero)
       * Displays Name, Central Interactive Avatar with Blush, and Subtitle.
       * ========================================================================= */}
      <main className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center text-center py-6 sm:py-10">
        {/* Name — Large, elegant typography */}
        <div className="space-y-2 mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-zinc-300 font-mono font-medium">
            Creative Portfolio
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-sm">
            Kumar Ayushmaan
          </h1>
        </div>

        {/* Central Interactive Avatar Area */}
        <div className="my-2 sm:my-4 flex flex-col items-center">
          {/*
           * Easy image replacement note:
           * To replace the default vector portrait with your own photo later, simply pass:
           * <InteractiveAvatar imageSrc="/your-photo.jpg" alt="Kumar Ayushmaan" />
           */}
          <InteractiveAvatar />
        </div>

        {/* Subtitle */}
        <div className="mt-8 sm:mt-10 max-w-xl px-4">
          <p className="text-base sm:text-xl md:text-2xl font-light tracking-wide text-zinc-300 leading-relaxed">
            Computer Science Engineering Student{" "}
            <span className="text-rose-400/80 font-normal">&amp;</span> Developer
          </p>

          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-light tracking-wider max-w-md mx-auto">
            Bridging algorithmic engineering and thoughtful, tactile interface design.
          </p>
        </div>
      </main>

      {/* =========================================================================
       * Footer / Minimalist Base Anchor
       * Grounds the hero screen with balanced editorial details.
       * ========================================================================= */}
      <footer className="relative z-10 w-full max-w-5xl flex items-center justify-between text-zinc-400 text-xs font-mono tracking-wider pt-6">
        <div className="flex items-center gap-3">
          <span className="w-6 h-[1px] bg-zinc-600" />
          <span>India</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <span>Foundation Stage</span>
          <span className="text-zinc-600">•</span>
          <span>Next.js &amp; Tailwind</span>
        </div>
      </footer>
    </section>
  );
}
