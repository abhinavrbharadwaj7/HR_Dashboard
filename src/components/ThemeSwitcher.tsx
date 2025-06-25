"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/30 shadow transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none dark:border-gray-700/40 dark:bg-gray-800/40"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <Sun
        className={`absolute h-6 w-6 text-yellow-400 transition-all duration-300 ${
          resolvedTheme === "dark" ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
      />
      <Moon
        className={`absolute h-6 w-6 text-blue-400 transition-all duration-300 ${
          resolvedTheme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      />
    </button>
  );
}
