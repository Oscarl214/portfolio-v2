'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}; 