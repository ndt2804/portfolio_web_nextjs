"use client";

import React from "react";

interface GlitchLogoProps {
  text: string;
  className?: string;
  useJitter?: boolean;
}

export function GlitchLogo({ text, className = "", useJitter = true }: GlitchLogoProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .glitch-wrapper {
          display: inline-flex;
          position: relative;
          align-items: center;
          justify-content: center;
        }

        .glitch-text {
          position: relative;
          color: white;
          display: inline-block;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          pointer-events: none;
        }

        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #00ffff;
          clip-path: inset(20% 0 60% 0);
          animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
        }

        .glitch-text::after {
          left: -2px;
          text-shadow: 2px 0 #ff00ff, -1px 0 #ff7856;
          clip-path: inset(60% 0 20% 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        .glitch-jitter {
          animation: text-jitter 4s infinite linear alternate-reverse;
        }

        @keyframes text-jitter {
          0%, 100% { transform: translate(0, 0); }
          5% { transform: translate(-1px, 0); }
          10% { transform: translate(1px, 0); }
          15% { transform: translate(0, 0); }
          95% { transform: translate(0, 0); }
          97% { transform: translate(1px, 0); }
          99% { transform: translate(-1px, 0); }
        }

        @keyframes glitch-anim-1 {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          10% { clip-path: inset(40% 0 10% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 0); }
          30% { clip-path: inset(10% 0 60% 0); transform: translate(2px, 0); }
          40% { clip-path: inset(30% 0 20% 0); transform: translate(-2px, -1px); }
          50% { clip-path: inset(60% 0 30% 0); transform: translate(2px, 1px); }
          60% { clip-path: inset(15% 0 70% 0); transform: translate(-2px, 0); }
          70% { clip-path: inset(90% 0 5% 0); transform: translate(2px, -1px); }
          80% { clip-path: inset(5% 0 80% 0); transform: translate(-2px, 1px); }
          90% { clip-path: inset(50% 0 30% 0); transform: translate(2px, 0); }
          100% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, -1px); }
        }

        @keyframes glitch-anim-2 {
          0% { clip-path: inset(70% 0 10% 0); transform: translate(2px, -1px); }
          10% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(40% 0 30% 0); transform: translate(2px, 0); }
          30% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, -1px); }
          40% { clip-path: inset(20% 0 60% 0); transform: translate(2px, 1px); }
          50% { clip-path: inset(50% 0 10% 0); transform: translate(-2px, 0); }
          60% { clip-path: inset(5% 0 90% 0); transform: translate(2px, -1px); }
          70% { clip-path: inset(30% 0 40% 0); transform: translate(-2px, 1px); }
          80% { clip-path: inset(90% 0 5% 0); transform: translate(2px, 0); }
          90% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, -1px); }
          100% { clip-path: inset(15% 0 70% 0); transform: translate(2px, 1px); }
        }
      `}} />
      <div className={`glitch-wrapper ${className}`}>
        <span 
          className={`glitch-text ${useJitter ? 'glitch-jitter' : ''}`} 
          data-text={text}
        >
          {text}
        </span>
      </div>
    </>
  );
}
