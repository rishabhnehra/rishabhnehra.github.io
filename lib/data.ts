// ──────────────────────────────────────────────
// Type definitions
// ──────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  heroBio: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Stat {
  label: string;
  value: string;
}

// ──────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Rishabh Nehra",
  title: "Senior Full Stack Developer",
  heroBio:
    "Senior Full Stack Developer specialising in React, TypeScript & Node.js. Currently in the R&D department at Sapiens, building and scaling enterprise platforms with Next.js, Nx monorepos, Storybook, GitHub Actions, Open Policy Agent, and OpenTelemetry.",
  email: "rishabhnehrapersonal@gmail.com",
  location: "Gujarat, India",
  bio: "I'm a Senior Full Stack Developer with 8+ years of experience, specialising in React, TypeScript, and Node.js. Starting out deep in frontend work — building components, features, and responsive UIs — I've grown into platform-level responsibilities at Sapiens R&D: optimising web app build performance, integrating Open Policy Agent for fine-grained access control, leading OpenTelemetry implementation, managing GitHub Actions CI/CD pipelines, and securing the platform against third-party vulnerabilities. I enjoy  full stack product work where the challenges are real, dynamic, and keep evolving.",
  avatarUrl: "/images/avatar.png",
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: "Linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/your-username",
    icon: "Github",
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "TailwindCSS" },
      { name: "Redux" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "OPA/RBAC" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "Docker" },
      { name: "Nx Workspace" },
      { name: "Git" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Performance Optimization" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Sapiens",
    role: "Senior Full Stack Developer",
    period: "2021 - Present",
    description:
      "Working across the full stack to build, scale, and optimise enterprise platforms — from UI to infrastructure.",
    achievements: [
      "🚀 Optimised CI/CD pipelines on GitHub Actions using caching and parallel builds, reducing build time by ~60% (2hrs → 45 mins) — impacting all applications across the product suite",
      "🔐 Built and maintained an RBAC solution using Open Policy Agent (OPA) + OPAL + Redis, enabling granular component-level access control for clients across all portals",
      "🔭 Integrated OpenTelemetry across portals for standardised tracing, metrics, and logging",
      "🧩 Developed a company-wide component library using React, Styled Components, and Rollup — documented with Storybook, based on the company's design system",
      "⚙️ Created and managed REST APIs using NestJS, integrated with PostgreSQL and MongoDB for scalable backend solutions",
      "🌐 Feature development & bug fixes in Next.js app, with continuous performance optimisations",
      "🛡️ Security vulnerability management — identifying and resolving third-party package vulnerabilities across the platform",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Storybook",
      "Node.js",
      "Docker",
      "Nx",
      "Open Policy Agent",
      "OpenTelemetry",
      "GitHub Actions",
    ],
  },
  {
    company: "Amdocs",
    role: "Frontend Developer",
    period: "2020 - 2021",
    description:
      "Frontend engineer delivering customer-facing portal solutions for major global telecom enterprises.",
    achievements: [
      "🌍 Built and maintained customer-facing portals for enterprise telecom clients — British Telecom and Vodafone Italy",
      "🛠️ Led UI development using React, Redux, and SCSS ensuring responsive, performant user experiences",
      "🗂️ Contributed to CatalogOne — Amdocs' internal product catalog tool — with feature development and bug fixes",
      "📋 Worked directly with clients on user stories and production defects, maintaining continuous delivery and quality",
    ],
    technologies: ["React", "TypeScript", "SCSS", "Storybook", "Redux"],
  },
  {
    company: "Wipro",
    role: "Developer",
    period: "2017 - 2020",
    description:
      "Support and development role delivering enterprise PLM solutions for a global fashion brand.",
    achievements: [
      "👗 Provided support and development for FlexPLM — a Product Lifecycle Management application — for Levi's, resolving incidents and user-raised tasks",
      "⚙️ Automated weekend server maintenance using Jenkins, reducing manual node-restart time from ~30 mins to 5–10 mins — improving system reliability and freeing up engineer time",
      "⚛️ Built a React + Express mini application as part of Wipro's internal upskilling initiative for modern JavaScript stack",
      "🔧 Managed incident resolution and task handling, ensuring platform stability for end users",
    ],
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Jenkins",
      "JavaScript",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with server-side rendering, dynamic product filtering, and Stripe integration. Supports multi-tenant storefronts with role-based admin dashboards.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/your-username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.example.com",
    featured: true,
  },
  {
    title: "Real-time Dashboard",
    description:
      "An interactive analytics dashboard that visualizes live data streams with customizable charts and widgets. Handles high-frequency WebSocket events with smooth D3.js-powered visualizations.",
    technologies: ["React", "WebSockets", "D3.js", "TypeScript", "Redis"],
    githubUrl: "https://github.com/your-username/realtime-dashboard",
    liveUrl: "https://dashboard-demo.example.com",
    featured: true,
  },
  {
    title: "API Gateway",
    description:
      "A centralized API gateway with request routing, rate limiting, and fine-grained authorization using Open Policy Agent. Designed for microservice architectures with built-in observability.",
    technologies: ["Node.js", "Express", "OPA", "Docker", "Prometheus"],
    githubUrl: "https://github.com/your-username/api-gateway",
    featured: true,
  },
  {
    title: "Design System Library",
    description:
      "A comprehensive, accessible component library with 50+ components, interactive documentation, and theme customization support. Published as an internal npm package used across multiple products.",
    technologies: ["React", "Storybook", "TailwindCSS", "TypeScript"],
    githubUrl: "https://github.com/your-username/design-system",
    liveUrl: "https://design-system-demo.example.com",
    featured: true,
  },
  {
    title: "CI/CD Pipeline Optimizer",
    description:
      "A GitHub Actions toolkit that intelligently detects affected projects in an Nx monorepo and runs only the necessary build, test, and deploy steps. Cut average pipeline runtime by 60%.",
    technologies: ["GitHub Actions", "Nx", "TypeScript", "Bash"],
    githubUrl: "https://github.com/your-username/cicd-optimizer",
    featured: false,
  },
  {
    title: "Developer Portfolio",
    description:
      "A performant, animated developer portfolio built with Next.js and Framer Motion. Features smooth scroll-based animations, dark mode, and a perfect Lighthouse score.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/your-username/developer-portfolio",
    liveUrl: "https://portfolio.example.com",
    featured: false,
  },
];

export const stats: Stat[] = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Technologies", value: "25+" },
];
