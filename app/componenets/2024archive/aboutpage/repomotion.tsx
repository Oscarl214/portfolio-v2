'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
type MotionProps = {
  children: ReactNode;
};

export const RepoMotion = ({ children }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 300 }}
      whileInView={{ opacity: 1, y: 15 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};
