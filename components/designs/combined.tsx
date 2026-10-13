import { personalInfo } from "@/lib/data";
import { selectedWork } from "@/lib/designs";
import {
  About,
  Career,
  Contact,
  EmailLink,
  intro,
  PortfolioNav,
  SocialProfiles,
  SystemDiagram,
} from "./shared";

export function Combined() {
  return (
    <>
      <PortfolioNav wordmark="RN / Software engineering" />
      <main id="portfolio-content" className="combined-shell">
        <section className="combined-hero" aria-labelledby="combined-name">
          <div className="combined-hero-meta">
            <p className="pv-label">{personalInfo.title} / Sapiens R&D</p>
            <p className="pv-label">{personalInfo.location}</p>
          </div>
          <h1 id="combined-name">
            <span>Rishabh</span>
            <span>Nehra<span className="combined-asterisk" aria-hidden="true">✳</span></span>
          </h1>
          <div className="combined-introduction">
            <p className="combined-statement">Product interfaces.<br /><em>Platform thinking.</em></p>
            <div className="combined-intro-copy">
              <p>{intro}</p>
              <div className="combined-links">
                <a href="#work">Explore the work <span aria-hidden="true">↓</span></a>
                <EmailLink>Get in touch</EmailLink>
                <SocialProfiles />
              </div>
            </div>
          </div>
          <div className="combined-hero-bottom">
            <span>React / TypeScript / Node.js</span>
            <span>Interfaces → Services → Platforms</span>
          </div>
        </section>

        <section id="work" className="combined-work" aria-labelledby="combined-work-heading">
          <header className="combined-section-header">
            <div>
              <p className="pv-label">Selected professional contributions</p>
              <h2 id="combined-work-heading">Work, <em>explained.</em></h2>
            </div>
            <p className="pv-label">Sapiens R&D / 2021 — Present</p>
          </header>
          {selectedWork.map((work) => (
            <article key={work.id} id={work.id} className="combined-story">
              <div className="combined-story-copy">
                <p className="pv-label"><span>{work.number}</span> / {work.category}</p>
                <h3>{work.title}</h3>
                <p className="combined-result">{work.result}</p>
                <p className="combined-summary">{work.summary}</p>
                <details className="combined-decisions">
                  <summary>Context & decisions <span className="combined-toggle" aria-hidden="true">+</span></summary>
                  <dl>
                    <div><dt>Problem</dt><dd>{work.problem}</dd></div>
                    <div><dt>Approach</dt><dd>{work.approach}</dd></div>
                    <div><dt>Outcome</dt><dd>{work.outcome}</dd></div>
                  </dl>
                </details>
                <p className="pv-stack">{work.technologies}</p>
              </div>
              <SystemDiagram kind={work.diagram} />
            </article>
          ))}
        </section>

        <About heading="From the interface to the whole platform." />
        <Career heading="The experience behind the work." />
      </main>
      <Contact title="Have a good problem in mind?" />
    </>
  );
}
