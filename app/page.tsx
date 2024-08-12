'use client';
import { Image } from '@nextui-org/react';
import TypingEffect from './componenets/typing';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { saveAs } from 'file-saver';
import Cube from './componenets/cube';
export default function Home() {
  const [welcome, setWelcome] = useState('Welcome');
  const saveFile = () => {
    saveAs('/OLResume.pdf', 'OLResume.pdf');
  };
  //

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-around items-center flex-wrap lg:m-5 lg:p-5 gap-5">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="lg:text-6xl text-4xl text-white font-bold text-center">
              Os
            </h1>
            <div className="lg:text-6xl text-4xl text-white font-bold text-center">
              <TypingEffect />
            </div>
          </motion.div>

          <motion.div
            className="rounded-full m-5"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <Image isZoomed width={300} alt="Me" src="/Me.JPG" />
          </motion.div>
          <motion.div
            className="flex flex-row justify-center items-center gap-5 hover:text-white"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <Link href={'/about'}>
              <Button
                color="success"
                variant="bordered"
                className="hover:text-green-500 border-green-500 text-white"
                href={'/about'}
              >
                About
              </Button>
            </Link>
            <Button
              // color="success"
              variant="bordered"
              className="hover:text-green-500 border-green-500 text-white"
            >
              <Link href={'/portfolio'}>Portfolio</Link>
            </Button>
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
          >
            <Button
              color="success"
              variant="bordered"
              className="hover:text-black text-green-500 bg-white"
              onClick={saveFile}
            >
              Resume
            </Button>
          </motion.div>
          <video
            src={require('../public/BG.mp4')}
            autoPlay
            muted
            playsInline
            loop
            className="video"
          />
        </div>
      </div>
    </div>
  );
}
