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
          className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale-[0.2] group-hover:grayscale-0"
        />
        <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white transition-all">
            <ShoppingBag size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-2xl hover:bg-black hover:text-white transition-all">
            <Star size={18} />
          </button>
        </div>

        {/* Unit Identity Tag */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2">
          <div className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2 shadow-2xl">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-mono font-black text-white italic uppercase tracking-widest">{item.tags?.[0] || 'Original'}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 px-2">
        <h3 className="text-xl font-display font-black uppercase italic tracking-tighter text-text leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
        <div className="flex justify-between items-center text-[10px] font-mono font-black uppercase tracking-widest text-text/30">
          <span>{item.category} // UNIT_{Math.floor(Math.random() * 90) + 10}</span>
          <span className="text-text font-black tracking-tight text-sm">₹{item.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Cakes");
  const containerRef = useRef(null);

  const categories = [
    { id: 'Cakes', label: 'Cakes', sub: 'The Masterpiece', icon: Star },
    { id: 'Snacks', label: 'Snacks', sub: 'Savory Arts', icon: Pizza },
    { id: 'Beverages', label: 'Brew', sub: 'Liquid Velvet', icon: Coffee },
    { id: 'Ice Cream', label: 'Cream', sub: 'Frozen Lustre', icon: IceCream }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-text overflow-hidden relative">

      {/* Complex Layout Structure */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* LEFT FIXATION: Architectural Sidebar Navigation (FIXED ON DESKTOP) */}
        <aside className="lg:sticky lg:top-0 lg:w-1/4 lg:h-screen lg:z-50 bg-white flex flex-col gap-0 sticky top-[82px] z-40 border-b border-black/5 lg:border-r lg:border-black/5 transform-gpu will-change-transform pb-2 lg:pb-0">

          {/* Subtle Fine Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-[0.03] pointer-events-none" />

          <div className="flex flex-col h-full relative z-10 w-full">
            {/* Desktop Only Title */}
            <div className="hidden lg:flex flex-col gap-4 px-12 pt-32 mb-10">
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

            {/* Sticky Category Bar - Pinned below Navbar on Mobile */}
            <div className="flex flex-row lg:flex-col w-full overflow-x-auto lg:overflow-visible no-scrollbar gap-2 lg:gap-0 px-2 lg:px-0 py-2 lg:py-0 bg-white lg:bg-transparent">
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

            {/* Desktop Only Bottom Info Pod */}
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
        <main className="w-full lg:w-3/4 relative px-6 lg:px-20 pb-20 mt-12 lg:mt-0 lg:pt-32">

          {/* Dynamic Background Spotlight */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

          {/* Mobile Category Selection Header - Visible on scroll if needed */}
          <div className="flex flex-col gap-2 mb-10 md:mb-16 px-2 pt-8 lg:pt-0">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-8 md:w-12 bg-primary" />
              <span className="text-[9px] md:text-[10px] font-mono font-black text-primary uppercase tracking-[0.4em]">The Collection Selection</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-black text-text leading-[0.8] tracking-tighter uppercase italic">
              {activeCategory} <br /> <span className="text-primary not-italic">SQUAD.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-16 md:gap-y-24">
            {filteredItems.map((item, idx) => (
              <EliteProductCard key={item.id} item={item} index={idx} />
            ))}
          </div>

        </main>
      </div>

    </div>
  );
}
