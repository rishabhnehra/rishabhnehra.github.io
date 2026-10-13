import { PortfolioDesign } from "@/components/designs/portfolio-designs";
import { activeDesign } from "@/lib/site-design";
import "./designs/designs.css";
import "./designs/combined.css";

export default function Home() {
  return (
    <div className={`pv pv-${activeDesign} pv-home`}>
      <a className="pv-skip" href="#portfolio-content">Skip to content</a>
      <PortfolioDesign design={activeDesign} />
    </div>
  );
}
