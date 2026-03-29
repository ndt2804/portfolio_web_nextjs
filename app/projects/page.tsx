"use client";

import { usePortfolioMode } from "@/components/providers/portfolio-mode-provider";
import DeveloperProjects from "@/components/developer-projects";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const { mode } = usePortfolioMode();
  const router = useRouter();

  useEffect(() => {
    if (mode === "editor") {
      router.push("/");
    }
  }, [mode, router]);

  if (mode === "editor") return null;

  return <DeveloperProjects />;
}
