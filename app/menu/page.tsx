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
      className="group flex flex-col items-start gap-1 py-6 border-b border-white/5 w-full text-left relative overflow-hidden"
    >
      <div className="flex items-center gap-3">
        <span className={`text-[10px] font-mono font-black transition-colors ${isActive ? 'text-primary' : 'text-white/20'}`}>
          0{sub}
        </span>
        <span className={`text-2xl md:text-4xl font-display font-black uppercase tracking-tighter transition-all duration-700 ${
          isActive ? 'text-white translate-x-4' : 'text-white/20 group-hover:text-white/60 group-hover:translate-x-2'
        }`}>
          {label}
        </span>
      </div>
      {isActive && (
        <motion.div 
          layoutId="sideIndicator"
          className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
        />
      )}
    </button>
  );
}

function EliteProductCard({ item, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-6"
    >
      {/* Precision Stage */}
      <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5 group-hover:border-white/20 transition-colors duration-700">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-[3000ms] group-hover:scale-105 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
        />
        
        {/* Elite Corner Tags */}
        <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
          {item.tags?.map((tag: any) => (
            <span key={tag} className="px-3 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 text-[8px] font-mono font-black text-white uppercase tracking-[0.2em] rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Reveal */}
        <div className="absolute inset-0 z-20 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] backdrop-blur-sm bg-black/20">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(`https://wa.me/919041829041?text=Hi! I want to order ${item.name}`, '_blank')}
            className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl"
          >
            <ShoppingBag size={24} />
          </motion.button>
        </div>
      </div>

      {/* Info Tier */}
      <div className="flex flex-col gap-2 relative">
        <div className="flex justify-between items-start">
          <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tighter">
            {item.name}
          </h3>
          <span className="text-[11px] font-mono font-black text-primary uppercase bg-primary/5 px-2 py-1 rounded">
            {item.price}
          </span>
        </div>
        <p className="text-white/40 text-xs font-medium leading-relaxed line-clamp-2 max-w-[90%] italic">
          {item.description || "A masterclass in artisanal eggless patisserie. Curated for the finest palates."}
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
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white overflow-hidden pb-40">
      
      {/* Complex Layout Structure */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-40 container mx-auto px-6 gap-20">
        
        {/* LEFT FIXATION: Architectural Sidebar Navigation */}
        <aside className="lg:w-1/3 flex flex-col gap-12 lg:sticky lg:top-40 lg:h-[calc(100vh-160px)] z-10">
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.5em] mb-2 px-1">_Inventory_System</span>
            <h1 className="text-7xl md:text-9xl font-display font-black text-white leading-[0.8] tracking-tighter uppercase italic">
              Menu <br /> <span className="text-primary not-italic">024</span>
            </h1>
            <p className="text-white/30 text-sm font-medium max-w-xs mt-6 leading-relaxed italic">
              Navigating through the artisanal layers of eggless perfection. Selected with precision.
            </p>
          </div>

          <div className="flex flex-col w-full mt-12">
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

          {/* Elite Utility Pill */}
          <div className="mt-auto flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono font-black text-white/20 uppercase tracking-widest">Chandigarh Boutique</span>
              <span className="text-[9px] font-mono font-black text-white/40 uppercase tracking-widest">Daily Slots Op: 10:00 - 22:00</span>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 cursor-pointer hover:border-primary hover:text-primary transition-all shadow-2xl"
            >
              <Search size={18} />
            </motion.div>
          </div>
        </aside>

        {/* RIGHT STAGE: Grid of Selection */}
        <main className="lg:w-2/3 relative">
          
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
                className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter"
              >
                {activeCategory}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-20 relative px-2">
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
          <div className="mt-40 relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] group-hover:bg-primary/10 transition-all duration-700 backdrop-blur-3xl -z-10" />
            <div className="p-10 md:p-20 flex flex-col gap-8 relative overflow-hidden border border-white/5 rounded-[3rem]">
              <div className="absolute top-10 right-10 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                 <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                 <span className="text-[9px] font-mono font-black text-white uppercase tracking-widest">Consult Available</span>
              </div>
              
              <h3 className="text-5xl md:text-7xl font-display font-black text-white leading-none uppercase italic">
                Bespoke <br /> 
                <span className="text-primary not-italic">Artistry</span>
              </h3>
              
              <p className="text-white/40 text-lg font-medium max-w-xl italic leading-relaxed">
                Unlock the full potential of your brand celebration. Direct access to our master patisserie for ultra-custom designs.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(`https://wa.me/919041829041?text=Hi! I want to inquire about a custom cake`, '_blank')}
                className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-3xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 shadow-2xl group transition-all"
              >
                Launch Consultation
                <MessageCircle size={18} />
              </motion.button>

              {/* Cinematic Image Peek */}
              <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rotate-12">
                 <Image 
                   src="https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&q=80&auto=format&fit=crop" 
                   alt="Boutique" 
                   fill 
                   className="object-cover rounded-[3rem]"
                 />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Extreme Bottom Curation */}
      <footer className="container mx-auto px-6 mt-60 border-t border-white/5 pt-20 flex flex-col md:flex-row items-center justify-between gap-12 text-white/10">
        <div className="flex items-center gap-10">
          <span className="text-[10px] font-mono font-black uppercase tracking-[1em]">Est.2024</span>
          <span className="text-[10px] font-mono font-black uppercase tracking-[1em]">India_Pure</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono font-black uppercase tracking-widest group cursor-pointer hover:text-white transition-colors">
          <span>Explore Entire Archive</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </footer>
    </div>
  );
}
