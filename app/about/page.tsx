"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Clock, Award, Heart, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const stats = [
  { label: 'DELIVERY TIME', value: '15 Min', icon: Clock },
  { label: 'BAKE TYPE', value: '100% EGGLESS', icon: Sparkles },
  { label: 'RANKED NO.1', value: 'IN PU CAMPUS', icon: Award },
  { label: 'VERSION', value: 'SYS 2.0', icon: Heart },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const xLeft = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-text pt-24 lg:pt-40 pb-40 overflow-hidden relative">

      {/* Dynamic Background Noise/Spotlight */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/5 rounded-full blur-[120px]" />
      </div>

      <main className="container mx-auto px-6 relative z-10">

        {/* HERO: The Kinetic Title */}
        <div className="py-8 md:py-12 mb-12 md:mb-20 text-center relative">
          <motion.div
            style={{ x: xLeft }}
            className="text-[12vw] font-display font-black leading-[0.8] tracking-tighter uppercase italic text-text/5 select-none absolute -top-4 md:-top-10 left-0 w-full whitespace-nowrap opacity-10 md:opacity-20 hidden md:block"
          >
            PRECISION ARTISTRY PRECISION ARTISTRY
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-3 px-4 py-2 bg-black/5 rounded-2xl border border-black/10">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono font-black text-text/40 tracking-[0.4em] uppercase">The Story Segment</span>
            </div>

            <h1 className="text-4xl md:text-[8rem] lg:text-[10rem] font-display font-black leading-[0.85] tracking-tighter uppercase italic">
              BORN IN <br />
              <span className="text-primary not-italic">CHANDIGARH</span>
            </h1>

            <p className="max-w-xl text-sm md:text-xl font-medium text-text/60 italic leading-relaxed mt-10 md:mt-12 bg-white/40 backdrop-blur-sm p-8 border-l-4 border-primary text-left md:text-center">
              What started as a pursuit of the perfect eggless sponge has evolved into the region's most precise artisanal bake unit. Women-owned, speed-obsessed.
            </p>
          </motion.div>
        </div>

        {/* SECTION 1: The Asymmetric Metric Grid */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
          >
            <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-mono font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">01 // THE ARCHITECTURE</span>
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic tracking-tighter">PURE MILK <br /> PURE COCOA.</h2>
              </div>
              <p className="text-text/40 text-xs md:text-base font-medium leading-relaxed italic border-l border-black/10 pl-6">
                We've rejected traditional shortcuts. No additives, no synthetic fillers. Just high-density dairy and imported chocolate drafts.
              </p>
              <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 no-scrollbar">
                <div className="px-5 py-3 bg-black text-white text-[8px] md:text-[9px] font-mono font-black uppercase tracking-widest rounded-2xl shrink-0">Bespoke Only</div>
                <div className="px-5 py-3 border border-black/10 text-text text-[8px] md:text-[9px] font-mono font-black uppercase tracking-widest rounded-2xl shrink-0">Verified 100%</div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -10 }}
                  className="aspect-square bg-[#FBFBFB] border border-black/10 rounded-4xl md:rounded-4xl p-6 md:p-10 flex flex-col justify-between group overflow-hidden relative shadow-sm"
                >
                  <div className="absolute -right-4 -top-4 text-primary opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <stat.icon size={100} />
                  </div>
                  <stat.icon className="w-5 md:w-6 h-5 md:h-6 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="text-2xl md:text-5xl font-display font-black text-text leading-none italic uppercase mb-2">{stat.value}</div>
                    <div className="text-[7px] md:text-[9px] font-mono font-black text-text/30 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: The Mission Console (Full Width Split) */}
        <section className="mb-24 md:mb-32 py-12 md:py-24 bg-black rounded-[2.5rem] md:rounded-[4rem] text-white overflow-hidden relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 w-full h-full bg-primary/20 blur-[150px] opacity-20"
          />
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 px-6 md:px-24 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 md:gap-8"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                <Heart className="w-7 md:w-8 h-7 md:h-8" />
              </div>
              <h2 className="text-4xl md:text-8xl font-display font-black leading-[0.85] italic tracking-tighter uppercase">
                Equality <br /> <span className="text-primary not-italic">Excelled.</span>
              </h2>
              <p className="text-white/40 text-sm md:text-xl font-medium leading-relaxed italic border-l-2 border-white/5 pl-4 md:pl-8">
                Hand-crafted in a woman-owned kitchen, serving the next generation of PU Campus scholars and sector elite with pure intent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-4 md:gap-6"
            >
              <div className="p-6 md:p-10 bg-white/5 rounded-4xl border border-white/10 backdrop-blur-sm">
                <span className="text-primary text-[8px] md:text-xs font-mono font-black uppercase tracking-widest block mb-4">Metric Segment 04</span>
                <div className="text-xl md:text-3xl font-display font-black uppercase italic mb-2">15-MIN PIPELINE</div>
                <p className="text-white/30 text-[10px] md:text-sm italic font-medium leading-relaxed">Dedicated logistics network serving Chandigarh Sectors 1-20 in high-performance dispatch units.</p>
              </div>
              <div className="p-6 md:p-10 bg-white/5 rounded-4xl border border-white/10 backdrop-blur-sm">
                <span className="text-primary text-[8px] md:text-xs font-mono font-black uppercase tracking-widest block mb-4">Metric Segment 05</span>
                <div className="text-xl md:text-3xl font-display font-black uppercase italic mb-2">VERIFIED EGGLESS</div>
                <p className="text-white/30 text-[10px] md:text-sm italic font-medium leading-relaxed">Shattering myths of traditional baking. Our units achieve elite moisture-to-crumb ratios without trade-offs.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: The Founders / Archive Link */}
        <section className="text-center pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-6 md:gap-10 mb-16 md:mb-20"
          >
            <div className="h-px w-12 md:w-20 bg-black/5" />
            <div className="flex items-center gap-2 text-text/20 font-mono font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em]">Unit established 2024</div>
            <div className="h-px w-12 md:w-20 bg-black/5" />
          </motion.div>

          <h3 className="text-3xl md:text-[6vw] font-display font-black text-text uppercase italic leading-[0.9] tracking-tighter mb-12 md:mb-16">
            CURATED BY <br />
            <span className="text-primary not-italic">THOSE WHO DARE.</span>
          </h3>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/menu'}
            className="px-8 md:px-16 py-5 md:py-8 bg-black text-white rounded-3xl md:rounded-4xl font-display font-black text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] flex items-center justify-center gap-4 md:gap-8 mx-auto shadow-2xl w-full sm:w-auto"
          >
            ACCESS ALL ARCHIVES
            <ArrowRight size={18} />
          </motion.button>
        </section>

      </main>
    </div>
  );
}
