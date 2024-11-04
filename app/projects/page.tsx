import React from 'react';
import Header from '../componenets/portfoliopage/header';
import ProjectCard from '../componenets/portfoliopage/projectcard';
import { CardMotion } from '../componenets/portfoliopage/cardmotion';
import ContactButton from '../componenets/portfoliopage/button';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
const Projects = () => {
  return (
    <div className=" ">
      <div className=" header flex justify-center font-bold lg:text-6xl text-4xl text-green-500">
        <Header />
      </div>

      <ProjectCard />
      <div className="m-4">
        <Link href={'/'}>
          <Button
            color="success"
            variant="bordered"
            className="hover:dark:text-green-500 hover:text-green-500 border-green-500 dark:text-white text-black"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
