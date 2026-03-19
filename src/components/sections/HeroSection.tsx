"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowDown, Download } from "lucide-react";

const roles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Open Source Contributor",
];

export default function HeroSection() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < role.length) {
                        setDisplayText(role.slice(0, displayText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(displayText.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="min-h-[60vh] flex flex-col justify-center relative scroll-mt-8"
        >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 4 + 2,
                            height: Math.random() * 4 + 2,
                            background: "var(--color-accent)",
                            opacity: 0.2,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10"
            >
                {/* Greeting */}
                <motion.p
                    variants={staggerItem}
                    className="text-sm font-mono uppercase tracking-widest mb-4"
                    style={{ color: "var(--color-accent)" }}
                >
                    Hello, World! 👋
                </motion.p>

                {/* Name */}
                <motion.h1
                    variants={staggerItem}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                    style={{ color: "var(--color-text)" }}
                >
                    I&apos;m{" "}
                    <span style={{ color: "var(--color-accent)" }}>
                        {personalInfo.fullName}
                    </span>
                </motion.h1>

                {/* Typewriter Role */}
                <motion.div
                    variants={staggerItem}
                    className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 h-10"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    <span>{displayText}</span>
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        style={{ color: "var(--color-accent)" }}
                    >
                        |
                    </motion.span>
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={staggerItem}
                    className="text-base max-w-xl leading-relaxed mb-8"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    {personalInfo.tagline}. Passionate about building beautiful, performant
                    web applications that make a difference.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                    <motion.button
                        onClick={scrollToAbout}
                        className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300"
                        style={{
                            background: "var(--color-accent)",
                            color: "var(--color-background)",
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 30px var(--color-accent-glow)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore My Work
                        <ArrowDown className="w-4 h-4" />
                    </motion.button>

                    <motion.a
                        href={personalInfo.resumeUrl}
                        className="px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-300"
                        style={{
                            border: "1px solid var(--color-accent)",
                            color: "var(--color-accent)",
                        }}
                        whileHover={{
                            scale: 1.05,
                            background: "var(--color-accent-glow)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download className="w-4 h-4" />
                        Download CV
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown
                        className="w-5 h-5"
                        style={{ color: "var(--color-text-secondary)", opacity: 0.4 }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
