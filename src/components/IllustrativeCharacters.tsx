import React from 'react';
import { motion } from 'framer-motion';
export function ArrivalIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full flex items-center justify-center p-4 drop-shadow-sm"
    >
      <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" className="w-full max-w-[280px] h-auto">
        {/* Foundation Shadow */}
        <ellipse cx="100" cy="180" rx="60" ry="10" className="fill-sage/5" />
        {/* Garden Archway - More Detailed */}
        <motion.path
          d="M40 180 Q40 40 100 40 Q160 40 160 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-sage/60"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Secondary Decorative Arch */}
        <motion.path
          d="M50 180 Q50 60 100 60 Q150 60 150 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-sage/30"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Animated Floral Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={40 + i * 11}
              cy={180 - Math.pow(i - 5.5, 2) * 4}
              r={3 + Math.random() * 2}
              className="fill-blush/80"
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.7, 1, 0.7],
                y: [0, -3, 0] 
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                delay: i * 0.2, 
                repeat: Infinity 
              }}
            />
          </motion.g>
        ))}
        {/* Swaying Hanging Vines */}
        <motion.path
          d="M100 40 Q90 80 100 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-sage/40"
          animate={{ rotate: [-2, 2, -2], x: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
export function BrideGroomVows() {
  const heartPath = "M120 60 Q125 50 130 60 T120 75 T110 60 Q115 50 120 60";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full h-full flex items-center justify-center p-4 drop-shadow-md"
    >
      <svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet" className="w-full max-w-[320px] h-auto">
        {/* Background Pastor / Witness */}
        <g className="text-sage/20">
          <circle cx="120" cy="55" r="10" fill="currentColor" />
          <path d="M105 160 L120 70 L135 160 Z" fill="currentColor" />
        </g>
        {/* Groom */}
        <motion.g
          className="text-sage"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="85" cy="70" r="11" fill="currentColor" />
          <path d="M72 180 L85 85 L98 180 Z" fill="currentColor" />
          <motion.path 
            d="M85 105 L110 115" 
            stroke="currentColor" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.g>
        {/* Bride */}
        <motion.g
          className="text-sage"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle cx="155" cy="70" r="11" fill="currentColor" />
          <path d="M135 180 Q155 80 175 180 H135" fill="currentColor" opacity="0.9" />
          {/* Detailed Veil */}
          <motion.path
            d="M155 58 Q185 65 180 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
            className="opacity-40"
            animate={{ skewX: [-1, 1, -1], x: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.path 
            d="M155 105 L130 115" 
            stroke="currentColor" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            animate={{ rotate: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          />
        </motion.g>
        {/* Ethereal Floating Hearts */}
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={heartPath}
            className="fill-blush/60"
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{
              y: [-10, -50],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.8],
              x: [0, (i % 2 === 0 ? 15 : -15), 0]
            }}
            transition={{ 
              duration: 5, 
              delay: i * 1.5, 
              repeat: Infinity, 
              ease: [0.4, 0, 0.2, 1] 
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
export function CelebrationIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full flex items-center justify-center p-4"
    >
      <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" className="w-full max-w-[280px] h-auto text-sage">
        {/* Pulsing Floor Glow */}
        <motion.circle
          cx="100" cy="150" r="50"
          className="fill-blush/5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Dancing Figures - More Dynamic */}
        <motion.g
          animate={{ 
            rotate: [-5, 5, -5],
            x: [-8, 8, -8],
            y: [-2, 2, -2]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M65 170 L85 95 L105 170" fill="currentColor" />
          <circle cx="85" cy="80" r="9" fill="currentColor" />
        </motion.g>
        <motion.g
          animate={{ 
            rotate: [5, -5, 5],
            x: [8, -8, 8],
            y: [2, -2, 2]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
        >
          <path d="M95 170 Q115 85 135 170" fill="currentColor" opacity="0.8" />
          <circle cx="115" cy="80" r="9" fill="currentColor" />
        </motion.g>
        {/* Joy Particles / Sparks */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100}
            cy={120}
            r="1.5"
            className="fill-blush"
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
        {/* Rhythmic Music Notes */}
        {['♪', '♫', '♩', '♬'].map((note, i) => (
          <motion.text
            key={i}
            x={30 + i * 45}
            y={50}
            className="fill-blush/60 font-bold text-3xl select-none"
            animate={{
              y: [50, 30, 50],
              opacity: [0.2, 0.7, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [-10, 10, -10]
            }}
            transition={{ 
              duration: 2.5, 
              delay: i * 0.4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {note}
          </motion.text>
        ))}
        {/* Outer Circular Aura */}
        <motion.circle
          cx="100" cy="110" r="85"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="5 15"
          className="opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </motion.div>
  );
}