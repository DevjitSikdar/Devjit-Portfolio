"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { personalInfo } from "@/lib/constants";
import {
    Send,
    Mail,
    MapPin,
    Phone,
    CheckCircle,
    AlertCircle,
    Loader2,
} from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
        "idle"
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const inputStyle = {
        background: "var(--color-card)",
        border: "1px solid var(--color-border)",
        color: "var(--color-text)",
    };

    const contactDetails = [
        { icon: Mail, label: "Email", value: personalInfo.email },
        { icon: Phone, label: "Phone", value: personalInfo.phone },
        { icon: MapPin, label: "Location", value: personalInfo.location },
    ];

    return (
        <section id="contact" className="scroll-mt-8 mt-16">
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
                    Contact
                </h2>
                <div className="section-line" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Contact Info */}
                <motion.div
                    className="lg:col-span-2 space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                        variants={staggerItem}
                    >
                        I&apos;m always open to discussing new projects, creative ideas, or
                        opportunities to be part of your vision. Feel free to reach out!
                    </motion.p>

                    {contactDetails.map((detail) => (
                        <motion.div
                            key={detail.label}
                            className="flex items-center gap-4 p-4 rounded-xl glass card-hover"
                            variants={staggerItem}
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: "var(--color-accent-glow)",
                                    border: "1px solid var(--color-accent)",
                                }}
                            >
                                <detail.icon
                                    className="w-5 h-5"
                                    style={{ color: "var(--color-accent)" }}
                                />
                            </div>
                            <div>
                                <p
                                    className="text-xs uppercase tracking-wider font-medium"
                                    style={{ color: "var(--color-text-secondary)" }}
                                >
                                    {detail.label}
                                </p>
                                <p
                                    className="text-sm font-medium"
                                    style={{ color: "var(--color-text)" }}
                                >
                                    {detail.value}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="lg:col-span-3"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Name */}
                        <div>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300 placeholder:opacity-50"
                                style={{
                                    ...inputStyle,
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = "var(--color-accent)";
                                    e.target.style.boxShadow = "0 0 20px var(--color-accent-glow)";
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "var(--color-border)";
                                    e.target.style.boxShadow = "none";
                                }}
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300 placeholder:opacity-50"
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.target.style.borderColor = "var(--color-accent)";
                                    e.target.style.boxShadow = "0 0 20px var(--color-accent-glow)";
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "var(--color-border)";
                                    e.target.style.boxShadow = "none";
                                }}
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                {...register("message")}
                                placeholder="Your Message"
                                rows={5}
                                className="w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300 resize-none placeholder:opacity-50"
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.target.style.borderColor = "var(--color-accent)";
                                    e.target.style.boxShadow = "0 0 20px var(--color-accent-glow)";
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "var(--color-border)";
                                    e.target.style.boxShadow = "none";
                                }}
                            />
                            {errors.message && (
                                <p className="mt-1 text-xs text-red-400">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
                            style={{
                                background: "var(--color-accent)",
                                color: "var(--color-background)",
                            }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 0 30px var(--color-accent-glow)",
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status === "sending" ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </>
                            )}
                        </motion.button>

                        {/* Status Messages */}
                        <AnimatePresence>
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2 text-sm text-emerald-400"
                                >
                                    <CheckCircle className="w-4 h-4" />
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </motion.div>
                            )}
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2 text-sm text-red-400"
                                >
                                    <AlertCircle className="w-4 h-4" />
                                    Something went wrong. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
