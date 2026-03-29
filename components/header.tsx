"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { usePortfolioMode } from "./providers/portfolio-mode-provider";
import Link from "next/link";
import { GlitchLogo } from "./glitch-logo";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  "“Be yourself; everyone else is already taken.” – Oscar Wilde",
  "“Two things are infinite: the universe and human stupidity...” – Albert Einstein",
  "“Make it work, make it right, make it fast.” – Kent Beck",
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“Talk is cheap. Show me the code.” – Linus Torvalds",
  "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
  "“The only way to do great work is to love what you do.” – Steve Jobs",
  "“Innovation distinguishes between a leader and a follower.” – Steve Jobs",
  "“Stay hungry, stay foolish.” – Stewart Brand",
  "“Simplicity is the soul of efficiency.” – Austin Freeman"
];

const Header = () => {
  const { mode } = usePortfolioMode();
  const isDeveloper = mode === "developer";
  const [currentQuote, setCurrentQuote] = useState("");
  const [showQuote, setShowQuote] = useState(false);

  const handleQuoteClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
    setShowQuote(true);
    setTimeout(() => setShowQuote(false), 5000);
  };

  return (
    <header className={`fixed top-0 w-full z-[1000] backdrop-blur-md border-b transition-colors duration-500 ${isDeveloper ? 'bg-white/80 dark:bg-background/80 border-gray-200 dark:border-gray-800' : 'bg-[#131313]/90 border-transparent'}`}>
      <div className="flex justify-between items-center px-6 md:px-8 h-20 max-w-screen-2xl mx-auto">
        
        {/* Logo Section */}
        {isDeveloper ? (
          <nav className="flex md:gap-2 items-center">
            <Link className="flex h-9 items-center gap-2 rounded-xl px-2" aria-label="Home" href="/">
              <div className="flex items-center gap-1.5 font-[1000] leading-none">
                <div className="-mt-1 hidden text-2xl sm:block">
                  <span className="text-slate-900 dark:text-slate-200">
                    <strong className="text-purple-600 dark:text-purple-500">_</strong>tannd
                  </span>
                </div>
              </div>
            </Link>
          </nav>
        ) : (
          <Link href="/" className="text-3xl font-black tracking-tighter hover:opacity-80 transition-opacity">
            <GlitchLogo text="_tannd" />
          </Link>
        )}

        {/* Center / Left-ish Links (Only in Editor Mode) */}
        {!isDeveloper && (
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tighter uppercase text-sm font-bold">
            <Link className="text-[#ff8f73] border-b-2 border-[#ff8f73] pb-1" href="/#work">Work</Link>
            <Link className="text-[#adaaaa] hover:text-white transition-colors duration-150 ease-out" href="/#projects">Projects</Link>
            <Link className="text-[#adaaaa] hover:text-white transition-colors duration-150 ease-out" href="/#services">Services</Link>
          </div>
        )}

        {/* Right Section (Action buttons and Mode Toggle) */}
        <div className="flex items-center gap-4">
          {isDeveloper ? (
            <nav className="flex items-center text-base justify-center md:mr-2 border-r border-gray-300 dark:border-gray-700 md:pr-6 pr-4 mr-2">
              <ul className="flex items-center md:gap-5 gap-3">
                <li className="flex items-center space-x-2 text-gray-800 dark:text-gray-300 font-black hover:text-zinc-800 dark:hover:text-white relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-800 dark:after:bg-white after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100 after:origin-left">
                  <Link className="nav-link" href="/projects">Projects</Link>
                </li>
                <li className="flex items-center space-x-2 text-gray-800 dark:text-gray-300 font-black hover:text-zinc-800 dark:hover:text-white relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-zinc-800 dark:after:bg-white after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100 after:origin-left">
                  <Link className="nav-link" href="/blogs">Blogs</Link>
                </li>
              </ul>
            </nav>
          ) : (
            <button 
              onClick={handleQuoteClick}
              className="hidden sm:block bg-[#ff8f73] text-[#5e1000] px-6 py-2 font-headline font-bold uppercase tracking-tighter rounded-md hover:bg-[#ff5c34] active:scale-95 transition-all duration-150"
            >
              Get a Quote
            </button>
          )}
          
          <div className="w-20 h-10 flex items-center justify-center shrink-0">
            <ModeToggle />
          </div>
        </div>

      </div>

      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[1001] bg-slate-900/90 dark:bg-slate-100/90 text-white dark:text-slate-900 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md max-w-sm w-[90%] text-center text-sm font-medium border border-slate-700/50 dark:border-slate-300/50"
          >
            {currentQuote}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
