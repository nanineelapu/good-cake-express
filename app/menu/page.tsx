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
      className={`group flex flex-col items-start gap-1 py-[4vw] lg:py-6 lg:border-b border-black/[0.03] w-full text-left relative overflow-hidden px-[2vw] lg:px-8 transition-all duration-500 ${isActive ? 'bg-black/5 rounded-2xl lg:rounded-none' : ''}`}
    >
      <div className="flex items-center gap-[1.5vw] lg:gap-4">
        <span className={`text-[6px] lg:text-[10px] font-mono font-black transition-all duration-500 ${isActive ? 'text-primary scale-110' : 'text-text/10 group-hover:text-text/30'}`}>
          0{sub}
        </span>
        <span className={`text-[2.5vw] lg:text-3xl font-display font-black uppercase tracking-tighter transition-all duration-700 whitespace-nowrap ${isActive ? 'text-text translate-x-[0.5vw] lg:translate-x-3' : 'text-text/20 lg:text-text/10 group-hover:text-text/30 group-hover:translate-x-2'
          }`}>
          {label}
        </span>
      </div>
      {isActive && (
        <motion.div
          layoutId="sideIndicator"
          className="absolute right-0 lg:right-0 top-0 bottom-0 w-[0.5vw] lg:w-1.5 bg-primary shadow-[0_0_15px_rgba(192,24,42,0.6)]"
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
      className="group relative flex flex-col gap-[3vw] md:gap-4"
    >
      {/* Stage Area with VW Scaling */}
      <div className="relative aspect-[4/5] rounded-[6vw] md:rounded-[2.5rem] overflow-hidden bg-[#F0F0F0] border border-black/[0.03] group-hover:border-primary/20 transition-all duration-700 shadow-sm hover:shadow-2xl transform-gpu">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[0.1] group-hover:grayscale-0"
        />
        <div className="absolute top-[4vw] right-[4vw] md:top-6 md:right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
          <button className="w-[8vw] h-[8vw] md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white transition-all">
            <ShoppingBag className="w-[4vw] h-[4vw] md:w-[18px] md:h-[18px]" />
          </button>
        </div>

        {/* Unit Identity Tag */}
        <div className="absolute bottom-[4vw] left-[4vw] md:bottom-6 md:left-6 flex items-center gap-2">
          <div className="px-[2vw] md:px-3 py-[0.5vw] md:py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5 md:gap-2 shadow-2xl">
            <div className="w-[1vw] md:w-1.5 h-[1vw] md:h-1.5 rounded-full bg-primary" />
            <span className="text-[7px] md:text-[10px] font-mono font-black text-white italic uppercase tracking-widest">{item.tags?.[0] || 'Original'}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[1vw] px-1 md:px-2">
        <h3 className="text-[4vw] md:text-xl font-display font-black uppercase italic tracking-tighter text-text leading-tight group-hover:text-primary transition-colors truncate">{item.name}</h3>
        <div className="flex justify-between items-center text-[7px] md:text-[10px] font-mono font-black uppercase tracking-widest text-text/30">
          <span className="truncate">UNIT_{Math.floor(Math.random() * 90) + 10}</span>
          <span className="text-text font-black tracking-tight text-[3.5vw] md:text-sm whitespace-nowrap">₹{item.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Cakes");
  const containerRef = useRef(null);

  const categories = [
    { id: 'Cakes', label: 'Cakes', sub: 'Master' },
    { id: 'Snacks', label: 'Snacks', sub: 'Savory' },
    { id: 'Beverages', label: 'Brew', sub: 'Fine' },
    { id: 'Ice Cream', label: 'Cream', sub: 'Lustre' }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-text relative w-full overflow-x-hidden">

      {/* ARCHITECTURAL SIDEBAR: LOCKED Z-INDEX CLUSTER (VW Optimized) */}
      <aside className="w-[22vw] lg:w-1/4 fixed top-0 left-0 h-[100dvh] bg-white border-r border-black/5 z-40 flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.02)] pt-[82px]">
        {/* Subtle Fine Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-[0.03] pointer-events-none" />

        <div className="flex flex-col h-full relative z-10 w-full lg:pt-20">
          {/* Desktop Identity Area */}
          <div className="hidden lg:flex flex-col gap-4 px-12 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(192,24,42,1)]" />
              <span className="text-[9px] font-mono font-black text-primary uppercase tracking-[0.6em]">UNIT_SYS://09</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-black text-text leading-[0.8] tracking-tighter uppercase italic">
              Menu <br /> <span className="text-primary not-italic">024</span>
            </h1>
          </div>

          {/* Mobile Identity Area with VW Scaling */}
          <div className="lg:hidden px-[2vw] pt-[2vw] pb-[2vw] border-b border-black/5 bg-white">
            <div className="flex items-center gap-[1vw] mb-[1vw]">
              <div className="w-[1vw] h-[1vw] rounded-full bg-primary" />
              <span className="text-[7px] font-mono font-black text-primary uppercase tracking-widest leading-none">SYS:09</span>
            </div>
            <h1 className="text-[5vw] font-display font-black text-text leading-[0.7] tracking-tight uppercase italic">
              MENU<br /><span className="text-primary not-italic truncate block">024</span>
            </h1>
          </div>

          {/* Locked Category List (Internally Scrollable) */}
          <div className="flex flex-col w-full overflow-y-auto no-scrollbar py-[2vw] lg:py-0 grow">
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

          <div className="hidden lg:flex mt-auto px-12 pb-16 items-center justify-between opacity-30">
            <span className="text-[9px] font-mono font-black text-text uppercase tracking-widest">Chandigarh Unit</span>
          </div>
        </div>
      </aside>

      {/* SCROLLABLE STAGE AREA: VW-Based Gutter Offset */}
      <main className="ml-[22vw] lg:ml-1/4 relative px-[4vw] md:px-12 lg:px-20 pb-20 pt-[110px] lg:pt-32 min-h-screen grow z-10 bg-white">
        {/* Dynamic Background Spotlight */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Top Header with VW Spacing */}
        <div className="flex flex-col gap-[2vw] mb-[8vw] md:mb-16">
          <div className="flex items-center gap-[3vw] mb-[1vw]">
            <div className="h-px w-[6vw] md:w-12 bg-primary" />
            <span className="text-[8px] md:text-[10px] font-mono font-black text-primary uppercase tracking-[0.4em]">Choice Selection</span>
          </div>
          <h2 className="text-[8vw] md:text-8xl font-display font-black text-text leading-[0.8] tracking-tighter uppercase italic">
            {activeCategory} <br /> <span className="text-primary not-italic">SQUAD.</span>
          </h2>
        </div>

        {/* Optimized Responsive Grid with VW scaling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[4vw] md:gap-x-12 gap-y-[10vw] md:gap-y-24">
          {filteredItems.map((item, idx) => (
            <EliteProductCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </main>

      {/* FOOTER BLOCKER FIX */}
      <style jsx global>{`
        footer {
          position: relative !important;
          z-index: 50 !important;
        }
      `}</style>
    </div>
  );
}
