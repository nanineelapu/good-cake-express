'use client';

import { motion } from 'framer-motion';

interface MenuTabsProps {
  categories: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MenuTabs({ categories, activeTab, setActiveTab }: MenuTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`relative px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${
            activeTab === category ? 'text-cream' : 'text-text/40 hover:text-text/80'
          }`}
        >
          {category}
          {activeTab === category && (
            <motion.div
              layoutId="menu-tab-indicator"
              className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
