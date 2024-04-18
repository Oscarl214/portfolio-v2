'use client';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { motion } from 'framer-motion';
const Header = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['ABOUT...'],
      typeSpeed: 80,
      backSpeed: 80,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      ref={typingRef}
      className=" header flex justify-center font-bold lg:text-6xl text-4xl text-green-500"
    >
      ...
    </span>
  );
};

export default Header;
