"use client";

import Link from 'next/link';
import { Instagram, Phone, MapPin, Clock, ArrowUp, Send, Heart, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, Variants, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scrollXSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [sweetTip, setSweetTip] = useState("");
  const [particles, setParticles] = useState<{x: string, y: string, scale: number}[]>([]);

  const tips = [
    "Refrigerate your cake for 30 mins before slicing.",
    "Eggless cakes stay softest at room temp for 15 mins.",
    "Keep in airtight container for up to 3 days.",
    "Pair Red Velvet with an Earl Grey tea."
  ];

  useEffect(() => {
    setSweetTip(tips[Math.floor(Math.random() * tips.length)]);
    
    // Generate particles on client only to avoid hydration mismatch
    const newParticles = [...Array(6)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      scale: 0.5 + Math.random()
    }));
    setParticles(newParticles);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemFade: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  return (
    <footer 
      ref={containerRef}
      className="relative bg-[#0F0505] text-cream pt-16 pb-8 overflow-hidden"
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
        <motion.div 
          style={{ scaleX: scrollXSpring }}
          className="h-full bg-primary origin-left"
        />
      </div>

      <div className="absolute top-1 left-6 flex items-center gap-2">
        <span className="text-[9px] font-mono text-primary uppercase tracking-[0.3em]">System_Readiness</span>
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-1 rounded-full bg-primary" />
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none opacity-[0.02]">
          <span className="text-[12vw] font-display font-black text-white leading-none uppercase tracking-tighter">
            Pure Sweet
          </span>
        </div>

        {/* Small Floating SVG Particles - Render only on client */}
        {particles.map((p, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 24 24"
            className="absolute text-primary/10 w-8 h-8"
            initial={{ 
              x: p.x, 
              y: p.y,
              rotate: 0,
              scale: p.scale
            }}
            animate={{ 
              y: [0, -20, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <path fill="currentColor" d="M12,2L4.5,11H19.5L12,2M19.5,13H4.5V14H19.5V13M19.5,15H4.5V16H19.5V15M19.5,17H4.5V18H19.5V17M19.5,19H4.5V20H19.5V19Z" />
          </motion.svg>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Integrated CTA Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-12 border-b border-white/5"
        >
          <div className="flex items-center gap-6">
            <motion.div
               animate={{ y: [0, -5, 0] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="w-16 h-16 md:w-20 md:h-20 shrink-0"
             >
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_10px_20px_rgba(192,24,42,0.3)]">
                  <path d="M40 140C40 128.954 48.9543 120 60 120H140C151.046 120 160 128.954 160 140V160C160 165.523 155.523 170 150 170H50C44.4772 170 40 165.523 40 160V140Z" fill="#C0182A" />
                  <path d="M50 100C50 88.9543 58.9543 80 70 80H130C141.046 80 150 88.9543 150 100V120H50V100Z" fill="#FBF7F2" fillOpacity="0.9" />
                  <circle cx="100" cy="70" r="10" fill="#C0182A" />
                  <rect x="50" y="120" width="100" height="3" fill="#D4A853" />
                </svg>
             </motion.div>
             <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-display font-bold leading-tight">
                  Experience <span className="text-primary italic">Cake Perfection</span>
                </h2>
                <p className="text-white/40 text-sm mt-1">Handcrafted with 100% pure passion and ingredients.</p>
             </div>
          </div>
          <Link 
            href="/order"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium text-sm transition-all transform hover:scale-105 shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            Dispatch Now <Send size={14} />
          </Link>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand & Socials */}
          <motion.div variants={itemFade} className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-display font-bold text-white block leading-none">The Good Cake</span>
                  <span className="text-primary font-accent text-sm italic">Express</span>
                </div>
              </div>
            </Link>
            
            <p className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-medium leading-relaxed">
              "Cake ho to acha ho varna na hi ho"
              <span className="block mt-1 font-accent normal-case text-lg text-accent tracking-normal">— Our Promise</span>
            </p>

            <div className="flex gap-3">
              {[Instagram].map((Icon, i) => (
                <Link key={i} href="https://instagram.com/thegoodcakeexpress" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemFade}>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-primary"></span> Explore
            </h4>
            <ul className="space-y-3">
              {['Menu Selection', 'Our Story', 'Sweet Gallery', 'Reviews'].map((item, i) => (
                <li key={i}>
                  <Link href={`/${item.toLowerCase().split(' ')[0]}`} className="text-white/40 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all"></span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemFade}>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-primary"></span> Find Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-white/40 hover:text-white/80 transition-colors cursor-default">
                <MapPin size={16} className="text-primary shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">Shop 17, PU Market, Sector 14, Chandigarh</span>
              </div>
              <div className="flex items-center gap-4 text-white/40 hover:text-white/80 transition-colors cursor-default">
                <Phone size={16} className="text-primary shrink-0" />
                <span className="text-xs font-bold tracking-wider">+91 9041-82-9041</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter / Tip */}
          <motion.div variants={itemFade} className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.3em]">Join the Journey</h4>
            <form className="relative">
              <input type="email" placeholder="Your email" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-xs focus:outline-none focus:border-primary transition-colors" />
              <button className="absolute right-1 top-1 bottom-1 w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary/90 transition-all active:scale-90 shadow-lg shadow-primary/20">
                <ArrowUp size={14} />
              </button>
            </form>
            <div className="flex items-start gap-3 bg-white/2 p-4 rounded-2xl border border-white/5">
              <Sparkles size={14} className="text-accent shrink-0 mt-0.5" />
              <div>
                <span className="block text-[9px] font-bold text-accent uppercase tracking-widest mb-1">Chef's Tip</span>
                <p className="text-white/30 text-[10px] leading-relaxed italic">{sweetTip}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.25em] font-medium text-white/20">
            © 2025 THE GOOD CAKE EXPRESS. HANDCRAFTED WITH <Heart size={8} className="inline text-primary fill-primary animate-pulse" />
          </p>
          <div className="flex gap-6 text-[9px] uppercase tracking-[0.3em] font-bold text-white/10">
            <span className="hover:text-primary transition-colors">100% Eggless</span>
            <span className="hover:text-primary transition-colors">Women Owned</span>
          </div>
          <button onClick={scrollToTop} className="group flex items-center gap-3 text-white/30 hover:text-white transition-all">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 group-hover:-translate-y-1 transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

