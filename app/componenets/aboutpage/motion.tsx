'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
type MotionProps = {
  children: ReactNode;
};

export const Motion = ({ children }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, x: -20 }}
      animate={{ opacity: 1, x: 20 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};
