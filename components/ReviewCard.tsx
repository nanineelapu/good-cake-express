'use client';

import { motion } from 'framer-motion';
import { Star, Verified } from 'lucide-react';
import { Review } from '@/lib/reviewsData';

interface ReviewCardProps {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col md:flex-row w-full min-h-[400px] rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl hover:shadow-primary/5 transition-all duration-700"
    >
      {/* LEFT: THE IDENTITY PANEL (Black) */}
      <div className="w-full md:w-[45%] bg-black p-10 md:p-16 flex flex-col justify-center items-start relative overflow-hidden shrink-0">
         {/* Kinetic Glow */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[100px] group-hover:bg-primary/40 transition-all duration-700" />
         
         <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
               <h4 className="text-4xl md:text-5xl font-display font-black text-white italic leading-[0.9] tracking-tighter uppercase whitespace-break-spaces">
                  {review.name}
               </h4>
               <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                     <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
               </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-[10px] font-mono font-black text-white/30 uppercase tracking-[0.3em]">
               <Verified size={14} className="text-primary" />
               VERIFIED_{review.platform.toUpperCase()}
            </div>
         </div>
         
         <div className="absolute bottom-10 left-10 text-[9px] font-mono font-black text-white/10 uppercase tracking-[0.5em] hidden md:block">
            ARCHIVE_{index + 104}
         </div>
      </div>

      {/* RIGHT: THE TESTIMONY PANEL (White) */}
      <div className="w-full md:w-[55%] bg-white p-10 md:p-16 flex items-center relative border-t md:border-t-0 md:border-l border-black/5 group-hover:bg-[#FCFCFC] transition-colors duration-500">
         <div className="flex flex-col gap-8">
            <p className="text-2xl md:text-3xl font-display font-black leading-[1.2] italic text-text/80 uppercase tracking-tight">
               "{review.text}"
            </p>
            
            <div className="flex items-center gap-4">
               <div className="w-8 h-px bg-primary/20 group-hover:w-16 transition-all duration-500" />
               <span className="text-[10px] font-mono font-black text-text/20 uppercase tracking-[0.4em]">RPT_{index + 104}</span>
            </div>
         </div>

         {/* Decorative Element */}
         <div className="absolute bottom-10 right-10 flex items-center justify-center w-12 h-12 rounded-full border border-black/5 text-text/10 font-display font-black italic text-xl">
            {review.name[0]}
         </div>
      </div>
    </motion.div>
  );
}
