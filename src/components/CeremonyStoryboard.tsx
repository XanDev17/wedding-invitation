import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useInView, Variants } from 'framer-motion';
import { ArrivalIllustration, BrideGroomVows, CelebrationIllustration } from './IllustrativeCharacters';
import { cn } from '@/lib/utils';
const scenes = [
  {
    time: "4:00 PM",
    title: "The Arrival",
    description: "Welcome to the historic halls of Leytonstone",
    illustration: <ArrivalIllustration />
  },
  {
    time: "4:30 PM",
    title: "The Vows",
    description: "A beautiful promise in the heart of London",
    illustration: <BrideGroomVows />
  },
  {
    time: "7:00 PM",
    title: "The Party",
    description: "Dining, dancing, and endless celebration",
    illustration: <CelebrationIllustration />
  },
];
function SceneCard({ scene, index }: { scene: typeof scenes[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
        staggerChildren: 0.15,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "flex flex-col items-center gap-12 md:gap-24 transition-all duration-700",
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
        isInView ? "opacity-100" : "opacity-40 grayscale-[0.5]"
      )}
    >
      <motion.div
        className={cn(
          "flex-1 w-full max-w-sm aspect-square rounded-full flex items-center justify-center p-8 transition-all duration-1000",
          isInView ? "bg-sage/10 scale-105 shadow-2xl shadow-sage/5 ring-1 ring-sage/20" : "bg-sage/5 scale-100"
        )}
      >
        <div className="w-full h-full">
          {scene.illustration}
        </div>
      </motion.div>
      <div className={cn(
        "flex-1 text-center space-y-6",
        index % 2 === 0 ? 'md:text-left' : 'md:text-right'
      )}>
        <motion.div variants={itemVariants} className="overflow-hidden">
          <span className="font-serif text-sm uppercase tracking-[0.4em] text-sage/80 block font-semibold">
            {scene.time}
          </span>
        </motion.div>
        <motion.div variants={itemVariants} className="overflow-hidden">
          <h3 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            {scene.title}
          </h3>
        </motion.div>
        <motion.div variants={itemVariants} className="overflow-hidden">
          <p className="font-serif italic text-muted-foreground text-xl leading-relaxed max-w-md mx-auto md:mx-0">
            {scene.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
export function CeremonyStoryboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div ref={containerRef} className="relative py-12">
      <div className="text-center mb-24 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl tracking-tight text-foreground"
        >
          The Big Day
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px w-8 bg-sage/30" />
          <p className="font-serif italic text-sage/70 text-lg">A timeline of our celebration</p>
          <div className="h-px w-8 bg-sage/30" />
        </motion.div>
      </div>
      <div className="relative">
        {/* Central Timeline Infrastructure */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-sage/10 -translate-x-1/2 hidden md:block" />
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-sage -translate-x-1/2 hidden md:block z-10"
        />
        <div className="space-y-40 md:space-y-64">
          {scenes.map((scene, idx) => (
            <SceneCard key={idx} scene={scene} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}