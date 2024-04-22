'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import Logo from '../../public/ol-logo.png';
import { useTheme } from 'next-themes';
const Footer = () => {
  let { resolvedTheme } = useTheme();

  return (
    <div>
      <ul className="flex flex-row justify-center text-center m-4">
        <li>
          <AiOutlineInstagram className="lg:text-xl text-3xl text-green-500 m-2 dark:hover:text-white hover:text-black" />
        </li>
        <li>
          <AiOutlineLinkedin className="lg:text-xl text-3xl text-green-500 m-2 hover:text-black dark:hover:text-white" />
        </li>
      </ul>
      <div className="flex justify-center m-5">
        <Image
          src={Logo}
          alt="Logo"
          width="85"
          height="85"
          className="cursor-pointer"
          priority
        />
      </div>
    </div>
  );
};

export default Footer;
