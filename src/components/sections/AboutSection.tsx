"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    fadeInUp,
    staggerContainer,
    staggerItem,
} from "@/lib/animations";
import { personalInfo, services } from "@/lib/constants";
import { Code, Palette, Smartphone, Brain } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    code: Code,
    palette: Palette,
    smartphone: Smartphone,
    brain: Brain,
};

export default function AboutSection() {
    return (
        <section id="about" className="scroll-mt-8">
            {/* Section Title */}
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
                    About Me
                </h2>
                <div className="section-line" />
            </motion.div>

            {/* Bio */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4"
            >
                <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    {personalInfo.bio}
                </p>
                <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                >
                    {personalInfo.bioExtended}
                </p>
            </motion.div>

            {/* What I'm Doing */}
            <motion.div
                className="mt-12"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h3
                    className="text-xl lg:text-2xl font-semibold mb-6"
                    style={{ color: "var(--color-text)" }}
                >
                    What I&apos;m Doing
                </h3>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => {
                        const Icon = iconMap[service.icon] || Code;
                        return (
                            <motion.div
                                key={service.title}
                                className="p-6 rounded-2xl glass card-hover group"
                                variants={staggerItem}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                        style={{
                                            background: "var(--color-accent-glow)",
                                            border: "1px solid var(--color-accent)",
                                        }}
                                    >
                                        <Icon
                                            className="w-5 h-5"
                                            style={{ color: "var(--color-accent)" }}
                                        />
                                    </div>
                                    <div>
                                        <h4
                                            className="text-base font-semibold mb-1"
                                            style={{ color: "var(--color-text)" }}
                                        >
                                            {service.title}
                                        </h4>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: "var(--color-text-secondary)" }}
                                        >
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}
