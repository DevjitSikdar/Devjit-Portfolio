"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { type ThemeKey, themes, type ThemeConfig } from "@/lib/constants";

interface ThemeContextType {
    theme: ThemeConfig;
    themeKey: ThemeKey;
    setTheme: (key: ThemeKey) => void;
    cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "portfolio-theme";
const themeKeys: ThemeKey[] = ["neonNight", "ocean", "parchment"];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeKey, setThemeKey] = useState<ThemeKey>("neonNight");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeKey | null;
        if (stored && themes[stored]) {
            setThemeKey(stored);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const t = themes[themeKey];
        const root = document.documentElement;
        root.style.setProperty("--color-background", t.background);
        root.style.setProperty("--color-background-secondary", t.backgroundSecondary);
        root.style.setProperty("--color-accent", t.accent);
        root.style.setProperty("--color-accent-glow", t.accentGlow);
        root.style.setProperty("--color-text", t.text);
        root.style.setProperty("--color-text-secondary", t.textSecondary);
        root.style.setProperty("--color-border", t.border);
        root.style.setProperty("--color-card", t.card);
        root.style.setProperty("--color-card-hover", t.cardHover);
        root.setAttribute("data-theme", themeKey);
        localStorage.setItem(THEME_STORAGE_KEY, themeKey);
    }, [themeKey, mounted]);

    const setTheme = useCallback((key: ThemeKey) => {
        setThemeKey(key);
    }, []);

    const cycleTheme = useCallback(() => {
        setThemeKey((prev) => {
            const idx = themeKeys.indexOf(prev);
            return themeKeys[(idx + 1) % themeKeys.length];
        });
    }, []);

    // Prevent flash of wrong theme
    if (!mounted) {
        return (
            <div style={{ visibility: "hidden" }}>{children}</div>
        );
    }

    return (
        <ThemeContext.Provider
            value={{ theme: themes[themeKey], themeKey, setTheme, cycleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
