import React from 'react';
import { motion } from 'framer-motion';
export function HeroCard() {
  return (
    <div className="relative paper-texture classic-card-border shadow-2xl rounded-sm min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Ornate Corner Flourishes */}
      <div className="absolute top-6 left-6 w-16 h-16 text-sage/30">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 0 Q50 0 50 50 Q0 50 0 0" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-6 right-6 w-16 h-16 text-sage/30 rotate-90">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 0 Q50 0 50 50 Q0 50 0 0" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-6 left-6 w-16 h-16 text-sage/30 -rotate-90">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 0 Q50 0 50 50 Q0 50 0 0" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-6 right-6 w-16 h-16 text-sage/30 rotate-180">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 0 Q50 0 50 50 Q0 50 0 0" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="z-10 px-8 max-w-3xl"
      >
        <span className="text-sage/60 font-serif italic tracking-widest text-sm mb-12 block uppercase">
          Together with their families
        </span>
        <div className="space-y-2 mb-12">
          <h1 className="font-handwriting text-5xl md:text-7xl lg:text-8xl text-sage drop-shadow-sm leading-tight px-4">
            Prince Baabu Obeng
          </h1>
          <span className="font-serif text-2xl italic text-sage/40 block">&</span>
          <h1 className="font-handwriting text-5xl md:text-7xl lg:text-8xl text-sage drop-shadow-sm leading-tight px-4">
            Benedicta Annan
          </h1>
        </div>
        <div className="w-24 h-px bg-sage/20 mx-auto my-12" />
        <div className="space-y-4">
          <p className="font-serif text-xl md:text-2xl text-foreground/80 tracking-[0.1em] uppercase">
            September 24th, 2025
          </p>
          <p className="font-serif text-lg text-sage/70 italic">At four o'clock in the afternoon</p>
          <div className="pt-8">
             <p className="text-muted-foreground font-serif uppercase tracking-[0.5em] text-[10px]">
              Leytonstone • London
             </p>
          </div>
        </div>
      </motion.div>
      {/* Discreet Wax Seal Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-8 rounded-full border border-sage/30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-sage/40" />
        </div>
      </motion.div>
    </div>
  );
}