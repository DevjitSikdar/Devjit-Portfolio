"use client";

import React from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/constants";

interface NavigationProps {
    activeSection: string;
    onNavigate: (href: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
    return (
        <motion.nav
            className="sticky top-0 z-30 glass-strong rounded-2xl px-2 py-2 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            <ul className="flex items-center justify-center gap-1 flex-wrap">
                {navItems.map((item) => {
                    const isActive =
                        activeSection === item.href.replace("#", "");
                    return (
                        <li key={item.href}>
                            <motion.button
                                onClick={() => onNavigate(item.href)}
                                className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                                style={{
                                    color: isActive
                                        ? "var(--color-accent)"
                                        : "var(--color-text-secondary)",
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            background: "var(--color-accent-glow)",
                                            border: "1px solid var(--color-accent)",
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item.label}</span>
                            </motion.button>
                        </li>
                    );
                })}
            </ul>
        </motion.nav>
    );
}
