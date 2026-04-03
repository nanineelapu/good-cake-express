'use client';

import { useCountUp } from '@/lib/hooks';
import { Award, Heart, Star, Instagram } from 'lucide-react';

const stats = [
  { label: 'Happy Customers', end: 69, icon: Heart, suffix: '+' },
  { label: 'Google Rating', end: 5, icon: Star, suffix: '.0', decimal: true },
  { label: 'Eggless Items', end: 100, icon: Award, suffix: '%' },
  { label: 'Instagram Posts', end: 1739, icon: Instagram, suffix: '' },
];

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat, i) => (
        <StatItem key={i} stat={stat} />
      ))}
    </div>
  );
}

function StatItem({ stat }: { stat: any }) {
  const { count, elementRef } = useCountUp(stat.end, 2000);

  return (
    <div ref={elementRef} className="flex flex-col items-center group">
      <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
        <stat.icon size={28} className="text-accent group-hover:text-primary transition-colors" />
      </div>
      <div className="text-4xl md:text-5xl font-display font-bold text-cream mb-2 tracking-tighter">
        {count}{stat.suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-text/40 group-hover:text-text/60 transition-colors">
        {stat.label}
      </div>
    </div>
  );
}
