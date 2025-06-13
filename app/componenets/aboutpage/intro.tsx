import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { saveAs } from 'file-saver';
const Intro = () => {
  const saveFile = () => {
    saveAs('/OscarResume2024.pdf', 'OscarResume2024.pdf');
  };

  return (
    <div className="flex flex-col justify-center gap-1 lg:intro">
      <h1 className="text-center text-5xl font-extrabold ">
        HI, IM <span className="text-green-500 ">OSCAR LEAL</span>
      </h1>
      <p className="text-center lg:text-3xl text-xl font-extrabold py-6">
        A full-stack developer with 3+ years of experience. I enjoy building
        sites and apps. My focus is React (Next.js).
      </p>
      {/* <h2 className=" lg:text-start lg:text-3xl text-green-500 text-2xl font-extrabold mt-5 ">
        OverView
      </h2> */}
      <p className="lg:text-start  text-center text-sm  font-sans mr-7">
      I
        am a quick learner and work in tune when working with cross functional
        teams. My journey in the tech industry has cultivated a versatile skill
        set and a profound appreciation for crafting efficient, user-friendly
        solutions.
      </p>
      <p className="lg:text-start  text-center text-sm font-sans mr-7  mt-2">
        <i>When Im not coding,</i> I like to go to the gym, hang out with my
        family, or read/learn about something new. I also love to travel and
        enjoy experiencing new cultures. I have been to a total of 7 countries
        so far, my goal is to go to as many countries as I can.
      </p>
    </div>
  );
};

export default Intro;
