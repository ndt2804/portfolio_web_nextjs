"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue, animate, useInView } from "framer-motion";
import { AppTile, AppRow, APPS } from "@/components/reel/apps";
import { Play, Pause, RotateCcw, Sliders } from "lucide-react";

/* ----------------------------- Shared & Helpers ----------------------------- */

export function StageLabel({ index, total, name, code }: { index: number; total: number; name: string; code: string }) {
  return (
    <div className="flex items-center gap-4 text-mono text-[11px] uppercase tracking-[0.3em] text-foreground/60">
      <span className="text-primary">{String(index).padStart(2, "0")}</span>
      <span className="w-8 h-px bg-border" />
      <span>{name}</span>
      <span className="opacity-40">/ {code}</span>
      <span className="opacity-40 ml-auto font-bold">CH {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
    </div>
  );
}

function GridBG() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function Particles({ count = 24 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 47) % 100;
        const top = (i * 83) % 100;
        const delay = (i % 8) * 0.4;
        const size = 1 + ((i * 3) % 3);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

/* -------------------------- 00. VIDEO PLAYER MODAL -------------------------- */

export function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  client,
  role,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title: string;
  client?: string;
  role?: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 pointer-events-auto">
      <div className="relative w-full max-w-4xl bg-[#111111] border border-border rounded-sm overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border text-mono text-[10px] uppercase tracking-widest text-foreground/60">
          <div>
            <span className="text-primary font-bold">MASTER MONITOR</span>
            <span className="opacity-40 px-2">|</span>
            <span>{client ? `${client} — ` : ""}{title}</span>
          </div>
          <button
            onClick={onClose}
            className="text-foreground/50 hover:text-white transition-colors text-xs font-bold font-sans"
            data-cursor="CLOSE"
          >
            ✕ CLOSE
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center gap-3 p-6 text-center">
              <div className="w-16 h-16 rounded-full border border-primary/45 flex items-center justify-center animate-pulse mb-2">
                <span className="text-primary text-[10px] text-mono font-bold">REEL PLAY</span>
              </div>
              <span className="text-mono text-[10px] uppercase text-foreground/50 tracking-wider font-bold">
                💡 PORTFOLIO PLACEHOLDER (Vimeo / YouTube Embed Link)
              </span>
              <span className="text-[9px] text-foreground/30 normal-case max-w-xs leading-normal">
                Replace this placeholder inside your project configuration in scenes.tsx with your reel or edit links.
              </span>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-6 grid grid-cols-3 gap-6 border-t border-border text-mono text-[10px] uppercase tracking-widest">
          <div>
            <div className="text-foreground/40 mb-2">PROJECT</div>
            <div className="text-foreground font-bold">{title}</div>
          </div>
          <div>
            <div className="text-foreground/40 mb-2">ROLE</div>
            <div className="text-primary font-bold">{role ?? "Lead Editor & Motion Designer"}</div>
          </div>
          <div>
            <div className="text-foreground/40 mb-2">SPECIFICATIONS</div>
            <div className="text-foreground/60 font-bold">3840×2160 · 24fps · Rec.709</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------ 01. PHASE 1: IMPORT & BIO ------------------------ */

function InspectorBio() {
  const [collapsed, setCollapsed] = useState({
    transform: false,
    metadata: false,
    bio: false,
  });

  const toggle = (section: keyof typeof collapsed) => {
    setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-[var(--surface)] border border-border rounded-sm overflow-hidden text-mono text-[10px] tracking-wider uppercase">
      {/* Header */}
      <div className="bg-[var(--surface-2)] px-4 py-2 border-b border-border flex items-center justify-between select-none">
        <span className="font-bold text-foreground/80">INSPECTOR: BIO_DATA.xml</span>
        <span className="text-foreground/40 text-[9px] font-bold">ACTIVE CLIP</span>
      </div>

      {/* Transform section */}
      <div className="border-b border-border/50">
        <button
          onClick={() => toggle("transform")}
          className="w-full px-4 py-2 flex items-center gap-2 hover:bg-white/5 transition-colors font-bold text-left text-primary"
        >
          <span>{collapsed.transform ? "▶" : "▼"}</span>
          <span>TRANSFORM (BIO PROPERTIES)</span>
        </button>
        {!collapsed.transform && (
          <div className="px-6 py-3 space-y-3 border-t border-border/30 bg-black/20">
            <div className="flex justify-between items-center">
              <span className="text-foreground/40">LOCATION</span>
              <span className="text-foreground font-bold">HO CHI MINH CITY, VN</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/40">EXPERIENCE (SCALE)</span>
              <span className="text-foreground font-bold">4+ YEARS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/40">SPECIALTIES (ROTATION)</span>
              <span className="text-foreground font-bold">MOTION, EDIT, COLOR</span>
            </div>
          </div>
        )}
      </div>

      {/* Software Specs section */}
      <div className="border-b border-border/50">
        <button
          onClick={() => toggle("metadata")}
          className="w-full px-4 py-2 flex items-center gap-2 hover:bg-white/5 transition-colors font-bold text-left text-primary"
        >
          <span>{collapsed.metadata ? "▶" : "▼"}</span>
          <span>SOFTWARE SPECS (EFFECTS)</span>
        </button>
        {!collapsed.metadata && (
          <div className="px-4 py-3 space-y-2 border-t border-border/30 bg-black/25">
            {[
              { code: "Pr", level: "EXPERT" },
              { code: "Ae", level: "EXPERT" },
              { code: "Ps", level: "EXPERT" },
              { code: "Ai", level: "ADVANCED" },
              { code: "Me", level: "EXPERT" },
              { code: "Cc", level: "EXPERT" },
            ].map((sw) => {
              const appInfo = APPS.find((a) => a.code === sw.code);
              if (!appInfo) return null;
              return (
                <div key={sw.code} className="flex items-center justify-between border border-border/10 p-2 rounded-sm bg-black/20">
                  <div className="flex items-center gap-3">
                    <AppTile {...appInfo} size={26} />
                    <span className="text-[9px] font-bold text-foreground/80 tracking-wider">
                      {appInfo.label.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-mono text-[8px] font-bold tracking-widest text-primary px-1.5 py-0.5 rounded-[2px] bg-primary/10 border border-primary/20">
                    {sw.level}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Expression section */}
      <div>
        <button
          onClick={() => toggle("bio")}
          className="w-full px-4 py-2 flex items-center gap-2 hover:bg-white/5 transition-colors font-bold text-left text-primary"
        >
          <span>{collapsed.bio ? "▶" : "▼"}</span>
          <span>EXPRESSION (CREATIVE VISION)</span>
        </button>
        {!collapsed.bio && (
          <div className="px-6 py-4 border-t border-border/30 bg-black/20 text-foreground/75 normal-case leading-relaxed font-sans text-xs">
            <span className="text-primary font-mono text-[10px] uppercase font-bold block mb-1">{"// MISSION STATEMENT"}</span>
            Obsessed with pacing, rhythm, and clean curves. I bridge the gap between technical web systems and high-fidelity video aesthetics. Let&apos;s build some motion.
          </div>
        )}
      </div>
    </div>
  );
}

export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section ref={ref} id="import-&-bio" className="relative min-h-[120vh] flex items-center pt-24 pb-32 overflow-hidden">
      <GridBG />
      <Particles count={32} />
      {/* concentric guide circles */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ opacity }}
      >
        {[280, 480, 720, 980].map((s, i) => (
          <motion.div
            key={s}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
            style={{ width: s, height: s }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </motion.div>

      {/* Orbiting software tiles ring */}
      <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        <motion.div
          className="relative"
          style={{ width: 640, height: 640 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {APPS.slice(0, 8).map((app, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const r = 320;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <motion.div
                key={app.label}
                className="absolute top-1/2 left-1/2"
                style={{ x: x - 22, y: y - 22 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <AppTile {...app} size={44} className="opacity-70" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div style={{ y, scale }} className="relative z-10 w-full px-6 lg:px-14 max-w-[1600px] mx-auto">
        <StageLabel index={1} total={4} name="IMPORT & BIO" code="00:00:00:00" />

        <div className="mt-10 grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-[13vw] lg:text-[8.5vw] leading-[0.88] font-black tracking-[-0.03em] uppercase">
              <SplitLine text="I turn" delay={0} />
              <SplitLine text="ideas into" delay={0.15} className="pl-[6vw]" />
              <SplitLine text="motion." delay={0.3} accent />
            </h1>
            <p className="mt-8 max-w-md text-foreground/60 text-sm leading-relaxed">
              A video editor & motion designer building cinematic short-form work.
              Scroll to scrub through the post-production timeline —
              from raw footage to a fully rendered master.
            </p>
            <div className="mt-10 flex items-center gap-4 text-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Loop preview — 24 fps — press ↓ to scrub
            </div>
          </div>

          {/* Master Monitor / Composition viewer */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <div
              onClick={() => setModalOpen(true)}
              className="relative aspect-video bg-[var(--surface)] border border-border rounded-sm overflow-hidden grain cursor-pointer hover:border-primary/80 transition-colors group pointer-events-auto"
              data-cursor="PLAY REEL"
            >
              {/* Safe area guides */}
              <div className="absolute inset-4 border border-dashed border-foreground/15" />
              <div className="absolute inset-8 border border-dashed border-foreground/10" />
              {/* center crosshair */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-foreground/10" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10" />
              {/* motion path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="none">
                <motion.path
                  d="M 20 180 C 100 20, 200 220, 380 40"
                  stroke="var(--color-primary)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </svg>
              {/* orbiter */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_var(--accent-glow)]"
                animate={{
                  top: ["78%", "10%", "78%"],
                  left: ["8%", "94%", "8%"],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Hover Trigger overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <div className="bg-primary text-primary-foreground font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-sm font-bold shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                  ▶ PLAY SHOWREEL
                </div>
              </div>

              {/* HUD text */}
              <div className="absolute top-2 left-2 text-mono text-[9px] uppercase tracking-widest text-primary font-bold">
                COMP_REEL · 24fps
              </div>
              <div className="absolute bottom-2 right-2 text-mono text-[9px] uppercase tracking-widest text-foreground/60 font-bold">
                ● WATCH SHOWREEL
              </div>
            </div>

            {/* Inspector / About Details */}
            <InspectorBio />
          </div>
        </div>

        {/* Waveform bar */}
        <div className="mt-16">
          <Waveform />
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoPlayerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="2026 MASTER MOTION REEL"
        role="Lead Editor & Motion Graphics Artist"
      />
    </section>
  );
}

function SplitLine({ text, delay, accent, className = "" }: { text: string; delay: number; accent?: boolean; className?: string }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className={`block ${accent ? "text-primary italic" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function Waveform() {
  const bars = Array.from({ length: 96 });
  return (
    <div className="border-t border-b border-border py-4">
      <div className="flex items-center gap-4 mb-3 text-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
        <span>A1 · MASTER</span>
        <span>-6dB</span>
        <span className="ml-auto">STEREO · 48kHz</span>
      </div>
      <div className="flex items-end gap-[2px] h-16">
        {bars.map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-primary/70 rounded-[1px]"
            animate={{ scaleY: [0.2, 0.6 + (Math.sin(i * 0.7) + 1) * 0.35, 0.2] }}
            transition={{ duration: 1.2 + (i % 5) * 0.15, repeat: Infinity, ease: "easeInOut", delay: i * 0.015 }}
            style={{ transformOrigin: "bottom" }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------------- 02. PHASE 2: EDIT & PROJECTS ---------------------- */

const PROJECTS = [
  {
    n: "01",
    client: "AURORA / SS26",
    title: "Neon Cathedral",
    kind: "Fashion Film · 90s",
    stack: ["Pr", "Ae", "DR"],
    hue: 25,
    role: "Lead Editor & Sound Design",
  },
  {
    n: "02",
    client: "MERIDIAN LABS",
    title: "Kinetic Type Reel",
    kind: "Motion Graphics · 45s",
    stack: ["Ae", "C4"],
    hue: 210,
    role: "Motion Designer",
  },
  {
    n: "03",
    client: "NOMAD RECORDS",
    title: "Signals in the Static",
    kind: "Music Video · 3:20",
    stack: ["Pr", "DR"],
    hue: 320,
    role: "Director & Editor",
  },
  {
    n: "04",
    client: "ORBIT/CO",
    title: "Zero-G Product Spot",
    kind: "Commercial · 30s",
    stack: ["Bl", "Ae"],
    hue: 160,
    role: "3D Lead & Compositor",
  },
];

export function EditAndProjectsScene() {
  return (
    <section id="edit-&-projects" className="relative py-32 border-y border-border/60">
      {/* 02.1 ROUGH CUT tracks & marquee */}
      <div className="px-6 lg:px-14 max-w-[1600px] mx-auto">
        <StageLabel index={2} total={4} name="EDIT & PROJECTS" code="00:01:02:00" />
      </div>
      <div className="mt-12 space-y-2">
        <Marquee text="STORY  ✦  RHYTHM  ✦  PACING  ✦  " speed={40} />
        <Marquee text="CUT  ●  RIPPLE  ●  ROLL  ●  SLIP  ●  SLIDE  ●  " speed={30} reverse accent />
        <Marquee text="J-CUT   L-CUT   MATCH-CUT   HARD-CUT   " speed={50} />
      </div>
      <div className="mt-12 px-6 lg:px-14 max-w-[1600px] mx-auto grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 lg:col-span-4">
          <div className="text-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-3 font-bold">TOOLS</div>
          <AppRow codes={["Pr", "Ae", "Au"]} size={40} />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <TrimTimeline />
        </div>
      </div>

      {/* 02.2 FINE CUT projects list */}
      <div className="mt-28 px-6 lg:px-14 max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight uppercase leading-[0.9]">
            Selected<br />
            <span className="italic text-primary">Scenes.</span>
          </h2>
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="bg-primary/20 border border-primary/40 text-primary text-[8px] px-2 py-0.5 rounded-full font-mono">💡 REPLACE WITH YOUR PORTFOLIO MEDIA</span>
            <span className="text-mono text-[11px] uppercase tracking-[0.3em] text-foreground/50 hidden md:inline font-bold">
              04 SELECTED / 27 ARCHIVED
            </span>
          </div>
        </div>
        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.n} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee({ text, speed, reverse, accent }: { text: string; speed: number; reverse?: boolean; accent?: boolean }) {
  const items = Array.from({ length: 8 }).map(() => text).join("");
  return (
    <div className={`whitespace-nowrap overflow-hidden ${accent ? "text-primary" : "text-foreground"}`}>
      <motion.div
        className="inline-block text-[10vw] lg:text-[7vw] font-black tracking-tighter uppercase leading-none"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items}{items}
      </motion.div>
    </div>
  );
}

const CursorArrow = () => (
  <svg width="14" height="14" viewBox="0 0 18 18" fill="white" stroke="black" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
    <path d="M5.663 15.224l2.138-3.666 2.68 2.68 1.414-1.414-2.68-2.68 3.666-2.138L4.25 4.25l1.413 10.974z" />
  </svg>
);

const CursorClosedHand = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
    <path d="M18 11V8a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v3" />
    <path d="M14 10V6a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v5" />
    <path d="M10 10.5V6a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v4.5" />
    <path d="M6 10v6a6 6 0 0 0 6 6h1a7 7 0 0 0 7-7v-3.5" />
  </svg>
);

function TrimTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });

  // Playhead and Cursor position values
  const playheadPct = useMotionValue(15);
  const cursorX = useMotionValue(85);
  const cursorY = useMotionValue(8.5); // Idle Y in rem
  const cursorOpacity = useMotionValue(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const [currentPlayhead, setCurrentPlayhead] = useState(15);
  const [currentCursorX, setCurrentCursorX] = useState(85);
  const [currentCursorY, setCurrentCursorY] = useState(8.5);
  
  // Initial state setup for clips
  const [clips, setClips] = useState([
    { id: "clip0", left: 10, width: 50, trackIndex: 1, type: "video" }, // Main V1 clip
    { id: "clip1", left: 65, width: 25, trackIndex: 1, type: "video" }, // B-roll clip on V1
    { id: "clip2", left: 10, width: 80, trackIndex: 2, type: "audio" }, // A1
    { id: "clip3", left: 5, width: 90, trackIndex: 3, type: "audio" },  // A2
  ]);

  useMotionValueEvent(playheadPct, "change", setCurrentPlayhead);
  useMotionValueEvent(cursorX, "change", setCurrentCursorX);
  useMotionValueEvent(cursorY, "change", setCurrentCursorY);

  useEffect(() => {
    if (!isInView) {
      animate(cursorOpacity, 0, { duration: 0.2 });
      return;
    }

    let isCancelled = false;
    cursorOpacity.set(0);

    const sequence = async () => {
      // Fade in cursor
      animate(cursorOpacity, 1, { duration: 0.4 });

      while (!isCancelled) {
        // --- STEP 0: Reset State to Initial ---
        setClips([
          { id: "clip0", left: 10, width: 50, trackIndex: 1, type: "video" },
          { id: "clip1", left: 65, width: 25, trackIndex: 1, type: "video" },
          { id: "clip2", left: 10, width: 80, trackIndex: 2, type: "audio" },
          { id: "clip3", left: 5, width: 90, trackIndex: 3, type: "audio" },
        ]);
        playheadPct.set(15);
        cursorX.set(85);
        cursorY.set(8.5);
        setIsGrabbing(false);

        await new Promise((r) => setTimeout(r, 1200));
        if (isCancelled) break;

        // --- STEP 1: Move cursor to Playhead handle (Y = -0.4rem) ---
        animate(cursorX, 15, { duration: 0.8, ease: "easeInOut" });
        animate(cursorY, -0.4, { duration: 0.8, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 900));
        if (isCancelled) break;

        // --- STEP 2: Grab playhead and scrub to find cut point at 40% ---
        setIsGrabbing(true);
        animate(playheadPct, 50, { duration: 1.0, ease: "easeInOut" });
        animate(cursorX, 50, { duration: 1.0, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 1100));
        if (isCancelled) break;

        animate(playheadPct, 40, { duration: 0.6, ease: "easeInOut" });
        animate(cursorX, 40, { duration: 0.6, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 700));
        if (isCancelled) break;

        setIsGrabbing(false);
        await new Promise((r) => setTimeout(r, 300));
        if (isCancelled) break;

        // --- STEP 3: Click main clip to Cut / Slice ---
        // Move to V1 main clip at the cut point
        animate(cursorY, 2.75, { duration: 0.4, ease: "easeInOut" }); // V1 track center Y = 2.75rem
        await new Promise((r) => setTimeout(r, 500));
        if (isCancelled) break;

        // Simulate click / split
        setClips((prev) => {
          const filtered = prev.filter((c) => c.id !== "clip0");
          return [
            ...filtered,
            { id: "clip0_A", left: 10, width: 30, trackIndex: 1, type: "video" }, // left split
            { id: "clip0_B", left: 40, width: 20, trackIndex: 1, type: "video" }, // right split
          ];
        });
        await new Promise((r) => setTimeout(r, 500));
        if (isCancelled) break;

        // --- STEP 4: Grab right split and slide right to make a gap ---
        // clip0_B center is 40 + 20/2 = 50%.
        animate(cursorX, 50, { duration: 0.5, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 600));
        if (isCancelled) break;

        setIsGrabbing(true);
        await new Promise((r) => setTimeout(r, 200));
        if (isCancelled) break;

        // Slide right to left: 52% (center is 52 + 20/2 = 62%)
        setClips((prev) =>
          prev.map((c) => (c.id === "clip0_B" ? { ...c, left: 52 } : c))
        );
        animate(cursorX, 62, { duration: 0.8, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 900));
        if (isCancelled) break;

        setIsGrabbing(false);
        await new Promise((r) => setTimeout(r, 350));
        if (isCancelled) break;

        // --- STEP 5: Grab B-roll clip and drag UP to V2 overlay ---
        // clip1 starts at left 65, width 25 on V1. Center is 77.5%.
        animate(cursorX, 77.5, { duration: 0.7, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 800));
        if (isCancelled) break;

        setIsGrabbing(true);
        await new Promise((r) => setTimeout(r, 200));
        if (isCancelled) break;

        // Drag UP to V2 (Row 0 Center Y = 0.75rem) and slide left to match gap start (left: 38%, center is 38 + 25/2 = 50.5%)
        setClips((prev) =>
          prev.map((c) => (c.id === "clip1" ? { ...c, trackIndex: 0, left: 38 } : c))
        );
        animate(cursorX, 50.5, { duration: 0.9, ease: "easeInOut" });
        animate(cursorY, 0.75, { duration: 0.9, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 1000));
        if (isCancelled) break;

        setIsGrabbing(false);
        await new Promise((r) => setTimeout(r, 350));
        if (isCancelled) break;

        // --- STEP 6: Grab right edge of B-roll and Trim it to fit ---
        // Right edge is at 38 + 25 = 63%.
        animate(cursorX, 63, { duration: 0.5, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 600));
        if (isCancelled) break;

        setIsGrabbing(true);
        await new Promise((r) => setTimeout(r, 200));
        if (isCancelled) break;

        // Trim width from 25 to 14 (right edge moves to 52%)
        setClips((prev) =>
          prev.map((c) => (c.id === "clip1" ? { ...c, width: 14 } : c))
        );
        animate(cursorX, 52, { duration: 0.7, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 800));
        if (isCancelled) break;

        setIsGrabbing(false);
        await new Promise((r) => setTimeout(r, 350));
        if (isCancelled) break;

        // --- STEP 7: Grab Playhead and scrub forward to preview ---
        animate(cursorX, 40, { duration: 0.6, ease: "easeInOut" });
        animate(cursorY, -0.4, { duration: 0.6, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 700));
        if (isCancelled) break;

        setIsGrabbing(true);
        animate(playheadPct, 65, { duration: 1.0, ease: "easeInOut" });
        animate(cursorX, 65, { duration: 1.0, ease: "easeInOut" });
        await new Promise((r) => setTimeout(r, 1100));
        if (isCancelled) break;

        setIsGrabbing(false);
        await new Promise((r) => setTimeout(r, 300));
        if (isCancelled) break;

        // --- STEP 8: Fade out cursor ---
        animate(cursorX, 85, { duration: 0.8, ease: "easeOut" });
        animate(cursorY, 8.5, { duration: 0.8, ease: "easeOut" });
        animate(cursorOpacity, 0, { duration: 0.4, delay: 0.1 });
        await new Promise((r) => setTimeout(r, 2500));
      }
    };

    sequence();

    return () => {
      isCancelled = true;
    };
  }, [isInView, playheadPct, cursorX, cursorY, cursorOpacity]);

  return (
    <div className="relative space-y-2 select-none" ref={timelineRef}>
      {/* 1. Static track background strips */}
      {["V2", "V1", "A1", "A2"].map((trackName) => (
        <div key={trackName} className="flex items-center gap-3 text-mono text-[10px] uppercase text-foreground/50">
          <span className="w-6 font-bold">{trackName}</span>
          <div className="flex-1 h-6 bg-[var(--surface)] rounded-[2px]" />
        </div>
      ))}

      {/* 2. Absolute overlay for clips */}
      <div
        className="absolute left-[2.25rem] right-0 pointer-events-none overflow-hidden"
        style={{ top: 0, bottom: 0, marginTop: 0 }}
      >
        {clips.map((clip) => (
          <motion.div
            key={clip.id}
            layout
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className={`absolute rounded-[2px] border ${
              clip.type === "video"
                ? "bg-primary/25 border-primary/40"
                : "bg-foreground/10 border-foreground/20"
            }`}
            style={{
              left: `${clip.left}%`,
              width: `${clip.width}%`,
              top: `${clip.trackIndex * 2}rem`, // 2rem Y-offset per track (1.5rem height + 0.5rem gap)
              height: "1.5rem", // 24px height matches bg row
            }}
          />
        ))}
      </div>

      {/* Vertical Playhead line overlay */}
      <div
        className="absolute w-[1.5px] bg-primary pointer-events-none z-10"
        style={{
          left: `calc(2.25rem + (100% - 2.25rem) * ${currentPlayhead / 100})`,
          top: 0,
          bottom: 0,
          marginTop: 0,
        }}
      >
        {/* Simple red playhead top handle indicator */}
        <div className="absolute top-0 w-[7px] h-[7px] bg-primary rotate-45 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Simulated Cursor */}
      <motion.div
        className="absolute pointer-events-none z-20"
        style={{
          left: `calc(2.25rem + (100% - 2.25rem) * ${currentCursorX / 100})`,
          top: `${currentCursorY}rem`, // Positioned dynamically in rem scale
          opacity: cursorOpacity,
          transform: "translate(-50%, -50%)",
          marginTop: 0,
        }}
      >
        {isGrabbing ? <CursorClosedHand /> : <CursorArrow />}
      </motion.div>
    </div>
  );
}

function ProjectRow({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const [hover, setHover] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        onClick={() => setModalOpen(true)}
        className="group relative border border-border rounded-sm overflow-hidden bg-[var(--surface)] cursor-pointer hover:border-primary/80 transition-colors pointer-events-auto"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        data-cursor="PLAY"
      >
        <div className="grid grid-cols-12 gap-0 items-stretch">
          <div className="col-span-12 lg:col-span-5 relative aspect-video lg:aspect-auto overflow-hidden">
            {/* Bubble Note */}
            <div className="absolute top-10 left-3 z-10 bg-primary/20 border border-primary/40 text-primary text-[8px] font-mono px-2 py-0.5 rounded-full select-none" title="Thay thumbnail hoặc clip ngắn ở đây">
              💡 REPLACE WITH PROJECTS (MP4/YT/VIMEO)
            </div>
            <motion.div
              className="absolute inset-0"
              style={{
                y,
                background: `radial-gradient(circle at 30% 40%, oklch(0.4 0.15 ${project.hue}) 0%, oklch(0.1 0.05 ${project.hue}) 60%, oklch(0.08 0 0) 100%)`,
              }}
            />
            {/* film grain */}
            <div className="absolute inset-0 grain opacity-70" />
            {/* scan line */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/5 to-transparent scan" />
            </div>
            {/* corner ticks */}
            <div className="absolute top-3 left-3 text-mono text-[10px] uppercase tracking-widest text-white/70 font-bold">
              SCENE {project.n}
            </div>
            <div className="absolute top-3 right-3 flex items-center gap-2 text-mono text-[10px] uppercase text-white/70 font-bold">
              <span className="w-2 h-2 rounded-full bg-[var(--rec)] rec-blink" /> LIVE
            </div>
            <div className="absolute bottom-3 left-3 text-mono text-[10px] uppercase tracking-widest text-white/60 font-bold">
              {project.kind}
            </div>
            <div className="absolute bottom-3 right-3">
              <AppRow codes={project.stack} size={22} />
            </div>
            {/* play indicator */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: hover ? 1 : 0.4, scale: hover ? 1 : 0.9 }}
            >
              <div className="w-16 h-16 rounded-full border border-white/70 flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[7px] border-y-transparent ml-1" />
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-primary font-bold">
                {String(index + 1).padStart(2, "0")} — {project.client}
              </div>
              <h3 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]">
                {project.title}
              </h3>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-mono text-[11px] uppercase tracking-widest font-bold">
              <div>
                <div className="text-foreground/40 mb-2">FORMAT</div>
                <div>{project.kind}</div>
              </div>
              <div>
                <div className="text-foreground/40 mb-2">STACK</div>
                <AppRow codes={project.stack} size={28} />
              </div>
              <div>
                <div className="text-foreground/40 mb-2">STATUS</div>
                <div className="text-primary font-bold">◼ MASTERED</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Modal Trigger */}
      <VideoPlayerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={project.title}
        client={project.client}
        role={project.role}
      />
    </>
  );
}

/* ---------------------- 03. PHASE 3: POST-PRO LAB ---------------------- */

function MotionViewport({ easedVal }: { easedVal: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 200;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 200;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const curveX = -60 + easedVal * 120;
  const currentScale = 0.75 + easedVal * 0.5;
  const currentY = (1 - easedVal) * 160 - 80; // Moves between +80px (bottom) and -80px (top)

  return (
    <div
      ref={viewportRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-square bg-black/60 border border-border rounded-sm overflow-hidden grain cursor-crosshair group flex flex-col justify-between p-3"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* HUD Info */}
      <div className="relative text-mono text-[9px] uppercase tracking-widest text-primary/80 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>LIVE COMPVIEW</span>
        </div>
        <span className="text-foreground/40 text-[8px] font-bold">FPS: 60.0 · FIT</span>
      </div>

      {/* 2D Motion Graphics Composition (Translating vertically based on graph curve) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Vertical Motion Path Dashed Line */}
          <div className="absolute inset-y-0 w-px border-l border-dashed border-foreground/15" />

          {/* Motion Path Keyframe dots (dense at ends, sparse in middle, visualizing easing) */}
          {Array.from({ length: 11 }).map((_, idx) => {
            const tVal = idx / 10;
            const mtVal = 1 - tVal;
            const yVal = mtVal*mtVal*mtVal * 360 + 3*mtVal*mtVal*tVal * 360 + 3*mtVal*tVal*tVal * 40 + tVal*tVal*tVal * 40;
            const normVal = (360 - yVal) / 320;
            const dotY = (1 - normVal) * 160 - 80;
            return (
              <div
                key={idx}
                className="absolute w-1 h-1 rounded-full bg-primary/20 border border-primary/35 shadow-[0_0_8px_rgba(255,107,0,0.2)]"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) translateY(${dotY}px)`,
                }}
              />
            );
          })}

          {/* Layer 1: Parallax Background Rotating Square (moves at 50% speed) */}
          <motion.div
            className="absolute border border-foreground/10 bg-foreground/[0.01]"
            style={{
              width: "5.5rem",
              height: "5.5rem",
              y: currentY * 0.5,
              rotate: easedVal * 180,
            }}
          />

          {/* Layer 2: Delayed Outer Target Ring (trailing spring lag) */}
          <motion.div
            className="absolute rounded-full border border-teal-500/40"
            style={{
              width: "4rem",
              height: "4rem",
            }}
            animate={{
              x: mousePos.x * 0.05,
              y: currentY,
            }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
            }}
          />

          {/* Layer 3: Main Target Ring (tracks curve Y coordinate instantly) */}
          <motion.div
            className="absolute rounded-full border-2 border-primary shadow-[0_0_20px_var(--accent-glow)] flex items-center justify-center bg-background/50 backdrop-blur-sm"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              x: mousePos.x * 0.1,
              y: currentY,
              scale: currentScale,
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          </motion.div>
        </div>
      </div>

      {/* Kinetic Typography floating labels */}
      <motion.div
        className="absolute left-[15%] top-1/3 text-[9px] text-mono text-foreground/30 font-bold pointer-events-none select-none"
        animate={{
          x: mousePos.x * -0.05,
          y: mousePos.y * -0.05,
        }}
      >
        EASE_IN_OUT
      </motion.div>
      <motion.div
        className="absolute right-[15%] bottom-1/3 text-[9px] text-mono text-primary/30 font-bold pointer-events-none select-none"
        animate={{
          x: mousePos.x * -0.08,
          y: mousePos.y * -0.08,
        }}
      >
        3D_MESH_DEFORM
      </motion.div>

      {/* Pointer coordinate readout */}
      <div className="relative text-mono text-[8px] text-foreground/50 flex justify-between pointer-events-none">
        <span>CURSOR: X: <span className="text-primary font-bold">{Math.round(mousePos.x)}</span> Y: <span className="text-primary font-bold">{Math.round(mousePos.y)}</span></span>
        <span className="text-primary/80 font-bold bg-primary/10 border border-primary/20 px-1 py-0.5 rounded-sm">💡 INTERACTIVE CANVAS</span>
      </div>
    </div>
  );
}

const NODE_DEFAULTS = {
  1: { exposure: 95, contrast: 110, saturation: 65 },
  2: { exposure: 95, contrast: 115, saturation: 80 },
  3: { exposure: 95, contrast: 120, saturation: 115 },
  4: { exposure: 90, contrast: 125, saturation: 135 }
};

interface BeforeAfterSliderProps {
  activeNode: 1 | 2 | 3 | 4;
  setActiveNode: (n: 1 | 2 | 3 | 4) => void;
  bypass: boolean;
  setBypass: (b: boolean) => void;
  exposure: number;
  setExposure: (e: number) => void;
  contrast: number;
  setContrast: (c: number) => void;
  saturation: number;
  setSaturation: (s: number) => void;
  lift: { x: number; y: number };
  gamma: { x: number; y: number };
  gain: { x: number; y: number };
  onReset: () => void;
}

function BeforeAfterSlider({
  activeNode,
  setActiveNode,
  bypass,
  setBypass,
  exposure,
  setExposure,
  contrast,
  setContrast,
  saturation,
  setSaturation,
  lift,
  gamma,
  gain,
  onReset
}: BeforeAfterSliderProps) {

  const nodeSpecs = {
    1: {
      name: "01: CST / DELOG CONVERSION",
      desc: "Color Space Transform (CST). Converts raw flat camera LOG space (S-Log3/C-Log) into standard Rec.709 display color space, normalizing primary contrast.",
      badge: "DELOG / REC.709 BASE"
    },
    2: {
      name: "02: PRIMARY EXPOSURE",
      desc: "Exposure balancing. Fine-tunes highlight recovery and shadows on the Rec.709 base to maximize detail clarity.",
      badge: "EXPOSURE BALANCED"
    },
    3: {
      name: "03: WHITE BALANCE & COLOR",
      desc: "Color temperature adjustment and white balance correction. Normalizes skins tones and cleans color casts.",
      badge: "COLOR STYLED"
    },
    4: {
      name: "04: CREATIVE LOOK & FILM GRAIN",
      desc: "Cinematic creative styling applied. Teal and orange color grade offset, 35mm moving noise grain, and edge vignette mastering.",
      badge: "FINAL REC.709 MASTER"
    }
  };

  const currentFilter = bypass 
    ? `brightness(${exposure}%) contrast(${contrast}%) saturate(${saturation}%) sepia(5%)`
    : `brightness(${exposure}%) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${activeNode === 3 ? -5 : activeNode === 4 ? -12 : 0}deg)`;

  // Lift offset has cool/shadow cast. Gain has warm/highlight cast. Gamma has midtones.
  // Map x/y (which are between -40 and 40) to standard RGB tint offset:
  const rOffset = (lift.x * -0.3) + (gamma.x * 0.4) + (gain.x * 0.8);
  const gOffset = (lift.y * -0.3) + (gamma.y * 0.4) + (gain.y * 0.8);
  const bOffset = (lift.x * 0.3) + (gamma.y * -0.4) + (gain.y * -0.6);

  return (
    <div className="bg-[var(--surface)] border border-border rounded-sm p-4 pointer-events-auto flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between text-mono text-[10px] uppercase tracking-widest text-foreground/50 select-none">
        <span>COLOR GRADING PIPELINE</span>
        <button 
          onClick={() => setBypass(!bypass)}
          className={`px-2 py-0.5 rounded-sm border text-[8px] font-bold transition-colors ${
            bypass 
              ? "bg-red-500/20 border-red-500 text-red-400" 
              : "bg-foreground/5 border-border hover:border-foreground/30 text-foreground"
          }`}
        >
          {bypass ? "◼ BYPASS ACTIVE (RAW)" : "◻ BYPASS ALL (ALT+D)"}
        </button>
      </div>

      {/* Resolve-style Node Graph */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/30 border border-border/30 rounded-sm text-mono text-[9px] relative select-none">
        {/* Connection line */}
        <div className="absolute top-1/2 left-8 right-8 h-px bg-border/40 -translate-y-1/2 z-0" />
        
        {([1, 2, 3, 4] as const).map((num) => {
          const isActive = activeNode === num && !bypass;
          const isEnabled = num <= activeNode && !bypass;
          return (
            <div
              key={num}
              onClick={() => {
                setActiveNode(num);
                setBypass(false);
              }}
              className={`relative z-10 w-16 h-10 border rounded-sm flex flex-col items-center justify-center cursor-pointer transition-all ${
                isActive 
                  ? "bg-primary/10 border-primary shadow-[0_0_12px_var(--accent-glow)]" 
                  : isEnabled
                    ? "bg-[var(--surface-2)] border-primary/50 text-foreground"
                    : "bg-[var(--surface)] border-border text-foreground/30 hover:border-foreground/30"
              }`}
              data-cursor={`NODE 0${num}`}
            >
              <span className={`font-bold text-[8px] ${isActive ? "text-primary" : ""}`}>NODE 0{num}</span>
              <span className="text-[7px] opacity-40">{num === 1 ? "DELOG" : num === 2 ? "EXPO" : num === 3 ? "BAL/COL" : "LOOK"}</span>
            </div>
          );
        })}
      </div>

      {/* Monitor Display */}
      <div className="relative aspect-video w-full rounded-sm overflow-hidden select-none bg-black">
        {/* Main image under dynamic filter */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-300 ${(activeNode === 4 && !bypass) ? "grain" : ""}`}
          style={{
            position: "absolute",
            backgroundImage: "url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop')",
            filter: currentFilter,
          }}
        />

        {/* Live Color Grading Tint Overlay from Wheels */}
        {!bypass && (
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-color"
            style={{
              backgroundColor: `rgb(${Math.max(0, Math.min(255, 128 + rOffset * 3.5))}, ${Math.max(0, Math.min(255, 128 + gOffset * 3.5))}, ${Math.max(0, Math.min(255, 128 + bOffset * 3.5))})`,
              opacity: 0.35,
            }}
          />
        )}

        {/* HUD labels */}
        <div className="absolute top-2 left-2 text-mono text-[8px] uppercase px-1.5 py-0.5 rounded-sm bg-black/60 text-white pointer-events-none">
          {bypass ? "BYPASS: CAMERA RAW LOG" : nodeSpecs[activeNode].name}
        </div>
        <div className={`absolute bottom-2 right-2 text-mono text-[8px] uppercase px-1.5 py-0.5 rounded-sm pointer-events-none font-bold ${
          bypass 
             ? "bg-red-500/20 border border-red-500/40 text-red-400" 
             : "bg-primary/25 border border-primary/40 text-primary"
        }`}>
          {bypass ? "RAW LOG INPUT" : nodeSpecs[activeNode].badge}
        </div>
      </div>

      {/* Live Adjustment Sliders */}
      <div className="space-y-3 bg-black/40 border border-border/30 rounded-sm p-4 text-mono text-[9px]">
        <div className="flex items-center justify-between text-primary font-bold uppercase select-none mb-1">
          <span>LIVE CONTROLLER (ADJUST REAL-TIME)</span>
          <button 
            onClick={onReset}
            className="text-[8px] opacity-60 hover:opacity-100 border border-border px-1.5 py-0.5 rounded-sm"
          >
            RESET
          </button>
        </div>

        {/* Exposure Slider */}
        <div className="flex items-center justify-between gap-4">
          <span className="w-16 text-foreground/50">EXPOSURE</span>
          <input 
            type="range" 
            min="50" 
            max="150" 
            value={exposure} 
            onChange={(e) => { setExposure(Number(e.target.value)); setBypass(false); }}
            className="flex-1 accent-primary h-1 bg-[var(--surface-2)] rounded-lg appearance-none cursor-pointer"
          />
          <span className="w-10 text-right font-bold text-foreground/80">{Math.round((exposure - 100))} %</span>
        </div>

        {/* Contrast Slider */}
        <div className="flex items-center justify-between gap-4">
          <span className="w-16 text-foreground/50">CONTRAST</span>
          <input 
            type="range" 
            min="50" 
            max="150" 
            value={contrast} 
            onChange={(e) => { setContrast(Number(e.target.value)); setBypass(false); }}
            className="flex-1 accent-primary h-1 bg-[var(--surface-2)] rounded-lg appearance-none cursor-pointer"
          />
          <span className="w-10 text-right font-bold text-foreground/80">{contrast} %</span>
        </div>

        {/* Saturation Slider */}
        <div className="flex items-center justify-between gap-4">
          <span className="w-16 text-foreground/50">SATURATION</span>
          <input 
            type="range" 
            min="0" 
            max="200" 
            value={saturation} 
            onChange={(e) => { setSaturation(Number(e.target.value)); setBypass(false); }}
            className="flex-1 accent-primary h-1 bg-[var(--surface-2)] rounded-lg appearance-none cursor-pointer"
          />
          <span className="w-10 text-right font-bold text-foreground/80">{saturation} %</span>
        </div>
      </div>

      {/* Selected Node Specs Panel */}
      <div className="border border-border/30 bg-black/20 p-3 rounded-sm text-mono">
        <div className="text-[9px] text-primary font-bold mb-1.5 uppercase select-none">
          {bypass ? "CAMERA RAW INFO:" : `${nodeSpecs[activeNode].name} CONTROL PARAMS:`}
        </div>
        <div className="text-[9px] text-foreground/75 leading-relaxed normal-case font-sans">
          {bypass 
            ? "Original un-graded log footage. Film dynamic range is compressed to allow max data collection in highlights and shadows, requiring primary balance corrections." 
            : nodeSpecs[activeNode].desc}
        </div>
      </div>
    </div>
  );
}

interface ColorWheelProps {
  label: string;
  value: { x: number; y: number };
  onChange: (val: { x: number; y: number }) => void;
}

function ColorWheel({ label, value, onChange }: ColorWheelProps) {
  const wheelRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    updatePosition(e);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      updatePosition(moveEvent);
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const updatePosition = (e: MouseEvent | PointerEvent | React.PointerEvent) => {
    const rect = wheelRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    let dx = e.clientX - centerX;
    let dy = e.clientY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = 40; // Max drag boundary radius in pixels
    if (distance > maxRadius) {
      dx = (dx / distance) * maxRadius;
      dy = (dy / distance) * maxRadius;
    }

    onChange({ x: dx, y: dy });
  };

  const displayX = (value.x / 40).toFixed(2);
  const displayY = (-value.y / 40).toFixed(2); // Invert Y so up is positive in traditional visual editors

  return (
    <div className="bg-[var(--surface)] border border-border rounded-sm p-3 flex flex-col items-center select-none">
      <div className="flex items-center justify-between w-full text-mono text-[9px] uppercase tracking-widest text-foreground/50 mb-2 font-bold">
        <span>{label}</span>
        <span className="text-primary font-mono">{value.x === 0 && value.y === 0 ? "0.00" : `${displayX}, ${displayY}`}</span>
      </div>
      <div
        ref={wheelRef}
        onPointerDown={handlePointerDown}
        className="relative w-full max-w-[120px] aspect-square rounded-full overflow-hidden cursor-crosshair active:cursor-grabbing touch-none"
        style={{
          background: `conic-gradient(from 0deg, oklch(0.6 0.2 0), oklch(0.6 0.2 60), oklch(0.6 0.2 120), oklch(0.6 0.2 180), oklch(0.6 0.2 240), oklch(0.6 0.2 300), oklch(0.6 0.2 360))`,
        }}
      >
        <div className="absolute inset-2 rounded-full bg-[var(--surface)]/40 backdrop-blur-md" />
        <div className="absolute inset-0 rounded-full"
             style={{ background: `radial-gradient(circle at 50% 50%, transparent 20%, var(--color-background) 80%)` }} />
        
        {/* Dynamic target dot indicator */}
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-white border border-black shadow-md pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate(${value.x}px, ${value.y}px)`,
          }}
        />
      </div>
    </div>
  );
}

interface RGBParadeProps {
  exposure: number;
  contrast: number;
  saturation: number;
  lift: { x: number; y: number };
  gamma: { x: number; y: number };
  gain: { x: number; y: number };
}

function RGBParade({ exposure, contrast, saturation, lift, gamma, gain }: RGBParadeProps) {
  // Compute Parade offsets for Red, Green, and Blue
  const rOffset = (lift.x * -0.2) + (gamma.x * 0.35) + (gain.x * 0.65);
  const gOffset = (lift.y * -0.2) + (gamma.y * 0.35) + (gain.y * 0.65);
  const bOffset = (lift.x * 0.2) + (gamma.y * -0.3) + (gain.y * -0.5);

  const channelOffsets = [rOffset, gOffset, bOffset];

  return (
    <div className="bg-[var(--surface)] border border-border rounded-sm p-4 select-none h-full flex flex-col justify-between">
      <div className="text-mono text-[10px] uppercase tracking-widest text-foreground/50 mb-3 font-bold">RGB PARADE (GAMMA & GAIN)</div>
      <div className="grid grid-cols-3 gap-2 flex-1 min-h-[220px]">
        {["#ff3b3b", "#3bff6b", "#3b8dff"].map((c, i) => (
          <div key={c} className="relative bg-black/40 rounded-sm overflow-hidden h-full">
            {Array.from({ length: 40 }).map((_, j) => {
              // Base static scope waveform simulating color data on a paused frame
              const baseWave = 45 + Math.sin(j * 0.35 + i * 1.5) * 12 + Math.cos(j * 0.5) * 5;
              
              // Apply Exposure (overall height offset)
              let hVal = baseWave * (exposure / 100);
              
              // Apply Contrast (stretch/compress away from center 50%)
              hVal = 50 + (hVal - 50) * (contrast / 100);
              
              // Apply Saturation (gray wave base at 0%, divergence at 100%+)
              const grayBase = 45 + Math.sin(j * 0.35) * 8;
              hVal = grayBase + (hVal - grayBase) * (saturation / 100);

              // Add color wheel channel offset
              hVal = hVal + channelOffsets[i] * 0.8;

              // Clip limits
              hVal = Math.max(5, Math.min(95, hVal));

              return (
                <div
                  key={j}
                  className="absolute bottom-0 transition-all duration-100"
                  style={{
                    left: `${(j / 40) * 100}%`,
                    width: `${100 / 40}%`,
                    height: `${hVal}%`,
                    background: c,
                    opacity: 0.75,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function ColorGradingWorkspace() {
  const [activeNode, setActiveNode] = useState<1 | 2 | 3 | 4>(4);
  const [bypass, setBypass] = useState(false);

  const [exposure, setExposure] = useState(90);
  const [contrast, setContrast] = useState(125);
  const [saturation, setSaturation] = useState(135);

  const [lift, setLift] = useState({ x: 0, y: 0 });
  const [gamma, setGamma] = useState({ x: 0, y: 0 });
  const [gain, setGain] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (bypass) {
      setExposure(110);
      setContrast(65);
      setSaturation(35);
    } else {
      const def = NODE_DEFAULTS[activeNode as keyof typeof NODE_DEFAULTS];
      setExposure(def.exposure);
      setContrast(def.contrast);
      setSaturation(def.saturation);
    }
  }, [activeNode, bypass]);

  const handleReset = () => {
    setLift({ x: 0, y: 0 });
    setGamma({ x: 0, y: 0 });
    setGain({ x: 0, y: 0 });
    if (bypass) {
      setExposure(110);
      setContrast(65);
      setSaturation(35);
    } else {
      const def = NODE_DEFAULTS[activeNode as keyof typeof NODE_DEFAULTS];
      setExposure(def.exposure);
      setContrast(def.contrast);
      setSaturation(def.saturation);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top: 3-wheels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ColorWheel label="LIFT" value={lift} onChange={setLift} />
        <ColorWheel label="GAMMA" value={gamma} onChange={setGamma} />
        <ColorWheel label="GAIN" value={gain} onChange={setGain} />
      </div>

      {/* Bottom: Split BeforeAfterSlider & Scopes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BeforeAfterSlider
          activeNode={activeNode}
          setActiveNode={setActiveNode}
          bypass={bypass}
          setBypass={setBypass}
          exposure={exposure}
          setExposure={setExposure}
          contrast={contrast}
          setContrast={setContrast}
          saturation={saturation}
          setSaturation={setSaturation}
          lift={lift}
          gamma={gamma}
          gain={gain}
          onReset={handleReset}
        />
        <div className="h-full">
          <RGBParade exposure={exposure} contrast={contrast} saturation={saturation} lift={lift} gamma={gamma} gain={gain} />
        </div>
      </div>
    </div>
  );
}

function AudioMixerWorkspace() {
  const [tracks, setTracks] = useState([
    { id: "A1", name: "A1 · DIALOGUE", volume: -12, muted: false, solo: false, color: "primary" },
    { id: "A2", name: "A2 · MUSIC + SFX", volume: -18, muted: false, solo: false, color: "white" },
    { id: "Master", name: "MASTER OUT", volume: -6, muted: false, solo: false, color: "primary" },
  ]);

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const handleVolumeChange = (id: string, vol: number) => {
    setTracks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, volume: vol } : t))
    );
  };

  const toggleMute = (id: string) => {
    setTracks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, muted: !t.muted } : t))
    );
  };

  const toggleSolo = (id: string) => {
    setTracks((prev) => {
      const target = prev.find((t) => t.id === id);
      if (!target) return prev;
      const nextSolo = !target.solo;
      return prev.map((t) => (t.id === id ? { ...t, solo: nextSolo } : t));
    });
  };

  return (
    <div className="space-y-5 bg-[var(--surface)] border border-border rounded-sm p-6 select-none pointer-events-auto">
      <div className="text-mono text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-2">
        FAIRLIGHT MULTITRACK AUDIO MIXER
      </div>
      {tracks.map((track, i) => {
        const hasSoloActive = tracks.some((t) => t.solo);
        const isMuted = track.muted || (hasSoloActive && !track.solo);
        const volRatio = Math.max(0, (track.volume + 60) / 66);

        return (
          <div key={track.id} className="grid grid-cols-12 gap-4 items-center border-b border-border/20 pb-4 last:border-b-0 last:pb-0">
            <div className="col-span-12 sm:col-span-3 lg:col-span-2 flex flex-row sm:flex-col justify-between items-center sm:items-start gap-2 sm:gap-1">
              <span className="text-mono text-[9px] uppercase tracking-widest text-foreground font-bold">
                {track.name}
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => toggleSolo(track.id)}
                  className={`w-6 h-5 rounded-sm border text-[8px] font-bold flex items-center justify-center transition-colors ${
                    track.solo
                      ? "bg-yellow-500/20 border-yellow-500 text-yellow-400"
                      : "bg-foreground/5 border-border hover:border-foreground/20 text-foreground/60"
                  }`}
                  title="Solo Track"
                >
                  S
                </button>
                <button
                  onClick={() => toggleMute(track.id)}
                  className={`w-6 h-5 rounded-sm border text-[8px] font-bold flex items-center justify-center transition-colors ${
                    track.muted
                      ? "bg-red-500/20 border-red-500 text-red-400"
                      : "bg-foreground/5 border-border hover:border-foreground/20 text-foreground/60"
                  }`}
                  title="Mute Track"
                >
                  M
                </button>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-5 lg:col-span-6 flex items-center gap-[2px] h-12 bg-black/25 px-2 rounded-sm overflow-hidden">
              {Array.from({ length: 65 }).map((_, j) => {
                const baseScale = isMuted
                  ? 0.05
                  : (0.2 + Math.abs(Math.sin(j * 0.35 + tick * 0.35)) * 0.8) * volRatio;

                return (
                  <div
                    key={j}
                    className={`flex-1 h-8 rounded-[1px] transition-all duration-100 ${
                      isMuted
                        ? "bg-foreground/15"
                        : track.color === "primary"
                          ? "bg-primary/80"
                          : "bg-white/60"
                    }`}
                    style={{
                      transform: `scaleY(${baseScale})`,
                      transformOrigin: "center",
                    }}
                  />
                );
              })}
            </div>

            <div className="col-span-12 sm:col-span-4 lg:col-span-4 flex items-center gap-3">
              <input
                type="range"
                min="-60"
                max="6"
                value={track.volume}
                onChange={(e) => handleVolumeChange(track.id, Number(e.target.value))}
                className="flex-1 accent-primary h-1 bg-[var(--surface-2)] rounded-lg appearance-none cursor-pointer"
              />
              <div className="w-14 text-mono text-[9px] font-bold text-right text-foreground/80 tabular-nums">
                {isMuted ? "-INF" : `${track.volume > 0 ? "+" : ""}${track.volume}`} DB
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MotionGraphicsWorkspace() {
  const animProgress = useMotionValue(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const controls = animate(animProgress, 1, {
      duration: 3.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    });
    return () => controls.stop();
  }, [animProgress]);

  useMotionValueEvent(animProgress, "change", setCurrentProgress);

  const t = currentProgress;
  const mt = 1 - t;

  // Bezier parameters matching: M 20 360 C 120 360, 140 40, 380 40
  const dotX = mt*mt*mt * 20 + 3*mt*mt*t * 120 + 3*mt*t*t * 140 + t*t*t * 380;
  const dotY = mt*mt*mt * 360 + 3*mt*mt*t * 360 + 3*mt*t*t * 40 + t*t*t * 40;

  const easedVal = (360 - dotY) / 320;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Graph Editor */}
      <div className="aspect-square bg-[var(--surface)] border border-border rounded-sm relative overflow-hidden select-none">
        {/* graph */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-foreground/10">
          {/* grid */}
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i}>
              <line x1={i * 40} y1={0} x2={i * 40} y2={400} stroke="currentColor" strokeWidth={1} strokeOpacity={0.06} />
              <line x1={0} y1={i * 40} x2={400} y2={i * 40} stroke="currentColor" strokeWidth={1} strokeOpacity={0.06} />
            </g>
          ))}
          {/* bezier curve */}
          <path
            d="M 20 360 C 120 360, 140 40, 380 40"
            stroke="var(--color-primary)"
            strokeWidth="2"
            fill="none"
          />
          {/* control handles */}
          <line x1={20} y1={360} x2={120} y2={360} stroke="var(--color-primary)" strokeOpacity={0.4} strokeDasharray="3 3" />
          <line x1={380} y1={40} x2={140} y2={40} stroke="var(--color-primary)" strokeOpacity={0.4} strokeDasharray="3 3" />
          {[
            [20, 360], [120, 360], [140, 40], [380, 40],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={4} fill="var(--color-background)" stroke="var(--color-primary)" strokeWidth={1.5} />
          ))}
          {/* moving keyframe - PERFECTLY RIDING THE CURVE */}
          <circle
            cx={dotX}
            cy={dotY}
            r={6}
            fill="var(--color-primary)"
            className="shadow-sm"
          />
        </svg>

        {/* HUD */}
        <div className="absolute top-3 left-3 text-mono text-[9px] uppercase tracking-widest text-foreground/60 font-bold">
          GRAPH EDITOR · TRANSFORM
        </div>
        <div className="absolute bottom-3 right-3 text-mono text-[9px] uppercase tracking-widest text-primary font-bold">
          VAL: {Math.round(easedVal * 100)}%
        </div>
      </div>

      {/* Live interactive viewport */}
      <MotionViewport easedVal={easedVal} />
    </div>
  );
}

export function PostProLabScene() {
  const [activeTab, setActiveTab] = useState<"motion" | "color" | "sound">("motion");

  const tabs = [
    { id: "motion", label: "01 // MOTION GRAPHICS", codes: ["Ae", "Ai", "Ps"] },
    { id: "color", label: "02 // COLOR GRADING", codes: ["Pr", "Cc", "Ps"] },
    { id: "sound", label: "03 // AUDIO MIXER", codes: ["Pr", "Cc"] },
  ] as const;

  return (
    <section id="post-pro-lab" className="relative py-32 px-6 lg:px-14 max-w-[1600px] mx-auto">
      <StageLabel index={3} total={4} name="POST-PRO LAB" code="00:06:12:00" />
      
      <div className="mt-10 grid grid-cols-12 gap-6 items-start">
        {/* Left selector sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight uppercase leading-[0.9]">
              Crafting<br />the<br />
              <span className="text-primary italic">details.</span>
            </h2>
            <p className="mt-4 text-xs text-foreground/50 max-w-xs leading-relaxed normal-case">
              Click the panels below to load different post-production rooms. Check the calculations, curves, scopes and outputs.
            </p>
          </div>

          {/* Software Tabs buttons */}
          <div className="space-y-2 pointer-events-auto">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`border rounded-sm p-4 cursor-pointer transition-all flex flex-col justify-between gap-3 ${
                    active ? "bg-primary/5 border-primary" : "bg-[var(--surface)] border-border hover:border-foreground/30"
                  }`}
                  data-cursor="LOAD PANEL"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase font-bold">
                    <span className={active ? "text-primary" : "text-foreground/75"}>{tab.label}</span>
                    <span className="text-[8px] opacity-40">{active ? "◼ ACTIVE" : "◻ LOAD"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <AppRow codes={[...tab.codes]} size={22} />
                    <span className="text-mono text-[8px] text-foreground/30">ROOM {tab.id.toUpperCase()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right workspace window */}
        <div className="col-span-12 lg:col-span-8">
          {activeTab === "motion" && <MotionGraphicsWorkspace />}

          {activeTab === "color" && <ColorGradingWorkspace />}

          {activeTab === "sound" && <AudioMixerWorkspace />}
        </div>
      </div>
    </section>
  );
}

/* --------------------- 04. PHASE 4: EXPORT & DELIVER --------------------- */

function ExportSettingsForm() {
  const [form, setForm] = useState({
    format: "Freelance Project",
    codec: "High Quality (10-bit)",
    projectName: "",
    details: "",
  });
  const [pct, setPct] = useState(0);
  const [isRendering, setIsRendering] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [showLogs, setShowLogs] = useState(false);

  const handleExport = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRendering) return;

    setIsRendering(true);
    setPct(0);
    setShowLogs(true);
    setLogs([
      "INITIALIZING EXPORT PROCESS...",
      "MATCHING SOURCE SPECS...",
      "ENCODING LAYER: V1 (VISUAL ASSETS)...",
    ]);

    const logSeq = [
      { pct: 15, log: "COMPILING TEXTURES AND GRADIENTS..." },
      { pct: 35, log: "ENCODING LAYER: A1 (DIALOGUE TRACK)..." },
      { pct: 50, log: "APPLYING COLOR GRADING LUT: CINE_TEAL_ORANGE..." },
      { pct: 75, log: "GENERATING AUDIO SPECTRAL WAVEFORM..." },
      { pct: 90, log: "COMPILING EXPORT METADATA..." },
      { pct: 100, log: "✓ RENDER AND ENCODING COMPLETE!" },
    ];

    let currentSeq = 0;
    const interval = setInterval(() => {
      setPct((prev) => {
        const next = prev + Math.floor(Math.random() * 5) + 2;
        if (next >= 100) {
          clearInterval(interval);
          setLogs((l) => [...l, logSeq[logSeq.length - 1].log, "✓ OPENING EMAIL INQUIRY CLIENT..."]);
          setTimeout(() => {
            const subject = encodeURIComponent(`[${form.format}] ${form.projectName}`);
            const body = encodeURIComponent(`Hi! Here are the details of my project:\n\nFormat: ${form.format}\nCodec Spec: ${form.codec}\nDetails:\n${form.details}\n\nSent via Render Queue.`);
            window.location.href = `mailto:nduytan.dev@gmail.com?subject=${subject}&body=${body}`;
            setIsRendering(false);
          }, 1200);
          return 100;
        }

        if (currentSeq < logSeq.length - 1 && next >= logSeq[currentSeq].pct) {
          setLogs((l) => [...l, logSeq[currentSeq].log]);
          currentSeq++;
        }
        return next;
      });
    }, 100);
  };

  return (
    <div className="bg-[var(--surface)] border border-border rounded-sm p-6 text-mono text-[10px] tracking-wider uppercase pointer-events-auto shadow-2xl shadow-black/60 relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between text-foreground/50 mb-6 font-bold select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary rec-blink" />
          <span>MEDIA EXPORT SETTINGS</span>
        </div>
        <span>RENDER ENGINE: v1.0</span>
      </div>

      <form onSubmit={handleExport} className="space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-foreground/55 block">FORMAT (PROJECT KIND)</label>
            <select
              value={form.format}
              onChange={(e) => setForm({ ...form, format: e.target.value })}
              className="w-full bg-[var(--surface-2)] border border-border rounded-sm px-3 py-2 text-foreground focus:outline-none focus:border-primary uppercase text-[10px] cursor-pointer"
            >
              <option>Freelance Project</option>
              <option>Full-time Job Offer</option>
              <option>Collaboration request</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-foreground/55 block">CODEC (DELIVERY SPEC)</label>
            <select
              value={form.codec}
              onChange={(e) => setForm({ ...form, codec: e.target.value })}
              className="w-full bg-[var(--surface-2)] border border-border rounded-sm px-3 py-2 text-foreground focus:outline-none focus:border-primary uppercase text-[10px] cursor-pointer"
            >
              <option>High Quality (10-bit)</option>
              <option>Fast Turnaround (Proxy)</option>
              <option>Custom Specification</option>
            </select>
          </div>
        </div>

        {/* Input */}
        <div className="space-y-1.5">
          <label className="text-foreground/55 block">PROJECT NAME / SENDER NAME</label>
          <input
            type="text"
            required
            placeholder="E.G. BRAND COMMERCIAL / NIKE"
            value={form.projectName}
            onChange={(e) => setForm({ ...form, projectName: e.target.value })}
            className="w-full bg-[var(--surface-2)] border border-border rounded-sm px-3 py-2 text-foreground focus:outline-none focus:border-primary placeholder-foreground/20 text-[10px]"
          />
        </div>

        {/* Textarea */}
        <div className="space-y-1.5">
          <label className="text-foreground/55 block">INQUIRY DETAILS (PROJECT BRIEF)</label>
          <textarea
            required
            rows={4}
            placeholder="DESCRIBE THE SCOPE OF THE PROJECT, ESTIMATED TIMELINE, AND BRAND STYLE..."
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            className="w-full bg-[var(--surface-2)] border border-border rounded-sm px-3 py-2 text-foreground focus:outline-none focus:border-primary placeholder-foreground/20 text-[10px] normal-case"
          />
        </div>

        {/* Render Button */}
        <button
          type="submit"
          disabled={isRendering}
          className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold py-3 px-4 rounded-sm flex items-center justify-center gap-2 tracking-[0.2em] transition-colors disabled:opacity-50 text-[11px]"
        >
          {isRendering ? "RENDERING IN PROGRESS..." : "▶ RENDER & SEND INQUIRY"}
        </button>
      </form>

      {/* Render queue status overlay */}
      {showLogs && (
        <div className="mt-6 border border-border bg-black/45 rounded-sm p-4 space-y-3 font-mono">
          <div className="flex justify-between items-center text-[10px] font-bold">
            <span className="text-primary">QUEUE DELIVERABLE STATUS</span>
            <span className="text-primary">{pct}%</span>
          </div>
          <div className="h-1.5 bg-[var(--surface-2)] rounded-full overflow-hidden">
            <div className="h-full bg-primary shadow-[0_0_8px_var(--accent-glow)]" style={{ width: `${pct}%` }} />
          </div>
          <div className="bg-black/50 p-3 rounded-sm border border-border/30 h-28 overflow-y-auto space-y-1 text-[8px] text-foreground/60 normal-case scrollbar-thin">
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function ExportAndDeliverScene() {
  return (
    <section id="export-&-deliver" className="relative py-32 px-6 lg:px-14 max-w-[1600px] mx-auto">
      <StageLabel index={4} total={4} name="EXPORT & DELIVER" code="00:13:20:00" />
      <div className="mt-10 grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-6xl lg:text-[8vw] font-black tracking-tight uppercase leading-[0.88] select-none pointer-events-none">
            Export<br />
            <span className="italic text-primary">complete.</span>
          </h2>
          <p className="mt-8 max-w-md text-sm text-foreground/60 normal-case leading-relaxed">
            The render parameters are set. Configure your format and specs in the exporter workspace on the right, and launch the render pipeline to submit your work inquiry. I will respond to your treatment request within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:nduytan.dev@gmail.com"
              className="text-mono text-[11px] uppercase tracking-[0.3em] text-foreground/60 hover:text-primary font-bold pointer-events-auto"
              data-cursor="COPY"
            >
              nduytan.dev@gmail.com
            </a>
          </div>
        </div>

        {/* Exporter Form */}
        <div className="col-span-12 lg:col-span-5">
          <ExportSettingsForm />
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold select-none">
        <span>© REEL.CUT — MMXXVI</span>
        <span>ALL FRAMES CRAFTED IN VIETNAM / REMOTE</span>
        <span>END OF FILE ◼</span>
      </div>
    </section>
  );
}
