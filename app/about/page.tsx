import React from 'react';
import Cube from '../componenets/cube';
import Intro from '../componenets/aboutpage/intro';
import Header from '../componenets/aboutpage/header';
import { Motion } from '../componenets/aboutpage/motion';
import Skills from '../componenets/aboutpage/skills';
const About = () => {
  return (
    <div>
      <Header />
      <Motion>
        <Intro />
      </Motion>
      <Skills />
      <Cube />
    </div>
  );
};

export default About;
