import React from 'react';
import Cube from '../componenets/cube';
import Intro from '../componenets/aboutpage/intro';
import Header from '../componenets/aboutpage/header';
import { Motion } from '../componenets/aboutpage/motion';
import Skills from '../componenets/aboutpage/skills';
import { MotionSkills } from '../componenets/aboutpage/motionskills';
const About = () => {
  return (
    <div>
      <div className=" header flex justify-center font-bold lg:text-6xl text-4xl text-green-500">
        {' '}
        <Header />
      </div>

      <Motion>
        <Intro />
      </Motion>
      <MotionSkills>
        <Skills />
      </MotionSkills>

      {/* <Cube /> */}
    </div>
  );
};

export default About;
