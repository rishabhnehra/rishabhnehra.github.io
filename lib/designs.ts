import { experiences } from "@/lib/data";

export const designs = [
  { slug: "editorial", number: "01", name: "Editorial engineer", short: "A portfolio with a point of view.", description: "Warm paper, expressive serif type, and spacious stories about the work.", palette: ["#f3efe6", "#252920", "#a3482e"], traits: "Ivory · Serif · Asymmetric" },
  { slug: "field-notes", number: "02", name: "Engineering field notes", short: "Inside the engineering.", description: "A dark technical notebook with numbered entries and visible system flows.", palette: ["#111f20", "#d8e5db", "#bce59a"], traits: "Dark · Monospace · Technical" },
  { slug: "quiet", number: "03", name: "Quiet personal homepage", short: "A small corner of the internet.", description: "A thoughtful reading column. Personal, simple, and comfortably understated.", palette: ["#faf9f6", "#32332f", "#66734c"], traits: "Minimal · Personal · Text first" },
  { slug: "typographic", number: "04", name: "Bold typographic portfolio", short: "Let the type do the talking.", description: "An oversized name, cobalt blue, and a striking composition of selected work.", palette: ["#f8f8f3", "#171717", "#254bdf"], traits: "Oversized · Cobalt · Graphic" },
  { slug: "restrained", number: "05", name: "Restrained brutalism", short: "Structure with conviction.", description: "A strict grid, heavy type, strong rules, and uncompromising clarity.", palette: ["#e9e8e2", "#22221f", "#df482d"], traits: "Structured · Heavy · Precise" },
  { slug: "neo", number: "06", name: "Neobrutalism", short: "Serious work. Playful energy.", description: "Butter yellow, punchy blocks, hard shadows, and a little personality.", palette: ["#f6eece", "#c2b4f5", "#e2f094"], traits: "Colorful · Outlined · Playful" },
  { slug: "diagram-editorial", number: "07", name: "Editorial + technical diagrams", short: "The story and the system.", description: "A calm editorial layout where diagrams help explain the engineering.", palette: ["#f4f3eb", "#273b32", "#dbe5d6"], traits: "Editorial · Visual · Analytical" },
  { slug: "combined", number: "08", name: "Combined / Type + systems", short: "A bold introduction. A closer look at the work.", description: "Cobalt typography, readable editorial stories, and diagrams from the engineering notebook.", palette: ["#f5f4ee", "#254bdf", "#eef0f8"], traits: "Cobalt · Editorial · Systems" },
] as const;

export type Design = (typeof designs)[number];
export type DesignSlug = Design["slug"];

const sapiens = experiences.find((experience) => experience.company === "Sapiens")!;
const cleanAchievement = (text: string) => text.replace(/^[^\p{L}\p{N}]+/u, "");

// The same résumé-backed work is used across the design previews.
// These are professional contributions, not invented public side projects.
export const selectedWork = [
  { id: "build-performance", number: "01", category: "Developer experience", title: "Less waiting. More building.", plainTitle: "Build performance", result: "2 hours → 45 minutes", summary: "Optimising GitHub Actions with caching and parallel builds across the product suite.", problem: "Long builds delayed feedback across the product suite.", approach: "Optimised GitHub Actions pipelines using caching and parallel builds.", outcome: "Build time reduced from approximately 2 hours to 45 minutes.", technologies: "GitHub Actions / Nx / CI/CD", evidence: cleanAchievement(sapiens.achievements[0]), diagram: "build" },
  { id: "authorization", number: "02", category: "Platform engineering", title: "The right access, everywhere.", plainTitle: "Fine-grained authorization", result: "Component-level access", summary: "An RBAC solution using OPA, OPAL, and Redis for granular access control across portals.", problem: "Clients needed granular access control across portals.", approach: "Built and maintained an RBAC solution using Open Policy Agent, OPAL, and Redis.", outcome: "Enabled client access policies at the component level.", technologies: "Open Policy Agent / OPAL / Redis", evidence: cleanAchievement(sapiens.achievements[1]), diagram: "access" },
  { id: "component-library", number: "03", category: "Frontend architecture", title: "One library. A shared language.", plainTitle: "Shared component library", result: "Company-wide library", summary: "A React component library based on the company design system, documented with Storybook.", problem: "Applications needed a shared implementation of the company design system.", approach: "Developed a component library with React, Styled Components, and Rollup, documented in Storybook.", outcome: "Delivered a company-wide component library for shared UI development.", technologies: "React / Styled Components / Rollup / Storybook", evidence: cleanAchievement(sapiens.achievements[3]), diagram: "library" },
  { id: "observability", number: "04", category: "Observability", title: "Making the platform visible.", plainTitle: "Standardised observability", result: "Traces / metrics / logs", summary: "Integrating OpenTelemetry across portals for standardised tracing, metrics, and logging.", problem: "Portals needed a standard approach to tracing, metrics, and logging.", approach: "Integrated OpenTelemetry across the portals.", outcome: "Standardised the platform's telemetry signals.", technologies: "OpenTelemetry / Enterprise portals", evidence: cleanAchievement(sapiens.achievements[2]), diagram: "telemetry" },
] as const;

export type Work = (typeof selectedWork)[number];
