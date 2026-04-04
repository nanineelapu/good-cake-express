"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag, Star, LayoutGrid, Pizza, Coffee, IceCream, MessageCircle, ArrowUpRight, Search, Menu as MenuIcon } from 'lucide-react';
import { menuItems } from '@/lib/menuData';

// Elite UI Component: Side Category Nav
function SideCategoryItem({ label, isActive, onClick, sub }: any) {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col lg:items-start items-center gap-1 py-3 lg:py-4 lg:border-b border-white/5 w-full text-left relative overflow-hidden px-4 lg:px-8 transition-all duration-500 ${isActive ? 'bg-black/5 lg:bg-transparent rounded-2xl lg:rounded-none' : ''}`}
    >
      <div className="flex items-center gap-3 lg:gap-4">
        <span className={`text-[8px] lg:text-[10px] font-mono font-black transition-all duration-500 ${isActive ? 'text-primary scale-110' : 'text-text/10 group-hover:text-text/30'}`}>
          0{sub}
        </span>
        <span className={`text-sm lg:text-3xl font-display font-black uppercase tracking-tighter transition-all duration-700 whitespace-nowrap ${isActive ? 'text-text lg:translate-x-3' : 'text-text/10 group-hover:text-text/30 group-hover:translate-x-2'
          }`}>
          {label}
        </span>
      </div>
      {isActive && (
        <motion.div
          layoutId="sideIndicator"
          className="absolute lg:right-0 lg:top-0 lg:bottom-0 bottom-0 left-4 right-4 h-0.5 lg:h-auto lg:w-1.5 bg-primary shadow-[0_0_20px_rgba(192,24,42,0.8)]"
        />
      )}
    </button>
  );
}

function EliteProductCard({ item, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-4"
    >
      {/* Precision Stage */}
      <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden bg-[#F0F0F0] border border-black/[0.03] group-hover:border-primary/20 transition-all duration-700 shadow-sm hover:shadow-2xl transform-gpu">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-[3000ms] group-hover:scale-105 group-hover:rotate-1 transform-gpu"
        />

        {/* Elite Corner Tags */}
        <div className="absolute top-6 left-6 z-10 flex flex-col gap-1.5">
          {item.tags?.slice(0, 2).map((tag: any) => (
            <span key={tag} className="px-2.5 py-1.5 bg-white/90 backdrop-blur-md border border-black/5 text-[8px] font-mono font-black text-text uppercase tracking-[0.2em] rounded-lg shadow-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Reveal */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-linear-to-t from-white via-white/80 to-transparent backdrop-blur-sm">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(`https://wa.me/919041829041?text=Hi! I want to order ${item.name}`, '_blank')}
            className="w-full h-14 bg-primary text-white rounded-2xl flex items-center justify-center gap-3 font-black text-[11px] uppercase tracking-widest shadow-xl"
          >
            Add to Selection
            <ShoppingBag size={16} />
          </motion.button>
        </div>
      </div>

      {/* Info Tier */}
      <div className="flex flex-col gap-1 px-2">
        <div className="flex justify-between items-center gap-2">
          <h3 className="text-base font-display font-black text-text uppercase tracking-tight leading-tight line-clamp-1 italic">
            {item.name}
          </h3>
          <span className="text-[11px] font-mono font-black text-primary uppercase">
            {item.price?.split(' ')[0]}
          </span>
        </div>
        <p className="text-text/30 text-[11px] font-medium leading-tight line-clamp-2 italic">
          {item.description || "Elite artisanal patisserie unit."}
        </p>
      </div>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Cakes');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotateHero = useTransform(springScroll, [0, 1], [0, 10]);

  const categories = [
    { id: 'Cakes', label: 'Cakes', sub: 'The Collection', icon: LayoutGrid },
    { id: 'Snacks', label: 'Snacks', sub: 'Savory Arts', icon: Pizza },
    { id: 'Beverages', label: 'Brew', sub: 'Liquid Velvet', icon: Coffee },
    { id: 'Ice Cream', label: 'Cream', sub: 'Frozen Lustre', icon: IceCream }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-text pt-24 lg:pt-40 pb-40 overflow-hidden relative">

      {/* Complex Layout Structure */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* LEFT FIXATION: Architectural Sidebar Navigation (FIXED ON DESKTOP) */}
        <aside className="lg:sticky lg:top-0 lg:w-1/4 lg:h-screen lg:z-50 bg-white/80 backdrop-blur-md lg:bg-white flex flex-col gap-8 sticky top-[68px] z-30 py-4 lg:py-0 px-4 border-b border-black/5 lg:border-r lg:border-black/5 overflow-hidden transform-gpu will-change-transform">

          {/* Subtle Fine Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-[0.03] pointer-events-none" />

          <div className="flex flex-col h-full relative z-10">
            <div className="hidden lg:flex flex-col gap-4 px-12 pt-32">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(192,24,42,1)]" />
                <span className="text-[9px] font-mono font-black text-primary uppercase tracking-[0.6em]">UNIT_SYS://09</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-black text-text leading-[0.8] tracking-tighter uppercase italic">
                Menu <br /> <span className="text-primary not-italic">024</span>
              </h1>
              <p className="text-text/30 text-[10px] font-mono font-bold max-w-[180px] mt-8 leading-relaxed italic border-l border-primary/40 pl-4 uppercase">
                Bespoke Selection <br /> for Artisanal Elite.
              </p>
            </div>

            <div className="flex flex-row lg:flex-col w-full overflow-x-auto lg:overflow-visible no-scrollbar gap-2 lg:gap-0 mt-4 lg:mt-10 px-2 lg:px-0">
              {categories.map((cat, idx) => (
                <div key={cat.id} className="min-w-fit lg:w-full">
                  <SideCategoryItem
                    sub={idx + 1}
                    label={cat.label}
                    isActive={activeCategory === cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Info Pod */}
            <div className="hidden lg:flex mt-auto px-12 pb-16 items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-mono font-black text-text/10 uppercase tracking-widest">Chandigarh Unit</span>
                <span className="text-[9px] font-mono font-black text-text/30 uppercase tracking-widest">Dispatch Active</span>
              </div>
              <motion.div
                whileHover={{ rotate: 180 }}
                className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-text/10 hover:text-primary transition-all"
              >
                <Search size={16} />
              </motion.div>
            </div>
          </div>
        </aside>

        {/* RIGHT STAGE: Grid of Selection (SCROLLABLE) */}
        <main className="w-full lg:w-3/4 relative pt-12 lg:pt-32 px-6 lg:px-20 pb-20">

          {/* Dynamic Background Spotlight */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

          {/* Category Showcase Header */}
          <div className="flex flex-col gap-2 mb-16 px-2">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-primary"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em]">
                {categories.find(c => c.id === activeCategory)?.sub} Selection
              </span>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-4xl md:text-6xl font-display font-black text-text uppercase tracking-tighter"
              >
                {activeCategory}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 relative px-2">
            {filteredItems.map((item, idx) => (
              <EliteProductCard key={item.id} item={item} index={idx} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-60 flex flex-col items-center justify-center gap-6 border border-white/5 rounded-[4rem] bg-white/2">
              <MenuIcon size={40} className="text-white/10 animate-pulse" />
              <p className="text-[10px] font-mono font-black text-white/20 uppercase tracking-[0.4em]">Drafting more selections...</p>
            </div>
          )}

          {/* Custom Creation Concept Pod */}
          <div className="mt-16 md:mt-40 relative group overflow-hidden rounded-[3rem] md:rounded-[3.5rem] bg-[#0A0A0A]">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-10 pointer-events-none" />
            <div className="p-8 md:p-24 flex flex-col gap-6 md:gap-10 relative z-10">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl w-fit">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(192,24,42,1)]" />
                <span className="text-[10px] font-mono font-black text-white/50 uppercase tracking-widest">Consult Service Actv</span>
              </div>

              <h3 className="text-4xl md:text-8xl font-display font-black text-white leading-none uppercase italic tracking-tighter">
                BESPOKE <br />
                <span className="text-primary not-italic">ARTISTRY</span>
              </h3>

              <p className="text-white/40 text-sm md:text-xl font-medium max-w-2xl italic leading-relaxed border-l-2 border-white/5 pl-4 md:pl-8">
                Unlock the full potential of your celebration with ultra-customized artisanal units. Direct pipeline to our master patisserie.
              </p>

              <motion.button
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(`https://wa.me/919041829041?text=Hi! I want to inquire about a custom cake`, '_blank')}
                className="w-full sm:w-auto bg-primary text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.4em] flex items-center justify-center gap-4 md:gap-6 shadow-2xl transition-all"
              >
                REQUEST DESIGN DRAFT
                <ArrowUpRight size={18} />
              </motion.button>
            </div>
          </div>
        </main>
      </div>


    </div>
  );
}
