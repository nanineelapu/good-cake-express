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
    <div ref={containerRef} className="min-h-screen bg-white text-text overflow-x-hidden pt-10">

      {/* Dynamic Background Noise/Spotlight */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/5 rounded-full blur-[120px]" />
      </div>

      <main className="container mx-auto px-6 relative z-10">

        {/* HERO: The Kinetic Title */}
        <div className="py-12 mb-20 text-center relative">
          <motion.div
            style={{ x: xLeft }}
            className="text-[12vw] font-display font-black leading-[0.8] tracking-tighter uppercase italic text-text/5 select-none absolute -top-10 left-0 w-full whitespace-nowrap opacity-20"
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

            <h1 className="text-7xl md:text-[10rem] font-display font-black leading-[0.85] tracking-tighter uppercase italic">
              BORN IN <br />
              <span className="text-primary not-italic">CHANDIGARH</span>
            </h1>

            <p className="max-w-xl text-lg md:text-xl font-medium text-text/60 italic leading-relaxed mt-12 bg-white/40 backdrop-blur-sm p-8 border-l-4 border-primary">
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
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-mono font-black text-xs tracking-widest">01 // THE ARCHITECTURE</span>
                <h2 className="text-5xl font-display font-black uppercase italic tracking-tighter">PURE MILK <br /> PURE COCOA.</h2>
              </div>
              <p className="text-text/40 font-medium leading-relaxed italic border-l border-black/10 pl-6">
                We've rejected traditional shortcuts. No additives, no synthetic fillers. Just high-density dairy and imported chocolate drafts.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-4 bg-black text-white text-[10px] font-mono font-black uppercase tracking-widest rounded-2xl">Bespoke Only</div>
                <div className="px-6 py-4 border border-black/10 text-text text-[10px] font-mono font-black uppercase tracking-widest rounded-2xl">Verified 100%</div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -10 }}
                  className="aspect-square bg-[#FBFBFB] border border-black/3 rounded-4xl p-10 flex flex-col justify-between group overflow-hidden relative shadow-sm"
                >
                  <div className="absolute -right-4 -top-4 text-primary opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <stat.icon size={120} />
                  </div>
                  <stat.icon size={24} className="text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <div className="text-4xl md:text-5xl font-display font-black text-text leading-none italic uppercase mb-2">{stat.value}</div>
                    <div className="text-[9px] font-mono font-black text-text/30 uppercase tracking-[0.3em]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: The Mission Console (Full Width Split) */}
        <section className="mb-32 py-24 bg-black rounded-[4rem] text-white overflow-hidden relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 w-full h-full bg-primary/20 blur-[150px] opacity-20"
          />
          <div className="grid lg:grid-cols-2 gap-20 px-12 md:px-24 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                <Heart size={32} />
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-black leading-[0.85] italic tracking-tighter uppercase">
                Equality <br /> <span className="text-primary not-italic">Excelled.</span>
              </h2>
              <p className="text-white/40 text-xl font-medium leading-relaxed italic border-l-2 border-white/5 pl-8">
                Hand-crafted in a woman-owned kitchen, serving the next generation of PU Campus scholars and sector elite with pure intent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                <span className="text-primary text-xs font-mono font-black uppercase tracking-widest block mb-4">Metric Segment 04</span>
                <div className="text-3xl font-display font-black uppercase italic mb-2">15-MIN PIPELINE</div>
                <p className="text-white/30 text-sm italic font-medium leading-relaxed">Dedicated logistics network serving Chandigarh Sectors 1-20 in high-performance dispatch units.</p>
              </div>
              <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                <span className="text-primary text-xs font-mono font-black uppercase tracking-widest block mb-4">Metric Segment 05</span>
                <div className="text-3xl font-display font-black uppercase italic mb-2">VERIFIED EGGLESS</div>
                <p className="text-white/30 text-sm italic font-medium leading-relaxed">Shattering myths of traditional baking. Our units achieve elite moisture-to-crumb ratios without trade-offs.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: The Founders / Archive Link */}
        <section className="text-center pb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-10 mb-20"
          >
            <div className="h-px w-20 bg-black/5" />
            <div className="flex items-center gap-2 text-text/20 font-mono font-black text-[10px] uppercase tracking-[0.5em]">Unit established 2024</div>
            <div className="h-px w-20 bg-black/5" />
          </motion.div>

          <h3 className="text-5xl md:text-[6vw] font-display font-black text-text uppercase italic leading-[0.9] tracking-tighter mb-16">
            CURATED BY <br />
            <span className="text-primary not-italic">THOSE WHO DARE.</span>
          </h3>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/menu'}
            className="px-16 py-8 bg-black text-white rounded-4xl font-display font-black text-xs uppercase tracking-[0.6em] flex items-center gap-8 mx-auto shadow-2xl"
          >
            ACCESS ALL ARCHIVES
            <ArrowRight size={20} />
          </motion.button>
        </section>

      </main>

      {/* Extreme Bottom Curation */}
      <footer className="container mx-auto px-6 pb-20 border-t border-black/5 pt-20 flex flex-col md:flex-row items-center justify-between gap-12 text-text/20">
        <div className="flex items-center gap-10">
          <span className="text-[10px] font-mono font-black uppercase tracking-[1em]">India_Pure</span>
          <span className="text-[10px] font-mono font-black uppercase tracking-[1em]">Proprietor_Elite</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono font-black uppercase tracking-widest group cursor-pointer hover:text-text transition-colors">
          <span>Explore Entire Archive</span>
          <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </footer>
    </div>
  );
}
