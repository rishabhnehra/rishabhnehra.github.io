import type { Metadata } from "next";
import { designs } from "@/lib/designs";
import "./designs.css";
import "./combined.css";

export const metadata: Metadata = {
  title: "Portfolio design explorations | Rishabh Nehra",
  description: `${designs.length} visual directions for Rishabh Nehra's developer portfolio.`,
  robots: { index: false, follow: false },
};

export default function DesignsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
