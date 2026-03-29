"use client";

import { usePortfolioMode } from "./providers/portfolio-mode-provider";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { mode } = usePortfolioMode();
  const isDeveloper = mode === "developer";

  return (
    <>
      {isDeveloper && (
        <div className="absolute inset-0 -z-10 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1.5px)] [background-size:24px_24px]" />
      )}
      <main className={isDeveloper ? "flex-grow pl-6 pr-6 max-w-7xl mx-auto w-full" : "w-full min-h-screen pt-24 bg-[#0e0e0e]"}>
        {children}
      </main>
    </>
  );
}
