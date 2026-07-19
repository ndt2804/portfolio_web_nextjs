"use client";

import React from "react";
import { TopHUD, BottomTimeline, CustomCursor, SideRails } from "@/components/reel/hud";
import { AppDock } from "@/components/reel/apps";
import {
  HeroScene,
  EditAndProjectsScene,
  PostProLabScene,
  ExportAndDeliverScene,
} from "@/components/reel/scenes";

export default function EditorPortfolio() {
  return (
    <div className="editor-theme-container relative bg-black text-[#fdfdfd] min-h-screen overflow-x-clip select-none pb-24">
      {/* 
        Tailwind v3 theme variables override.
        We redefine the Tailwind HSL components to map perfectly to the template's OKLCH color definitions,
        while maintaining direct compatibility with our custom tailwind classes.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter+Tight:ital,wght@0,300..900;1,300..900&display=swap');

        .editor-theme-container {
          --radius: 0.375rem;
          --background: 0 0% 8%; /* #141414 */
          --foreground: 0 0% 98%;
          --card: 240 1% 12%;
          --card-foreground: 0 0% 98%;
          --popover: 240 1% 12%;
          --popover-foreground: 0 0% 98%;
          --primary: 24 100% 60%; /* Orange */
          --primary-foreground: 0 0% 8%;
          --secondary: 240 1% 18%;
          --secondary-foreground: 0 0% 98%;
          --muted: 240 1% 16%;
          --muted-foreground: 240 1% 62%;
          --accent: 24 100% 60%;
          --accent-foreground: 0 0% 8%;
          --destructive: 0 85% 60%;
          --destructive-foreground: 0 0% 98%;
          --border: 240 1% 24% / 40%;
          --input: 240 1% 20%;
          --ring: 24 100% 60%;
          
          /* Template custom custom properties */
          --color-background: hsl(0 0% 8%);
          --color-foreground: hsl(0 0% 98%);
          --color-primary: hsl(24 100% 60%);
          --color-border: hsl(240 1% 24% / 40%);
          --color-surface: hsl(0 0% 11%);
          --color-surface-2: hsl(0 0% 15%);
          --color-accent-glow: hsla(24, 100%, 60%, 0.4);
          --color-rec: hsl(0 75% 55%);

          --surface: hsl(0 0% 11%);
          --surface-2: hsl(0 0% 15%);
          --accent-glow: hsla(24, 100%, 60%, 0.4);
          --rec: hsl(0 75% 55%);

          --font-display: "Inter Tight", "Space Grotesk", sans-serif;
          --font-mono: "JetBrains Mono", monospace;
          --font-sans: "Inter Tight", "Inter", sans-serif;
        }

        .text-mono {
          font-family: var(--font-mono) !important;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em;
        }

        .grain {
          position: relative;
        }
        .grain::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' seed='5'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/></svg>");
        }

        .hairline {
          background-image: linear-gradient(to right, transparent, var(--color-border), transparent);
          height: 1px;
        }

        @keyframes rec-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .rec-blink {
          animation: rec-blink 1.2s ease-in-out infinite;
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .scan {
          animation: scan 3s linear infinite;
        }

        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .float-y {
          animation: float-y 6s ease-in-out infinite;
        }
      `}</style>
      
      <TopHUD />
      <SideRails />
      <AppDock />
      <CustomCursor />
      
      <main className="relative">
        <HeroScene />
        <EditAndProjectsScene />
        <PostProLabScene />
        <ExportAndDeliverScene />
      </main>
      
      <BottomTimeline />
    </div>
  );
}
