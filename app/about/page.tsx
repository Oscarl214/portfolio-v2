import React from 'react';
import Cube from '../componenets/cube';
import Intro from '../componenets/aboutpage/intro';
import Header from '../componenets/aboutpage/header';
import { Motion } from '../componenets/aboutpage/motion';
import Skills from '../componenets/aboutpage/skills';
import { MotionSkills } from '../componenets/aboutpage/motionskills';
import Timeline from '../componenets/aboutpage/timeline';
import { MotionTime } from '../componenets/aboutpage/timemotion';
import RepoCard from '../componenets/aboutpage/repocard';
import PortfolioButton from '../componenets/aboutpage/portfoliobutton';
import { RepoMotion } from '../componenets/aboutpage/repomotion';
import getRepos from '../lib/getRepos';
import BlogButton from '../componenets/aboutpage/blogbutton';

export default async function About() {
  const username = 'oscarl214';
  const repos = await getRepos(username);

  return (
    <div className="overflow-x-hidden">
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
      <MotionTime>
        <Timeline />
      </MotionTime>
      <div className="overflow-x-hidden">
        <RepoMotion>
          <RepoCard repos={repos} />
        </RepoMotion>
      </div>
      <div className="gap-1 mt-5">
        <PortfolioButton />
        <BlogButton />
      </div>
    </div>
  );
}
