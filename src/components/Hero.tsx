"use client";

import React, { useState } from "react";
import PersonalAvatar from "./PersonalAvatar";

export default function Hero() {
  const [greetingClicked, setGreetingClicked] = useState(false);

  const handleGreetingClick = () => {
    setGreetingClicked(true);
    setTimeout(() => setGreetingClicked(false), 2000);
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-6 sm:px-10 py-10 sm:py-14 bg-[#09090b] text-zinc-100 select-none overflow-hidden">
      {/* =========================================================================
       * Background Aesthetics
       * Subtle radial gradients and fine grid texture for a modern engineering feel.
       * ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft atmospheric radial gradient behind center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-gradient-to-b from-indigo-500/[0.03] via-rose-500/[0.02] to-transparent blur-3xl" />

        {/* Minimal top hairline highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* =========================================================================
       * Top Micro Header / Status Bar
       * ========================================================================= */}
      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between text-xs font-mono tracking-wider text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-zinc-400">Available for Opportunities</span>
        </div>

        <div className="text-zinc-400 tracking-widest text-[11px]">
          2026
        </div>
      </header>

      {/* =========================================================================
       * Main Hero Content
       * Intentional vertical hierarchy with generous whitespace.
       * ========================================================================= */}
      <main className="relative z-10 w-full max-w-2xl my-auto flex flex-col items-center text-center py-6 sm:py-8">
        {/* 1. Opening Greeting (Visible immediately on first load + interactive feedback) */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <button
            type="button"
            onClick={handleGreetingClick}
            className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm"
            title="Click to say Namaste back!"
          >
            <span className="text-base sm:text-lg animate-wave">🙏</span>
            <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
              {greetingClicked ? "नमस्ते!" : "Namaste"}
            </span>
            <span className="text-zinc-600 font-light">•</span>
            <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
              Hello, I&apos;m Ayushmaan
            </span>
          </button>
        </div>

        {/* 2. Personal Avatar Area (Clean circular portrait, hover blush/glow, click friendly reaction) */}
        <div className="mb-6 sm:mb-8">
          {/*
           * Easy image replacement:
           * Put your photo in /public (e.g., /avatar.jpg) and pass:
           * <PersonalAvatar imageSrc="/avatar.jpg" alt="Kumar Ayushmaan" />
           */}
          <PersonalAvatar />
        </div>

        {/* 3. Identity: Prominent, Tastefully Sized Name & Subtitle */}
        <div className="space-y-2 mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Kumar Ayushmaan
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-normal tracking-wide">
            Computer Science Engineering Student{" "}
            <span className="text-zinc-600 font-light">&amp;</span> Developer
          </p>
        </div>

        {/* 4. Authentic Introduction */}
        <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
          Building with code, exploring AI, and turning ideas into useful projects.
        </p>

        {/* 5. CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-sm font-medium hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200 active:scale-95 group"
          >
            <span>View Projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>

          {/* About Me */}
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-zinc-200 text-sm font-medium hover:bg-white/[0.07] hover:border-white/25 transition-all duration-200 active:scale-95"
          >
            <span>About Me</span>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] text-sm font-mono transition-all duration-200 active:scale-95"
          >
            <span>Resume</span>
            <span className="text-xs text-zinc-400">↗</span>
          </a>
        </div>
      </main>

      {/* =========================================================================
       * Bottom Minimal Anchor
       * ========================================================================= */}
      <footer className="relative z-10 w-full max-w-4xl flex items-center justify-between text-zinc-400 text-xs font-mono tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-4 h-[1px] bg-zinc-600" />
          <span>India</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <span>AI &amp; Software Craft</span>
        </div>
      </footer>
    </section>
  );
}
