'use client';
import Image from 'next/image';
import Logo from '../../public/ol-logo.png';
import Switcher from './switcher';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from '@nextui-org/react';
import React, { useState } from 'react';
import Link from 'next/link';
import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa6';

const Navigation = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  const saveFile = () => {
    saveAs('/OLResume.pdf', 'OLResume.pdf');
  };
  //
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Portfolio', 'Blogs', 'Contact'];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="navbar font-open "
    >
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden " justify="center">
        <NavbarBrand>
          <Image src={Logo} alt="Logo" width="45" height="55" priority />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand className="hidden lg:flex">
          <Image src={Logo} alt="Logo" width="45" height="55" priority />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem className="hover:text-green-500">
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-green-500">
          <Link href="/about" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-green-500">
          <Link color="foreground" href="/portfolio">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-green-500">
          <Link color="foreground" href="/blogs">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-green-500">
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem onClick={saveFile} className="hover:text-green-500">
          Resume
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex sm:flex gap-4">
          <Switcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex items-center justify-center ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-green-500"
          >
            {item === 'Home' ? (
              <Link href="/" as="/">
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.75,
                    delay: 0.25,
                  }}
                  className="p-2 border-b hover:border-green-500"
                >
                  {item}
                </motion.div>
              </Link>
            ) : (
              <Link
                className="w-full"
                color={
                  index === 2
                    ? 'warning'
                    : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                href={`/${item.toLowerCase()}`}
              >
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.75,
                    delay: 0.25,
                  }}
                  className="p-2 border-b hover:border-green-500"
                >
                  {item}
                </motion.div>
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
