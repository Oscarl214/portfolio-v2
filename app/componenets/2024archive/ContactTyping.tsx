'use client';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const ContactTyping = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Contact...'],
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

export default ContactTyping;
