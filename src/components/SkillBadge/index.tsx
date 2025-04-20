'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export default function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <motion.div
      className={cn(
        'px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm',
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.div>
  );
}
