'use client';
import Image from 'next/image';
import Logo from '../../public/Logo.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineFacebook,
} from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '@nextui-org/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="absolute w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between text-black items-center h-full w-full px-4 2xl:px-16 ">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="65"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b hover:border-rose-500 border-red text-xl">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b hover:border-rose-500 text-xl">
                Contact
              </li>
            </Link>

            <li>
              <Button
                size="sm"
                variant="flat"
                onClick={() => setTheme('modern')}
              >
                Switcher
              </Button>
            </li>
          </ul>
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
              className="py-4 cursor-pointer hover:border-b hover:border-rose-500  "
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-rose-500  "
              onClick={() => setMenuOpen(false)}
            >
              About
            </li>
          </Link>
          <Link href="/contact">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-rose-500  "
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
              src={Logo}
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
