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
        className="z-10 px-4 max-w-4xl"
      >
        <span className="text-sage font-medium tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-6 block animate-fade-in">You are cordially invited</span>
        <h1 className="font-handwriting text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-sage mb-6 leading-tight tracking-[0.02em] break-words px-2">
          Prince Baabu Obeng and Benedicta Annan
        </h1>
        <div className="brush-divider mt-8 mb-8" />
        <p className="font-serif text-xl md:text-3xl text-foreground/80 italic mb-8">September 24th, 2025</p>
        <p className="text-muted-foreground uppercase tracking-[0.4em] text-[9px] sm:text-[10px]">Leytonstone, London</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-sage/60"
      >
        <div className="w-px h-16 bg-sage/30 mx-auto" />
        <span className="text-[10px] uppercase tracking-[0.2em] mt-3 block font-medium">Scroll Down</span>
      </motion.div>
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blush/30"
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, 60, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
}