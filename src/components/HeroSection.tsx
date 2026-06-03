/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { HeroCopy } from "../types";
import WhitepaperModal from "./WhitepaperModal";

export default function HeroSection({ copy }: { copy: HeroCopy }) {
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState(false);
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-24 md:pt-40 md:pb-48 md:flex md:items-center bg-navy text-white overflow-hidden selection:bg-accent/30">
      
      {/* Premium Background Architecture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Architectural Mesh/Line Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Sophisticated Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent-light/10 blur-[130px] rounded-full" />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 xl:col-span-8 w-full overflow-hidden">
            <motion.div
              key={copy.headline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
                <span className="h-px w-8 bg-accent hidden lg:block" />
                <span className="text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-accent-light text-center lg:text-left">
                  {copy.preHeadline}
                </span>
              </div>

              <h1 className="text-[20px] xs:text-[24px] sm:text-5xl md:text-7xl xl:text-8xl mb-6 md:mb-10 leading-[1.4] md:leading-[1.1] lg:leading-[0.95] font-serif tracking-normal md:tracking-tighter text-center lg:text-left break-words">
                {copy.headline.split(' – ').map((part, i) => (
                  <span key={i} className="block mb-1 md:mb-0">
                    {i === 1 ? (
                      <span className="text-accent italic font-normal">{part}</span>
                    ) : (
                      <span className="font-bold">{part}</span>
                    )}
                  </span>
                ))}
              </h1>

              <p className="text-sm sm:text-base md:text-2xl text-white/60 mb-10 md:mb-12 max-w-2xl leading-relaxed font-light text-center lg:text-left mx-auto lg:mx-0">
                {copy.subHeadline}
              </p>

              {/* Minimalist Action Area */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                <motion.a
                  href="https://calendly.com/kathir-cuira/erstgesprach"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-navy hover:bg-accent hover:text-white font-bold rounded-full flex items-center justify-center gap-4 transition-all text-xs uppercase tracking-widest shadow-xl shadow-white/5"
                >
                  <span className="truncate">{copy.primaryCTA}</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </motion.a>
                
                <a 
                  href="#pension-calculator"
                  className="group flex items-center justify-center gap-2 text-white/40 hover:text-white transition-all text-[10px] sm:text-xs uppercase tracking-widest font-bold"
                >
                  <span className="relative">
                    {copy.secondaryCTA}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
                  </span>
                </a>
              </div>


            </motion.div>
          </div>

          {/* Portrait / Whitepaper Column */}
          <div className="lg:col-span-5 xl:col-span-4 relative mt-12 sm:mt-20 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-[260px] xs:max-w-[400px] mx-auto lg:max-w-none"
            >
              {/* Whitepaper Cover Frame */}
              <button 
                onClick={() => setIsWhitepaperOpen(true)}
                className="relative aspect-[3/4] w-full bg-navy/20 rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-sm group/portrait shadow-2xl text-left"
              >
                <img 
                  src="https://raw.githubusercontent.com/yathur-hub/cuira-Pensionsplanung-LP1-BrandAssets/main/Cuira_Partners_Whitepaper_Cover_v3.1.png"
                  alt="Cuira Partners Whitepaper Cover"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/portrait:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Depth Accents */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-white/5 pointer-events-none" />
              </button>

              {/* Decorative Frame Glow */}
              <div className="absolute inset-[-2px] rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-tr from-accent/20 via-transparent to-white/5 opacity-50 -z-10" />

              {/* Floating Stat Cards - adjusted mobile offsets to stay within bounds */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 sm:top-12 -left-2 sm:-left-8 bg-white/5 backdrop-blur-2xl p-3 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl z-20"
              >
                <div className="text-accent text-base sm:text-2xl font-bold font-serif mb-0.5 md:mb-1">100%</div>
                <div className="text-[6px] sm:text-[8px] text-white/50 uppercase tracking-widest font-bold">Unabhängigkeit</div>
              </motion.div>

              <motion.button 
                onClick={() => setIsWhitepaperOpen(true)}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 sm:bottom-10 -right-4 sm:-right-10 bg-[#6C79F0] hover:bg-[#5a68d8] text-white px-6 py-4 rounded-2xl border border-white/20 shadow-2xl z-20 flex flex-col items-center gap-1.5 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Whitepaper</span>
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#6C79F0] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                      <path d="M7 10l5 5 5-5M12 15V3M21 21H3" />
                    </svg>
                  </div>
                </div>
                <div className="text-[7px] sm:text-[8px] text-white/70 uppercase tracking-[0.2em] font-bold">herunterladen</div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <WhitepaperModal isOpen={isWhitepaperOpen} onClose={() => setIsWhitepaperOpen(false)} />
    </section>
  );
}
