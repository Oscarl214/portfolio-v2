'use client';
import React from 'react';
import ScrollToTop from 'react-scroll-up';

const ScrollButton = () => {
  return (
    <div className="absolute z-[300]">
      <ScrollToTop showUnder={160}>
        <span className="icon-[pajamas--scroll-up] text-3xl text-green-500"></span>
      </ScrollToTop>
    </div>
  );
};

export default ScrollButton;
