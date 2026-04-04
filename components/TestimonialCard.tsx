'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Quote, Star, ShieldCheck } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    text: string;
    platform: string;
  };
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isDark = index % 2 === 0;

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      className="relative group w-full"
    >
      <div className={`
        relative overflow-hidden transition-all duration-500
        ${isDark ? 'bg-black text-white border-white/10' : 'bg-white text-text border-black/5'}
        p-5 pr-10
        rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-lg rounded-br-lg
        shadow-sm group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]
        group-hover:border-black/40
        flex flex-row items-center gap-8
      `}>
        {/* Glow */}
        <motion.div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'},
                transparent 80%
              )
            `,
          }}
        />

        {/* Left Side: Name and Meta */}
        <div className={`shrink-0 w-44 text-right border-r ${isDark ? 'border-white/10' : 'border-black/10'} pr-8 py-2 relative z-10`}>
          <h4 className="font-display font-black text-lg tracking-tighter uppercase leading-none mb-2">
            {testimonial.name}
          </h4>
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={8} fill="currentColor" className={isDark ? 'text-white' : 'text-primary'} />
              ))}
            </div>
            <span className={`text-[7px] font-mono font-bold uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-text/20'}`}>
              VERIFIED_{testimonial.platform}
            </span>
          </div>
        </div>

        {/* Right Side: Quote */}
        <div className="grow pt-1 relative z-10">
          <div className="flex gap-4 items-start">
            <Quote className={isDark ? 'text-white/20' : 'text-primary/20'} size={16} />
            <p className={`
              leading-snug font-display font-medium text-lg tracking-tight
              ${isDark ? 'text-white/90' : 'text-text/80'}
            `}>
              "{testimonial.text}"
            </p>
          </div>
        </div>

        {/* Technical Decor */}
        <div className="absolute bottom-2 right-6 opacity-10 pointer-events-none select-none">
          <span className="text-[10px] font-mono font-black tracking-[0.6em]">RPT_{index + 104}</span>
        </div>
      </div>
    </motion.div>
  );
}
