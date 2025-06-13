import React from 'react';
import Skills from '../componenets/aboutpage/skills';
import { MotionSkills } from '../componenets/aboutpage/motionskills';
import Timeline from '../componenets/aboutpage/timeline';
import { MotionTime } from '../componenets/aboutpage/timemotion';
import RepoCard from '../componenets/aboutpage/repocard';

import { RepoMotion } from '../componenets/aboutpage/repomotion';
import getRepos from '../lib/getRepos';
import { Motion } from './aboutpage/motion';
import Intro from './aboutpage/intro';
const AboutSection = async () => {
  // const username = 'oscarl214';
  // const repos = await getRepos(username);

  // console.log(repos);
  return (
    <div>
   
        <Skills />
     
      <MotionTime>
        <Timeline />
      </MotionTime>
      {/* <div className="overflow-x-hidden">
        <RepoMotion>
          <RepoCard repos={repos} />
        </RepoMotion>
      </div> */}
    </div>
  );
};

export default AboutSection;
