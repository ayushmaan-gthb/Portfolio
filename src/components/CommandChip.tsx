"use client";

import React, { useState } from "react";

export default function CommandChip() {
  const [copied, setCopied] = useState(false);
  const command = "npx ayushmaan";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="inline-flex items-center gap-2 mt-4 select-none">
      <div
        onClick={handleCopy}
        className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18181c]/90 border border-white/10 hover:border-white/20 shadow-sm backdrop-blur-md cursor-pointer transition-all duration-200"
        title="Click to copy terminal command"
      >
        <span className="text-[#f16a4b] font-mono text-xs font-bold">%</span>
        <code className="text-zinc-200 font-mono text-xs tracking-wide">
          {command}
        </code>

        <button
          type="button"
          aria-label="Copy command"
          className="ml-1 text-zinc-400 group-hover:text-zinc-200 transition-colors"
        >
          {copied ? (
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
              copied! ✓
            </span>
          ) : (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
