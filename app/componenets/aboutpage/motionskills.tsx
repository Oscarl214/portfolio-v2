'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type MotionProps = {
  children: ReactNode;
};

export const MotionSkills = ({ children }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, x: 500 }}
      whileInView={{ opacity: 1, x: 15 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
