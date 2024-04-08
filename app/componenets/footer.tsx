import React from 'react'
import Image from '@/node_modules/next/image';
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
        
        <footer >
        <ul className='flex flex-row justify-center text-center'>
            <li >
            <AiOutlineInstagram className='text-5xl text-green-500 m-2 dark:hover:text-white '/>
            </li>
            <li><AiOutlineLinkedin  className='text-5xl text-green-500 m-2 dark:hover:text-white'/></li>
        </ul>
        <Image/>
        </footer></div>
  )
}

export default Footer