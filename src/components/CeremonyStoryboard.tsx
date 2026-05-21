import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sparkles, GlassWater, Utensils, Music, Heart } from 'lucide-react';
interface SceneData {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
const scenes: SceneData[] = [
  {
    time: "4:00 PM",
    title: "The Guest Arrival",
    description: "Welcome to the secret garden. Soft music plays as you find your seat amidst the blooming hydrangeas.",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    time: "4:30 PM",
    title: "The Vows",
    description: "Prince and Benedicta exchange promises under the ancient oak tree. Tissues recommended for the happy tears.",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    time: "5:30 PM",
    title: "Cocktail Hour",
    description: "Signature drinks and artisan hors d'oeuvres. A time to mingle and bask in the golden hour glow.",
    icon: <GlassWater className="w-8 h-8" />,
  },
  {
    time: "7:00 PM",
    title: "The Grand Dinner",
    description: "A candlelit feast served under the stars. Laughter and toasts echoing through the night.",
    icon: <Utensils className="w-8 h-8" />,
  },
  {
    time: "9:00 PM",
    title: "Dancing & Joy",
    description: "The celebration reaches its peak. Put on your dancing shoes as the DJ plays our favorite hits.",
    icon: <Music className="w-8 h-8" />,
  },
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
    <div ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl mb-6 text-foreground"
        >
          The Story of Our Day
        </motion.h2>
        <p className="text-muted-foreground italic font-serif text-lg">A journey of love, from the first hello to the last dance.</p>
      </div>
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Animated Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sage/20 -translate-x-1/2 hidden md:block">
          <motion.div
            className="w-full bg-sage origin-top"
            style={{ height: "100%", scaleY: pathLength }}
          />
        </div>
        <div className="space-y-24 md:space-y-40">
          {scenes.map((scene, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Side */}
              <div className={`flex-1 w-full text-center ${idx % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                <span className="text-sage font-bold tracking-widest text-sm mb-2 block">{scene.time}</span>
                <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">{scene.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0 inline-block">
                  {scene.description}
                </p>
              </div>
              {/* Icon / Center Side */}
              <div className="relative flex items-center justify-center z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-sage/30 flex items-center justify-center text-sage shadow-soft"
                >
                  {scene.icon}
                </motion.div>
                {/* Decorative Blob */}
                <div className="absolute -z-10 w-24 h-24 bg-blush/20 rounded-full blur-2xl animate-pulse-slow" />
              </div>
              {/* Illustration Side (Placeholder for visual balance) */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blush/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}