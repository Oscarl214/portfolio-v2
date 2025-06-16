import React from 'react';
import Header from '../componenets/portfoliopage/header';
import ProjectCard from '../componenets/portfoliopage/projectcard';
import { CardMotion } from '../componenets/portfoliopage/cardmotion';
import ContactButton from '../componenets/portfoliopage/button';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import ProjectSection from '../componenets/portfoliopage/projectsection';
import BussinessCard from '../componenets/homepage/businesscard';
import { PageTransition } from '../motionanimations/pagetransition';

const Projects = () => {
  return (
    <PageTransition>
      <main className="flex flex-row justify-center lg:items-center min-h-screen w-full gap-8 lg:px-4 flex-wrap-reverse">
        <BussinessCard/>
        <ProjectSection/>
      </main>
    </PageTransition>
  );
};

export default Projects;
