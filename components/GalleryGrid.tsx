'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShoppingBag } from 'lucide-react';
import { galleryImages, GalleryImage } from '@/lib/galleryData';

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Birthday', 'Custom', 'Bento', 'Classic'];
  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full border ${
              activeTab === cat 
              ? 'bg-accent text-bg border-accent' 
              : 'text-text/40 border-white/10 hover:border-accent/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style Grid */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {filteredImages.map((image, i) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/5 bg-surface break-inside-avoid"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              alt={image.caption}
              width={700}
              height={700}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-bg/80 backdrop-blur-[2px] p-8 flex flex-col justify-end translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">
                {image.category}
              </span>
              <h4 className="text-xl font-serif font-bold text-cream mb-6">
                {image.caption}
              </h4>
              <button 
                className="flex items-center gap-2 text-sm font-bold text-primary group/item"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`https://wa.me/919041829041?text=Hi! I want to order a cake like ${image.caption}`, '_blank');
                }}
              >
                Order Similar 
                <ArrowRight size={16} className="group-hover/item:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12"
          >
            <div 
              className="absolute inset-0 bg-bg/95 backdrop-blur-xl" 
              onClick={() => setSelectedImage(null)} 
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-square md:aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.caption}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-cream mb-6">
                  {selectedImage.caption}
                </h3>
                <div className="flex gap-4">
                  <button 
                    className="bg-primary text-cream px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg"
                    onClick={() => window.open(`https://wa.me/919041829041?text=Hi! I want to order a cake like ${selectedImage.caption}`, '_blank')}
                  >
                    Order Similar <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
              <button
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-cream transition-all border border-white/5 shadow-xl"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
