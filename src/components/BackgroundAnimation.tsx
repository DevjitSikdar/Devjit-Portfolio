"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function BackgroundAnimation() {
    const [mounted, setMounted] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            // Optional: slight parallax effect based on cursor
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            {/* The Noise overlay for texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                }}
            ></div>

            {/* Orb 1: Primary Accent */}
            <motion.div
                className="absolute w-[45vw] h-[45vw] rounded-full filter blur-[100px] opacity-40 lg:opacity-30"
                style={{
                    background: "var(--color-accent)",
                    top: "-15%",
                    left: "-10%",
                }}
                animate={{
                    x: ["0%", "15%", "-5%", "0%"],
                    y: ["0%", "10%", "-15%", "0%"],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Orb 2: Background Secondary / Glow */}
            <motion.div
                className="absolute w-[40vw] h-[40vw] rounded-full filter blur-[120px] opacity-30 lg:opacity-20 flex-shrink-0"
                style={{
                    background: "var(--color-accent-glow)",
                    bottom: "-10%",
                    right: "-10%",
                }}
                animate={{
                    x: ["0%", "-15%", "10%", "0%"],
                    y: ["0%", "-20%", "5%", "0%"],
                    scale: [1, 1.2, 0.85, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Orb 3: Subtle floating center blob that reacts slightly to mouse */}
            <motion.div
                className="absolute w-[30vw] h-[30vw] rounded-full filter blur-[90px] opacity-20 lg:opacity-15 hidden md:block"
                style={{
                    background: "var(--color-text)",
                    top: "40%",
                    left: "50%",
                }}
                animate={{
                    x: `calc(-50% + ${mousePosition.x}px)`,
                    y: `calc(-50% + ${mousePosition.y}px)`,
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
