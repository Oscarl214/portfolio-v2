import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { motion } from 'framer-motion';
const Intro = () => {
  return (
    <div className="flex flex-col justify-center gap-1 lg:intro">
      <h1 className="lg:text-center text-5xl font-extrabold  m-5">
        HI, I'M <span className="text-green-500 ">OSCAR LEAL</span>
      </h1>
      <p className="lg:text-center text-3xl font-extrabold  m-5">
        A full-stack developer with 2+ years of experience. I enjoy building
        sites and apps. My focus is React (Next.js).
      </p>
      <h2 className="lg:text-center lg:text-start lg:text-3xl text-green-500 text-2xl font-extrabold m-8 ">
        OverView
      </h2>
      <p className="lg:text-start  text-start text-md font-sans m-5 mt-1">
        A full time email developer at my current role, and a part-time
        freelance developer, specializing in frameworks like React, Node.js. I
        am a quick learner and work in tune when working with cross functional
        teams. My journey in the tech industry has cultivated a versatile skill
        set and a profound appreciation for crafting efficient, user-friendly
        solutions.
      </p>
    </div>
  );
};

export default Intro;
