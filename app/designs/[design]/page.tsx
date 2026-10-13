import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { designs } from "@/lib/designs";
import { PortfolioDesign } from "@/components/designs/portfolio-designs";
import { DesignSwitcher } from "@/components/designs/design-switcher";

type Props = { params: Promise<{ design: string }> };

export function generateStaticParams() {
  return designs.map(({ slug }) => ({ design: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { design } = await params;
  const entry = designs.find(({ slug }) => slug === design);
  return { title: `${entry?.name ?? "Design not found"} | Rishabh Nehra` };
}

export default async function DesignPage({ params }: Props) {
  const { design } = await params;
  const entry = designs.find(({ slug }) => slug === design);
  if (!entry) notFound();

  return (
    <div className={`pv pv-${entry.slug}`}>
      <a className="pv-skip" href="#portfolio-content">Skip to content</a>
      <PortfolioDesign design={entry.slug} />
      <DesignSwitcher current={entry.slug} />
    </div>
  );
}
