'use client';
import React from 'react';
import { Tooltip } from '@nextui-org/react';
import { motion } from 'framer-motion';
const Skills = () => {
  return (
    <div>
      <h2 className=" lg:text-start lg:text-3xl text-green-500 text-2xl font-extrabold  ml-8">
        My Skills
      </h2>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <ul className="flex flex-row flex-wrap justify-evenly gap-5 text-5xl m-5 pt-5">
          <li>
            <Tooltip content="JavaScript">
              <span className="icon-[skill-icons--javascript]"></span>
            </Tooltip>
          </li>
          <li>
            <Tooltip content="Node Js">
              <span className="icon-[logos--nodejs-icon]"></span>
            </Tooltip>
          </li>
          <li>
            <Tooltip content="TypeScript">
              <span className="icon-[logos--typescript-icon]"></span>
            </Tooltip>
          </li>
          <li>
            <Tooltip content="Next js">
              <span className="icon-[skill-icons--nextjs-dark] dark:icon-[skill-icons--nextjs-light] "></span>
            </Tooltip>
          </li>
          <li>
            <Tooltip content="React">
              <span className="icon-[skill-icons--react-dark] dark:icon-[skill-icons--react-light] "></span>
            </Tooltip>
          </li>

          <li>
            <Tooltip content="Tailwind CSS">
              <span className="icon-[skill-icons--tailwindcss-dark] dark:icon-[skill-icons--tailwindcss-light]"></span>
            </Tooltip>
          </li>
          <li>
            <Tooltip content="BootStrap">
              <span className="icon-[devicon--bootstrap]"></span>
            </Tooltip>
          </li>
          <li>
            <Tooltip content="MongoDB">
              <span className="icon-[skill-icons--mongodb]"></span>
            </Tooltip>
          </li>
          <li>
            <Tooltip content="MySQL">
              <span className="icon-[skill-icons--mysql-dark] dark:icon-[skill-icons--mysql-light]"></span>
            </Tooltip>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Skills;
