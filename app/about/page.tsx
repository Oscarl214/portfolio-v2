import React from 'react';
import Cube from '../componenets/2024archive/cube';
import Intro from '../componenets/2024archive/aboutpage/intro';
import Header from '../componenets/2024archive/aboutpage/header';
import { Motion } from '../componenets/2024archive/aboutpage/motion';
import Skills from '../componenets/2024archive/aboutpage/skills';
import { MotionSkills } from '../componenets/2024archive/aboutpage/motionskills';
import Timeline from '../componenets/2024archive/aboutpage/timeline';
import { MotionTime } from '../componenets/2024archive/aboutpage/timemotion';
import RepoCard from '../componenets/2024archive/aboutpage/repocard';
import PortfolioButton from '../componenets/2024archive/aboutpage/portfoliobutton';
import { RepoMotion } from '../componenets/2024archive/aboutpage/repomotion';
import getRepos from '../lib/getRepos';
import BlogButton from '../componenets/2024archive/aboutpage/blogbutton';

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
