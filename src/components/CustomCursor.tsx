"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show custom cursor on desktop
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <motion.div
                    className="rounded-full -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        width: isHovering ? 50 : 36,
                        height: isHovering ? 50 : 36,
                        borderColor: "var(--color-accent)",
                        borderWidth: isHovering ? "2px" : "1.5px",
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                        borderStyle: "solid",
                        mixBlendMode: "difference",
                    }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <motion.div
                    className="rounded-full -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        width: isHovering ? 8 : 5,
                        height: isHovering ? 8 : 5,
                        background: "var(--color-accent)",
                    }}
                    transition={{ duration: 0.15 }}
                />
            </motion.div>
        </>
    );
}
