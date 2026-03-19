// ─── Site Configuration ─────────────────────────────────────────────────────

export const siteConfig = {
    name: "Devjit Sikdar",
    title: "Devjit Sikdar | AI/ML Engineer & Full-Stack Developer",
    description:
        "AI/ML Engineer and Developer specializing in deep learning, computer vision, and modern web technologies.",
    url: "https://drive.google.com/file/d/1jI6N-Ob-870ejjPUAAgDiFyPJrazMj0E/view?usp=sharing",
    ogImage: "/og.png",
    links: {
        github: "https://github.com/DevjitSikdar",
        linkedin: "https://www.linkedin.com/in/devjitsikdar-3880451b7/",
        twitter: "https://twitter.com/devjitsikdar",
        email: "devjitsikdar0@gmail.com",
    },
};

// ─── Navigation ─────────────────────────────────────────────────────────────

export const navItems = [
    { label: "About", href: "#about" },
    { label: "Resume", href: "#experience" },
    { label: "Portfolio", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
] as const;

// ─── Personal Info ──────────────────────────────────────────────────────────

export const personalInfo = {
    name: "Devjit",
    fullName: "Devjit Sikdar",
    role: "AI/ML Engineer & Developer",
    tagline: "I build intelligent systems and digital experiences",
    bio: `Hello! I'm an AI/ML Engineer and Full-Stack Developer currently pursuing my B.Tech in Computer Science at IIIT Bhubaneswar. I specialize in Python, Deep Learning, Computer Vision, and modern web technologies. With a strong eye for design and a love for building scalable systems, I create digital experiences that are both robust and impactful.`,
    bioExtended: `My technical journey revolves around creating impactful solutions using artificial intelligence. From detecting diabetic retinopathy to building intelligent anti-cyberbullying bots, I enjoy applying AI to solve real-world problems. Furthermore, as a former Graphics Lead at Startup Grind India, I have a strong foundation in design, ensuring that my projects look as good as they function.`,
    avatar: "/avatar.png",
    email: "devjitsikdar0@gmail.com",
    phone: "+91-8777014564",
    location: "Bhubaneswar, Odisha",
    birthday: "Oct 17, 2004",
    resumeUrl: "https://drive.google.com/file/d/1jI6N-Ob-870ejjPUAAgDiFyPJrazMj0E/view?usp=sharing",
};

// ─── Skills ─────────────────────────────────────────────────────────────────

export interface Skill {
    name: string;
    level: number; // 0-100
    category: string;
    icon?: string;
}

export const skills: Skill[] = [
    // Languages
    { name: "Python", level: 95, category: "Languages" },
    { name: "C / C++", level: 85, category: "Languages" },
    { name: "SQL", level: 88, category: "Languages" },
    { name: "HTML / CSS", level: 90, category: "Languages" },

    // ML & AI
    { name: "TensorFlow", level: 90, category: "ML & AI" },
    { name: "PyTorch", level: 85, category: "ML & AI" },
    { name: "OpenCV", level: 92, category: "ML & AI" },
    { name: "Deep Learning (CNNs)", level: 90, category: "ML & AI" },
    { name: "Computer Vision", level: 88, category: "ML & AI" },

    // Tools & Frameworks
    { name: "Flask", level: 85, category: "Tools" },
    { name: "Docker", level: 80, category: "Tools" },
    { name: "Git / GitHub", level: 90, category: "Tools" },
    { name: "OpenAI / Gemini API", level: 90, category: "Tools" },
    { name: "MySQL", level: 85, category: "Tools" },
];

// ─── Projects ───────────────────────────────────────────────────────────────

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    category: string;
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: "project-1",
        title: "RetinoScan - Diabetic Retinopathy Detection",
        description:
            "Deep learning model with EfficientNet achieving ~87% accuracy on Kaggle EyePACS dataset. Implemented OpenCV for retinal image quality improvement.",
        image: "/projects/project1.png",
        tags: ["Python", "TensorFlow", "EfficientNet", "OpenCV"],
        category: "AI/ML",
        githubUrl: "https://github.com/DevjitSikdar",
        featured: true,
    },
    {
        id: "project-2",
        title: "ChromaRevive - AI Image Colorizer",
        description:
            "Deep learning model using CNNs to automatically colorize black and white images via a real-time Flask web interface.",
        image: "/projects/project2.png",
        tags: ["Python", "TensorFlow", "CNN", "OpenCV", "Flask"],
        category: "AI/ML",
        githubUrl: "https://github.com/DevjitSikdar",
        featured: true,
    },
    {
        id: "project-3",
        title: "Sanskaari Bot - Anti Cyber Bullying System",
        description:
            "Intelligent moderation bot using Google Perspective API and NLP to detect and filter cyberbullying in real-time across Discord servers.",
        image: "/projects/project3.png",
        tags: ["Python", "Google Perspective API", "Discord API"],
        category: "AI/ML",
        githubUrl: "https://github.com/DevjitSikdar",
        featured: true,
    },
];

