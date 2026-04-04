'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Zap } from 'lucide-react';
import { MenuItem } from '@/lib/menuData';

interface CakeCardProps {
  item: MenuItem;
}

export default function CakeCard({ item }: CakeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-black/[0.03] transition-all aspect-[4/5] flex flex-col shadow-sm hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)]"
    >
      {/* Product Image - Full height default */}
      <div className="absolute inset-0 z-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110 transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent opacity-80" />
      </div>

      {/* Static Info (Title & Tag) */}
      <div className="relative z-10 mt-auto p-8 pointer-events-none">
        <div className="flex flex-col gap-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {item.tags?.map((tag) => (
            <span key={tag} className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.4em] mb-1">
              {tag}
            </span>
          ))}
          <h3 className="text-2xl font-display font-black text-text leading-tight">
            {item.name}
          </h3>
        </div>
      </div>

      {/* Hover Information Layer */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-8 pt-20 bg-gradient-to-t from-white via-white/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
        <div className="flex flex-col gap-6">
          {/* Rating & Price */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5 text-primary">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-text font-mono font-black text-lg">
              {item.price}
            </span>
          </div>

          <p className="text-text/60 text-sm font-medium leading-relaxed italic">
            {item.description || "Freshly baked, 100% eggless delight from The Good Cake Express."}
          </p>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white grow py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl"
              onClick={() => window.open(`https://wa.me/919041829041?text=Hi! I want to order ${item.name}`, '_blank')}
            >
              Order Now
              <ShoppingBag size={14} />
            </motion.button>
            <div className="w-12 h-12 rounded-2xl border border-black/5 flex items-center justify-center text-text/10 hover:text-primary transition-colors cursor-pointer">
               <Zap size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Glass Corner Overlay (Default) */}
      <div className="absolute top-6 right-6 z-10 w-10 h-10 bg-primary/5 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/10 text-primary group-hover:opacity-0 transition-opacity shadow-sm">
        <Zap size={16} />
      </div>
    </motion.div>
  );
}

