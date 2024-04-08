'use client';
import { Image } from '@nextui-org/react';
import TypingEffect from './componenets/typing';

import { useState, useEffect } from 'react';

export default function Home() {
  const [welome, setWelcome] = useState('Welcome');

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row justify-around items-center flex-wrap m-5 p-5 ">
        <div>
          <h1 className="text-6xl text-white font-bold text-center">
            O's <TypingEffect />
          </h1>
        </div>

        <div className="rounded-full m-5">
          <Image isZoomed width={300} alt="Me" src="/Me.JPG" />
        </div>
      </div>

      <video
        src={require('../public/BG.mp4')}
        autoPlay
        muted
        loop
        className="video"
      />
    </div>
  );
}
