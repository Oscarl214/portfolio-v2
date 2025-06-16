import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['World!', 'Portfolio.', 'Projects.', 'Skills.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typingRef}></span>;
};

export default TypingEffect;
