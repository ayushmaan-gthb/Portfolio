"use client";

import React, { useState } from "react";

const CAPSULE_LINKS = [
  { label: "code", href: "#projects" },
  { label: "ai", href: "#about" },
  { label: "craft", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "contact", href: "mailto:ayushmaan@example.com" },
];

export default function BottomCapsule() {
  const [active, setActive] = useState("code");

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
      <nav className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#16161a]/90 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/60 text-xs font-mono">
        {CAPSULE_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`px-3 py-1 rounded-full transition-all duration-200 ${
              active === item.label
                ? "bg-[#f16a4b] text-white font-medium shadow-sm shadow-[#f16a4b]/40"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
