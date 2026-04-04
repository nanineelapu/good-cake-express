"use client";

import { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag, Search, Menu as MenuIcon, Pizza, Coffee, IceCream, Star } from 'lucide-react';
import { menuItems } from '@/lib/menuData';

// Elite UI Component: Side Category Nav
function SideCategoryItem({ label, isActive, onClick, sub }: any) {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-start gap-1 py-4 lg:py-6 lg:border-b border-white/5 w-full text-left relative overflow-hidden px-4 lg:px-8 transition-all duration-500 ${isActive ? 'bg-black/5 rounded-2xl lg:rounded-none' : ''}`}
    >
      <div className="flex items-center gap-2 lg:gap-4">
        <span className={`text-[7px] lg:text-[10px] font-mono font-black transition-all duration-500 ${isActive ? 'text-primary scale-110' : 'text-text/10 group-hover:text-text/30'}`}>
          0{sub}
        </span>
        <span className={`text-[11px] md:text-sm lg:text-3xl font-display font-black uppercase tracking-tighter transition-all duration-700 whitespace-nowrap ${isActive ? 'text-text translate-x-1 lg:translate-x-3' : 'text-text/20 lg:text-text/10 group-hover:text-text/30 group-hover:translate-x-2'
          }`}>
          {label}
        </span>
      </div>
      {isActive && (
        <motion.div
          layoutId="sideIndicator"
          className="absolute right-0 lg:right-0 top-0 bottom-0 w-1 lg:w-1.5 bg-primary shadow-[0_0_20px_rgba(192,24,42,0.8)]"
        />
      )}
    </button>
  );
}

function EliteProductCard({ item, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-3 md:gap-4"
    >
      {/* Precision Stage */}
      <div className="relative aspect-4/5 rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[#F0F0F0] border border-black/[0.03] group-hover:border-primary/20 transition-all duration-700 shadow-sm hover:shadow-2xl transform-gpu">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[0.1] group-hover:grayscale-0"
        />
        <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white transition-all">
            <ShoppingBag size={14} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>

        {/* Unit Identity Tag */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2">
          <div className="px-2 md:px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5 md:gap-2 shadow-2xl">
            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary" />
            <span className="text-[8px] md:text-[10px] font-mono font-black text-white italic uppercase tracking-widest">{item.tags?.[0] || 'Original'}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-1 md:px-2">
        <h3 className="text-sm md:text-xl font-display font-black uppercase italic tracking-tighter text-text leading-tight group-hover:text-primary transition-colors truncate">{item.name}</h3>
        <div className="flex justify-between items-center text-[8px] md:text-[10px] font-mono font-black uppercase tracking-widest text-text/30">
          <span>UNIT_{Math.floor(Math.random() * 90) + 10}</span>
          <span className="text-text font-black tracking-tight text-xs md:text-sm whitespace-nowrap">₹{item.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Cakes");
  const containerRef = useRef(null);

  const categories = [
    { id: 'Cakes', label: 'Cakes', sub: 'Masterpiece', icon: Star },
    { id: 'Snacks', label: 'Snacks', sub: 'Savory Art', icon: Pizza },
    { id: 'Beverages', label: 'Brew', sub: 'Fine Liquid', icon: Coffee },
    { id: 'Ice Cream', label: 'Cream', sub: 'Lustre', icon: IceCream }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-text overflow-hidden relative">

      {/* Complex Layout Structure: SIDE-BY-SIDE ON ALL BREAKPOINTS */}
      <div className="flex flex-row min-h-screen">

        {/* LEFT FIXATION: The Vertical Navigation (FIXED/STICKY) */}
        <aside className="w-[30%] lg:w-1/4 h-screen sticky top-[82px] lg:top-0 border-r border-black/5 bg-white z-40 overflow-hidden transform-gpu flex flex-col">
          {/* Subtle Fine Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-[0.03] pointer-events-none" />

          <div className="flex flex-col h-full relative z-10 w-full lg:pt-32">
            {/* Desktop Only Identity Area */}
            <div className="hidden lg:flex flex-col gap-4 px-12 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(192,24,42,1)]" />
                <span className="text-[9px] font-mono font-black text-primary uppercase tracking-[0.6em]">UNIT_SYS://09</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-black text-text leading-[0.8] tracking-tighter uppercase italic">
                Menu <br /> <span className="text-primary not-italic">024</span>
              </h1>
            </div>

            {/* Mobile Title - Scaled for Narrow Sidebar */}
            <div className="lg:hidden p-4 pb-2 border-b border-black/5 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <span className="text-[6px] font-mono font-black text-primary uppercase tracking-widest">SYS:09</span>
              </div>
              <h1 className="text-xl font-display font-black text-text leading-[0.8] tracking-tighter uppercase italic">
                MENU<br /><span className="text-primary not-italic">024</span>
              </h1>
            </div>

            {/* Vertically Aligned Categories - FIXED AS YOU SCROLL */}
            <div className="flex flex-col w-full overflow-y-auto no-scrollbar py-4 lg:py-0 grow">
              {categories.map((cat, idx) => (
                <SideCategoryItem
                  key={cat.id}
                  sub={idx + 1}
                  label={cat.label}
                  isActive={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                />
              ))}
            </div>

            {/* Desktop Bottom Info Pod */}
            <div className="hidden lg:flex mt-auto px-12 pb-16 items-center justify-between">
              <div className="flex flex-col gap-1 text-[9px] font-mono font-black text-text/30 uppercase tracking-widest">
                <span>Chandigarh Unit</span>
                <span>Active Dispatch</span>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT STAGE: Grid of Selection (SCROLLABLE RIGHT SIDE) */}
        <main className="w-[70%] lg:w-3/4 relative px-4 md:px-12 lg:px-20 pb-20 pt-[90px] lg:pt-32 min-h-screen">

          {/* Dynamic Background Spotlight */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

          {/* Header Area */}
          <div className="flex flex-col gap-2 mb-8 md:mb-16">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-6 md:w-12 bg-primary" />
              <span className="text-[8px] md:text-[10px] font-mono font-black text-primary uppercase tracking-[0.4em]">The Choice</span>
            </div>
            <h2 className="text-3xl md:text-8xl font-display font-black text-text leading-[0.8] tracking-tighter uppercase italic">
              {activeCategory} <br /> <span className="text-primary not-italic">SQUAD.</span>
            </h2>
          </div>

          {/* Grid optimized for 2 columns on mobile side-scrolling column */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-10 md:gap-y-24">
            {filteredItems.map((item, idx) => (
              <EliteProductCard key={item.id} item={item} index={idx} />
            ))}
          </div>

        </main>
      </div>

    </div>
  );
}
