import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles, GlassWater, Utensils, Music, Heart } from 'lucide-react';
const scenes = [
  { time: "4:00 PM", title: "Arrival", description: "The historic school hall doors open for guests", icon: <Sparkles className="w-5 h-5" /> },
  { time: "4:30 PM", title: "The Exchange", description: "The solemn exchange of vows and promises", icon: <Heart className="w-5 h-5" /> },
  { time: "5:30 PM", title: "Mingling", description: "Refreshments in the Victorian courtyard", icon: <GlassWater className="w-5 h-5" /> },
  { time: "7:00 PM", title: "Dinner", description: "A formal dinner within the assembly hall", icon: <Utensils className="w-5 h-5" /> },
  { time: "9:00 PM", title: "Celebration", description: "Music and dancing until late evening", icon: <Music className="w-5 h-5" /> },
];
export function CeremonyStoryboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div ref={containerRef} className="paper-texture classic-card-border shadow-lg p-12 md:p-20 bg-[#F7F5EF]">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-serif text-3xl tracking-[0.2em] uppercase">Order of Service</h2>
        <div className="flex justify-center items-center gap-4 py-2">
           <svg width="60" height="10" viewBox="0 0 60 10" className="text-sage/30">
             <path d="M0 5 Q15 0 30 5 T60 5" fill="none" stroke="currentColor" strokeWidth="1" />
           </svg>
        </div>
      </div>
      <div className="relative max-w-xl mx-auto">
        {/* Fine-ink timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-sage/20 -translate-x-1/2">
           <motion.div
            className="w-full origin-top bg-sage"
            style={{ height: "100%", scaleY: pathLength }}
          />
        </div>
        <div className="space-y-16 relative">
          {scenes.map((scene, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="bg-ivory border border-sage/20 rounded-full p-2 mb-4 shadow-sm">
                <div className="w-8 h-8 rounded-full border border-sage/10 flex items-center justify-center text-sage">
                  {scene.icon}
                </div>
              </div>
              <div className="space-y-1 max-w-xs">
                <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-sage/70">{scene.time}</span>
                <h3 className="font-serif text-lg tracking-wide uppercase">{scene.title}</h3>
                <p className="font-serif italic text-muted-foreground text-sm">{scene.description}</p>
              </div>
              {idx < scenes.length - 1 && (
                <div className="py-8 text-sage/20 text-xs">❦</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Sketchy botanical details */}
      <div className="absolute bottom-8 right-8 w-24 h-24 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10 90 Q30 50 80 10 M80 10 L70 15 M80 10 L75 20" />
          <path d="M35 75 Q45 60 55 65" />
          <path d="M50 55 Q60 40 70 45" />
        </svg>
      </div>
    </div>
  );
}