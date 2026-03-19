"use client";

import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const sections = ["about", "experience", "projects", "skills", "contact"];

export default function HomePage() {
    const [activeSection, setActiveSection] = useState("about");

    // Intersection Observer for active section detection
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-30% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavigate = useCallback((href: string) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <>
            <CustomCursor />
            <ThemeSwitcher />

            {/* Background gradient */}
            <div className="gradient-bg" />
            <div className="noise-overlay" />

            <div className="flex min-h-screen">
                {/* Sidebar */}
                <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

                {/* Main Content */}
                <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-12 py-6 lg:py-8 max-w-5xl">
                    <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
                    <HeroSection />
                    <div className="space-y-0">
                        <AboutSection />
                        <ExperienceSection />
                        <ProjectsSection />
                        <SkillsSection />
                        <ContactSection />
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
