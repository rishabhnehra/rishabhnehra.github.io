import { personalInfo } from "@/lib/data";
import { selectedWork, type DesignSlug } from "@/lib/designs";
import { About, Career, Contact, EmailLink, intro, PortfolioNav, SystemDiagram, Toolset, WorkList } from "./shared";
import { Combined } from "./combined";

function Editorial() {
  return <>
    <PortfolioNav wordmark="Rishabh Nehra / Engineering" />
    <main id="portfolio-content" className="pv-wrap">
      <section className="editorial-hero"><div className="editorial-margin"><span className="pv-label">A practice in<br />software engineering</span><span className="editorial-margin-bottom">Based in Gujarat, India<br />Currently at Sapiens R&D</span></div><div><p className="pv-label">Interfaces. Platforms. Everything between.</p><h1>Good software.<br /><em>From the inside out.</em></h1><div className="editorial-intro"><p>{intro}</p><a href="#work">Explore selected work <span aria-hidden="true">↓</span></a></div></div></section>
      <section id="work" className="editorial-work"><div className="pv-section-title"><h2>Selected contributions</h2><span className="pv-label">Sapiens / 2021 — Present</span></div><div className="editorial-features">{selectedWork.slice(0, 2).map((work) => <article key={work.id}><p className="pv-label">{work.number} / {work.category}</p><h3>{work.title}</h3><p className="editorial-result">{work.result}</p><p>{work.summary}</p><a href={`#${work.id}`}>Read the contribution ↓</a></article>)}</div><WorkList /></section>
      <About heading="From the interface to the infrastructure." /><Career />
    </main><Contact />
  </>;
}

function FieldNotes() {
  return <>
    <PortfolioNav wordmark="RN / FIELD NOTES" />
    <main id="portfolio-content" className="field-shell"><aside className="field-sidebar"><p className="pv-label">Engineering notebook</p><div className="field-index"><a href="#intro">00 / Introduction</a>{selectedWork.map((work) => <a key={work.id} href={`#note-${work.id}`}>{work.number} / {work.plainTitle}</a>)}<a href="#about">05 / Background</a></div><p className="field-sidebar-foot">React / TypeScript / Node.js<br />Gujarat, India</p></aside><div className="field-content">
      <section className="field-hero" id="intro"><p className="pv-label"><span className="field-status" /> Currently / Sapiens R&D</p><h1>Rishabh Nehra<span>Engineering,<br />in practice.</span></h1><p>{intro}</p><div className="field-hero-links"><a href="#work">Open the notebook ↓</a><EmailLink /></div><p className="field-footnote">Selected professional contributions / 2021 — Present</p></section>
      <section id="work" className="field-notes">{selectedWork.map((work) => <article id={`note-${work.id}`} key={work.id}><header><span className="field-note-num">{work.number}</span><div><p className="pv-label">{work.category} / Sapiens</p><h2>{work.plainTitle}</h2></div></header><p className="field-lede">{work.summary}</p><SystemDiagram kind={work.diagram} /><dl className="field-decisions"><div><dt>Problem</dt><dd>{work.problem}</dd></div><div><dt>Implementation</dt><dd>{work.approach}</dd></div><div><dt>Result</dt><dd>{work.outcome}</dd></div></dl><p className="pv-stack">{work.technologies}</p></article>)}</section>
      <About heading="Background & tools" /><Career heading="Career log" />
    </div></main><Contact title="Start a conversation." />
  </>;
}

function Quiet() {
  return <div className="quiet-column">
    <PortfolioNav wordmark="rn." />
    <main id="portfolio-content"><section className="quiet-hero"><p className="quiet-greeting">Namaste, I’m</p><h1>{personalInfo.name}<span aria-hidden="true">.</span></h1><p className="quiet-role">{personalInfo.title} at Sapiens R&D.</p><p>I started with interfaces. These days, I also work on the systems that help teams build, secure, and understand their applications.</p><p>React, TypeScript, and Node.js are the tools I reach for most. I enjoy product work where the challenges keep evolving.</p><EmailLink>Get in touch</EmailLink></section>
      <section id="work" className="quiet-work"><div className="pv-section-title"><h2>Some things I’ve worked on</h2><span aria-hidden="true">✳</span></div>{selectedWork.map((work) => <details key={work.id} className="quiet-entry"><summary><span>{work.plainTitle}</span><span aria-hidden="true">↗</span></summary><p>{work.summary}</p><p className="quiet-result">{work.outcome}</p><p className="pv-stack">{work.technologies}</p></details>)}</section>
      <Career heading="Work, so far" /><section id="about" className="quiet-about"><h2>A little background</h2><p>{personalInfo.bio}</p><Toolset /></section>
    </main><Contact title="Always happy to talk software." />
  </div>;
}

