"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import DeveloperPortfolio from "@/components/developer-portfolio";
import EditorPortfolio from "@/components/editor-portfolio";

export default function Home() {
  const { mode } = usePortfolioMode();
  return mode === "developer" ? <DeveloperPortfolio /> : <EditorPortfolio />;
}
