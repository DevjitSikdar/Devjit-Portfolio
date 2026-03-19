"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { themes } from "@/lib/constants";
import type { ThemeKey } from "@/lib/constants";

export default function ThemeSwitcher() {
    const { themeKey, setTheme } = useTheme();
    const themeEntries = Object.values(themes);

    return (
        <motion.div
            className="fixed top-6 right-6 z-50 flex gap-2 p-2 rounded-full glass-strong"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            {themeEntries.map((t) => (
                <button
                    key={t.key}
                    onClick={() => setTheme(t.key as ThemeKey)}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                        background: t.accent,
                        boxShadow:
                            themeKey === t.key
                                ? `0 0 20px ${t.accent}40, 0 0 40px ${t.accent}20`
                                : "none",
                    }}
                    title={t.name}
                    aria-label={`Switch to ${t.name} theme`}
                >
                    {themeKey === t.key && (
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            layoutId="activeTheme"
                            style={{
                                border: `2px solid ${t.accent}`,
                                boxShadow: `0 0 15px ${t.accent}40`,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="text-xs">{t.emoji}</span>
                </button>
            ))}
        </motion.div>
    );
}
