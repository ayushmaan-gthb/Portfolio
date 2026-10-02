"use client";

import React, { useState } from "react";
import PersonalAvatar from "./PersonalAvatar";
import CommandChip from "./CommandChip";

export default function Hero() {
  const [greetingClicked, setGreetingClicked] = useState(false);

  const handleGreetingClick = () => {
    setGreetingClicked(true);
    setTimeout(() => setGreetingClicked(false), 2200);
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center px-6 sm:px-10 pt-24 pb-20 select-none overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[680px] h-[500px] sm:h-[680px] rounded-full bg-gradient-to-b from-[#f16a4b]/[0.03] via-indigo-500/[0.02] to-transparent blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <main className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
        {/* =====================================================================
         * 1. Opening Greeting (Visible on first load with wave & click interaction)
         * ===================================================================== */}
        <div className="mb-4 sm:mb-5 animate-fade-in">
          <button
            type="button"
            onClick={handleGreetingClick}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#16161a]/80 hover:bg-white/[0.06] hover:border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm"
            title="Click to say Namaste back!"
          >
            <span className="text-base sm:text-lg animate-wave">🙏</span>
            <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
              {greetingClicked ? "नमस्ते!" : "Namaste"}
            </span>
            <span className="text-zinc-600 font-light">•</span>
            <span className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
              Hello, I&apos;m Ayushmaan
            </span>
          </button>
        </div>

        {/* =====================================================================
         * 2. Iconic Arched Name & Central Personal Avatar
         * Inspired by the personality & visual harmony of abhijithjinnu.in
         * ===================================================================== */}
        <div className="relative flex flex-col items-center">
          {/* Curved SVG Name Arch */}
          <div className="w-[300px] sm:w-[350px] h-[95px] sm:h-[105px] overflow-visible">
            <svg
              viewBox="0 0 350 120"
              className="w-full h-full overflow-visible pointer-events-none"
            >
              <path
                id="nameCurvePath"
                d="M 25,115 A 150,105 0 0,1 325,115"
                fill="transparent"
              />
              <text
                fill="var(--text-primary)"
                className="instrument-serif italic"
                fontSize="38"
                textAnchor="middle"
                letterSpacing="-0.02em"
              >
                <textPath href="#nameCurvePath" startOffset="50%">
                  Kumar Ayushmaan
                </textPath>
              </text>
            </svg>
          </div>

          {/* Semantic H1 for SEO / Screen Readers */}
          <h1 className="sr-only">Kumar Ayushmaan</h1>

          {/* Avatar nestled directly inside the arch curvature */}
          <div className="-mt-6 sm:-mt-8">
            <PersonalAvatar />
          </div>
        </div>

        {/* =====================================================================
         * 3. Subtitle & Identity
         * ===================================================================== */}
        <div className="mt-4 space-y-1">
          <p className="text-sm sm:text-base font-normal text-zinc-300 tracking-wide">
            Computer Science Engineering Student{" "}
            <span className="text-zinc-500 font-light">&amp;</span> Developer
          </p>
        </div>

        {/* =====================================================================
         * 4. Interactive Terminal Command Pill (% npx ayushmaan)
         * ===================================================================== */}
        <CommandChip />

        {/* =====================================================================
         * 5. Authentic Personal Introduction
         * ===================================================================== */}
        <p className="mt-5 text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
          Building with code, exploring AI, and turning ideas into useful projects.
        </p>

        {/* =====================================================================
         * 6. CTA Action Buttons
         * ===================================================================== */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f16a4b] text-white text-xs sm:text-sm font-medium hover:bg-[#ff7b5c] hover:shadow-[0_0_20px_rgba(241,106,75,0.4)] transition-all duration-200 active:scale-95 group"
          >
            <span>View Projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-white/[0.03] text-zinc-200 text-xs sm:text-sm font-medium hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200 active:scale-95"
          >
            <span>About Me</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-zinc-400 hover:text-zinc-200 text-xs sm:text-sm font-mono transition-all duration-200 active:scale-95"
          >
            <span>Resume</span>
            <span className="text-xs text-zinc-400">↗</span>
          </a>
        </div>
      </main>
    </section>
  );
}
