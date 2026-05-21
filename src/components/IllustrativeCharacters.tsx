import React from 'react';
import { motion } from 'framer-motion';
export function ArrivalIllustration() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full h-full flex items-center justify-center p-4"
    >
      <svg viewBox="0 0 200 200" className="w-64 h-64 text-sage">
        {/* Garden Archway */}
        <motion.path
          d="M40 180 Q40 40 100 40 Q160 40 160 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Flowers on Arch */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={40 + i * 17}
            cy={180 - Math.pow(i - 3.5, 2) * 8}
            r="4"
            className="fill-blush/60"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
        {/* Swaying Leaves */}
        <motion.path
          d="M150 140 Q170 130 180 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
export function BrideGroomVows() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-full flex items-center justify-center p-4"
    >
      <svg viewBox="0 0 240 200" className="w-80 h-80">
        {/* Pastor (Background) */}
        <g className="text-sage/40">
          <circle cx="120" cy="60" r="12" fill="currentColor" />
          <path d="M100 160 L120 75 L140 160 Z" fill="currentColor" opacity="0.5" />
          <rect x="110" y="80" width="20" height="15" fill="white" stroke="currentColor" strokeWidth="0.5" />
        </g>
        {/* Groom (Left) */}
        <motion.g 
          className="text-sage"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <circle cx="85" cy="70" r="10" fill="currentColor" />
          <path d="M75 180 L85 85 L95 180 Z" fill="currentColor" />
          <path d="M85 100 L110 115" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </motion.g>
        {/* Bride (Right) */}
        <motion.g 
          className="text-sage"
          animate={{ x: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <circle cx="155" cy="70" r="10" fill="currentColor" />
          {/* Flowing Gown */}
          <path d="M140 180 Q155 80 170 180 H140" fill="currentColor" opacity="0.8" />
          {/* Veil */}
          <motion.path 
            d="M155 60 Q180 65 175 160" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeDasharray="4 2"
            animate={{ skewX: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <path d="M155 100 L130 115" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </motion.g>
        {/* Floating Hearts */}
        <motion.path
          d="M120 40 Q125 30 130 40 T120 55 T110 40 Q115 30 120 40"
          className="fill-blush"
          animate={{ y: [-10, -30], opacity: [0, 1, 0], scale: [0.5, 1.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
}
export function CelebrationIllustration() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="w-full h-full flex items-center justify-center p-4"
    >
      <svg viewBox="0 0 200 200" className="w-64 h-64 text-sage">
        {/* Dancing Couple (Abstract Shapes) */}
        <motion.g
          animate={{ rotate: [-3, 3, -3], x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M70 160 L85 90 L100 160" fill="currentColor" />
          <circle cx="85" cy="75" r="8" fill="currentColor" />
        </motion.g>
        <motion.g
          animate={{ rotate: [3, -3, 3], x: [5, -5, 5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M100 160 Q115 80 130 160" fill="currentColor" opacity="0.7" />
          <circle cx="115" cy="75" r="8" fill="currentColor" />
        </motion.g>
        {/* Music Notes */}
        {[...Array(4)].map((_, i) => (
          <motion.text
            key={i}
            x={40 + i * 40}
            y={60}
            className="text-blush font-bold text-2xl"
            animate={{ 
              y: [60, 40, 60],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          >
            ♪
          </motion.text>
        ))}
        {/* Joy Sparks */}
        <motion.circle 
          cx="100" cy="100" r="80" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          strokeDasharray="4 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </motion.div>
  );
}