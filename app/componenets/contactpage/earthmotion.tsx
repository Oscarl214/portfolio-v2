'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
type MotionProps = {
  children: ReactNode;
};

export const EarthMotion = ({ children }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, x: 200 }}
      whileInView={{ opacity: 1, x: 30 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};
