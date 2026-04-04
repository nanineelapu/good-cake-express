"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowRight, ArrowLeft, ExternalLink, ShieldCheck, UserCheck } from 'lucide-react';
import { useState, useRef } from 'react';

const reviewsData = [
   { id: 1, name: "Arpita Sharma", rating: 5, date: "2 days ago", text: "Best eggless bento cakes in Chandigarh. The moisture in their sponge is just unreal for an eggless cake. Ordered for a birthday in PU campus and they delivered in 15 mins flat.", platform: "Google" },
   { id: 2, name: "Karan Mehra", rating: 5, date: "1 week ago", text: "The Red Velvet Draft is a masterpiece. Most places fail at the cream cheese frosting, but these guys nailed it. Architectural perfection in every slice.", platform: "Zomato" },
   { id: 3, name: "Sanya Malik", rating: 5, date: "3 days ago", text: "Finally found a bakery that takes 'eggless' seriously. Their snacks and croissants are surprisingly flaky. Definitely my new go-to for sector 09 delivery.", platform: "Swiggy" },
   { id: 4, name: "Ritvik Gill", rating: 4, date: "2 weeks ago", text: "Ordered a custom wedding cake. The design was exactly as discussed. Tasted very premium. Highly recommend for special occasions.", platform: "Google" },
   { id: 5, name: "Mehak Preet", rating: 5, date: "1 month ago", text: "Signature slice is to die for. If you haven't tried their chocolate arch, you're missing out. Best in tricity for eggless lovers.", platform: "Zomato" },
   { id: 6, name: "Aryan Jain", rating: 5, date: "5 days ago", text: "Smooth delivery to PEC. Packaging was very secure - no damage to the delicate icing. 5/5 for service and 5/5 for taste.", platform: "Swiggy" },
];

const platforms = [
   { name: "Google", score: "5.0", count: "342", color: "bg-[#4285F4]" },
   { name: "Zomato", score: "4.8", count: "1.2k", color: "bg-[#E23744]" },
   { name: "Swiggy", score: "4.9", count: "890", color: "bg-[#FC8019]" },
];

