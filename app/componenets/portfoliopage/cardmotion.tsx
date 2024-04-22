'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type MotionProps = {
  children: ReactNode;
};

export const CardMotion = ({ children }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};
