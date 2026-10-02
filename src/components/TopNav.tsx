"use client";

import React from "react";
import Link from "next/link";

export default function TopNav() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-auto">
      <nav className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#16161a]/85 border border-white/10 backdrop-blur-md shadow-lg shadow-black/40 text-xs sm:text-sm font-normal text-zinc-300">
        <Link
          href="/"
          className="px-3 py-1 rounded-full text-zinc-100 hover:text-white transition-colors"
        >
          home
        </Link>
        <Link
          href="#about"
          className="px-3 py-1 rounded-full text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          about
        </Link>

        {/* Center Logo / Monogram */}
        <Link
          href="/"
          className="mx-1 w-7 h-7 rounded-full bg-zinc-800 border border-white/15 flex items-center justify-center font-mono text-[11px] font-bold text-zinc-100 hover:scale-105 transition-transform"
          title="Kumar Ayushmaan"
        >
          KA
        </Link>

        <Link
          href="#projects"
          className="px-3 py-1 rounded-full text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          projects
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-full text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          resume
        </a>
      </nav>
    </header>
  );
}
