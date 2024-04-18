'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
type MotionProps = {
  children: ReactNode;
};

export const Motion = ({ children }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, x: -500 }}
      animate={{ opacity: 1, x: 10 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
