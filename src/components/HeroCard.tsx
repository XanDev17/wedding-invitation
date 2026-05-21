import React from 'react';
import { motion } from 'framer-motion';
export function HeroCard() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-ivory">
      {/* Decorative Floral SVGs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-80 h-80 text-sage pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M40,-60C50,-50,55,-35,58,-20C61,-5,62,10,58,25C54,40,45,55,32,62C19,69,2,68,-15,64C-32,60,-49,53,-58,40C-67,27,-68,8,-64,-10C-60,-28,-51,-45,-38,-55C-25,-65,-10,-68,5,-75C20,-82,40,-70,40,-60Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-4 max-w-5xl"
      >
        <span className="text-sage font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 block">You are cordially invited</span>
        <h1 className="font-handwriting text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-sage mb-4 leading-tight">
          Prince Baabu Obeng and Benedicta Annan
        </h1>
        <div className="brush-divider" />
        <p className="font-serif text-2xl md:text-3xl text-foreground/80 italic mb-8">September 24th, 2025</p>
        <p className="text-muted-foreground uppercase tracking-widest text-xs">San Francisco, California</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sage/40"
      >
        <div className="w-px h-12 bg-sage/30 mx-auto" />
        <span className="text-[10px] uppercase tracking-tighter mt-2 block">Scroll Down</span>
      </motion.div>
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blush/40"
          initial={{ x: Math.random() * 1000 - 500, y: Math.random() * 1000 - 500 }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}