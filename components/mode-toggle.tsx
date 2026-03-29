"use client";

import { Code2, Video } from "lucide-react";
import { usePortfolioMode } from "./providers/portfolio-mode-provider";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { mode, toggleMode } = usePortfolioMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-20 h-10 rounded-full bg-slate-200 dark:bg-slate-800/50" />; 
  }

  const isDeveloper = mode === "developer";

  return (
    <button
      onClick={toggleMode}
      className={`relative flex items-center w-20 h-10 rounded-full p-1 transition-colors duration-500 focus:outline-none overflow-hidden ${
        isDeveloper ? 'bg-slate-200 dark:bg-slate-800' : 'bg-[#1a1a1a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'
      }`}
      aria-label={`Switch to ${isDeveloper ? 'Editor' : 'Developer'} mode`}
    >
      {/* 
        Total width: 80px. Padding: 4px each side. 
        Inner track: 72px. 
        Pill width: 36px (w-9). 
        To move from exactly the left half to the right half, it traverses exactly 36px.
      */}
      <motion.div 
        layout
        initial={false}
        animate={{
          x: isDeveloper ? 0 : 36,
          backgroundColor: isDeveloper ? "var(--pill-color, #ffffff)" : "#ff8f73"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 1.5
        }}
        className={`absolute left-1 top-1 bottom-1 w-9 rounded-full shadow-md z-0 ${isDeveloper ? 'dark:!bg-slate-700' : ''}`}
      />
      
      {/* Icons container fills strictly the 72px inner track */}
      <div className="relative flex justify-between w-full h-full z-10">
        <motion.div 
          animate={{
            color: isDeveloper ? "var(--icon-active, #000000)" : "#666666",
            scale: isDeveloper ? 1 : 0.75,
            opacity: isDeveloper ? 1 : 0.4
          }}
          transition={{ duration: 0.3 }}
          className={`w-9 h-full flex items-center justify-center ${isDeveloper ? 'dark:!text-white' : ''}`}
        >
          <Code2 size={18} strokeWidth={2.5} />
        </motion.div>
        
        <motion.div 
          animate={{
            color: !isDeveloper ? "#5e1000" : "#888888",
            scale: !isDeveloper ? 1 : 0.75,
            opacity: !isDeveloper ? 1 : 0.4
          }}
          transition={{ duration: 0.3 }}
          className={`w-9 h-full flex items-center justify-center ${isDeveloper ? 'dark:!text-gray-400' : ''}`}
        >
          <Video size={18} strokeWidth={2.5} />
        </motion.div>
      </div>
    </button>
  );
}
