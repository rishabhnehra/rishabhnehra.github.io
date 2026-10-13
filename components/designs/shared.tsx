import { experiences, personalInfo, skills, socialLinks } from "@/lib/data";
import { selectedWork, type Work } from "@/lib/designs";

export const intro = "I build product interfaces and the systems behind them. Currently at Sapiens R&D, working across React, Node.js, and enterprise platforms.";

export function PortfolioNav({ wordmark = personalInfo.name }: { wordmark?: string }) {
  return <header className="pv-nav"><a href="#portfolio-content" className="pv-wordmark">{wordmark}</a><nav aria-label="Portfolio sections"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <span aria-hidden="true">↗</span></a></nav></header>;
}

export function EmailLink({ children = "Say hello", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a className={className} href={`mailto:${personalInfo.email}`}>{children} <span aria-hidden="true">↗</span></a>;
}

export function SocialProfiles() {
  const profiles = socialLinks.filter(({ url }) => !url.includes("your-"));
  if (profiles.length === 0) return null;

  return (
    <nav className="pv-social" aria-label="Social profiles">
      {profiles.map((profile) => (
        <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer">
          {profile.name} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </nav>
  );
}

export function WorkDetail({ work, children }: { work: Work; children?: React.ReactNode }) {
  return <details className="pv-work-detail" id={work.id}>
    <summary><span className="pv-work-number">{work.number}</span><span className="pv-work-main"><span className="pv-label">{work.category}</span><span className="pv-work-title">{work.plainTitle}</span><span className="pv-work-summary">{work.summary}</span></span><span className="pv-work-result">{work.result}</span><span className="pv-expand" aria-hidden="true">+</span></summary>
    <div className="pv-work-body"><p className="pv-label">Sapiens R&D / Professional contribution</p><dl><div><dt>Problem</dt><dd>{work.problem}</dd></div><div><dt>Approach</dt><dd>{work.approach}</dd></div><div><dt>Outcome</dt><dd>{work.outcome}</dd></div></dl><p className="pv-stack">{work.technologies}</p>{children}</div>
  </details>;
}

export function WorkList() {
  return <div className="pv-work-list">{selectedWork.map((work) => <WorkDetail key={work.id} work={work} />)}</div>;
}

export function Career({ heading = "Where I've been" }: { heading?: string }) {
  return <section className="pv-career" id="experience"><h2>{heading}</h2><div>{experiences.map((experience) => <article key={experience.company}><p className="pv-career-period">{experience.period}</p><div><h3>{experience.company}</h3><p className="pv-career-role">{experience.role}</p><p className="pv-career-description">{experience.description}</p></div></article>)}</div></section>;
}

export function Toolset() {
  return <div className="pv-toolset">{skills.map((group) => <div key={group.category}><h3>{group.category}</h3><p>{group.skills.map(({ name }) => name).join(" · ")}</p></div>)}</div>;
}

export function About({ heading = "A little about me" }: { heading?: string }) {
  return <section className="pv-about" id="about"><div><p className="pv-label">Beyond the headline</p><h2>{heading}</h2></div><div><p>{personalInfo.bio}</p><Toolset /></div></section>;
}

export function Contact({ title = "Let's build something useful." }: { title?: string }) {
  return (
    <footer className="pv-contact" id="contact">
      <div>
        <p className="pv-label">Have something in mind?</p>
        <h2>{title}</h2>
        <div className="pv-contact-links"><EmailLink /><SocialProfiles /></div>
      </div>
      <div className="pv-colophon"><span>{personalInfo.name}</span><span>{personalInfo.location}</span><a href="#portfolio-content">Back to top ↑</a></div>
    </footer>
  );
}

// Conceptual flows based on the provided résumé, not production architecture.
export function SystemDiagram({ kind }: { kind: Work["diagram"] }) {
  return <figure className={`pv-diagram pv-diagram-${kind}`}>
    {kind === "build" && <><div className="diagram-caption">Build duration / before & after</div><div className="diagram-bar-row"><span>Before</span><div className="diagram-bar diagram-before" /><strong>120 min</strong></div><div className="diagram-bar-row"><span>After</span><div className="diagram-bar diagram-after" /><strong>45 min</strong></div><div className="diagram-flow"><span>GitHub Actions</span><b aria-hidden="true">→</b><span>Caching + parallel builds</span><b aria-hidden="true">→</b><span>Faster feedback</span></div></>}
    {kind === "access" && <><div className="diagram-caption">Authorization / conceptual overview</div><div className="diagram-flow"><span>Client policies</span><b aria-hidden="true">→</b><span>OPA + OPAL + Redis</span><b aria-hidden="true">→</b><span>Portal components</span></div><div className="diagram-outcome">Granular component-level access</div></>}
    {kind === "library" && <><div className="diagram-caption">Shared UI / conceptual overview</div><div className="diagram-flow"><span>Design system</span><b aria-hidden="true">→</b><span>React library</span><b aria-hidden="true">→</b><span>Product interfaces</span></div><div className="diagram-outcome">Storybook documentation · Rollup packaging</div></>}
    {kind === "telemetry" && <><div className="diagram-caption">Observability / conceptual overview</div><div className="diagram-flow"><span>Enterprise portals</span><b aria-hidden="true">→</b><span>OpenTelemetry</span><b aria-hidden="true">→</b><span>Traces · Metrics · Logs</span></div></>}
    <figcaption>{kind === "build" ? "Build times reported in the résumé." : "Simplified overview based on the résumé."}</figcaption>
  </figure>;
}
