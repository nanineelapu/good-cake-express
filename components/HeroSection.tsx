"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MessageCircle, ArrowRight, Star, ChefHat } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 150]);
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
          className="w-full h-full object-cover opacity-60 transform-gpu"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-on-a-cake-in-slow-motion-12739-large.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      </div>

      {/* Intro Loading Sequence */}
      {!isLoaded && (
        <div className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center gap-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-20 bg-transparent border border-primary/20 rounded-full flex items-center justify-center text-primary shadow-[0_0_40px_rgba(192,24,42,0.1)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
              <polyline points="7.5 19.79 7.5 14.6 3 12" />
              <polyline points="21 12 16.5 14.6 16.5 19.79" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </motion.div>
          
          <div className="flex flex-col items-center gap-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-px bg-primary shadow-[0_0_10px_rgba(192,24,42,0.5)]"
            />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary animate-pulse">Baking Perfection...</span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y, willChange: 'transform' }}
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`
              inline-flex items-center gap-3 border px-5 py-2 rounded-2xl group transition-all duration-300
              ${isMobile ? 'bg-black/30 border-white/10' : 'bg-white/10 border-white/20 backdrop-blur-md'}
            `}
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
            className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto"
          >
            <Link href="https://wa.me/919041829041?text=Hi! I want to order a cake" target="_blank" className="w-full sm:w-auto">
              <motion.button
                whileHover={isMobile ? {} : { scale: 1.02, y: -4 }}
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
                whileHover={isMobile ? {} : { scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full sm:w-auto px-10 py-5 rounded-2xl font-black border-2 border-white/20 transition-all flex items-center justify-center gap-4 text-white
                  ${isMobile ? 'bg-black/20' : 'hover:border-white/40 backdrop-blur-sm'}
                `}
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
