'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Order', href: '/order' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Variants for staggered link entries
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer: any = {
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
        delayChildren: 0.4
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-100 bg-transparent py-5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Pod with Original Detailed Style */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex items-center gap-4 p-1 rounded-full border border-white/10 shadow-2xl overflow-hidden ${isMobile ? 'bg-black/80' : 'bg-black/60 backdrop-blur-xl'}`}
        >
          <Link href="/" className="flex items-center gap-2 px-4 py-1.5 group">
            <motion.div
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 0.6,
                times: [0, 0.5, 1],
                delay: 0.3
              }}
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-cream shadow-lg group-hover:scale-110 transition-transform"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                <polyline points="7.5 19.79 7.5 14.6 3 12" />
                <polyline points="21 12 16.5 14.6 16.5 19.79" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </motion.div>
            <span className="text-sm md:text-base font-display font-bold tracking-tight text-white whitespace-nowrap">
              The Good Cake <span className="text-primary italic">Express</span>
            </span>
          </Link>

          {/* Red Arrow Inside Pod for Continuity */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:block text-primary pr-4"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          className={`hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 shadow-2xl ${isMobile ? 'bg-black/80' : 'bg-black/60 backdrop-blur-xl'}`}
          style={{ originX: 0.5 }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-2 px-4 py-1">
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={navItemVariants}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full hover:bg-white/10 ${pathname === link.href ? 'text-primary' : 'text-white/70'
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div variants={navItemVariants}>
            <Link href="/order">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-lg flex items-center gap-2"
              >
                Order Now
                <ShoppingBag size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <button
          className={`md:hidden text-white p-3 rounded-full border border-white/10 shadow-2xl flex items-center justify-center transition-all active:scale-95 ${isMobile ? 'bg-black/80' : 'bg-black/60 backdrop-blur-xl hover:bg-black/80'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center gap-8 md:hidden text-white"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-display font-semibold text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link href="/order" onClick={() => setIsOpen(false)}>
                  <button className="bg-primary text-cream px-10 py-4 rounded-full font-bold text-lg shadow-2xl">
                    Order Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
