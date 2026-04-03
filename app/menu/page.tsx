'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingBag, ChevronRight, MessageCircle } from 'lucide-react';
import MenuTabs from '@/components/MenuTabs';
import CakeCard from '@/components/CakeCard';
import { menuItems } from '@/lib/menuData';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('Cakes');
  const categories = ['Cakes', 'Snacks', 'Beverages', 'Ice Cream'];
  
  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px] -z-10" />
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent uppercase text-[10px] tracking-[0.4em] font-bold mb-4 block"
        >
          Delicious Selection
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-display font-bold text-cream mb-6 tracking-tighter"
        >
          Our <span className="text-primary italic">Menu</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-text/60 max-w-xl mx-auto font-medium text-lg"
        >
          Everything is 100% Eggless. Made fresh every day with premium ingredients.
        </motion.p>
      </section>

      {/* Sticky Tabs */}
      <section className="sticky top-[80px] z-40 bg-bg/80 backdrop-blur-xl py-6 border-y border-white/5 shadow-2xl">
        <div className="container mx-auto px-6">
          <MenuTabs 
            categories={categories} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </div>
      </section>

      {/* Menu Grid */}
      <section className="container mx-auto px-6 pt-20">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <CakeCard key={item.id} item={item} />
          ))}
        </motion.div>
      </section>

      {/* Custom Cake CTA */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-surface rounded-[3rem] p-8 md:p-16 border border-white/5 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group shadow-2xl">
          <div className="relative w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-700">
            <Image 
              src="https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&q=80&auto=format&fit=crop" 
              alt="Custom Cake" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <span className="text-accent uppercase text-[10px] tracking-[0.4em] font-bold mb-4 block">Bespoke</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-cream mb-6">Want a Custom Cake?</h2>
            <p className="text-text/50 font-medium text-lg leading-relaxed mb-10 max-w-xl">
              Send us a reference image on WhatsApp and we'll make your dream cake happen. From bento to multi-tier celebrations.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/919041829041?text=Hi! I want to inquire about a custom cake`, '_blank')}
              className="bg-primary text-cream px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(192,24,42,0.3)] group mx-auto md:mx-0"
            >
              Consult on WhatsApp
              <MessageCircle size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
