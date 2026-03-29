"use client";

import { usePortfolioMode } from "./providers/portfolio-mode-provider";

const Footer = () => {
  const { mode } = usePortfolioMode();
  const isDeveloper = mode === "developer";

  if (!isDeveloper) {
    return null; // Editor mode has its own custom footer inside the editor-portfolio component
  }

  return (
    <footer className="max-w-7xl pl-14 mx-auto pr-6 px-4 mt-0 relative gap-10 flex">
      <div className="py-6 text-sm text-left font-black transition-colors duration-300 text-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} _tannd. Developer Portfolio.
      </div>
    </footer>
  );
};

export default Footer;
