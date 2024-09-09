import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type TSectionHeaderProps = {
  headingSpanOne: string;
  headingSpanTwo: string;
  description: string;
  className?: string;
};

export default function SectionHeader({
  className,
  headingSpanOne,
  headingSpanTwo,
  description,
}: TSectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate only once when it comes into view

  return (
    <header
      ref={ref}
      className={cn(
        'max-w-2xl mx-auto my-12 text-center px-4 md:px-0',
        className
      )}
    >
      <motion.h1
        className="md:text-3xl text-xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.span
          className="block font-heading font-light text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        >
          {headingSpanOne}
        </motion.span>
        <motion.span
          className="block text-4xl md:text-5xl font-body font-bold bg-gradient-to-r from-sky-600 via-emerald-500 to-indigo-400 text-transparent bg-clip-text mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        >
          {headingSpanTwo}
        </motion.span>
      </motion.h1>
      <motion.p
        className="text-gray-800 mt-3 text-[16px] max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
      >
        {description}
      </motion.p>
    </header>
  );
}
