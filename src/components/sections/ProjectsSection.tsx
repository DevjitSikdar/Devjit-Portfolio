"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { projects, type Project } from "@/lib/constants";
import { Github, Eye } from "lucide-react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectCard({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            variants={staggerItem}
            className="group rounded-2xl overflow-hidden glass card-hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <div
                    className="w-full h-full flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110"
                    style={{ background: "var(--color-background-secondary)" }}
                >
                    🖥️
                </div>

                {/* Overlay */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center gap-3"
                            style={{
                                background: "rgba(0,0,0,0.7)",
                                backdropFilter: "blur(4px)",
                            }}
                        >
                            {project.liveUrl && (
                                <motion.a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex items-center justify-center"
                                    style={{
                                        background: "var(--color-accent)",
                                        color: "var(--color-background)",
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    aria-label="View live"
                                >
                                    <Eye className="w-4 h-4" />
                                </motion.a>
                            )}
                            {project.githubUrl && (
                                <motion.a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full flex items-center justify-center"
                                    style={{
                                        background: "var(--color-accent)",
                                        color: "var(--color-background)",
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    aria-label="View source"
                                >
                                    <Github className="w-4 h-4" />
                                </motion.a>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Featured Badge */}
                {project.featured && (
                    <div
                        className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider"
                        style={{
                            background: "var(--color-accent)",
                            color: "var(--color-background)",
                        }}
                    >
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                >
                    {project.title}
                </h3>
                <p
                    className="text-sm leading-relaxed mb-4 line-clamp-2"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                            style={{
                                background: "var(--color-accent-glow)",
                                color: "var(--color-accent)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 4 && (
                        <span
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium"
                            style={{
                                color: "var(--color-text-secondary)",
                            }}
                        >
                            +{project.tags.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" className="scroll-mt-8 mt-16">
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
                    Portfolio
                </h2>
                <div className="section-line" />
            </motion.div>

            {/* Category Filter */}
            <motion.div
                className="flex flex-wrap gap-2 mb-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {categories.map((cat) => (
                    <motion.button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
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

            {/* Projects Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                layout
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
