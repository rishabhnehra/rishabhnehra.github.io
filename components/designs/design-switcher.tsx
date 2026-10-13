"use client";

import Link from "next/link";
import { useRef } from "react";
import { designs, type DesignSlug } from "@/lib/designs";

export function DesignSwitcher({ current }: { current: DesignSlug }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const index = designs.findIndex(({ slug }) => slug === current);
  const previous = designs[(index + designs.length - 1) % designs.length];
  const next = designs[(index + 1) % designs.length];

  return (
    <nav className="design-switcher" aria-label="Compare portfolio designs">
      <Link className="switcher-index" href="/designs">All designs <span aria-hidden="true">↗</span></Link>
      <details key={current} ref={menu} onKeyDown={(event) => { if (event.key === "Escape" && menu.current) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }}>
        <summary><span className="switcher-count">{index + 1} / {designs.length}</span><span className="switcher-name">{designs[index].name}</span><span aria-hidden="true">⌃</span></summary>
        <div className="switcher-menu">
          {designs.map((design) => <Link key={design.slug} href={`/designs/${design.slug}`} aria-current={current === design.slug ? "page" : undefined} onClick={() => { if (menu.current) menu.current.open = false; }}><span>{design.number}</span>{design.name}{current === design.slug && <span aria-hidden="true">✓</span>}</Link>)}
        </div>
      </details>
      <Link className="switcher-arrow" href={`/designs/${previous.slug}`} aria-label={`Previous design: ${previous.name}`}>←</Link>
      <Link className="switcher-arrow" href={`/designs/${next.slug}`} aria-label={`Next design: ${next.name}`}>→</Link>
    </nav>
  );
}
