"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, timelineDot } from "@/lib/animations";
import { experiences } from "@/lib/constants";
import { Briefcase, ExternalLink } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section id="experience" className="scroll-mt-8 mt-16">
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
                    Experience
                </h2>
                <div className="section-line" />
            </motion.div>

            {/* Timeline */}
            <motion.div
                className="relative ml-4 lg:ml-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Vertical Line */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-px"
                    style={{ background: "var(--color-border)" }}
                />

                {experiences.map((exp) => (
                    <motion.div
                        key={exp.id}
                        className="relative pl-10 pb-12 last:pb-0"
                        variants={staggerItem}
                    >
                        {/* Timeline Dot */}
                        <motion.div
                            className="absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-[5.5px]"
                            style={{
                                background: "var(--color-accent)",
                                boxShadow: "0 0 20px var(--color-accent-glow)",
                            }}
                            variants={timelineDot}
                        />

                        {/* Connecting line glow effect */}
                        <div
                            className="absolute left-0 top-0 w-px h-full -translate-x-[0.5px]"
                            style={{
                                background: `linear-gradient(to bottom, var(--color-accent) 0px, var(--color-border) 40px)`,
                            }}
                        />

                        {/* Experience Card */}
                        <div className="glass rounded-2xl p-6 card-hover group">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{
                                            background: "var(--color-accent-glow)",
                                            border: "1px solid var(--color-accent)",
                                        }}
                                    >
                                        <Briefcase
                                            className="w-4 h-4"
                                            style={{ color: "var(--color-accent)" }}
                                        />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-lg font-semibold"
                                            style={{ color: "var(--color-text)" }}
                                        >
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="text-sm font-medium"
                                                style={{ color: "var(--color-accent)" }}
                                            >
                                                {exp.company}
                                            </span>
                                            {exp.companyUrl && (
                                                <a
                                                    href={exp.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="opacity-50 hover:opacity-100 transition-opacity"
                                                >
                                                    <ExternalLink
                                                        className="w-3 h-3"
                                                        style={{ color: "var(--color-accent)" }}
                                                    />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <span
                                    className="text-xs font-medium mt-2 sm:mt-0 px-3 py-1 rounded-full"
                                    style={{
                                        background: "var(--color-accent-glow)",
                                        color: "var(--color-accent)",
                                        border: "1px solid var(--color-border)",
                                    }}
                                >
                                    {exp.period}
                                </span>
                            </div>

                            <p
                                className="text-sm mb-4 leading-relaxed"
                                style={{ color: "var(--color-text-secondary)" }}
                            >
                                {exp.description}
                            </p>

                            {/* Achievements */}
                            <ul className="space-y-2 mb-4">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                            style={{ background: "var(--color-accent)" }}
                                        />
                                        <span style={{ color: "var(--color-text-secondary)" }}>
                                            {achievement}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                                        style={{
                                            background: "var(--color-accent-glow)",
                                            color: "var(--color-accent)",
                                            border: "1px solid var(--color-border)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
