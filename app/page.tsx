'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star, Zap, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CakeCard from '@/components/CakeCard';
import TestimonialCard from '@/components/TestimonialCard';
import { menuItems } from '@/lib/menuData';

export default function Home() {
  const bestsellers = menuItems.filter(item => item.tags?.includes('Bestseller') || item.tags?.includes('Premium')).slice(0, 8);

  const testimonials = [
    { name: 'Surjit Singh Banga', text: 'The shop emphasizes selling fresh, high-quality cakes. They highlight their philosophy with the slogan, "Cake ho to acha ho varna na hi ho", indicating a strong commitment to quality.', platform: 'Google' },
    { name: 'Radhika', text: 'Got a customized bento cake specially from here... as expected it was very good, made it look straight from Pinterest', platform: 'Google' },
    { name: 'VIVEK GOYAL', text: 'You delivered much more than you promised with lots of innovation and surprises', platform: 'Google' },
    { name: 'Jatin Ahuja', text: 'Delicious Cakes! Presentation is awesome!! Personalized message from team makes the experience superb!!', platform: 'Google' },
  ];

  const features = [
    { title: '100% Eggless', desc: 'Every single item, no exceptions', icon: '🎂' },
    { title: 'Custom Designs', desc: 'Bring your Pinterest board to life', icon: '🎨' },
    { title: '15-Min Delivery', desc: 'To your hostel or department on PU Campus', icon: '🚀' },
  ];

  return (
    <div className="flex flex-col relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Slogan Strip */}
      <section className="bg-black py-12 px-6 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left: Two-Line Slogan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono font-bold text-white leading-tight">
              "Cake ho to <span className="text-primary underline decoration-primary/30 underline-offset-8">acha ho varna</span> na hi ho"
            </h2>
            <p className="text-lg md:text-xl font-dancing text-white/50 font-light italic tracking-[0.2em] mt-6">
              — Our Promise to You
            </p>
          </motion.div>

          {/* Right: Animated Logo & Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 group"
          >
            <div className="text-right hidden sm:block">
              <h3 className="text-white text-xl font-display font-medium leading-tight">
                The Good Cake <br />
                <span className="text-primary italic font-bold">Express</span>
              </h3>
              <div className="h-[2px] w-12 bg-primary ml-auto my-2" />
              <p className="text-white/60 text-[10px] uppercase font-black tracking-[0.6em]">
                FOR YOU
              </p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-transparent border border-primary/20 rounded-full flex items-center justify-center text-primary shadow-2xl relative"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 relative z-10">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                <polyline points="7.5 19.79 7.5 14.6 3 12" />
                <polyline points="21 12 16.5 14.6 16.5 19.79" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="pt-24 pb-12 px-6 relative overflow-hidden bg-bg">
        {/* Animated Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <span className="text-secondary uppercase text-[12px] tracking-[0.6em] font-black mb-6 block">Technicals</span>
            <h2 className="text-4xl md:text-7xl font-mono font-black text-text tracking-tight uppercase">
              Beyond the <span className="text-primary italic">Flavor</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Purely Eggless',
                desc: 'Every creation in our kitchen is crafted with 100% vegetarian ingredients. We prioritize purity without compromising the silkiness or depth of flavor.',
                icon: <Zap size={32} />,
                count: '001',
                stat: '100% EGG-FREE LINE',
                color: 'from-primary/20 via-transparent to-transparent'
              },
              {
                title: 'Artisan Custom',
                desc: 'From intricate fondant work to Pinterest-inspired bento cakes, our artisans transform your vision into edible reality. Tell your story through custom colors.',
                icon: <Star size={32} />,
                count: '002',
                stat: 'REAL-TIME PROVISING',
                color: 'from-accent/20 via-transparent to-transparent'
              },
              {
                title: 'Express Unit',
                desc: 'Freshness is our obsession. Our dedicated delivery partners ensure your cake reaches PU Campus in just 15 minutes, still perfectly chilled.',
                icon: <Zap size={32} />,
                count: '003',
                stat: '15 MIN AVG. LATENCY',
                color: 'from-primary/20 via-transparent to-transparent'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, skewX: -2 }}
                whileInView={{ opacity: 1, y: 0, skewX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ y: -25, scale: 1.02 }}
                className="relative group perspective-[1000px]"
              >
                {/* 3D Reflection Effect */}
                <div className="absolute inset-x-4 -bottom-10 h-10 bg-black/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative h-full bg-white border border-black/[0.05] p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col items-start transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_80px_100px_-20px_rgba(0,0,0,0.1)] group-hover:border-primary/30 overflow-hidden transform-gpu">
                  {/* Spotlight Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-700`} />

                  {/* Grid Texture Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

                  {/* Corner Label */}
                  <div className="absolute top-0 right-0 py-6 px-10">
                    <span className="text-[12px] font-mono font-bold text-text/20 group-hover:text-primary transition-colors tracking-widest">
                      {feature.count}
                    </span>
                  </div>

                  {/* Icon Block with Neon Glow */}
                  <div className="mb-12 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                    <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-white relative z-10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-12">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content Stack */}
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono font-black text-primary/40 tracking-[0.4em] mb-4 block group-hover:text-primary group-hover:translate-x-1 transition-all">
                      {feature.stat}
                    </span>
                    <h3 className="text-4xl font-display font-black text-text mb-6 leading-none">
                      {feature.title.split(' ')[0]}<br />
                      <span className="text-text/30 group-hover:text-text transition-colors duration-500">{feature.title.split(' ')[1]}</span>
                    </h3>
                    <p className="text-text/60 font-medium leading-relaxed mb-10 max-w-[90%] transition-colors group-hover:text-text">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Bottom Interaction Layer */}
                  <div className="mt-auto pt-8 border-t border-black/5 w-full flex justify-between items-center relative z-10 group/cta">
                    <div className="flex items-center gap-3 text-primary font-black uppercase text-[11px] tracking-widest transition-all group-hover:gap-5">
                      Open Parameters
                      <ArrowRight size={18} />
                    </div>
                    <div className="w-3 h-3 rounded-full border-2 border-primary group-hover:bg-primary transition-colors duration-300" />
                  </div>

                  {/* Floating Decor Element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Gallery */}
      <section className="pt-16 pb-32 relative overflow-hidden bg-bg">
        {/* Architectural Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-mono font-black text-black/[0.02] tracking-tighter vertical-text select-none rotate-180 opacity-40" style={{ writingMode: 'vertical-rl' }}>
            EXCLUSIVES
          </span>
          <div className="absolute top-1/3 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-px h-[40%] bg-gradient-to-t from-primary/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary uppercase text-[12px] font-mono font-black tracking-[0.5em]">Curated Selection</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-text leading-none tracking-tight mb-8">
              Our <span className="text-text/30 italic">Bestsellers</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Subtle Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/3 blur-[150px] -z-10" />

          {/* Sibling Blur Row: Static line of cakes */}
          <div className="container mx-auto px-6 flex flex-wrap lg:flex-nowrap justify-center gap-8 md:gap-10 lg:[&:has(.card-focus:hover)>.card-focus:not(:hover)]:blur-md lg:[&:has(.card-focus:hover)>.card-focus:not(:hover)]:opacity-20 transition-all">
            {bestsellers.map((cake, i) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="card-focus w-full max-w-[300px] transition-all duration-500 hover:scale-105 z-10 hover:z-20"
              >
                <CakeCard item={cake} />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/menu" className="text-xs font-mono font-black border-b-2 border-primary pb-2 hover:text-primary transition-colors tracking-[0.3em] uppercase">
              Explore the Full Vault →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials: Full-Width Landscape Wall */}
      <section className="py-12 relative overflow-hidden bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-primary/20" />
                <span className="text-primary uppercase text-[8px] font-mono font-black tracking-[0.6em] opacity-40">VERIFIED_FEEDBACK</span>
                <div className="w-8 h-px bg-primary/20" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-text tracking-tighter uppercase">
                Customer <span className="text-text/20 italic">Insights_</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto group/wall">
            {testimonials.map((t, i) => (
              <div key={i}>
                <TestimonialCard testimonial={t} index={i} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center items-center gap-10 border-t border-black/5 pt-8">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-mono font-black text-text">5.0</div>
              <div className="text-[8px] font-mono font-bold text-text/30 uppercase tracking-widest leading-tight">Google Score <br /> Aggregate</div>
            </div>
            <div className="w-px h-8 bg-black/5" />
            <div className="flex items-center gap-3">
              <div className="text-3xl font-mono font-black text-text italic">10K+</div>
              <div className="text-[8px] font-mono font-bold text-text/30 uppercase tracking-widest leading-tight">Active Monthly <br /> Logged Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Asymmetrical Dispatch Console */}
      <section className="py-16 md:py-24 px-6 relative bg-cream overflow-hidden">
        <div className="container mx-auto bg-black rounded-[3rem] overflow-hidden relative shadow-[0_60px_100px_rgba(0,0,0,0.2)] border border-white/10 group/cta">
          {/* Sculptural Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/20 rounded-full blur-[60px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch min-h-[400px]">
            {/* Left: Content */}
            <div className="flex-1 p-8 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-sm border border-white/10">
                  <span className="text-[10px] font-mono font-black text-cream tracking-[0.3em]">UNIT_READY://09</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-8xl font-display font-black text-white leading-[0.85] tracking-tighter mb-8 md:mb-10 wrap-break-word uppercase">
                SECURE_THE<br className="md:block" />
                <span className="text-white/20 group-hover/cta:text-primary transition-colors duration-700">SIGNATURE_SLICE</span>
              </h2>
            </div>

            {/* Right: Technical Console */}
            <div className="w-full lg:w-[450px] bg-black/5 backdrop-blur-xl p-8 md:p-16 flex flex-col items-center justify-center gap-8 md:gap-10">
              <div className="w-full">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-widest">Readiness_Index</span>
                  <span className="text-xl font-mono font-black text-white tracking-tighter">100%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-cream"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <Link href="https://wa.me/919041829041?text=Hi! I want to order a cake" target="_blank" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-primary p-6 rounded-2xl font-black text-lg flex items-center justify-between group/btn shadow-xl"
                  >
                    ORDER DISPATCH
                    <MessageCircle size={22} className="group-hover/btn:rotate-12 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="tel:+919041829041" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/5 border-2 border-white/10 text-white p-6 rounded-2xl font-black text-lg flex items-center justify-between group/btn hover:bg-white/10 transition-all uppercase"
                  >
                    VOICE_CALL
                    <Phone size={18} className="opacity-40" />
                  </motion.button>
                </Link>
              </div>

              <div className="pt-6 border-t border-white/5 w-full flex items-center justify-between opacity-30">
                <span className="text-[8px] font-mono font-bold text-white uppercase tracking-widest">Est_Chandigarh</span>
                <div className="flex gap-2">
                  <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRight({ size, className = "" }: { size: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width={size}
      height={size}
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
