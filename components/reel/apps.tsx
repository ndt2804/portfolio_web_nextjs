"use client";

import { motion } from "framer-motion";

/** Adobe-style square app tile. Two-letter mark on a deep tinted background. */
export function AppTile({
  code,
  label,
  bg,
  fg,
  size = 44,
  className = "",
}: {
  code: string;
  label: string;
  bg: string;
  fg: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-[6px] border border-white/10 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center ${className}`}
      style={{ width: size, height: size, background: bg }}
      title={label}
      aria-label={label}
    >
      <span
        className="font-black tracking-tighter leading-none"
        style={{
          color: fg,
          fontSize: size * 0.42,
          fontFamily: "var(--font-display)",
          textShadow: "0 0 8px rgba(0,0,0,0.2)",
        }}
      >
        {code}
      </span>
      {/* highlight */}
      <span className="absolute inset-0 rounded-[6px] bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
    </div>
  );
}

export const APPS = [
  { code: "Ae", label: "After Effects", bg: "#2B0A4A", fg: "#D19FFF" },
  { code: "Pr", label: "Premiere Pro", bg: "#2A0634", fg: "#EA77FF" },
  { code: "Ps", label: "Photoshop", bg: "#001E36", fg: "#31A8FF" },
  { code: "Ai", label: "Illustrator", bg: "#330000", fg: "#FF9A00" },
  { code: "Me", label: "Media Encoder", bg: "#1A0A2E", fg: "#9999FF" },
  { code: "Cc", label: "CapCut", bg: "#0d0f12", fg: "#25f5d2" },
];

/** Fixed floating software dock at bottom-right. */
export function AppDock() {
  return (
    <motion.div
      className="fixed right-8 bottom-24 z-45 hidden xl:flex flex-col items-center gap-2 pointer-events-none"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="text-mono text-[9px] uppercase tracking-[0.3em] text-foreground/40 rotate-180 [writing-mode:vertical-rl] mb-2">
        WORKSTATION
      </div>
      {APPS.map((app, i) => (
        <motion.div
          key={app.label}
          className="pointer-events-auto"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          whileHover={{ scale: 1.15, x: -6 }}
          data-cursor={app.label.toUpperCase()}
        >
          <AppTile {...app} size={36} />
        </motion.div>
      ))}
      <div className="w-6 h-px bg-border my-1" />
      <div className="text-mono text-[9px] uppercase tracking-widest text-primary">●</div>
    </motion.div>
  );
}

/** Horizontal row of app tiles used inside sections. */
export function AppRow({ codes, size = 32 }: { codes: string[]; size?: number }) {
  const apps = codes.map((c) => APPS.find((a) => a.code === c)).filter(Boolean) as typeof APPS;
  return (
    <div className="flex items-center gap-2">
      {apps.map((a) => (
        <AppTile key={a.code} {...a} size={size} />
      ))}
    </div>
  );
}