export default function ReviewsPage() {
   const [index, setIndex] = useState(0);
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll();

   const next = () => setIndex((prev) => (prev + 1) % reviewsData.length);
   const prev = () => setIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);

   return (
      <div className="min-h-screen bg-white text-text pt-24 lg:pt-40 pb-40 overflow-hidden relative">

         {/* SECTION 1: THE STRUCTURAL HERO */}
         <section className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden border-b border-black/5">
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none select-none">
               <div className="text-[25vw] font-display font-black text-black leading-none uppercase italic absolute top-0 -left-10">SENTIMENT</div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
               <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* Left: Primary Metric */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="flex flex-col items-start gap-2"
                  >
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-px bg-primary" />
                        <span className="text-primary text-[10px] font-mono font-black uppercase tracking-[0.5em]">Sentiment_Log_v2.0</span>
                     </div>
                     <h1 className="text-[15vw] lg:text-[12rem] font-display font-black leading-[0.7] tracking-tighter text-text uppercase italic select-none">
                        5.0
                     </h1>
                     <div className="flex gap-2 mt-4">
                        {[...Array(5)].map((StarIcon, i) => (
                           <Star key={i} size={48} className="fill-primary text-primary" />
                        ))}
                     </div>
                  </motion.div>

                  {/* Right: Platform Matrix */}
                  <div className="grid gap-6">
                     <span className="text-[10px] font-mono font-black text-text/20 uppercase tracking-[0.4em] mb-4">Integrations // Live_Sync</span>
                     {platforms.map((p, i) => (
                        <motion.div
                           key={p.name}
                           initial={{ opacity: 0, x: 50 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           className="p-8 bg-[#FBFBFB] border border-black/5 rounded-3xl flex items-center justify-between group hover:border-primary/20 transition-all hover:bg-white hover:shadow-xl"
                        >
                           <div className="flex items-center gap-6">
                              <div className={`w-10 h-10 rounded-2xl ${p.color} flex items-center justify-center text-white`}>
                                 <ExternalLink size={16} />
                              </div>
                              <div className="flex flex-col">
                                 <span className="text-sm font-display font-black uppercase italic tracking-tighter">{p.name} Score</span>
                                 <span className="text-[9px] font-mono font-black text-text/20 uppercase tracking-widest">{p.count} RECIPIENTS LOGGED</span>
                              </div>
                           </div>
                           <span className="text-4xl font-display font-black italic">{p.score}</span>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 2: THE KINETIC CAROUSEL (Structural) */}
         <section className="container mx-auto px-6 pt-28 pb-10">
            <div className="grid lg:grid-cols-12 gap-20">
               {/* Left: Summary Metrics */}
               <div className="lg:col-span-4 sticky top-40 h-fit">
                  <div className="flex flex-col gap-10">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-text/30">Review_Sequence</span>
                     </div>
                     <h2 className="text-6xl font-display font-black uppercase italic leading-none tracking-tighter">
                        DISPATCH <br /> <span className="text-primary not-italic">FEEDBACK.</span>
                     </h2>
                     <p className="text-sm font-medium italic text-text/40 leading-loose max-w-sm">
                        Systematic verification of customer sentiment. Every entry represents a confirmed patisserie unit dispatch to Chandigarh or TRICITY.
                     </p>

                     {/* Controls */}
                     <div className="flex gap-4 mt-8">
                        <button onClick={prev} className="w-20 h-20 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all group">
                           <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button onClick={next} className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group">
                           <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </div>
               </div>

               {/* Right: The Carousel Stage */}
               <div className="lg:col-span-8 relative">
                  <div className="min-h-[600px] flex items-center justify-center px-4">
                     <AnimatePresence mode='wait'>
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, x: 100, scale: 0.9 }}
                           animate={{ opacity: 1, x: 0, scale: 1 }}
                           exit={{ opacity: 0, x: -100, scale: 0.9 }}
                           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                           className="w-full max-w-2xl bg-[#FBFBFB] border border-black/5 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-xl relative overflow-hidden group"
                        >
                           {/* Decorative Shield */}
                           <div className="absolute -top-10 -right-10 text-primary/5">
                              <UserCheck size={300} />
                           </div>

                           <div className="flex flex-col gap-8 md:gap-12 relative z-10">
                              <div className="flex justify-between items-start">
                                 <div className="flex flex-col gap-1 md:gap-2">
                                    <span className="text-primary text-[9px] md:text-[10px] font-mono font-black uppercase tracking-[0.5em]">{reviewsData[index].platform} UNIT</span>
                                    <div className="flex gap-1">
                                       {[...Array(reviewsData[index].rating)].map((_, i) => (
                                          <Star key={i} size={14} className="md:w-4 md:h-4 fill-primary text-primary" />
                                       ))}
                                    </div>
                                 </div>
                                 <span className="text-[9px] md:text-[10px] font-mono font-black text-text/20 uppercase tracking-widest">{reviewsData[index].date}</span>
                              </div>

                              <p className="text-xl md:text-4xl font-display font-black leading-[1.2] italic text-text uppercase tracking-tight">
                                 "{reviewsData[index].text}"
                              </p>

                              <div className="flex items-center gap-4 md:gap-6 pt-8 md:pt-12 border-t border-black/5">
                                 <div className="w-14 h-14 rounded-full bg-white border border-black/5 flex items-center justify-center text-primary font-display font-black text-xl italic">
                                    {reviewsData[index].name[0]}
                                 </div>
                                 <div className="flex flex-col">
                                    <h4 className="text-xl font-display font-black uppercase tracking-tighter italic">{reviewsData[index].name}</h4>
                                    <span className="text-[10px] font-mono font-black text-text/30 uppercase tracking-widest">Verified Recipient</span>
                                 </div>
                              </div>
                           </div>

                           {/* Status Bar */}
                           <div className="absolute bottom-0 left-0 w-full h-2 bg-black/5">
                              <motion.div
                                 initial={{ width: 0 }}
                                 animate={{ width: "100%" }}
                                 transition={{ duration: 10, ease: "linear" }}
                                 className="h-full bg-primary"
                                 onAnimationComplete={next}
                              />
                           </div>
                        </motion.div>
                     </AnimatePresence>
                  </div>

                  {/* Numerical Counter */}
                  <div className="absolute -bottom-20 right-10 flex items-end gap-2 text-text font-display font-black italic">
                     <span className="text-8xl leading-none">0{index + 1}</span>
                     <span className="text-2xl text-text/20 pb-2">/ 0{reviewsData.length}</span>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 3: MASSIVE PLATFORM LOGS */}
         <section className="border-y border-black/5 py-12 bg-[#FBFBFB]">
            <div className="container mx-auto px-6 overflow-hidden">
               <motion.div
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="flex gap-10 whitespace-nowrap"
               >
                  {[...Array(10)].map((_, i) => (
                     <div key={i} className="flex items-center gap-6">
                        <span className="text-6xl font-display font-black uppercase italic text-black/5 tracking-tighter">Verified_Case_Archive</span>
                        <div className="w-4 h-4 rounded-full bg-primary" />
                        <span className="text-[10px] font-mono font-black text-text/20 uppercase tracking-[1em]">SYSTEM_STABLE</span>
                     </div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* CTA: Join the Feed */}
         <div className="container mx-auto px-6 mt-20 text-center">
            <h2 className="text-5xl md:text-[8vw] font-display font-black uppercase italic tracking-tighter leading-[0.85] mb-12">
               WRITE YOUR <br /> <span className="text-primary not-italic">ENTRY.</span>
            </h2>
            <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => window.open('https://g.page/r/CU9M-zE-3_R5EAE/review', '_blank')}
               className="w-full sm:w-auto px-10 md:px-20 py-6 md:py-8 bg-black text-white rounded-full font-mono font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.5em] shadow-3xl hover:bg-primary transition-all duration-500"
            >
               ACCESS REVIEW PORTAL
            </motion.button>
         </div>

      </div>
   );
}
