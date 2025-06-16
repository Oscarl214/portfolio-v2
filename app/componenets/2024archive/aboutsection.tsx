import React from 'react';
import Skills from './aboutpage/skills';
import { MotionSkills } from './aboutpage/motionskills';
import Timeline from './aboutpage/timeline';
import { MotionTime } from './aboutpage/timemotion';
import RepoCard from './aboutpage/repocard';

import { RepoMotion } from './aboutpage/repomotion';
import getRepos from '../../lib/getRepos';
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