// ─── Experience ─────────────────────────────────────────────────────────────

export interface Experience {
    id: string;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: "exp-1",
        role: "Graphics Lead",
        company: "Startup Grind India",
        companyUrl: "https://startupgrind.com",
        period: "2022 – 2024",
        description:
            "Led the national design team, producing consistent and high-quality visuals for events, campaigns, and digital outreach.",
        achievements: [
            "Designed brand-compliant social media graphics, increasing audience engagement by 30%",
            "Coordinated with chapter leaders and global teams to ensure brand consistency across 20+ chapters",
            "Mentored junior designers and established a streamlined design workflow, reducing turnaround time by 40%",
        ],
        technologies: ["Graphic Design", "Leadership", "Team Coordination"],
    },
    {
        id: "edu-1",
        role: "B.Tech in Computer Science",
        company: "IIIT Bhubaneswar",
        companyUrl: "https://www.iiit-bh.ac.in/",
        period: "2022 – 2026",
        description:
            "Undergraduate studies in Computer Science. Organized events and consistently participated in tech competitions.",
        achievements: [
            "D3 Fest Organizer & Contributor for one of Bhubaneswar's largest techno-management fests",
            "Cyberhunt Runners-Up (2 Consecutive Years) in a national-level cybersecurity competition",
            "Employee of the Month (September 2023) - Recognized for outstanding performance at Funding Den 2.O",
        ],
        technologies: ["Computer Science", "Programming", "Algorithms"],
    },
    {
        id: "edu-2",
        role: "Higher Secondary Education",
        company: "Kendriya Vidyalaya Cossipore",
        companyUrl: "",
        period: "2010 – 2022",
        description:
            "Secondary and Higher Secondary Education in Kolkata, West Bengal.",
        achievements: [],
        technologies: ["Mathematics", "Science"],
    },
];

// ─── What I'm Doing ─────────────────────────────────────────────────────────

export interface Service {
    icon: string;
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        icon: "brain",
        title: "AI & Machine Learning",
        description:
            "Building deep learning models and integrating cutting-edge AI pipelines into scalable applications.",
    },
    {
        icon: "code",
        title: "Full-Stack Web Development",
        description:
            "Creating responsive and performant web applications using modern JavaScript/TypeScript frameworks.",
    },
    {
        icon: "smartphone",
        title: "Computer Vision",
        description:
            "Developing advanced image processing and visual recognition systems using OpenCV and CNNs.",
    },
    {
        icon: "palette",
        title: "UI/UX & Graphic Design",
        description:
            "Designing brand-compliant, high-quality visuals and user-centric interfaces.",
    },
];

// ─── Themes ─────────────────────────────────────────────────────────────────

export type ThemeKey = "neonNight" | "ocean" | "parchment";

export interface ThemeConfig {
    key: ThemeKey;
    name: string;
    emoji: string;
    background: string;
    backgroundSecondary: string;
    accent: string;
    accentGlow: string;
    text: string;
    textSecondary: string;
    border: string;
    card: string;
    cardHover: string;
}

export const themes: Record<ThemeKey, ThemeConfig> = {
    neonNight: {
        key: "neonNight",
        name: "Tokyo Night",
        emoji: "🌃",
        background: "#150305", // dark shade of red and black mixed
        backgroundSecondary: "#0A0102", // very dark, almost pitch black-red
        accent: "#00FFFF", // neon cyan highlights
        accentGlow: "rgba(255, 0, 255, 0.6)", // hot pink/magenta glow
        text: "#FFFFFF",
        textSecondary: "#FFA3FF", // soft neon pink complementary text
        border: "rgba(0, 255, 255, 0.3)", // cyan borders
        card: "rgba(0, 255, 255, 0.05)", // slight cyan tint on dark background
        cardHover: "rgba(255, 0, 255, 0.2)", // hover flips to hot pink glow
    },
    ocean: {
        key: "ocean",
        name: "Deep Ocean",
        emoji: "🪼",
        background: "#0B1D42",
        backgroundSecondary: "#142A5C",
        accent: "#3B82F6",
        accentGlow: "rgba(59, 130, 246, 0.25)",
        text: "#FFFFFF",
        textSecondary: "#93C5FD",
        border: "rgba(59, 130, 246, 0.3)",
        card: "rgba(59, 130, 246, 0.06)",
        cardHover: "rgba(59, 130, 246, 0.12)",
    },
    parchment: {
        key: "parchment",
        name: "Vintage Mahogany",
        emoji: "🐌",
        background: "#F1E5D1",
        backgroundSecondary: "#E8D8C3",
        accent: "#4A1A14",
        accentGlow: "rgba(74, 26, 20, 0.15)",
        text: "#2E1500",
        textSecondary: "#5C3A21",
        border: "rgba(74, 26, 20, 0.15)",
        card: "rgba(74, 26, 20, 0.04)",
        cardHover: "rgba(74, 26, 20, 0.08)",
    },
};
