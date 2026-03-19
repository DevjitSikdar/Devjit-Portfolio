"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { skills, type Skill } from "@/lib/constants";
import { useRef } from "react";

const categories = Array.from(new Set(skills.map((s) => s.category)));

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className="group"
            variants={staggerItem}
        >
            <div className="flex items-center justify-between mb-2">
                <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                >
                    {skill.name}
                </span>
                <motion.span
                    className="text-xs font-mono font-semibold"
                    style={{ color: "var(--color-accent)" }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                >
                    {skill.level}%
                </motion.span>
            </div>
            <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
            >
                <motion.div
                    className="h-full rounded-full relative"
                    style={{
                        background: `linear-gradient(90deg, var(--color-accent), var(--color-accent))`,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.2 + index * 0.08,
                    }}
                >
                    {/* Glow on end of bar */}
                    <div
                        className="absolute right-0 top-0 w-4 h-full"
                        style={{
                            background: `linear-gradient(90deg, transparent, var(--color-accent))`,
                            filter: "blur(4px)",
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredSkills = skills.filter((s) => s.category === activeCategory);

    return (
        <section id="skills" className="scroll-mt-8 mt-16">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2
                    className="text-3xl lg:text-4xl font-bold"
                    style={{ color: "var(--color-text)" }}
                >
                    Skills
                </h2>
                <div className="section-line" />
            </motion.div>

            {/* Category Tabs */}
            <motion.div
                className="flex flex-wrap gap-2 mb-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {categories.map((cat) => (
                    <motion.button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                        style={{
                            color:
                                activeCategory === cat
                                    ? "var(--color-background)"
                                    : "var(--color-text-secondary)",
                            background:
                                activeCategory === cat
                                    ? "var(--color-accent)"
                                    : "var(--color-card)",
                            border: `1px solid ${activeCategory === cat
                                ? "var(--color-accent)"
                                : "var(--color-border)"
                                }`,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {cat}
                    </motion.button>
                ))}
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                key={activeCategory} // re-animate on category change
            >
                {filteredSkills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
            </motion.div>

            {/* Skills overview - interactive circles */}
            <motion.div
                className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl glass card-hover cursor-default"
                        variants={staggerItem}
                        whileHover={{
                            scale: 1.08,
                            y: -4,
                        }}
                    >
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold font-mono"
                            style={{
                                background: `conic-gradient(var(--color-accent) ${skill.level * 3.6}deg, var(--color-card) 0deg)`,
                                color: "var(--color-text)",
                            }}
                        >
                            <div
                                className="w-9 h-9 rounded-full flex items-center justify-center"
                                style={{ background: "var(--color-background-secondary)" }}
                            >
                                {skill.level}
                            </div>
                        </div>
                        <span
                            className="text-[10px] text-center font-medium leading-tight"
                            style={{ color: "var(--color-text-secondary)" }}
                        >
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
