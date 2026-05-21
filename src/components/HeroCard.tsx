import React from 'react';
import { motion } from 'framer-motion';
export function HeroCard() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
      {/* Immersive Background Elements */}
      <motion.div
        className="absolute top-20 left-10 text-sage/10 w-32 h-32 md:w-64 md:h-64 pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 Q70 30 50 100 Q30 30 50 0" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-blush/20 w-40 h-40 md:w-80 md:h-80 pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 Q80 50 50 100 Q20 50 50 0" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <span className="text-sage font-serif italic tracking-[0.3em] text-[10px] md:text-sm mb-6 md:mb-10 block uppercase opacity-70">
          The Wedding Invitation of
        </span>
        <div className="space-y-2 md:space-y-6 mb-8 md:mb-16">
          <h1 className="font-handwriting text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-sage leading-[1.1] text-balance">
            Prince Baabu
          </h1>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="h-px w-8 md:w-16 bg-sage/20" />
            <span className="font-serif text-2xl md:text-4xl italic text-sage/30">&</span>
            <div className="h-px w-8 md:w-16 bg-sage/20" />
          </div>
          <h1 className="font-handwriting text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-sage leading-[1.1] text-balance">
            Benedicta Annan
          </h1>
        </div>
        <div className="space-y-4 pt-4 md:pt-8">
          <p className="font-serif text-lg md:text-2xl text-foreground tracking-[0.2em] uppercase">
            24 . 09 . 2025
          </p>
          <p className="font-serif text-base md:text-lg text-sage/60 italic">Leytonstone, London</p>
        </div>
      </motion.div>
      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-px h-12 md:h-20 bg-gradient-to-b from-sage to-transparent" />
      </motion.div>
    </div>
  );
}