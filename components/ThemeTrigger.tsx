"use client";
import React from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
const ThemeTrigger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5 text-yellow-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeTrigger;
