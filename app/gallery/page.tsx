"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ArrowRight, Instagram, Search, Info, ShieldAlert } from 'lucide-react';

const categories = ["All", "Specialty", "Bento", "Snacks", "Wedding"];

const galleryItems = [
  { id: 1, title: "Velvet Crimson Draft", category: "Specialty", colSpan: "lg:col-span-4", rowSpan: "lg:row-span-2", url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, title: "Noir Chocolate Arch", category: "Bento", colSpan: "lg:col-span-3", rowSpan: "lg:row-span-1", url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Ivory Silk Custom", category: "Wedding", colSpan: "lg:col-span-5", rowSpan: "lg:row-span-2", url: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "PU Campus Savories", category: "Snacks", colSpan: "lg:col-span-3", rowSpan: "lg:row-span-2", url: "https://images.unsplash.com/photo-1555507036-3103b140926a?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, title: "Minimalist Matcha", category: "Bento", colSpan: "lg:col-span-2", rowSpan: "lg:row-span-1", url: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, title: "Dusted Gold Petite", category: "Specialty", colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2", url: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, title: "Sector 09 Signature", category: "Specialty", colSpan: "lg:col-span-5", rowSpan: "lg:row-span-1", url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, title: "Midnight Berry Box", category: "Bento", colSpan: "lg:col-span-3", rowSpan: "lg:row-span-2", url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1000&auto=format&fit=crop" },
  { id: 9, title: "Architectural Croissant", category: "Snacks", colSpan: "lg:col-span-4", rowSpan: "lg:row-span-1", url: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000&auto=format&fit=crop" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-text pb-40 overflow-hidden relative">

      {/* KINETIC WATERMARKS (Complicated Layering) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div style={{ y: y1 }} className="absolute -left-20 top-20 text-[25vw] font-display font-black text-black/2 leading-none uppercase italic vertical-text select-none">
          ARCHIVE
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute -right-20 bottom-20 text-[25vw] font-display font-black text-black/2 leading-none uppercase select-none">
          VERIFIED
        </motion.div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <main className="container mx-auto px-6 relative z-10 pt-32">

        {/* HEADER: Complex Split Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-32 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-20 bg-primary" />
              <span className="text-[10px] font-mono font-black text-text/30 uppercase tracking-[0.5em]">The Visual Database // 2.0.4</span>
            </div>
            <h1 className="text-7xl md:text-[10vw] font-display font-black leading-[0.8] tracking-tighter uppercase italic">
              GALLERY <br /> <span className="text-primary not-italic">REVEALS.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 pb-4">
            <div className="p-8 bg-[#FBFBFB] border border-black/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <p className="text-xs italic font-medium text-text/60 leading-relaxed relative z-10">
                Sifting through Chandigarh's most elite eggless commissions. Each record represents a verified technical dispatch.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-primary/10 animate-pulse" />
                    </div>
                  ))}
                </div>
                <span className="text-[9px] font-mono font-black text-text/20 uppercase tracking-widest">+1.2k Logs</span>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY SELECTOR (Kinetic Bubbles) */}
        <div className="flex flex-wrap items-center gap-3 mb-20 bg-white/50 backdrop-blur-md p-4 rounded-full border border-black/5 sticky top-32 z-50 w-fit max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-mono font-black uppercase tracking-widest transition-all ${activeCategory === cat
                ? 'bg-black text-white shadow-2xl scale-105'
                : 'text-text/30 hover:text-text'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* THE COMPLEX GRID: Staggered Bento-scattering */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 auto-rows-[180px]">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-[3rem] overflow-hidden group cursor-none ${item.colSpan} ${item.rowSpan}`}
                onClick={() => setSelectedImage(item)}
              >
                <motion.img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />

                {/* COMPLEX OVERLAY: Glitch + Data */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-between backdrop-blur-[4px]">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <span className="text-primary text-[8px] font-mono font-black tracking-[0.5em] uppercase">Security_Verified</span>
                      <div className="w-4 h-4 text-white/40"><ShieldAlert size={16} /></div>
                    </div>
                    <div className="px-4 py-2 border border-white/10 rounded-full font-mono text-[9px] text-white/50 uppercase tracking-widest">
                      S_ARCH {idx + 1}04
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase italic tracking-tighter leading-none">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/40 group/btn">
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest">Access Full Metrics</span>
                      <div className="w-10 h-px bg-primary group-hover/btn:w-20 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Scanning Red Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/40 shadow-[0_0_15px_rgba(192,24,42,0.5)] -translate-y-full group-hover:animate-scan" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* FOOTER: Complex Text Block */}
        <section className="mt-60 text-center relative">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="inline-flex items-center gap-6 mb-12">
            <Instagram size={20} className="text-primary" />
            <span className="text-[10px] font-mono font-black text-text/20 uppercase tracking-[1em]">India_Pure_Bake_Unit</span>
          </div>
          <h2 className="text-5xl md:text-[8vw] font-display font-black uppercase italic tracking-tighter leading-[0.85] mb-20">
            JOIN THE <br /> <span className="text-primary not-italic">ARCHIVE.</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-20 py-8 bg-black text-white rounded-full font-mono font-black text-[11px] uppercase tracking-[0.5em] shadow-3xl hover:bg-primary transition-all duration-500"
          >
            @TheGoodCakeExpress
          </motion.button>
        </section>

      </main>

      {/* LIGHTBOX: High-End Full Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black flex flex-col lg:flex-row p-6 md:p-12 overflow-y-auto lg:overflow-hidden"
          >
            {/* Large Asset Side */}
            <div className="w-full lg:w-2/3 h-[50vh] lg:h-full relative rounded-[3rem] overflow-hidden border border-white/10">
              <img src={selectedImage.url} className="w-full h-full object-cover" alt={selectedImage.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Meta Data Side */}
            <div className="w-full lg:w-1/3 h-full flex flex-col justify-between p-10 lg:pl-16">
              <div className="flex flex-col gap-12">
                <div className="flex justify-between items-center text-white/40">
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.5em]">Unit ID: {selectedImage.id}09XR</span>
                  <button onClick={() => setSelectedImage(null)} className="w-14 h-14 bg-white/10 border border-white/5 rounded-2xl flex items-center justify-center text-white hover:bg-primary transition-all rotate-45 hover:rotate-90">
                    <X size={24} className="-rotate-45 group-hover:-rotate-90 transition-all" />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-primary text-xs font-mono font-black uppercase tracking-[0.5em]">Metadata Segment 01</span>
                  <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase italic tracking-tighter leading-none">
                    {selectedImage.title}
                  </h2>
                </div>

                <p className="text-white/40 text-lg md:text-xl font-medium italic leading-relaxed border-l-2 border-primary/30 pl-8">
                  This unit was specifically engineered for high-moisture density sans egg-binding. Archived for visual audit and verified for immediate dispatch.
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-12 lg:mt-0">
                <div className="flex items-center gap-4 text-white/20">
                  <Info size={16} />
                  <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Authorized for re-production</span>
                </div>
                <button className="w-full py-8 bg-primary text-white rounded-full font-mono font-black text-xs uppercase tracking-[0.5em] shadow-2xl hover:scale-[1.02] transition-all">
                  Clone This Unit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
