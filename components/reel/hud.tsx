"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

function TanndLogo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer select-none pointer-events-auto">
      {/* HUD Video / Play Icon */}
      <div className="relative w-5 h-5 flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transform group-hover:rotate-[360deg] transition-transform duration-700">
          {/* L-shaped crop corner brackets */}
          <path d="M 4 8 L 4 4 L 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M 20 8 L 20 4 L 16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M 4 16 L 4 20 L 8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M 20 16 L 20 20 L 16 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Central Play triangle */}
          <polygon points="10,8 15,12 10,16" fill="currentColor" />
        </svg>
      </div>
      
      {/* Brand Text with Blinking Cursor */}
      <span className="font-mono font-black tracking-widest text-foreground flex items-center gap-0.5 text-[10px] sm:text-[11px]">
        <span className="text-primary font-bold">_</span>TANND
        <span className="w-1 h-3 bg-primary animate-pulse ml-0.5 rounded-[1px] shadow-[0_0_8px_var(--accent-glow)]" />
      </span>
    </div>
  );
}

export function TopHUD() {
  const [tc, setTc] = useState("00:00:00:00");
  const [fps] = useState(24);
  const [resolution, setResolution] = useState("1920 × 1080");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setResolution("1080 × 1920 (9:16)");
      } else if (w < 1024) {
        setResolution("2048 × 1536 (4:3)");
      } else {
        setResolution("1920 × 1080 (16:9)");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let f = 0;
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const elapsed = (performance.now() - start) / 1000;
      const totalFrames = Math.floor(elapsed * fps);
      const frames = totalFrames % fps;
      const secs = Math.floor(totalFrames / fps) % 60;
      const mins = Math.floor(totalFrames / (fps * 60)) % 60;
      const hrs = Math.floor(totalFrames / (fps * 3600));
      setTc(
        `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(frames).padStart(2, "0")}`,
      );
      f++;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [fps]);

  return (
    <div className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-mono text-[9px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-foreground/70">
        <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--rec)] rec-blink" />
            <span className="text-[var(--rec)]">REC</span>
          </div>
          <span className="opacity-40">|</span>
          <TanndLogo />
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="hidden sm:inline">TC {tc}</span>
          <span className="hidden md:inline">{fps}.000 FPS</span>
          <span className="text-primary font-bold">{resolution}</span>
          <span className="hidden lg:inline">REC.709</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
          <span className="hidden sm:inline">CH.01</span>
          <a href="#contact" className="text-primary hover:underline">
            EXPORT →
          </a>
          <div className="scale-75 origin-right">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="hairline" />
    </div>
  );
}

export function BottomTimeline() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  const width = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const stages = [
    "IMPORT & BIO",
    "EDIT & PROJECTS",
    "POST-PRO LAB",
    "EXPORT & DELIVER",
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 pointer-events-none">
      <div className="hairline" />
      <div className="bg-background/85 backdrop-blur-md px-6 py-3">
        <div className="flex items-center justify-between mb-2 text-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
          <span>TIMELINE — V1</span>
          <span className="hidden md:inline">SCRUB TO NAVIGATE</span>
          <span>◼ OUT</span>
        </div>
        <div className="relative h-6 bg-[var(--surface)] rounded-sm overflow-hidden">
          {/* Frame ticks */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, transparent 0, transparent 23px, var(--color-border) 23px, var(--color-border) 24px)",
            }}
          />
          {/* Clips */}
          <div className="absolute inset-y-1 left-1 right-1 flex gap-[2px]">
            {stages.map((s, i) => (
              <div
                key={s}
                className="flex-1 rounded-[2px] flex items-center justify-center text-[9px] text-mono uppercase tracking-wider"
                style={{
                  background: `linear-gradient(180deg, oklch(0.2 0.02 ${40 + i * 10}) 0%, oklch(0.15 0.015 ${40 + i * 10}) 100%)`,
                  color: "oklch(0.85 0 0 / 0.7)",
                }}
              >
                <span className="truncate px-1">{s}</span>
              </div>
            ))}
          </div>
          {/* Progress fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary/25"
            style={{ width }}
          />
          {/* Playhead */}
          <motion.div
            className="absolute top-[-4px] bottom-[-4px] w-[2px] bg-primary shadow-[0_0_12px_var(--accent-glow)]"
            style={{ left: width }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-primary" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 30 });
  const sy = useSpring(y, { stiffness: 400, damping: 30 });
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      const target = el?.closest("[data-cursor]") as HTMLElement | null;
      setLabel(target?.dataset.cursor ?? null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] mix-blend-difference hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 rounded-full border border-white/80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-white rounded-full" />
          {/* crosshair */}
          <div className="absolute top-1/2 -left-3 h-px w-2 bg-white/60" />
          <div className="absolute top-1/2 -right-3 h-px w-2 bg-white/60" />
          <div className="absolute left-1/2 -top-3 w-px h-2 bg-white/60" />
          <div className="absolute left-1/2 -bottom-3 w-px h-2 bg-white/60" />
        </div>
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        {label ? (
          <div className="translate-x-6 translate-y-2 text-mono text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground px-2 py-1 rounded-sm font-semibold">
            {label}
          </div>
        ) : null}
      </motion.div>
    </>
  );
}

export function SideRails() {
  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 z-40 w-6 border-r border-border/50 bg-background/70 backdrop-blur-sm pointer-events-none hidden lg:flex flex-col items-center justify-between py-24 text-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
        <div className="rotate-180" style={{ writingMode: "vertical-rl" }}>
          PROJECT PANEL
        </div>
        <div style={{ writingMode: "vertical-rl" }}>SAFE AREA</div>
      </div>
      <div className="fixed right-0 top-0 bottom-0 z-40 w-6 border-l border-border/50 bg-background/70 backdrop-blur-sm pointer-events-none hidden lg:flex flex-col items-center justify-between py-24 text-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40">
        <div style={{ writingMode: "vertical-rl" }}>EFFECTS</div>
        <div className="rotate-180" style={{ writingMode: "vertical-rl" }}>
          RGB PARADE
        </div>
      </div>
    </>
  );
}
