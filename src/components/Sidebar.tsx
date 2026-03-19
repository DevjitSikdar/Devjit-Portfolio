"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, siteConfig } from "@/lib/constants";
import {
    Mail,
    Phone,
    MapPin,
    Calendar,
    Github,
    Linkedin,
    Twitter,
    ChevronDown,
} from "lucide-react";
import { fadeInLeft, staggerContainer, staggerItem } from "@/lib/animations";

interface SidebarProps {
    activeSection: string;
    onNavigate: (href: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const contactItems = [
        { icon: Mail, label: "EMAIL", value: personalInfo.email },
        { icon: Phone, label: "PHONE", value: personalInfo.phone },
        { icon: MapPin, label: "LOCATION", value: personalInfo.location },
        { icon: Calendar, label: "BIRTHDAY", value: personalInfo.birthday },
    ];

    const socialLinks = [
        { icon: Github, href: siteConfig.links.github, label: "GitHub" },
        { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
        { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
    ];

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden fixed top-6 left-6 z-50 p-3 rounded-xl glass-strong"
                aria-label="Toggle sidebar"
            >
                <motion.div
                    animate={{ rotate: isMobileOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5" style={{ color: "var(--color-text)" }} />
                </motion.div>
            </button>

            {/* Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                        onClick={() => setIsMobileOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                className={`fixed lg:sticky top-0 left-0 h-screen z-40 w-[280px] lg:w-[300px] 
          overflow-y-auto scrollbar-hide flex flex-col
          glass-strong rounded-none lg:rounded-r-2xl
          transition-transform duration-300 lg:translate-x-0
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col items-center p-6 lg:p-8">
                    {/* Avatar */}
                    <motion.div
                        className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden mb-4"
                        style={{
                            border: "3px solid var(--color-accent)",
                            boxShadow: "0 0 30px var(--color-accent-glow)",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <video
                            src="/GIF_Video_Creation_Professional_Greeting.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Name & Role */}
                    <h1
                        className="text-xl lg:text-2xl font-bold mt-2"
                        style={{ color: "var(--color-text)" }}
                    >
                        {personalInfo.fullName}
                    </h1>
                    <motion.span
                        className="mt-2 px-4 py-1.5 rounded-lg text-xs font-medium tracking-wider uppercase"
                        style={{
                            background: "var(--color-accent-glow)",
                            color: "var(--color-accent)",
                            border: "1px solid var(--color-accent)",
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {personalInfo.role}
                    </motion.span>

                    {/* Divider */}
                    <div
                        className="w-full h-px my-6"
                        style={{ background: "var(--color-border)" }}
                    />

                    {/* Contact Info */}
                    <motion.div
                        className="w-full space-y-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {contactItems.map((item) => (
                            <motion.div
                                key={item.label}
                                className="flex items-center gap-3"
                                variants={staggerItem}
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: "var(--color-accent-glow)",
                                        border: "1px solid var(--color-border)",
                                    }}
                                >
                                    <item.icon
                                        className="w-4 h-4"
                                        style={{ color: "var(--color-accent)" }}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p
                                        className="text-[10px] uppercase tracking-wider font-medium"
                                        style={{ color: "var(--color-text-secondary)" }}
                                    >
                                        {item.label}
                                    </p>
                                    <p
                                        className="text-sm truncate"
                                        style={{ color: "var(--color-text)" }}
                                    >
                                        {item.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Divider */}
                    <div
                        className="w-full h-px my-6"
                        style={{ background: "var(--color-border)" }}
                    />

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                                style={{
                                    background: "var(--color-card)",
                                    border: "1px solid var(--color-border)",
                                    color: "var(--color-text-secondary)",
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                }}
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.aside>
        </>
    );
}
