import Link from "next/link";
import { designs, type DesignSlug } from "@/lib/designs";
import { activeDesign } from "@/lib/site-design";

function DesignThumbnail({ design }: { design: DesignSlug }) {
  return <div className={`design-thumbnail thumbnail-${design}`} aria-hidden="true">
    <div className="thumbnail-nav"><span>R / N</span><span>Work &nbsp; About &nbsp; Contact ↗</span></div>
    {design === "editorial" && <><div className="thumbnail-editorial"><span>SOFTWARE<br />ENGINEERING</span><div>Good software.<br /><em>From the inside out.</em></div></div><div className="thumbnail-columns"><div><b>Less waiting.<br />More building.</b><i /></div><div><b>The right access,<br />everywhere.</b><i /></div></div></>}
    {design === "field-notes" && <div className="thumbnail-notebook"><aside>00 / INTRO<br /><br />01 / BUILDS<br /><br />02 / ACCESS</aside><div><small>ENGINEERING NOTEBOOK</small><b>Engineering,<br />in practice.</b><div className="thumbnail-flow"><span>CI</span>→<span>Cache</span>→<span>Build</span></div><i /></div></div>}
    {design === "quiet" && <div className="thumbnail-quiet"><small>Namaste, I’m</small><b>Rishabh Nehra.</b><p>I build product interfaces and the systems behind them.</p><i /><small>Some things I’ve worked on</small><hr /><span>Build performance ↗</span><hr /><span>Fine-grained authorization ↗</span></div>}
    {design === "typographic" && <><div className="thumbnail-type">RISHABH<br />NEHRA<span>✳</span></div><div className="thumbnail-type-foot"><b>Interfaces.<br />Infrastructure.<br />Impact.</b><i /></div></>}
    {design === "restrained" && <><div className="thumbnail-restrained"><b>BUILD.<br />REFINE.<br /><span>REPEAT.</span></b><aside>↗<small>Rishabh Nehra<br />Sapiens R&D</small></aside></div><div className="thumbnail-rules">01 / BUILD PERFORMANCE<hr />02 / AUTHORIZATION</div></>}
    {design === "neo" && <><div className="thumbnail-neo"><b>Big on the details.<br /><span>Bigger on the<br />whole picture.</span></b><aside>UI meets<br />everything<br />behind it.</aside></div><div className="thumbnail-neo-blocks"><span>Faster builds ↗</span><span>Shared UI ↗</span></div></>}
    {design === "diagram-editorial" && <><div className="thumbnail-diagram"><b>Behind every interface,<br />there’s <em>a system.</em></b><div><span>Interfaces</span><span>Services</span><span>Platforms</span></div></div><div className="thumbnail-diagram-story"><b>Less waiting.<br />More building.</b><div><i /><i /></div></div></>}
    {design === "combined" && <><div className="thumbnail-combined-name">RISHABH<br /><span>NEHRA ✳</span></div><div className="thumbnail-combined-story"><div><small>01 / DEVELOPER EXPERIENCE</small><b>Less waiting.<br />More building.</b></div><div className="thumbnail-combined-system"><small>BUILD DURATION</small><i /><i /><span>Actions → Cache → Build</span></div></div></>}
  </div>;
}

export default function DesignGallery() {
  return <main className="design-gallery">
    <header className="gallery-nav"><Link href="/">Rishabh Nehra <span>/ Portfolio</span></Link><span>Design explorations / 01 — {designs[designs.length - 1].number}</span></header>
    <section className="gallery-intro"><p className="gallery-eyebrow">A different way to tell the same story.</p><h1>Eight directions.<br /><em>One engineer.</em></h1><div><p>Explore {designs.length} distinct takes on my portfolio. Same experience, different expression. Open a direction, read the work, and see what feels right.</p><span>Typography · Structure · Personality</span></div></section>
    <section className="gallery-grid" aria-label="Portfolio design previews">{designs.map((design) => <Link href={`/designs/${design.slug}`} key={design.slug} className="gallery-card"><DesignThumbnail design={design.slug} /><div className="gallery-card-heading"><span>{design.number}</span><h2>{design.name}{design.slug === activeDesign && <span className="gallery-active-label">Current</span>}</h2><span aria-hidden="true">↗</span></div><p>{design.description}</p><div className="gallery-card-meta"><span>{design.traits}</span><div className="gallery-swatches" aria-hidden="true">{design.palette.map((color) => <i key={color} style={{ background: color }} />)}</div></div></Link>)}</section>
    <footer className="gallery-footer"><p>Take your time. Try them on a smaller screen, too.</p><Link href="/">View the portfolio ↗</Link></footer>
  </main>;
}
