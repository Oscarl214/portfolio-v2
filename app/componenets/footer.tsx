'use client'
import React, { useState } from 'react'
import Image from '@/node_modules/next/image';
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import LogoLight from '../../public/Logo.svg';
import LogoDark from '../../public/Logo2.svg';
import { useTheme } from '@/node_modules/next-themes/dist/index';
const Footer = () => {


let { theme } = useTheme();


const logo = theme === 'dark' ? LogoDark : LogoLight;

  return (
    <div>
        
        <ul className='flex flex-row justify-center text-center'>
            <li >
            <AiOutlineInstagram className='text-5xl text-green-500 m-2 dark:hover:text-white '/>
            </li>
            <li><AiOutlineLinkedin  className='text-5xl text-green-500 m-2 dark:hover:text-white'/></li>
        </ul>
        <div className='flex justify-center m-5'>
        <Image
        src={theme === 'dark' ? LogoLight: LogoDark}
        alt="Logo"
        width="85"
        height="85"
        className="cursor-pointer"
        priority
        />
        </div>
     
      </div>
  )
}

export default Footer