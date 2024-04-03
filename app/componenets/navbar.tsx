'use client';
import Image from 'next/image';
import LogoLight from '../../public/Logo.svg';
import LogoDark from '../../public/Logo2.svg';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineFacebook,
} from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import Switcher from './switcher';

import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const Navbar = () => {
  const saveFile = () => {
    saveAs(
      'https://drive.google.com/file/d/11gU35QzXitGPqcjVjn9fqxWqJb7qwqmJ/view?usp=sharing',
      'OLResume.pdf'
    );
  };

  const [menuOpen, setMenuOpen] = useState(false);
  let { theme } = useTheme();

  const logo = theme === 'dark' ? LogoDark : LogoLight;

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="absolute w-full h-24 shadow-xl">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 ">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width="65"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex justify-around text-lg">
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b hover:border-green-500 border-red ">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b hover:border-green-500 border-red">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b hover:border-green-500 ">
                Portfolio
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b hover:border-green-500 ">
                Blog
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b hover:border-green-500 ">
                Contact
              </li>
            </Link>

            <li
              className="ml-10 uppercase hover:border-b hover:border-green-500 "
              onClick={saveFile}
            >
              Resume
            </li>
          </ul>
        </div>
        <div className="">
          <Switcher />
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={30} className=" hover:text-red-700" />
          </div>
        </div>
        <ul className="text-2xl mt-[40%] text-black">
          <Link href="/">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-green-500  "
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-green-500  "
              onClick={() => setMenuOpen(false)}
            >
              About
            </li>
          </Link>
          <Link href="/contact">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-green-500  "
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex flex-col justify-around pt-10 items-center">
          <div className="flex flex-row">
            <Link href="https://www.instagram.com/partyknightrentals512/?igsh=N3ViOXkwYmYxc3J0">
              <AiOutlineInstagram size={40} className=" text-red-700 m-2" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100094270927364&mibextid=LQQJ4d"
              target="_blank"
            >
              <AiOutlineFacebook size={40} className=" text-red-700 m-2" />
            </Link>
          </div>
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width="65"
              height="75"
              className="cursor-pointer pt-6 object-center"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
