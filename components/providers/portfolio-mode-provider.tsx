"use client";

import { createContext, useContext, useEffect, useState } from "react";

type PortfolioMode = "developer" | "editor";

interface PortfolioModeContextType {
  mode: PortfolioMode;
  toggleMode: () => void;
}

const PortfolioModeContext = createContext<PortfolioModeContextType | undefined>(
  undefined
);

export function PortfolioModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PortfolioMode>("developer");

  useEffect(() => {
    const savedMode = localStorage.getItem("portfolioMode") as PortfolioMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    if (mode === "editor") {
      document.body.style.backgroundColor = "#0e0e0e";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "developer" ? "editor" : "developer";
    setMode(newMode);
    localStorage.setItem("portfolioMode", newMode);
  };

  return (
    <PortfolioModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (context === undefined) {
    throw new Error(
      "usePortfolioMode must be used within a PortfolioModeProvider"
    );
  }
  return context;
}
