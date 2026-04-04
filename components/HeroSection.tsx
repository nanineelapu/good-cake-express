"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MessageCircle, ArrowRight, Star, ChefHat } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-white"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-on-a-cake-in-slow-motion-12739-large.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Intro Loading Sequence */}
      {!isLoaded && (
        <div className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center gap-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-px bg-primary"
          />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary animate-pulse">Baking Perfection...</span>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y }}
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2 rounded-2xl backdrop-blur-md group"
          >
            <ChefHat size={16} className="text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-white text-[10px] font-mono font-black uppercase tracking-[0.4em]">Handcrafted Artisanal Bakes</span>
          </motion.div>

          {/* Headline - Decreased Size & Centered */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-none tracking-tighter">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                Where Every
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-primary italic"
              >
                Cake Tells a Story
              </motion.span>
            </h1>
          </div>

          {/* Sub Content - Decreased Size & Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed font-medium"
          >
            Custom made. Freshly baked. Delighting Chandigarh with 100% eggless creations delivered in <span className="text-primary font-black border-b-2 border-primary/30 pb-0.5">15 minutes</span>.
          </motion.p>

          {/* Actions - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-4"
          >
            <Link href="https://wa.me/919041829041?text=Hi! I want to order a cake" target="_blank" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-4 shadow-[0_20px_40px_-5px_rgba(192,24,42,0.3)] group overflow-hidden relative transform-gpu"
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                Order on WhatsApp
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/menu" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black border-2 border-white/20 hover:border-white/40 text-white transition-all flex items-center justify-center gap-4 backdrop-blur-sm"
              >
                Explore Menu
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Ratings - Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center gap-4 pt-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-primary/20 bg-white/10 overflow-hidden relative">
                  <Image 
                    src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                    alt="avatar" 
                    fill 
                    sizes="36px"
                    className="object-cover" 
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-primary mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                <span className="ml-2 text-white font-black text-lg">5.0</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Trusted by 5000+ Happy Hearts</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-linear-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
