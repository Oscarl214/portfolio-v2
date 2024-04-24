'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
type MotionProps = {
  children: ReactNode;
};

export const ContactMotion = ({ children }: MotionProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, x: -200 }}
      whileInView={{ opacity: 1, x: 27 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};
