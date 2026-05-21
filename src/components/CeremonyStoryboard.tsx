import React from 'react';
import { motion } from 'framer-motion';
import { ArrivalIllustration, BrideGroomVows, CelebrationIllustration } from './IllustrativeCharacters';
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
export function CeremonyStoryboard() {
  return (
    <div className="space-y-24">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground">The Big Day</h2>
        <p className="font-serif italic text-sage/70">A timeline of our celebration</p>
      </div>
      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage/20 to-transparent -translate-x-1/2 hidden md:block" />
        <div className="space-y-32">
          {scenes.map((scene, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="flex-1 w-full max-w-sm aspect-square bg-sage/5 rounded-full overflow-hidden flex items-center justify-center p-8">
                {scene.illustration}
              </div>
              <div className={`flex-1 text-center ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} space-y-4`}>
                <span className="font-serif text-sm uppercase tracking-[0.3em] text-sage/60 block">{scene.time}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground">{scene.title}</h3>
                <p className="font-serif italic text-muted-foreground text-lg leading-relaxed">{scene.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}