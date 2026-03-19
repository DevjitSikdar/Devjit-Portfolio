"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { siteConfig, personalInfo } from "@/lib/constants";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
    { icon: Github, href: siteConfig.links.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="mt-20 pb-8">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Divider */}
                <div
                    className="w-full h-px mb-8"
                    style={{ background: "var(--color-border)" }}
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p
                        className="text-sm flex items-center gap-1"
                        style={{ color: "var(--color-text-secondary)" }}
                    >
                        © {new Date().getFullYear()} {personalInfo.fullName}. Made with
                        <Heart
                            className="w-3.5 h-3.5 inline"
                            style={{ color: "var(--color-accent)" }}
                            fill="var(--color-accent)"
                        />
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                                style={{
                                    background: "var(--color-card)",
                                    border: "1px solid var(--color-border)",
                                    color: "var(--color-text-secondary)",
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                    color: "var(--color-accent)",
                                }}
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4" />
                            </motion.a>
                        ))}

                        {/* Back to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ml-2"
                            style={{
                                background: "var(--color-accent)",
                                color: "var(--color-background)",
                            }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Back to top"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