function Typographic() {
  return <>
    <PortfolioNav wordmark="RN / SOFTWARE ENGINEERING" />
    <main id="portfolio-content"><section className="type-hero"><div className="type-title"><h1><span>RISHABH</span><span>NEHRA<span className="type-asterisk" aria-hidden="true">✳</span></span></h1></div><div className="type-subline"><p>Interfaces.<br />Infrastructure.<br />Impact.</p><div><p>{intro}</p><a href="#work">Selected work ↓</a></div><span className="pv-label">{personalInfo.location}<br />8+ years in software</span></div></section>
      <section id="work" className="type-work"><div className="pv-section-title"><h2>THE WORK</h2><span className="pv-label">Four selected contributions</span></div>{selectedWork.map((work) => <article key={work.id}><span className="type-work-num">{work.number}</span><div><p className="pv-label">{work.category}</p><h3>{work.plainTitle}</h3><p>{work.summary}</p><details><summary>Read the contribution <span aria-hidden="true">+</span></summary><p>{work.evidence}</p><p className="pv-stack">{work.technologies}</p></details></div><strong>{work.result}</strong></article>)}</section>
      <div className="pv-wrap"><About heading="BUILT ON EXPERIENCE." /><Career heading="THE JOURNEY" /></div>
    </main><Contact title="LET’S TALK." />
  </>;
}

function Restrained() {
  return <>
    <PortfolioNav wordmark="R / N" />
    <main id="portfolio-content" className="restrained-shell"><section className="restrained-hero"><div className="restrained-heading"><p className="pv-label">Senior Full Stack Developer / {personalInfo.location}</p><h1>BUILD.<br />REFINE.<br /><span>REPEAT.</span></h1></div><aside><div className="restrained-identity"><span className="restrained-mark" aria-hidden="true">↗</span><h2>{personalInfo.name}</h2><p>Sapiens R&D<br />2021 — Present</p></div><p>{intro}</p><a href="#work">Explore the work ↓</a></aside></section>
      <section className="restrained-work" id="work"><div className="restrained-section-head"><span className="pv-label">01 / Selected work</span><h2>Engineering with intent.</h2></div><WorkList /></section>
      <About heading="A foundation in frontend. A view of the whole platform." /><Career heading="Experience / 2017 — Present" />
    </main><Contact title="GOOD WORK STARTS WITH A CONVERSATION." />
  </>;
}

function Neo() {
  return <>
    <PortfolioNav wordmark="RISHABH.N" />
    <main id="portfolio-content" className="pv-wrap"><section className="neo-hero"><div><p className="neo-tag">Full stack developer / Sapiens R&D</p><h1>Big on the details.<br /><span>Bigger on<br />the whole picture.</span></h1><p>{intro}</p><div className="neo-actions"><a className="neo-button" href="#work">See what I build ↓</a><EmailLink className="neo-button neo-button-light" /></div></div><aside className="neo-board"><div className="neo-sticker" aria-hidden="true">↗</div><p className="pv-label">An engineer’s toolkit</p><h2>UI meets<br />everything<br />behind it.</h2><div className="neo-tool-grid"><span>React</span><span>TypeScript</span><span>Node.js</span><span>Next.js</span></div><p>Based in Gujarat, India.</p></aside></section>
      <section id="work" className="neo-work"><div className="pv-section-title"><h2>A few things I’ve built & improved.</h2><span className="neo-tag">Real work. Real problems.</span></div><div className="neo-work-grid">{selectedWork.map((work) => <article key={work.id}><div className="neo-card-top"><span className="neo-tag">{work.number} / {work.category}</span><span aria-hidden="true">↗</span></div><h3>{work.title}</h3><strong>{work.result}</strong><p>{work.summary}</p><details><summary>What went into it <span aria-hidden="true">+</span></summary><p>{work.evidence}</p><p className="pv-stack">{work.technologies}</p></details></article>)}</div></section>
      <About heading="A little more human, a little less headline." /><Career heading="The path so far." />
    </main><Contact title="Got a good problem?" />
  </>;
}

function DiagramEditorial() {
  return <>
    <PortfolioNav wordmark="Rishabh Nehra" />
    <main id="portfolio-content" className="pv-wrap"><section className="diagram-editorial-hero"><div><p className="pv-label">Software engineering / Sapiens R&D</p><h1>Behind every interface,<br />there’s <em>a system.</em></h1><p>{intro}</p><a href="#work">Explore the systems ↓</a></div><aside className="diagram-hero-aside"><p className="pv-label">A practice across the stack</p><div className="diagram-layer"><span>01</span><strong>Interfaces</strong><small>React / TypeScript</small></div><div className="diagram-layer"><span>02</span><strong>Services</strong><small>Node.js / REST APIs</small></div><div className="diagram-layer"><span>03</span><strong>Platforms</strong><small>CI/CD / OPA / OpenTelemetry</small></div><p>From the experience people see<br />to the infrastructure they rely on.</p></aside></section>
      <section id="work" className="diagram-stories"><div className="pv-section-title"><h2>Selected systems & stories</h2><span className="pv-label">Four perspectives on the work</span></div>{selectedWork.map((work) => <article key={work.id}><div className="diagram-story-text"><p className="pv-label">{work.number} / {work.category}</p><h3>{work.title}</h3><p>{work.summary}</p><details><summary>The engineering decisions <span aria-hidden="true">+</span></summary><p>{work.approach}</p><p>{work.outcome}</p><p className="pv-stack">{work.technologies}</p></details></div><SystemDiagram kind={work.diagram} /></article>)}</section>
      <About heading="A career connecting the pieces." /><Career />
    </main><Contact title="What are you working on?" />
  </>;
}

const pages = { editorial: Editorial, "field-notes": FieldNotes, quiet: Quiet, typographic: Typographic, restrained: Restrained, neo: Neo, "diagram-editorial": DiagramEditorial, combined: Combined };

export function PortfolioDesign({ design }: { design: DesignSlug }) {
  const Page = pages[design];
  return <Page />;
}
