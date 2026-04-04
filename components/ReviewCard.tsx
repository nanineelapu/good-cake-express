'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Review } from '@/lib/reviewsData';

interface ReviewCardProps {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-surface p-8 rounded-3xl border border-white/5 relative group hover:border-accent/20 transition-all shadow-sm"
    >
      <div className="absolute top-8 right-8 text-white/5 group-hover:text-accent/10 transition-colors">
        <Quote size={48} />
      </div>

      <div className="flex gap-1 mb-6 text-accent">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      <p className="text-text/70 leading-relaxed italic mb-8 font-serif text-lg">
        "{review.text}"
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <div>
          <h4 className="text-cream font-bold group-hover:text-accent transition-colors">
            {review.name}
            {review.isLocalGuide && (
              <span className="ml-2 text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded">
                Local Guide
              </span>
            )}
          </h4>
          <span className="text-[10px] uppercase tracking-widest font-medium text-text/30">
            {review.date} • via {review.platform}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
