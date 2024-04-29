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
      <ul className="flex flex-row justify-center text-center m-4 gap-4">
        <li>
          <a href="https://github.com/Oscarl214">
            <span className="icon-[whh--github] text-2xl  hover:text-green-500"></span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/oscar-l-8371a512a/?profileId=ACoAAB-1PGsB2qxEtcOuY2wAuCKdZMvSUBCD9cM">
            <span className="icon-[uiw--linkedin] text-2xl  hover:text-green-500"></span>
          </a>
        </li>
      </ul>
      <div className="flex flex-col text-center justify-center m-5  gap-4 items-center">
        <Image
          src={Logo}
          alt="Logo"
          width="85"
          height="85"
          className="cursor-pointer flex text-center justify-center"
          priority
        />
        <p className="text-xs text-gray-300 font-sans">
          Developed with Next Js, Next UI, and Tailwind by Oscar Leal.
        </p>
      </div>
    </div>
  );
};

export default Footer;
