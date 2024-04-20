'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type MotionProps = {
  children: ReactNode;
};

export const MotionTime = ({ children }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};
