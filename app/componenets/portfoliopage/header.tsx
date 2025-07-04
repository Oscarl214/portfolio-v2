'use client';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { motion } from 'framer-motion';
const Header = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['My Projects...'],
      typeSpeed: 80,
      backSpeed: 80,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return <span ref={typingRef}></span>;
};

export default Header;

//